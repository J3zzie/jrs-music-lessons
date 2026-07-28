import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${site.name}'s commitment to an accessible website for all visitors.`,
};

const LAST_UPDATED = "July 29, 2026";

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Accessibility <span className="accent">Statement</span>
          </h1>
          <p>Our commitment to making this website usable for everyone.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="legal-content">
            <p className="updated">Last updated: {LAST_UPDATED}</p>

            <p>
              {site.name} is committed to making our website accessible to
              everyone, including people with disabilities. We continually
              work to improve the experience for all visitors and apply the
              relevant accessibility standards.
            </p>

            <h2>Conformance Target</h2>
            <p>
              We aim to meet the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA, the widely accepted standard for web
              accessibility.
            </p>

            <h2>Measures We&rsquo;ve Taken</h2>
            <ul>
              <li>Semantic HTML structure with proper heading levels and landmarks</li>
              <li>Descriptive alt text on meaningful images, decorative images hidden from assistive technology</li>
              <li>A keyboard-operable navigation menu, reviews carousel, and FAQ accordion</li>
              <li>Visible focus states on links, buttons, and form fields</li>
              <li>Form fields with associated labels and clear error messaging</li>
              <li>Color choices checked for sufficient contrast against our dark background</li>
              <li>Support for reduced-motion preferences on animated elements</li>
              <li>A responsive layout that works across screen sizes and zoom levels</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              No website is perfectly accessible for every user and
              assistive technology combination. If you encounter a barrier
              using this site, please let us know so we can address it.
            </p>

            <h2>Feedback</h2>
            <p>
              We welcome feedback on the accessibility of this website. If
              you experience any difficulty accessing content or completing
              the booking form, contact us using the details below and
              we&rsquo;ll work with you to provide the information or
              service you need.
            </p>

            <h2>Contact Us</h2>
            <p>
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
