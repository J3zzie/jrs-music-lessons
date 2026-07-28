import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern lessons and use of the ${site.name} website.`,
};

const LAST_UPDATED = "July 29, 2026";

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Terms of <span className="accent">Service</span>
          </h1>
          <p>The terms that govern booking lessons and using this website.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="legal-content">
            <p className="updated">Last updated: {LAST_UPDATED}</p>

            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the {site.name} website and the music lessons we provide. By
              booking a lesson or using this site, you agree to these Terms.
            </p>

            <h2>Lessons & Scheduling</h2>
            <p>
              Lessons are booked through the Contact page or by phone/email.
              We&rsquo;ll confirm your instrument, experience level, and
              preferred time before your first lesson. Lesson length and
              pricing are described on our{" "}
              <a href="/prices" className="accent">
                Prices
              </a>{" "}
              page.
            </p>

            <h2>Payment</h2>
            <p>
              Payment terms (per-lesson or package pricing, accepted payment
              methods, and billing schedule) will be confirmed when you book.
              There are no long-term contracts — you can stop lessons at any
              time.
            </p>

            <h2>Cancellations & Rescheduling</h2>
            <p>
              Life happens — please see our{" "}
              <a href="/refund-policy" className="accent">
                Refund &amp; Cancellation Policy
              </a>{" "}
              for full details on rescheduling, late cancellations, and
              refunds.
            </p>

            <h2>Conduct</h2>
            <p>
              We ask that students and parents/guardians treat lessons, the
              instructor, and any lesson space with respect. We reserve the
              right to decline or discontinue lessons in cases of abusive or
              unsafe behavior.
            </p>

            <h2>Website Content</h2>
            <p>
              All text, images, and branding on this website (including the
              {" "}{site.name} logo) belong to {site.name} and may not be
              copied or reused without permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We take reasonable care in providing instruction, but{" "}
              {site.name} is not liable for indirect or incidental damages
              arising from lessons or use of this website, to the fullest
              extent permitted by law.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated revision date. Continued
              use of our lessons or website after changes means you accept
              the updated Terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about these Terms? Reach out at{" "}
              <a href={`mailto:${site.contact.email}`} className="accent">
                {site.contact.email}
              </a>{" "}
              or {site.contact.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
