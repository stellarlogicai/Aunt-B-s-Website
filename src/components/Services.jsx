import { services } from '../data/content';
import { Icon, CheckIcon } from './icons';

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">What we offer</p>
          <h2 className="section-heading mt-2">Our Cleaning Services</h2>
          <p className="mt-3 text-ink/70">
            Pick a one-time service or settle into a recurring plan, every
            visit gets the same detail-focused care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-3xl bg-lavender/60 p-6 shadow-card ring-1 ring-purple/5 transition-transform duration-200 hover:-translate-y-1 hover:bg-blush-light sm:p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-hotpink shadow-sm">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-purple-deep">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-ink/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-hotpink" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-purple transition-colors group-hover:text-hotpink"
              >
                Get a quote for this
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}

          {/* Closing card pointing to the quote form, keeps the grid feeling intentional on larger screens */}
          <div className="flex flex-col items-start justify-center rounded-3xl bg-hotpink-dark p-7 text-white shadow-card sm:p-8">
            <Icon name="sparkle" className="h-7 w-7" />
            <h3 className="mt-4 font-display text-xl font-semibold">
              Not sure what you need?
            </h3>
            <p className="mt-2 text-sm text-white/85">
              Tell us about your home and we&rsquo;ll recommend the right
              service, no guesswork required.
            </p>
            <a
              href="#quote"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-hotpink-dark transition-transform hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
