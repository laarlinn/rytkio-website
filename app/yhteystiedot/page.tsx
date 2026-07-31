import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Osuuskunta Rytkiön Riistavajan yhteystiedot ja ajo-ohjeet. Talaslahdentie 200, 42600 Multia.",
  alternates: { canonical: "/yhteystiedot/"},
  openGraph: {
    title: `Yhteystiedot | ${site.name}`,
    description:
      "Osuuskunta Rytkiön Riistavajan yhteystiedot ja ajo-ohjeet. Talaslahdentie 200, 42600 Multia.",
    images: [{ url: "/images/vaja_etu.jpg" }],
  },
};

const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=24.606800079345707%2C62.35359220135264%2C24.833393096923828%2C62.42376416825578&layer=mapnik&marker=62.38869872387649%2C24.720096588134766";
const mapLargeUrl =
  "https://www.openstreetmap.org/?mlat=62.3887&mlon=24.7201#map=13/62.3887/24.7201";

export default function Yhteystiedot() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-barn">
        {site.name}
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold sm:text-5xl">
        Yhteystiedot
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-paper p-7 shadow-lift">
          <h2 className="font-display text-xl font-semibold">
            {site.legalName}
          </h2>
          <address className="mt-4 space-y-1 not-italic leading-relaxed text-ink-soft">
            <p>{site.address.street}</p>
            <p>
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="pt-3">
              Puhelin:{" "}
              <a href={`tel:${site.phone.osuuskunta.tel}`} className="font-medium text-barn hover:underline">
                {site.phone.osuuskunta.display}
              </a>
            </p>
            <p>
              Sähköposti:{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-barn hover:underline">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div className="rounded-2xl bg-paper p-7 shadow-lift">
          <h2 className="font-display text-xl font-semibold">Tuoremehuasema</h2>
          <address className="mt-4 space-y-1 not-italic leading-relaxed text-ink-soft">
            <p>{site.address.street}</p>
            <p>
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="pt-3">
              Puhelin ({site.phone.tuoremehuasema.note}):{" "}
              <a href={`tel:${site.phone.tuoremehuasema.tel}`} className="font-medium text-barn hover:underline">
                {site.phone.tuoremehuasema.display}
              </a>
            </p>
            <p>
              Sähköposti:{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-barn hover:underline">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl font-semibold">Ajo-ohje</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
          Riistavaja sijaitsee osoitteessa {site.address.street},{" "}
          {site.address.postalCode} {site.address.city}.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl shadow-lift">
          <iframe
            src={mapEmbedUrl}
            title="Kartta: Rytkiön Riistavajan sijainti"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
        <a
          href={mapLargeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-medium text-barn hover:underline"
        >
          Näytä isommalla kartalla →
        </a>
      </div>
    </section>
  );
}
