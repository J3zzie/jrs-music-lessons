"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { CalendarIcon, CloseIcon, MenuIcon } from "@/components/icons/ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="logo" aria-label={`${site.name} home`}>
          <Image
            src="/jrs-music-logo.png"
            alt={`${site.name} logo`}
            width={104}
            height={104}
            priority
          />
        </Link>

        <nav aria-label="Main navigation">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>

          <ul id="main-menu" className={`site-nav${open ? " open" : ""}`}>
            {nav.map((item) => {
              const base = item.href.split("#")[0];
              const active =
                base === "/" ? pathname === "/" : pathname.startsWith(base);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={active && !item.href.includes("#") ? "active" : ""}
                    aria-current={
                      active && !item.href.includes("#") ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/book" className="btn btn-primary header-cta">
          Book a Lesson <CalendarIcon />
        </Link>
      </div>
    </header>
  );
}
