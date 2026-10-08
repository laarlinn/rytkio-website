import type { Metadata } from "next";
import Image from "next/image";
import { site, priceList, discounts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuoremehuasema",
  description:
    "Puristamme omenoistasi tuoremehua nopeasti ja hygieenisesti hanapakkauksiin Multialla. Katso hinnasto.",
  alternates: { canonical: "/tuoremehuasema/"},
  openGraph: {
    title: `Tuoremehuasema | ${site.name}`,
    description:
      "Puristamme omenoistasi tuoremehua nopeasti ja hygieenisesti hanapakkauksiin Multialla. Katso hinnasto.",
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
    title: "Pakkaus",
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
            hygieenisesti.
          </p>
        </div>
      </section>

      {/* Garland divider over the hero/background seam: overlapping copies
          (every other one mirrored) loop the garland across any width */}
      <div aria-hidden className="pointer-events-none relative z-10 -mt-12 h-24 overflow-hidden">
        <div className="absolute left-1/2 flex -translate-x-1/2">
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={i}
              src="/images/deco/divider.png"
              alt=""
              width={1536}
              height={300}
              className={`-mx-9 h-24 w-auto max-w-none ${i % 2 ? "-scale-x-100" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Season callout */}
      <section className="relative isolate mx-auto max-w-6xl px-4 sm:px-6">
        <Image
          src="/images/deco/omenaterttu.png"
          alt=""
          aria-hidden
          width={666}
          height={1000}
          className="absolute -top-36 right-10 -z-10 hidden w-40 md:block"
        />
        <div className="sketch-2 mt-10 border-barn-dark bg-barn p-7 text-paper shadow-lift">
          <p className="font-display text-2xl font-semibold">
            🍎 {site.season.banner}
          </p>
          <p className="mt-1 text-cream/90">
            Kiitokset asiakkaille
          </p>
        </div>
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
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`${["sketch", "sketch-2", "sketch-3"][i % 3]} border-spruce/40 bg-paper p-4 text-center shadow-lift`}
                >
                  <p className="font-display text-xl font-semibold text-barn sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="/images/mehu_hanapakkaus.jpg"
              alt="Tuoremehua hanapakkauksessa ja lasissa omenalaatikoiden keskellä"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-sand/60 py-16">
        <div className="relative isolate mx-auto max-w-6xl px-4 sm:px-6">
          <Image
            src="/images/deco/oksa.png"
            alt=""
            aria-hidden
            width={1000}
            height={666}
            className="absolute -top-12 right-0 -z-10 hidden w-64 md:block"
          />
          <h2 className="font-display text-3xl font-semibold">
            Näin mehustus etenee
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className={`${["sketch", "sketch-2", "sketch-3", "sketch-2"][i % 4]} border-spruce/40 bg-paper p-6 shadow-lift`}
              >
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
        <h2 className="flex items-end gap-4 font-display text-3xl font-semibold">
          Hinnasto
          <Image
            src="/images/deco/omena.png"
            alt=""
            aria-hidden
            width={600}
            height={900}
            className="w-12 rotate-3"
          />
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="sketch overflow-hidden border-spruce/40 bg-paper shadow-lift">
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
            <div className="sketch-2 border-spruce/40 bg-paper p-6 shadow-lift">
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
            <div className="sketch-3 border-spruce-light bg-spruce p-6 text-cream shadow-lift">
              <h3 className="font-display text-lg font-semibold text-paper">
                Hyvä tietää
              </h3>
              <p className="mt-3 rounded-lg bg-paper/10 p-3 text-sm font-semibold leading-relaxed text-paper ring-1 ring-inset ring-paper/20">
                Ota mukaan nimelläsi merkattuja muovilaatikoita tai
                tukevapohjaisia pahvilaatikoita, joihin laitamme valmiit
                hanapakkaukset.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-cream/90">
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

    </>
  );
}
