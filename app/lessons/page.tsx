import type { Metadata } from "next";
import Link from "next/link";
import LessonGrid from "@/components/LessonGrid";
import SectionHeading from "@/components/SectionHeading";
import { CalendarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Lessons",
  description:
    "Private lessons in guitar, vocals, drums, piano, bass, and more — for all ages and skill levels in Iowa.",
};

export default function LessonsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            What Do You <span className="accent">Want to Play?</span>
          </h1>
          <p>
            Every lesson is one-on-one and built around your goals, your pace,
            and the music you love. Pick an instrument to get started.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <LessonGrid detailed />
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <SectionHeading
              kicker="Ready when you are"
              title="Not Sure Where to Start?"
            />
            <p className="muted" style={{ maxWidth: "55ch", margin: "-1.5rem auto 2rem" }}>
              Book a first lesson and we&rsquo;ll figure out the right
              instrument and plan together.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Lesson <CalendarIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
