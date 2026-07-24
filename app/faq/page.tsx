import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/site";
import { CalendarIcon } from "@/components/icons/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about lesson length, pricing, instruments, ages, and how to get started with JRS Music Lessons.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>
            Frequently Asked <span className="accent">Questions</span>
          </h1>
          <p>
            Everything you need to know before your first lesson. Don&rsquo;t
            see your question? Just ask.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p className="answer">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Still Have Questions? Get in Touch <CalendarIcon />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
