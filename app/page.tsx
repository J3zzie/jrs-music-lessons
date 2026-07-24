import Image from "next/image";
import Link from "next/link";
import { about, reviews, site, trustBadges, whyJrs } from "@/data/site";
import BackgroundImage from "@/components/BackgroundImage";
import CtaBand from "@/components/CtaBand";
import FeatureIcon from "@/components/FeatureIcon";
import LessonGrid from "@/components/LessonGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import SectionHeading from "@/components/SectionHeading";
import { CalendarIcon, ChevronRightIcon, StarIcon } from "@/components/icons/ui";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <BackgroundImage name="hero-guitarist.png" className="hero-media" />
        <div className="container">
          <h1>
            Private Music <span className="accent">Lessons in Iowa</span>
          </h1>
          <p>{site.description}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book a Lesson <CalendarIcon />
            </Link>
            <Link href="/lessons" className="btn btn-outline">
              View Lesson Options <ChevronRightIcon size={16} />
            </Link>
          </div>
          <div className="trust-badges">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="badge">
                <FeatureIcon name={badge.icon} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            kicker="Lessons for every musician"
            title="What Do You Want to Play?"
          />
          <LessonGrid />
          <p style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/lessons" className="btn btn-outline">
              View All Lessons <ChevronRightIcon size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#050505" }}>
        <div className="container about-grid">
          <div className="about-copy">
            <p className="kicker">About JRS</p>
            <h2>{about.heading}</h2>
            <p>{about.body[0]}</p>
            <Link href="/about" className="btn btn-outline">
              Learn More About JRS <ChevronRightIcon size={16} />
            </Link>
          </div>
          <div className="about-logo">
            <Image
              src="/jrs-music-logo.png"
              alt="JRS Music Lessons logo"
              width={260}
              height={260}
              style={{ margin: "0 auto" }}
            />
          </div>
          <div>
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

      <section className="section">
        <div className="container">
          <SectionHeading title="What Students Are Saying" />
          <ReviewsCarousel reviews={reviews.slice(0, 4)} />
          <p style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/reviews" className="btn btn-outline">
              Read More Reviews <StarIcon size={16} />
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
