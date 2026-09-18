import Logo from './Logo';
import { business, nav } from '../data/content';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-lavender pt-10">
      {/* Gingham strip — a quiet echo of the hero's signature texture */}
      <div className="h-3 w-full bg-gingham" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="footer" withWordmark />
            <p className="mt-4 max-w-xs text-sm text-ink/65">
              Friendly, detail-focused residential cleaning for busy homes
              and families.
            </p>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-purple shadow-sm transition-colors hover:bg-hotpink-dark hover:text-white"
              aria-label={`${business.name} on Facebook`}
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-purple-deep">
              Quick links
            </p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink/70 hover:text-hotpink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-purple-deep">
              Get in touch
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-ink/70">
              <li>
                <a href={business.phoneHref} className="flex items-center gap-2 hover:text-hotpink">
                  <PhoneIcon className="h-4 w-4 text-hotpink" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-hotpink">
                  <MailIcon className="h-4 w-4 text-hotpink" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-hotpink" />
                {business.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-purple/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink/55">
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="font-script text-lg text-hotpink">{business.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
