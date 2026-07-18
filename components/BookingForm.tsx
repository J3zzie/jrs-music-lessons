"use client";

import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="booking-form" onSubmit={submit}>
      <input aria-label="Your name" placeholder="Your Name" required />
      <input aria-label="Email address" type="email" placeholder="Email Address" required />
      <input aria-label="Phone number" type="tel" placeholder="Phone Number" />
      <select aria-label="Instrument" defaultValue=""><option value="" disabled>Instrument</option><option>Guitar</option><option>Vocals</option><option>Drums</option><option>Piano</option><option>Bass</option><option>Other</option></select>
      <select aria-label="Experience level" defaultValue=""><option value="" disabled>Experience Level</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
      <input aria-label="Preferred time" placeholder="Preferred Time" />
      <textarea aria-label="Message" placeholder="Message" rows={4} />
      <button className="button form-button" type="submit">Request a lesson <span>▣</span></button>
      {sent && <p className="form-message">Thanks! Connect this form to Formspree, Resend, EmailJS or your preferred booking system.</p>}
    </form>
  );
}
