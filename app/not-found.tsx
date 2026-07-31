import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-display text-6xl font-semibold text-barn/40">404</p>
      <h1 className="font-display mt-4 text-3xl font-semibold">
        Sivua ei löytynyt
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
        Etsimääsi sivua ei ole olemassa tai se on siirretty.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-barn px-6 py-3 font-medium text-paper transition-colors hover:bg-barn-dark"
      >
        Takaisin etusivulle
      </Link>
    </section>
  );
}
