import Image from "next/image";
import Link from "next/link";
import { site, inquiries } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Season announcement */}
      <div className="bg-barn px-4 py-2.5 text-center text-sm font-medium text-paper">
        <p>
          🍎 {site.season.banner} · {site.season.booking}{" "}
          <Link href="/tuoremehuasema" className="underline underline-offset-2 hover:text-cream">
            Lue lisää
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/vaja_etu.jpg"
            alt="Rytkiön Riistavajan punainen rakennus metsän keskellä"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-spruce/95 via-spruce/40 to-spruce/20" />
        </div>
        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6">
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-paper sm:text-5xl md:text-6xl">
            Rytkiön Riistavaja
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">
            Rakennuksessa on tuoremehuasema ja lihanjalostustilat. Tila on
            hyväksytty elintarvikehuoneistoksi ja pystymme tarjoamaan
            asiakkaillemme hygieenisiä ja laadukkaita palveluja.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tuoremehuasema"
              className="rounded-full bg-barn px-6 py-3 font-medium text-paper shadow-lift transition-colors hover:bg-barn-dark"
            >
              Tuoremehuasema
            </Link>
            <Link
              href="/lihankasittely"
              className="rounded-full bg-paper/10 px-6 py-3 font-medium text-paper ring-1 ring-inset ring-paper/40 backdrop-blur transition-colors hover:bg-paper/20"
            >
              Lihankäsittelytilat
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Palvelumme
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/tuoremehuasema"
            className="group overflow-hidden rounded-2xl bg-paper shadow-lift transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/omena.jpg"
                alt="Punaisia omenoita omenapuussa"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-semibold group-hover:text-barn">
                Tuoremehuasema
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Puristamme omenoistasi tuoremehua nopeasti ja hygieenisesti —
                pesu, murskaus, puristus ja pastörointi suoraan hanapakkaukseen.
              </p>
              <p className="mt-4 font-medium text-barn">
                Katso hinnasto →
              </p>
            </div>
          </Link>

          <Link
            href="/lihankasittely"
            className="group overflow-hidden rounded-2xl bg-paper shadow-lift transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/ll_1.jpg"
                alt="Valoisa lihankäsittelytila teräspöytineen"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl font-semibold group-hover:text-barn">
                Lihankäsittelytilat ja -palvelut
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Hirven- ja peuranmetsästäjille tarjoamme palveluna hirven tai
                peuran lihankäsittelyn tapauskohtaisesti sovitulla tavalla.
              </p>
              <p className="mt-4 font-medium text-barn">Tutustu tiloihin →</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Quality strip */}
      <section className="bg-sand/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Hyväksytty elintarvikehuoneisto
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Tilat ovat valoisat, uudet ja hygieeniset — kaikki pinnat ovat
              helposti pestäviä. Elintarvikevalvonnan Oiva-raportissa arviomme
              on paras mahdollinen.
            </p>
            <a
              href={site.oivaReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-spruce px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-spruce-light"
            >
              Katso Oiva-raportti
            </a>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="/images/mehustamo_2.jpg"
              alt="Tuoremehuaseman laitteistoa"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Ota yhteyttä
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-paper p-7 shadow-lift">
            <h3 className="font-display text-xl font-semibold">Tuoremehuasema</h3>
            <address className="mt-4 space-y-1 not-italic leading-relaxed text-ink-soft">
              <p>{site.address.street}</p>
              <p>
                {site.address.postalCode} {site.address.city}
              </p>
              <p className="pt-3">
                Sähköposti:{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-barn hover:underline">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
          <div className="rounded-2xl bg-paper p-7 shadow-lift">
            <h3 className="font-display text-xl font-semibold">
              Lihankäsittelytilat ja -palvelut
            </h3>
            <address className="mt-4 space-y-1 not-italic leading-relaxed text-ink-soft">
              <p>{site.address.street}</p>
              <p>
                {site.address.postalCode} {site.address.city}
              </p>
              {inquiries.map((person, i) => (
                <p key={person.name} className={i === 0 ? "pt-3" : ""}>
                  {person.name}:{" "}
                  <a href={`tel:${person.phone.tel}`} className="font-medium text-barn hover:underline">
                    {person.phone.display}
                  </a>
                </p>
              ))}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
