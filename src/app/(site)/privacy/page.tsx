import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <main id="main">
      <Section kicker="Privacy" title="Privacy-first, parent-first">
        <div className="card p-6 space-y-4 text-sm text-muted">
          <p>
            This website is designed for parents and guardians. Please do not submit sensitive
            personal information, especially about children.
          </p>

          <div>
            <div className="text-sm font-extrabold text-text">Contact form</div>
            <p className="mt-1">
              When you submit the contact form, we receive the information you provide (name, email,
              and message) so we can respond. In this starter template, submissions are logged on
              the server. In production, you should connect the form to an email provider or CRM
              and publish your official data retention policy.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-text">Seedly chat (OpenAI)</div>
            <p className="mt-1">
              The Seedly chat feature sends your message to the OpenAI API to generate a response.
              Seedly may use web search and returns clickable citations. Do not share sensitive
              information in chat.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-text">Cookies & storage</div>
            <p className="mt-1">
              The site uses session storage to remember whether the Seedly chat has been shown on
              this visit. This does not identify you personally.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-warning/25 p-4">
            <div className="text-sm font-extrabold text-text">Action item</div>
            <p className="mt-1">
              Replace this page with your official privacy policy before collecting real customer
              data.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
