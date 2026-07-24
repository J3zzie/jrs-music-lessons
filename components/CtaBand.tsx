import Link from "next/link";
import { CalendarIcon } from "@/components/icons/ui";
import BackgroundImage from "@/components/BackgroundImage";

export default function CtaBand() {
  return (
    <section className="booking cta-band">
      <BackgroundImage name="drums-bg.png" />
      <div className="container">
        <p className="kicker accent" style={{ letterSpacing: "0.25em" }}>
          Ready to get started?
        </p>
        <h2>Book Your Lesson Today</h2>
        <p>Spots fill up fast! Reach out today to schedule your first lesson.</p>
        <Link href="/contact" className="btn btn-primary">
          Book a Lesson <CalendarIcon />
        </Link>
      </div>
    </section>
  );
}
