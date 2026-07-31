import type { Metadata } from "next";
import Image from "next/image";
import { site, priceList, discounts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuoremehuasema",
  description:
    "Puristamme omenoistasi tuoremehua nopeasti ja hygieenisesti hanapakkauksiin Multialla. Katso hinnasto ja varaa mehustusaika.",
  alternates: { canonical: "/tuoremehuasema/"},
  openGraph: {
    title: `Tuoremehuasema | ${site.name}`,
    description:
      "Puristamme omenoistasi tuoremehua nopeasti ja hygieenisesti hanapakkauksiin Multialla. Katso hinnasto ja varaa mehustusaika.",
    images: [{ url: "/images/mehustamo_1.jpg" }],
  },
};

const steps = [
  {
    title: "Punnitus",
    text: "Prosessissa ensimmäiseksi omenat punnitaan.",
  },
  {
    title: "Pesu, murskaus ja puristus",
    text: "Laitteistolla omenat huuhdellaan, murskataan ja puristetaan mehuksi.",
  },
  {
    title: "Pastörointi",
    text: "Mehu siirtyy suoraan pastörointilaitteeseen. Mehun lämpötila on pastöroinnin jälkeen noin 85 astetta. Asiakkaan astioihin voidaan toimittaa myös pastöroimatonta mehua.",
  },
  {
    title: "Hanapakkaus",
    text: "Valmis mehu pakataan pääasiassa 3 litran hanapakkauksiin, joissa mehu säilyy avaamattomana ja viileässä säilytettynä noin vuoden.",
  },
];

export default function Tuoremehuasema() {
  return (
    <>
      {/* Page hero */}
      <section className="relative isolate overflow-hidden bg-spruce">
        <Image
          src="/images/mehustamo_1.jpg"
          alt="Tuoremehuaseman mehulinjasto"
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
            Tuoremehuasema
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/90">
            Tuoremehulaitteistolla puristetaan omenoista tuoremehua nopeasti ja
            hygieenisesti pääasiassa 3 litran hanapakkauksiin.
          </p>
        </div>
      </section>

      {/* Season callout */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-10 rounded-2xl bg-barn p-7 text-paper shadow-lift sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display text-2xl font-semibold">
              🍎 {site.season.banner}
            </p>
            <p className="mt-1 text-cream/90">
              Ajanvaraus avataan 3.8. — mehunpuristus tapahtuu pääsääntöisesti
              viikonloppuisin.
            </p>
          </div>
          <a
            href={`tel:${site.phone.tuoremehuasema.tel}`}
            className="mt-4 inline-block shrink-0 rounded-full bg-paper px-6 py-3 font-medium text-barn transition-colors hover:bg-cream sm:mt-0"
          >
            Varaa aika: {site.phone.tuoremehuasema.display}{" "}
            <span className="font-normal">({site.phone.tuoremehuasema.note})</span>
          </a>
        </div>
        <p className="mt-3 text-center text-sm text-ink-soft">
          Ajanvarauksen voi tehdä soittamalla numeroon{" "}
          {site.phone.tuoremehuasema.display} ({site.phone.tuoremehuasema.note}).
        </p>
      </section>

      {/* Yield info */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">
              Omenoista mehuksi
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Kotimaisen omenan mehuntuotto vaihtelee noin 50–70 % välillä
                lajikkeesta ja kypsyydestä riippuen. Esimerkiksi 100 kg:sta
                omenoita voit saada 50–70 litraa omenatuoremehua, joka säilyy
                hanapakkauksessa noin vuoden avaamattomana ja säilytettynä
                viileässä.
              </p>
              <p>
                Mehustus 100 omenakilolle kestää noin tunnin. Pienin
                valmistuserä jonka teemme on 50 kg omenoita. Voit tuoda omenat
                ja hakea ne myöhemmin tai voit odottaa omenamehun valmistumista
                pihallamme tai käväistä vaikkapa Multian kirkonkylällä.
                Riistavajan tilat eivät valitettavasti ole asiakkaidemme
                käytössä.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "50–70 %", label: "mehuntuotto" },
                { value: "~1 h", label: "mehustus / 100 kg" },
                { value: "50 kg", label: "pienin erä" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-paper p-4 text-center shadow-lift">
                  <p className="font-display text-xl font-semibold text-barn sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="/images/omena.jpg"
              alt="Kypsiä punaisia omenoita puussa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-sand/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold">
            Näin mehustus etenee
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-paper p-6 shadow-lift">
                <p className="font-display text-3xl font-semibold text-barn/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Price list */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="hinnasto">
        <h2 className="font-display text-3xl font-semibold">Hinnasto</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="overflow-hidden rounded-2xl bg-paper shadow-lift">
            <table className="w-full text-left">
              <caption className="sr-only">Tuoremehuaseman hinnasto</caption>
              <thead>
                <tr className="bg-spruce text-sm text-paper">
                  <th scope="col" className="px-6 py-3.5 font-semibold">
                    Tuote tai palvelu
                  </th>
                  <th scope="col" className="px-6 py-3.5 text-right font-semibold">
                    Hinta
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand">
                {priceList.map((row) => (
                  <tr key={row.item}>
                    <td className="px-6 py-4">
                      <p className="font-medium">{row.item}</p>
                      {row.detail && (
                        <p className="mt-0.5 text-sm text-ink-soft">{row.detail}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-display font-semibold text-barn">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-paper p-6 shadow-lift">
              <h3 className="font-display text-lg font-semibold">
                Määräalennukset
              </h3>
              <ul className="mt-3 space-y-2">
                {discounts.map((d) => (
                  <li key={d.range} className="flex items-center justify-between border-b border-sand pb-2 text-sm last:border-0">
                    <span className="text-ink-soft">{d.range}</span>
                    <span className="font-semibold text-barn">−{d.discount}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-spruce p-6 text-cream shadow-lift">
              <h3 className="font-display text-lg font-semibold text-paper">
                Hyvä tietää
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-cream/90">
                <li>
                  Ota mukaan nimelläsi merkattuja muovilaatikoita tai
                  tukevapohjaisia pahvilaatikoita, joihin laitamme valmiit
                  hanapakkaukset.
                </li>
                <li>
                  Valmiiden hanapakkauksien lämpötila on noin 80 astetta
                  luovutettaessa, eikä niitä voi pinota päällekkäin.
                </li>
                <li>
                  Maksuksi hyväksymme vain pankki- tai luottokortit, emme ota
                  vastaan käteistä.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-sand/70 p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-semibold">
            Ajanvaraukset ja kyselyt
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">
            Ajanvarauksen voi tehdä soittamalla numeroon{" "}
            {site.phone.tuoremehuasema.display} ({site.phone.tuoremehuasema.note}).
            Huomioithan, että mehunpuristus tapahtuu pääsääntöisesti
            viikonloppuisin.
          </p>
          <a
            href={`tel:${site.phone.tuoremehuasema.tel}`}
            className="mt-6 inline-block rounded-full bg-barn px-8 py-3.5 font-medium text-paper shadow-lift transition-colors hover:bg-barn-dark"
          >
            Soita {site.phone.tuoremehuasema.display}{" "}
            <span className="font-normal">({site.phone.tuoremehuasema.note})</span>
          </a>
        </div>
      </section>
    </>
  );
}
