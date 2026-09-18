import Logo from './Logo';
import { hero, business } from '../data/content';
import { Icon, PhoneIcon } from './icons';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-lavender via-blush-light to-cream"
    >
      {/* Decorative gingham corner accent — the site's signature touch */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-12 rounded-[3rem] bg-gingham opacity-70 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-blush blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24">
        <div className="animate-fade-up">
          <Logo variant="hero" className="drop-shadow-md" />
        </div>

        <p className="section-eyebrow mt-6 animate-fade-up [animation-delay:80ms]">
          {business.tagline}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-purple-deep sm:text-5xl md:text-6xl animate-fade-up [animation-delay:140ms]">
          {hero.headline}
        </h1>

        <p className="mt-5 max-w-xl text-base text-ink/75 sm:text-lg animate-fade-up [animation-delay:200ms]">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row animate-fade-up [animation-delay:260ms]">
          <a href={hero.primaryCta.href} className="btn-primary">
            <Icon name="sparkle" className="h-4 w-4" />
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn-secondary">
            <PhoneIcon className="h-4 w-4" />
            {hero.secondaryCta.label}
          </a>
        </div>

        <ul className="mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5 animate-fade-up [animation-delay:320ms]">
          {hero.trustChips.map((chip) => (
            <li key={chip.label} className="chip">
              <Icon name={chip.icon} className="h-4 w-4 text-hotpink" />
              {chip.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
