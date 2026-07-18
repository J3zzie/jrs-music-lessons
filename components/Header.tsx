"use client";

import { useState } from "react";

const links = ["Home", "Lessons", "About", "Why JRS", "Reviews", "FAQ", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="JRS Music Lessons home">
        <span className="brand-jrs">JRS</span>
        <span className="brand-sub">Music Lessons</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        ☰
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
      <a href="#contact" className="button button-small header-cta">Book a lesson <span>▣</span></a>
    </header>
  );
}
