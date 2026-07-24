import type { Metadata } from "next";
import { site } from "@/data/site";
import BackgroundImage from "@/components/BackgroundImage";
import BookingForm from "@/components/BookingForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your first music lesson with JRS Music Lessons in Iowa. Guitar, drums, vocals, piano, bass, and more.",
};

export default function ContactPage() {
  return (
    <section className="booking section">
      <BackgroundImage name="drums-bg.png" />
      <div className="container booking-grid">
        <div className="booking-intro">
          <p className="kicker">Ready to get started?</p>
          <h2>
            Book Your Lesson <span className="accent">Today</span>
          </h2>
          <p>
            Spots fill up fast! Reach out today to schedule your first lesson,
            or just ask a question — you&rsquo;ll hear back within one business
            day.
          </p>
          <ul className="contact-details">
            <li>
              <PinIcon />
              <span>{site.contact.location}</span>
            </li>
            <li>
              <PhoneIcon />
              <a href={`tel:${site.contact.phone.replace(/\D/g, "")}`}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
