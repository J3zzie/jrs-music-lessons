import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, whyJrs } from "@/data/site";
import FeatureIcon from "@/components/FeatureIcon";
import IowaOutline from "@/components/IowaOutline";
import SectionHeading from "@/components/SectionHeading";
import { CalendarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Experienced, passionate music instruction in Iowa. Learn about JRS Music Lessons and why students of all ages choose JRS.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Experienced. Passionate.{" "}
            <span className="accent">Invested in Your Success.</span>
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container about-grid">
          <div className="about-copy">
            <p className="kicker">About JRS</p>
            <h2>Meet Your Instructor</h2>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="about-logo">
            <IowaOutline>
              <Image
                src="/jrs-music-logo.png"
                alt="JRS Music Lessons logo over an outline of Iowa"
                width={220}
                height={220}
              />
            </IowaOutline>
          </div>
          <div id="why-jrs">
            <p
              className="kicker accent"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontSize: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              Why choose JRS?
            </p>
            <ul className="why-list">
              {whyJrs.map((item) => (
                <li key={item.text}>
                  <FeatureIcon name={item.icon} size={22} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#050505" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <SectionHeading
            kicker="Let's make some noise"
            title="Start Your Musical Journey"
          />
          <Link href="/contact" className="btn btn-primary">
            Book a Lesson <CalendarIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
