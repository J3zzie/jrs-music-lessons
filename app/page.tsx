import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { benefits, lessons, reviews } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <Header />
        <div className="hero-glow" />
        <div className="hero-content container">
          <div className="hero-copy">
            <p className="eyebrow">One-on-one instruction that rocks</p>
            <h1>Private music <span>lessons in Iowa</span></h1>
            <p className="hero-text">Personalized instruction for guitar, drums, vocals, piano, bass, and more — for all ages and skill levels.</p>
            <div className="hero-actions"><a className="button" href="#contact">Book a lesson <span>▣</span></a><a className="button button-outline" href="#lessons">View lesson options <span>›</span></a></div>
            <div className="hero-points"><span>★ Years of experience</span><span>♟ All ages welcome</span><span>● Local Iowa instructor</span></div>
          </div>
          <div className="guitar-art" aria-hidden="true"><div className="guitar-neck" /><div className="guitar-body">JRS</div><div className="smoke smoke-one"/><div className="smoke smoke-two"/></div>
        </div>
      </section>

      <section className="section lessons" id="lessons">
        <div className="container"><p className="eyebrow center">Lessons for every musician</p><h2 className="center">What do you want to play?</h2><div className="orange-rule" />
          <div className="lesson-grid">{lessons.map((lesson) => <article className="lesson-card" key={lesson.title}><div className="lesson-icon">{lesson.icon}</div><h3>{lesson.title}</h3><p>{lesson.text}</p></article>)}</div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div><p className="eyebrow">About JRS</p><h2>Experienced. Passionate. Invested in your success.</h2><p>With years of teaching experience and a deep love for music, JRS Music Lessons is dedicated to helping students of all ages discover their sound, build confidence, and reach their musical goals.</p><a className="button button-outline" href="#contact">Learn more about JRS <span>›</span></a></div>
          <div className="state-logo" aria-label="JRS logo placeholder"><span>JRS</span><small>Music Lessons</small></div>
          <div id="why-jrs"><p className="eyebrow">Why choose JRS?</p><ul className="benefit-list">{benefits.map((item, i) => <li key={item}><span>{["☆","♟","●","♥","⌖"][i]}</span>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="section reviews" id="reviews"><div className="container"><p className="eyebrow center">What students are saying</p><div className="orange-rule"/><div className="review-grid">{reviews.map(review => <blockquote key={review.name}><p>“{review.quote}”</p><div className="stars">★★★★★ <span>— {review.name}</span></div></blockquote>)}</div></div></section>

      <section className="booking" id="contact"><div className="booking-overlay"/><div className="container booking-grid"><div><p className="eyebrow">Ready to get started?</p><h2>Book your lesson today</h2><p>Spots fill up fast! Reach out today to schedule your first lesson.</p></div><BookingForm /></div></section>

      <section className="section faq" id="faq"><div className="container"><p className="eyebrow center">Frequently asked questions</p><h2 className="center">Before your first lesson</h2><div className="faq-grid"><details><summary>Who can take lessons?</summary><p>Children, teens, and adults are welcome. Lessons can be adapted for complete beginners through experienced musicians.</p></details><details><summary>Where are lessons held?</summary><p>Replace this text with the studio address, service area, online lesson options, or in-home availability.</p></details><details><summary>How long is a lesson?</summary><p>Common options are 30, 45, or 60 minutes. Add the exact lesson packages and prices here.</p></details></div></div></section>
      <Footer />
    </main>
  );
}
