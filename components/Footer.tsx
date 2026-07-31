import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-spruce text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-paper">
            {site.legalName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
            Tuoremehuasema ja lihankäsittelytilat Multialla.
          </p>
          <a
            href={site.oivaReportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-1.5 text-sm text-cream/90 transition-colors hover:border-cream hover:text-paper"
          >
            Oiva-raportti
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">
            Yhteystiedot
          </p>
          <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-cream/90">
            <p>{site.address.street}</p>
            <p>
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="pt-2">
              <a href={`tel:${site.phone.osuuskunta.tel}`} className="hover:text-paper">
                {site.phone.osuuskunta.display}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">
            Sivut
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { href: "/palvelut", label: "Palvelut" },
              { href: "/tuoremehuasema", label: "Tuoremehuasema" },
              { href: "/lihankasittely", label: "Lihankäsittelytilat ja -palvelut" },
              { href: "/yhteystiedot", label: "Yhteystiedot" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/90 hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>
            Kohdetta on tuettu Manner-Suomen maaseudun kehittämisohjelmasta
            (Euroopan maaseudun kehittämisen maatalousrahasto).
          </p>
        </div>
      </div>
    </footer>
  );
}
