export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand footer-brand"><span className="brand-jrs">JRS</span><span className="brand-sub">Music Lessons</span></div>
        <p>Private music lessons in Iowa for guitar, drums, piano, vocals, bass, and more.</p>
      </div>
      <div><h3>Quick links</h3><a href="#lessons">Lessons</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div>
      <div><h3>Contact</h3><p>📍 Iowa, USA</p><p>📞 (319) 555-1234</p><p>✉ info@jrsmusiclessons.com</p></div>
      <div><h3>Follow</h3><div className="socials"><a href="#">f</a><a href="#">◎</a><a href="#">▶</a></div></div>
      <small>© 2026 JRS Music Lessons. All rights reserved.</small>
    </footer>
  );
}
