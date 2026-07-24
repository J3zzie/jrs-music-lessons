"use client";

import { useState } from "react";
import type { Review } from "@/data/site";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@/components/icons/ui";

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={16} />
      ))}
    </div>
  );
}

export default function ReviewsCarousel({
  reviews,
  visible = 3,
}: {
  reviews: Review[];
  visible?: number;
}) {
  const [start, setStart] = useState(0);

  const shown = Array.from(
    { length: Math.min(visible, reviews.length) },
    (_, i) => reviews[(start + i) % reviews.length]
  );

  const prev = () =>
    setStart((s) => (s - 1 + reviews.length) % reviews.length);
  const next = () => setStart((s) => (s + 1) % reviews.length);

  return (
    <div className="carousel" role="group" aria-label="Student reviews">
      <button
        type="button"
        className="carousel-btn"
        onClick={prev}
        aria-label="Previous review"
      >
        <ChevronLeftIcon />
      </button>

      <div className="carousel-track" aria-live="polite">
        {shown.map((review) => (
          <figure key={review.author} className="review-card">
            <Stars />
            <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
            <figcaption className="author">&mdash; {review.author}</figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="carousel-btn"
        onClick={next}
        aria-label="Next review"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
