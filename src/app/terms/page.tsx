import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <main id="main">
      <Section kicker="Terms" title="Website terms (starter)">
        <div className="card p-6 space-y-4 text-sm text-muted">
          <p>
            This is a starter terms page. Replace it with your official legal terms before
            launch.
          </p>

          <div>
            <div className="text-sm font-extrabold text-text">No professional advice</div>
            <p className="mt-1">
              Seedly can provide general information and learning tips, but does not provide legal,
              medical, or religious verdicts. Always consult qualified professionals for
              high-stakes decisions.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-text">Acceptable use</div>
            <p className="mt-1">
              Please don’t misuse the site or chat features, attempt to disrupt services, or submit
              harmful content.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-warning/25 p-4">
            <div className="text-sm font-extrabold text-text">Action item</div>
            <p className="mt-1">
              Work with legal counsel to create terms that match your business and jurisdiction.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
