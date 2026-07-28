import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Rescheduling, cancellation, and refund terms for ${site.name} lessons.`,
};

const LAST_UPDATED = "July 29, 2026";

export default function RefundPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Refund & <span className="accent">Cancellation Policy</span>
          </h1>
          <p>
            No long-term contracts — just clear, fair terms for
            rescheduling and refunds.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="legal-content">
            <p className="updated">Last updated: {LAST_UPDATED}</p>

            <p>
              We understand that schedules change. This policy explains how
              rescheduling, cancellations, and refunds work for {site.name}
              lessons.
            </p>

            <h2>Cancelling or Rescheduling a Lesson</h2>
            <p>
              Give at least 24 hours notice and we&rsquo;ll reschedule your
              lesson at no charge. You can cancel or reschedule by replying
              to your confirmation email, calling, or texting{" "}
              {site.contact.phone}.
            </p>

            <h2>Late Cancellations & No-Shows</h2>
            <p>
              Cancellations made with less than 24 hours notice, or missed
              lessons without notice, are billed as a completed lesson,
              since that time was reserved for you. We&rsquo;re happy to
              make exceptions for genuine emergencies — just reach out.
            </p>

            <h2>Cancellations by Us</h2>
            <p>
              If a lesson needs to be cancelled on our end (illness,
              weather, scheduling conflicts), you&rsquo;ll be offered a free
              reschedule or a full refund/credit for that lesson — no
              questions asked.
            </p>

            <h2>Refunds on Lesson Packages</h2>
            <p>
              If you&rsquo;ve prepaid for multiple lessons and need to stop
              before using them all, unused lessons are refunded at the
              per-lesson rate you paid, minus any lessons already completed.
            </p>

            <h2>Ending Lessons</h2>
            <p>
              There are no long-term contracts. You&rsquo;re free to stop
              lessons at any time — just let us know so we can settle any
              outstanding balance or refund.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about a specific booking, cancellation, or refund?
              Email{" "}
              <a href={`mailto:${site.contact.email}`} className="accent">
                {site.contact.email}
              </a>{" "}
              or call {site.contact.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
