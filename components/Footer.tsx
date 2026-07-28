import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "@/components/icons/ui";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image
            src="/jrs-music-logo.png"
            alt={`${site.name} logo`}
            width={110}
            height={110}
          />
          <p style={{ marginTop: "1rem", maxWidth: "30ch" }}>
            Private music lessons in Iowa for guitar, drums, piano, vocals,
            bass, and more. Personalized instruction for all ages.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <ul>
            {nav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>
              <PinIcon />
              <span>{site.contact.location}</span>
            </li>
            <li>
              <PhoneIcon />
              <a href={`tel:${site.contact.phone.replace(/\D/g, "")}`}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Follow</h3>
          <div className="footer-social">
            <a href={site.social.facebook} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={site.social.instagram} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={site.social.youtube} aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookies">Cookie Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>
          <Link href="/accessibility">Accessibility</Link>
        </span>
      </div>
    </footer>
  );
}
