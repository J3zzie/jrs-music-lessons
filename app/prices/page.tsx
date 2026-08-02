import type { Metadata } from "next";
import Link from "next/link";
import { pricingNotes, pricingPlans } from "@/data/site";
import { CalendarIcon, StarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Simple, transparent pricing for private guitar, drums, vocals, piano, and bass lessons in Iowa. No long-term contracts.",
};

export default function PricesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Simple, Transparent <span className="accent">Pricing</span>
          </h1>
          <p>
            No hidden fees, no long-term contracts — just one-on-one lessons
            priced by the time you want to spend.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="pricing-grid">
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
                <ul className="price-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href="/book" className="btn btn-primary">
                  Book a Lesson <CalendarIcon />
                </Link>
              </div>
            ))}
          </div>

          <ul className="price-notes">
            {pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
