"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "jrs-cookie-consent";

type Consent = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent);
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`cookie-banner${closing ? " closing" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="cookie-banner-inner">
        <p className="cookie-text">
          We use cookies to improve your experience and understand how you
          use this site. Choose what you&rsquo;re comfortable with. Read our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-outline cookie-decline"
            onClick={() => respond("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => respond("accepted")}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
