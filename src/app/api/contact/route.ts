import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  // In production, connect this to your email provider (e.g. Resend, Postmark)
  // or your CRM. For now we just log on the server.
  console.log("[contact]", body);

  return NextResponse.json({ ok: true });
}
