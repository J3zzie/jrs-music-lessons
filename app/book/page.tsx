import type { Metadata } from "next";
import Link from "next/link";
import { booking, pricingPlans } from "@/data/site";
import { StarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Book a Lesson",
  description:
    "Book your music lesson online with JRS Music Lessons — pick a lesson length and choose an available time.",
};

export default function BookPage() {
  const isConfigured = booking.calendarUrl.startsWith("http");

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Book Your <span className="accent">Lesson</span>
          </h1>
          <p>
            Choose your lesson length and select an available time from the
            calendar below. After booking, you will receive a confirmation
            email with the lesson details.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="pricing-grid pricing-grid-compact">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`price-card${plan.featured ? " featured" : ""}`}
              >
                {plan.featured && (
                  <p className="price-badge">
                    <StarIcon size={14} /> Most Popular
                  </p>
                )}
                <h3>{plan.name}</h3>
                <p className="price-value">
                  {plan.price}
                  <span>/{plan.unit}</span>
                </p>
                <p className="price-description">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="calendar-embed-wrap">
            {isConfigured ? (
              <iframe
                src={booking.calendarUrl}
                title="JRS Music Lessons booking calendar"
                className="calendar-embed"
                loading="lazy"
              />
            ) : (
              <div className="calendar-placeholder">
                <p>The booking calendar isn&rsquo;t connected yet.</p>
                <p className="muted">
                  Set <code>NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL</code> in{" "}
                  <code>.env</code> to your Google Calendar Appointment
                  Schedule link.
                </p>
              </div>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href={isConfigured ? booking.calendarUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary${isConfigured ? "" : " btn-disabled"}`}
              aria-disabled={!isConfigured}
              tabIndex={isConfigured ? undefined : -1}
            >
              Open Booking Calendar
            </a>
          </div>

          <p className="cancellation-notice">
            Lessons may be cancelled or rescheduled with at least 24
            hours&rsquo; notice.
          </p>

          <p className="book-contact-note">
            Have a general question, a custom scheduling request, or want to
            ask about family discounts or an instrument not listed?{" "}
            <Link href="/contact" className="accent">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
