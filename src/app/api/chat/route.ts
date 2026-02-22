import { NextResponse } from "next/server";
import { getDefaultModel, getOpenAIClient } from "@/lib/openai";
import { getExtraAllowedHosts, isAccreditedUrl } from "@/lib/accreditedSources";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

function uniqByUrl(items: { url: string; title?: string | null }[]) {
  const map = new Map<string, { url: string; title?: string | null }>();
  for (const it of items) {
    if (!map.has(it.url)) map.set(it.url, it);
  }
  return Array.from(map.values());
}

const BUSINESS_CONTEXT = `You are Seedly, the playful Salam Seeds companion bot (a friendly seedling mascot).
You help parents/guardians learn about Salam Seeds and answer general questions related to:
- the Hijri calendar and kid-friendly Islamic learning
- our products: monthly Hijri themed subscription boxes for kids, two special Eid boxes per year
- a digital companion platform with micro-lessons (5–8 minutes), quizzes, badges, and printables
- an Islamic eCommerce store with curated goods (books, decor, prayer items, etc.)

Target age segments (high-level): Early learners 3–5, Core 4–10, and an optional Older kids track 9–12.

Product notes (high-level):
- Monthly box includes a themed story booklet, learning cards, a craft kit, a game/activity, and a parent guide.
- Pricing targets: Monthly $45; Annual $468; One-off box $52; Eid boxes ~$55–$60; Digital-only ~$7.99/mo.

IMPORTANT POLICY:
- When using web search, only cite sources from accredited domains: .gov, .edu, .org, .ac.uk, .int
  (plus any extra allowlisted domains configured by the developer).
- If you cannot find accredited sources for a claim, say so and offer a safe alternative.
- Be accurate, concise, kind, and parent-friendly. Avoid collecting personal data from children.
`;

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  const messages = (body?.messages as IncomingMessage[]) || [];
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Missing messages" }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        answer:
          "Seedly isn’t configured yet. 🌱\n\nTo enable chat, set an OPENAI_API_KEY environment variable on the server (see README).",
        citations: [],
      },
      { status: 200 },
    );
  }

  // Basic input hardening
  const safeMessages = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({
      role: m.role,
      content: String(m.content || "").slice(0, 2000),
    }))
    .slice(-16); // keep last turns only

  if (safeMessages.length === 0) {
    return NextResponse.json({ error: "No valid messages" }, { status: 400 });
  }

  const client = getOpenAIClient();
  const model = getDefaultModel();
  const extraAllowed = getExtraAllowedHosts();

  // Try twice: the second attempt reinforces the accredited-source requirement if needed.
  let answerText = "";
  let citations: { url: string; title?: string | null }[] = [];

  for (let attempt = 0; attempt < 2; attempt++) {
    // Cast needed: Responses API shape isn't fully typed in all SDK versions
    const response = (await (client.responses as any).create({ // eslint-disable-line
      model,
      instructions:
        BUSINESS_CONTEXT +
        (attempt === 1
          ? "\n\nSecond attempt: your previous answer may have used non-accredited sources. Retry using only accredited sources, or explicitly say you couldn't find accredited sources."
          : ""),
      tools: [{ type: "web_search_preview" }],
      truncation: "auto",
      input: safeMessages,
    })) as any;

    answerText = (response?.output_text as string | undefined) || "";

    // Extract citations from annotations (url_citation)
    const out = (response?.output || []) as any[];
    const found: { url: string; title?: string | null }[] = [];

    for (const item of out) {
      if (item?.type !== "message") continue;
      const contentParts = item?.content || [];
      for (const part of contentParts) {
        if (part?.type !== "output_text") continue;
        const ann = part?.annotations || [];
        for (const a of ann) {
          if (a?.type === "url_citation" && a?.url) {
            found.push({ url: a.url, title: a.title || null });
          }
        }
      }
    }

    const filtered = uniqByUrl(found).filter((c) => isAccreditedUrl(c.url, extraAllowed));
    citations = filtered;

    // If we got accredited citations or the answer doesn't appear to require citations, stop.
    const looksLikeGeneralKnowledge =
      /\b(salam seeds|subscription|monthly box|eid|digital companion|pricing)\b/i.test(
        safeMessages[safeMessages.length - 1]?.content || "",
      );

    if (citations.length > 0 || looksLikeGeneralKnowledge) break;
  }

  // If we have no citations, add a gentle note.
  if (citations.length === 0) {
    answerText =
      answerText +
      "\n\n_(Note: I couldn't find accredited web sources to cite for this answer right now. If you want, rephrase the question or ask for a Salam Seeds–specific answer.)_";
  }

  return NextResponse.json({ answer: answerText.trim(), citations });
}
