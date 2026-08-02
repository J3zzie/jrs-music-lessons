import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import BackgroundImage from "@/components/BackgroundImage";
import BookingForm from "@/components/BookingForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions, custom scheduling requests, family discounts, or an instrument not listed? Get in touch with JRS Music Lessons.",
};

export default function ContactPage() {
  return (
    <section className="booking section">
      <BackgroundImage name="drums-bg.png" />
      <div className="container booking-grid">
        <div className="booking-intro">
          <p className="kicker">Questions or custom requests?</p>
          <h2>
            Get in <span className="accent">Touch</span>
          </h2>
          <p>
            Have a general question, a custom scheduling request, want to ask
            about family discounts, or need an instrument that isn&rsquo;t
            listed? Send us a message and you&rsquo;ll hear back within one
            business day. Ready to book a specific lesson time?{" "}
            <Link href="/book" className="accent">
              Book a lesson
            </Link>{" "}
            instead.
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
