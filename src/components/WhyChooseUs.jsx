import { whyChooseUs, business } from '../data/content';
import { Icon } from './icons';

export default function WhyChooseUs() {
  return (
    <section className="bg-lavender py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative rounded-4xl bg-white p-8 text-center shadow-soft ring-1 ring-purple/5">
            <span className="section-eyebrow">{business.tagline}</span>
            <p className="mt-3 font-display text-2xl font-semibold text-purple-deep">
              Cared for like family,
              <br />
              cleaned like it matters.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Icon name="sparkle" className="h-6 w-6 text-hotpink" />
              <Icon name="heart" className="h-6 w-6 text-hotpink" />
              <Icon name="paw" className="h-6 w-6 text-hotpink" />
            </div>
          </div>
          <div
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-4xl bg-blush"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="section-eyebrow">Why families choose us</p>
          <h2 className="section-heading mt-2">Why Choose Aunt B&rsquo;s</h2>

          <ul className="mt-8 space-y-5">
            {whyChooseUs.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-white text-hotpink shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-purple-deep">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink/70">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
