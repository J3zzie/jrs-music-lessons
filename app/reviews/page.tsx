import type { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/data/site";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { CalendarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What students and parents are saying about JRS Music Lessons in Iowa.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            What Students <span className="accent">Are Saying</span>
          </h1>
          <p>
            Real feedback from students and parents across Iowa — from first
            lessons to first performances.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <ReviewsCarousel reviews={reviews} />
          <p style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Become the Next Success Story <CalendarIcon />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
