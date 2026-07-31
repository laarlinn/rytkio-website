import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Palvelut",
  description:
    "Rytkiön Riistavajan palvelut: tuoremehuasema omenamehun puristukseen sekä lihankäsittelytilat ja -palvelut hirvi- ja peuranmetsästäjille.",
  alternates: { canonical: "/palvelut/"},
  openGraph: {
    title: `Palvelut | ${site.name}`,
    description:
      "Tuoremehuasema omenamehun puristukseen sekä lihankäsittelytilat ja -palvelut hirvi- ja peuranmetsästäjille.",
    images: [{ url: "/images/vaja_etu.jpg" }],
  },
};

const services = [
  {
    href: "/tuoremehuasema",
    title: "Tuoremehuasema",
    text: "Omenoiden pesu, murskaus, puristus ja pastörointi suoraan hanapakkauksiin.",
    image: "/images/mehustamo_1.jpg",
    alt: "Tuoremehuaseman mehulinjasto",
  },
  {
    href: "/lihankasittely",
    title: "Lihankäsittelypalvelut ja -tilat",
    text: "Nylkytilat, jäähdyttämö, leikkaustilat, jauhatus ja vakuumipakkaus metsästäjille.",
    image: "/images/ll_2.jpg",
    alt: "Lihankäsittelytilan työpisteet",
  },
];

export default function Palvelut() {
  return (
    <section className="relative isolate mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Image
        src="/images/deco/omenapuu.png"
        alt=""
        aria-hidden
        width={800}
        height={1200}
        className="absolute right-10 top-8 -z-10 hidden w-44 md:block"
      />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-barn">
        {site.name}
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold sm:text-5xl">
        Palvelut
      </h1>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group overflow-hidden rounded-2xl bg-paper shadow-lift transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h2 className="font-display text-2xl font-semibold group-hover:text-barn">
                {s.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
              <p className="mt-4 font-medium text-barn">Lue lisää →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
