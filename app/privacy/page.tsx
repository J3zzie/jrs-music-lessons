import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

const LAST_UPDATED = "July 29, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Privacy <span className="accent">Policy</span>
          </h1>
          <p>How we collect, use, and protect your information.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="legal-content">
            <p className="updated">Last updated: {LAST_UPDATED}</p>

            <p>
              This Privacy Policy explains how {site.name} (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
              protects information when you visit our website or book a
              lesson with us. By using this site, you agree to the practices
              described below.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as
              when you fill out the booking form on our Contact page. This
              may include:
            </p>
            <ul>
              <li>Your name, email address, and phone number</li>
              <li>Instrument and experience level</li>
              <li>Preferred lesson time and any message you send us</li>
            </ul>
            <p>
              We may also automatically collect limited technical
              information, such as your browser type and general usage
              patterns, to help us understand how the site is used.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your booking request and schedule lessons</li>
              <li>Communicate with you about lessons, scheduling, or billing</li>
              <li>Improve our website and the services we offer</li>
              <li>Comply with legal obligations, where applicable</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to support basic functionality and,
              where you consent, to help us understand how visitors use the
              site. See our{" "}
              <a href="/cookies" className="accent">
                Cookie Policy
              </a>{" "}
              for details on what cookies we use and how to manage your
              preferences.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services (for example, email delivery
              or scheduling tools) to help operate the booking process.
              These providers only receive the information necessary to
              perform their function and are not permitted to use it for
              any other purpose.
            </p>

            <h2>Data Retention</h2>
            <p>
              We keep booking and contact information for as long as
              reasonably necessary to provide our services and maintain
              accurate records, or as required by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              You can ask us to access, correct, or delete the personal
              information we hold about you at any time by contacting us
              using the details below.
            </p>

            <h2>Children&rsquo;s Privacy</h2>
            <p>
              We teach students of all ages, including children, but
              booking information is submitted by a parent or guardian. We
              do not knowingly collect personal information directly from
              children without parental involvement.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this Privacy Policy? Reach out at{" "}
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
