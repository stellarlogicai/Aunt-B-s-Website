import { howItWorks } from '../data/content';

export default function HowItWorks() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="section-heading mt-2">{howItWorks.heading}</h2>
          <p className="mt-3 text-ink/70">{howItWorks.description}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-purple/5"
            >
              <span className="font-display text-3xl font-semibold text-hotpink/40">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-purple-deep">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/services" className="btn-secondary">
            Explore Services
          </a>
          <a href="/pricing" className="btn-secondary">
            See Pricing
          </a>
          <a href="/book" className="btn-primary">
            Request a Cleaning
          </a>
        </div>
      </div>
    </section>
  );
}
