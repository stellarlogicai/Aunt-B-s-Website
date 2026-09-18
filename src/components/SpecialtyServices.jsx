import { specialtyServices } from '../data/content';
import { Icon, CheckIcon, ClockIcon } from './icons';

function PriceTag({ price }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-blush px-3 py-1 text-sm font-bold text-hotpink-dark ring-1 ring-hotpink/20">
      {price}
    </span>
  );
}

function SpecialtyCard({ card }) {
  return (
    <article className="flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-purple/5 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-lavender text-purple">
          <Icon name={card.icon} className="h-6 w-6" />
        </div>
        <PriceTag price={card.price} />
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-purple-deep">
        {card.title}
      </h3>
      <p className="mt-1.5 text-sm text-ink/70">{card.tagline}</p>

      <div className="mt-4 border-t border-purple/8 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-purple/60">
          {card.listLabel}
        </p>
        <ul className="mt-2 space-y-2">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-ink/80">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-hotpink" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`/book?service=${card.id}`}
        className="btn-primary mt-6 w-full"
        aria-label={`Request ${card.title}`}
      >
        Request This Visit
      </a>
    </article>
  );
}

export default function SpecialtyServices() {
  const { eyebrow, heading, description, cards, pricingNote, disclaimer } =
    specialtyServices;

  return (
    <section
      id="specialty"
      className="border-t border-purple/8 bg-lavender py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-sm text-ink/70">{description}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <SpecialtyCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-white/70 px-5 py-4 ring-1 ring-purple/8 sm:flex-row sm:items-start sm:gap-4 sm:px-6 sm:py-5">
          <ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple/60 sm:mt-0" />
          <div className="space-y-1 text-sm text-ink/65">
            <p>
              <strong className="font-semibold text-purple-deep">Pricing note: </strong>
              {pricingNote}
            </p>
            <p>
              <strong className="font-semibold text-purple-deep">Please note: </strong>
              {disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
