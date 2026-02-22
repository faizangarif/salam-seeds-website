import { Section } from "@/components/Section";

export default function AccessibilityPage() {
  return (
    <main id="main">
      <Section kicker="Accessibility" title="Built for everyone">
        <div className="card p-6 space-y-4 text-sm text-muted">
          <p>
            Salaam Seeds aims to provide an accessible experience for all users. This site uses
            semantic HTML, keyboard navigation support, visible focus states, readable typography,
            and clear interaction patterns.
          </p>

          <div>
            <div className="text-sm font-extrabold text-text">Accessibility features</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Skip-to-content link</li>
              <li>Keyboard-accessible navigation</li>
              <li>Accessible dialogs (Seedly chat)</li>
              <li>Reduced-motion support</li>
              <li>Readable contrast and scalable text</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-warning/25 p-4">
            <div className="text-sm font-extrabold text-text">Feedback</div>
            <p className="mt-1">
              If you encounter any accessibility barriers, please contact us and describe the page
              and issue. We’ll prioritize fixes.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
