"use client";

import { useState, type FormEvent } from "react";
import { experienceLevels, instrumentOptions } from "@/data/site";
import { CalendarIcon } from "@/components/icons/ui";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="booking-form">
        <p className="success" role="status">
          <strong>Message received!</strong> Thanks for reaching out —
          you&rsquo;ll hear back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="preferredTime">Preferred Time</label>
        <input
          id="preferredTime"
          name="preferredTime"
          type="text"
          placeholder="Preferred Time"
        />
      </div>
      <div>
        <label htmlFor="instrument">Instrument</label>
        <select id="instrument" name="instrument" required defaultValue="">
          <option value="" disabled>
            Instrument
          </option>
          {instrumentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="experience">Experience Level</label>
        <select id="experience" name="experience" required defaultValue="">
          <option value="" disabled>
            Experience Level
          </option>
          {experienceLevels.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" />
      </div>

      {status === "error" && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary full"
        disabled={status === "submitting"}
        style={{ justifyContent: "center" }}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        <CalendarIcon />
      </button>
    </form>
  );
}
