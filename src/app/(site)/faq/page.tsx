import { FAQAccordion, type FAQ } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";

const items: FAQ[] = [
  {
    q: "What ages are the boxes for?",
    a: "We design for a few age bands: Early learners (3–5), Core (4–10), and an optional Older kids track (9–12). Most activities are adaptable with parent/guardian guidance.",
  },
  {
    q: "What’s inside a monthly box?",
    a: "A typical box includes a themed story booklet, learning cards, a craft kit, a game or activity, and a parent guide. Contents may vary by month.",
  },
  {
    q: "Do you offer Eid boxes?",
    a: "Yes—two special boxes per year: Eid al-Fitr and Eid al-Adha. These focus on celebration, gratitude, sharing, and family traditions.",
  },
  {
    q: "How does the digital companion work?",
    a: "The digital companion is screen-light: short micro-lessons (5–8 minutes), quick quizzes, badges, and printables aligned to each month’s theme.",
  },
  {
    q: "Does Seedly (the chatbot) cite sources?",
    a: "Yes. Seedly can use OpenAI’s web search tool and will only cite accredited domains by default (e.g., .gov, .edu, .org, .ac.uk). You can click sources to verify.",
  },
  {
    q: "Is this website accessible?",
    a: "We aim for WCAG-friendly accessibility: semantic HTML, keyboard navigation, focus states, and readable contrast. If something isn’t working for you, please contact us.",
  },
];

export default function FAQPage() {
  return (
    <main id="main">
      <Section kicker="FAQ" title="Answers to common questions">
        <FAQAccordion items={items} />

        <div className="mt-8 card p-6">
          <div className="text-sm font-extrabold">Still have a question?</div>
          <p className="mt-1 text-sm text-muted">
            Ask Seedly in the corner, or send us a note via the contact page.
          </p>
        </div>
      </Section>
    </main>
  );
}
