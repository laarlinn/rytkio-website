import type { Metadata } from "next";
import Image from "next/image";
import { site, inquiries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lihankäsittelytilat ja -palvelut",
  description:
    "Hirven- ja peuranmetsästäjille hirven tai peuran lihankäsittely palveluna tapauskohtaisesti sovittavalla tavalla Multialla.",
  alternates: { canonical: "/lihankasittely/"},
  openGraph: {
    title: `Lihankäsittelytilat ja -palvelut | ${site.name}`,
    description:
      "Hirven- ja peuranmetsästäjille hirven tai peuran lihankäsittely palveluna tapauskohtaisesti sovittavalla tavalla Multialla.",
    images: [{ url: "/images/ll_1.jpg" }],
  },
};

const gallery = [
  { src: "/images/ll_1.jpg", alt: "Leikkaustila teräspöytineen ja ikkunoineen", wide: true },
  { src: "/images/ll_2.jpg", alt: "Lihankäsittelytilan työpisteet", wide: true },
  { src: "/images/ll_4.jpg", alt: "Nylkytila nostimineen", wide: false },
  { src: "/images/ll_5.jpg", alt: "Nylkytilan nostinlaitteisto", wide: false },
  { src: "/images/ll_3.jpg", alt: "Vakuumipakkauslaite", wide: true },
];

const services = [
  {
    title: "Nylkytilat",
    text: "Nylkytilat nostimineen hirvelle ja peuralle.",
  },
  {
    title: "Jäähdyttämö",
    text: "Jäähdyttämö lihojen riiputukseen ja säilytykseen.",
  },
  {
    title: "Leikkaus ja jauhatus",
    text: "Leikkaustilat sekä jauhatus jauhelihaksi.",
  },
  {
    title: "Vakuumipakkaus",
    text: "Lihat saadaan lopuksi pakattua vakuumipakkauksiin.",
  },
];

export default function Lihankasittely() {
  return (
    <>
      {/* Page hero */}
      <section className="relative isolate overflow-hidden bg-spruce">
        <Image
          src="/images/ll_2.jpg"
          alt="Lihankäsittelytilan teräspintoja"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            Palvelut
          </p>
          <h1 className="font-display mt-2 text-4xl font-semibold text-paper sm:text-5xl">
            Lihankäsittelytilat ja&nbsp;-palvelut
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 leading-relaxed text-ink-soft">
            <p>
              Hirven- ja peuranmetsästäjille tarjoamme palveluna hirven tai
              peuran lihankäsittelyn tapauskohtaisesti sovittavalla tavalla.
              Lihankäsittelyssä käytämme ajanmukaista nylkytilaa, jäähdyttämöä
              ja lihanleikkaustilaamme. Lihanleikkaustilassa pakkaamme lihat ja
              jauhelihan vakuumipakkauksiin.
            </p>
            <p>
              Tilat ovat valoisat, uudet ja hygieeniset. Kaikki pinnat ovat
              helposti painepesurilla pestäviä. Lihanleikkaustilassa meillä on
              käytössä jauhelihan jauhatusvälineistö ja tehokkaat
              vakumointivälineet.
            </p>
            <p>
              Tarjoamme edellä mainittua palvelua lihankäsittelytilamme
              mahdollistaman kapasiteetin puitteissa. Kapasiteetti on
              rajallinen tilojen ollessa ensisijaisesti omistajaseurojen
              käytössä. Vapaata kapasiteettia ja palveluita kannattaa kysyä ja
              sopia hyvissä ajoin metsästyskauden lähestyessä.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-paper p-5 shadow-lift">
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">Tilat kuvina</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl shadow-lift ${
                  img.wide ? "col-span-2 aspect-[3/2]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiries */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl bg-spruce p-8 text-cream sm:p-12">
          <h2 className="font-display text-3xl font-semibold text-paper">
            Tiedustelut
          </h2>
          <p className="mt-2 text-cream/80">
            Kysy lisää tiloista ja palveluista:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {inquiries.map((person) => (
              <a
                key={person.name}
                href={`tel:${person.phone.tel}`}
                className="rounded-xl bg-paper/10 p-5 ring-1 ring-inset ring-paper/20 transition-colors hover:bg-paper/20"
              >
                <p className="font-display font-semibold text-paper">
                  {person.name}
                </p>
                <p className="mt-1 text-sm text-cream/90">
                  {person.phone.display}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
