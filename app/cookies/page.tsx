import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies on this website.`,
};

const LAST_UPDATED = "July 29, 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Cookie <span className="accent">Policy</span>
          </h1>
          <p>What cookies we use, why we use them, and how to manage them.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="legal-content">
            <p className="updated">Last updated: {LAST_UPDATED}</p>

            <p>
              This Cookie Policy explains how {site.name} uses cookies and
              similar technologies on this website. It should be read
              alongside our{" "}
              <a href="/privacy" className="accent">
                Privacy Policy
              </a>
              .
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you
              visit a website. They help the site remember information
              about your visit, like your preferences, which can make your
              next visit easier and the site more useful to you.
            </p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for a few simple purposes:</p>
            <ul>
              <li>
                <strong>Necessary cookies</strong> — remember choices you
                make, like your cookie consent preference, so we don&rsquo;t
                ask you again on every visit.
              </li>
              <li>
                <strong>Analytics cookies</strong> (only with your consent)
                — help us understand how visitors use the site, such as
                which pages are most popular, so we can improve it.
              </li>
              <li>
                <strong>Preference cookies</strong> — remember settings you
                choose, such as display preferences.
              </li>
            </ul>
            <p>
              We do not use cookies to sell your personal information or
              serve third-party advertising.
            </p>

            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Strictly necessary:</strong> required for the site
                to function, such as remembering your cookie consent choice.
                These cannot be turned off.
              </li>
              <li>
                <strong>Functional:</strong> enable enhanced features, such
                as remembering scheduling preferences you enter on the
                booking form.
              </li>
              <li>
                <strong>Analytics:</strong> help us understand site traffic
                and usage patterns. Only set if you accept cookies via the
                banner on this site.
              </li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              When you first visit this site, a banner lets you accept or
              decline non-essential cookies. You can also clear cookies at
              any time through your browser settings, or change your
              decision by clearing your browser&rsquo;s local storage for
              this site, which will show the consent banner again on your
              next visit.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Changes
              will be posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about this Cookie Policy? Reach out at{" "}
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
