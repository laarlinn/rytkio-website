"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Etusivu" },
  { href: "/tuoremehuasema", label: "Tuoremehuasema" },
  { href: "/lihankasittely", label: "Lihankäsittely" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo_r.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg transition-transform group-hover:-rotate-6"
          />
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Rytkiön Riistavaja
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Päävalikko">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-spruce text-paper"
                    : "text-ink-soft hover:bg-sand hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand bg-paper px-4 pb-4 pt-2 md:hidden" aria-label="Päävalikko">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${
                pathname === l.href ? "bg-spruce text-paper" : "text-ink hover:bg-sand"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
