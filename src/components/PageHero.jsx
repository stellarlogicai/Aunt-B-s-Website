export default function PageHero({ eyebrow, title, description, actions }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-lavender via-blush-light to-cream py-14 sm:py-20">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rotate-12 rounded-[3rem] bg-gingham opacity-60"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-purple-deep sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70 sm:text-lg">
            {description}
          </p>
        )}
        {actions && <div className="mt-7 flex flex-wrap justify-center gap-3">{actions}</div>}
      </div>
    </section>
  );
}
