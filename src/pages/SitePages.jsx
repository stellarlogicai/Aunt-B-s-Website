import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialtyServices from '../components/SpecialtyServices';
import About from '../components/About';
import Gallery from '../components/Gallery';
import ServiceArea from '../components/ServiceArea';
import QuoteForm from '../components/QuoteForm';
import FAQ from '../components/FAQ';
import HowItWorks from '../components/HowItWorks';
import PageHero from '../components/PageHero';
import BookingRequestForm from '../components/BookingRequestForm';
import { CheckIcon, Icon, MailIcon, MapPinIcon, PhoneIcon } from '../components/icons';
import {
  business,
  pricing,
  serviceInformation,
  services,
  specialtyServices,
} from '../data/content';

function PageCta({ title, copy, primaryHref = '/book', primaryLabel = 'Request a Cleaning' }) {
  return (
    <section className="bg-purple-deep py-12 text-white sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/75 sm:text-base">{copy}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
          <a href={primaryHref} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-deep transition-transform hover:-translate-y-0.5">
            {primaryLabel}
          </a>
          <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Call or Text
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <SpecialtyServices />
      <About />
      <Gallery />
      <ServiceArea />
      <PageCta
        title="Know what you need?"
        copy="Request a preferred date now, or start with a free quote if you want help choosing the right service."
      />
      <QuoteForm />
      <FAQ />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cleaning options"
        title="Find the right service for your home"
        description="Compare one-time, recurring, move-related, turnover, and specialty services before requesting a date."
        actions={
          <>
            <a href="/pricing" className="btn-secondary">See Pricing</a>
            <a href="/book" className="btn-primary">Request a Cleaning</a>
          </>
        }
      />
      <Services />
      <SpecialtyServices />
      <HowItWorks />
      <PageCta
        title="Not sure which service fits?"
        copy="Send a quote request with a few home details and Aunt B’s can help narrow it down."
        primaryHref="/contact"
        primaryLabel="Ask for a Quote"
      />
    </>
  );
}

export function ServiceDetailPage({ serviceId }) {
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <>
        <PageHero
          eyebrow="Service not found"
          title="That service page does not exist"
          description="Browse the current cleaning services or request help choosing the right option."
          actions={
            <>
              <a href="/services" className="btn-secondary">View Services</a>
              <a href="/book" className="btn-primary">Request a Cleaning</a>
            </>
          }
        />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Cleaning service"
        title={service.title}
        description={service.description}
        actions={
          <>
            <a href="/pricing" className="btn-secondary">Pricing Details</a>
            <a href={`/book?service=${service.id}`} className="btn-primary">Request This Service</a>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-eyebrow">What’s included</p>
            <h2 className="section-heading mt-2">A clear starting scope</h2>
            <p className="mt-3 text-ink/70">
              Final scope is confirmed with you before service. These items describe the normal starting point for this service.
            </p>
            <ul className="mt-6 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 rounded-2xl bg-lavender/50 px-4 py-3 text-sm text-ink/80">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-hotpink" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-4xl bg-cream p-6 shadow-card ring-1 ring-purple/5 sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-hotpink shadow-sm">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold text-purple-deep">Good fit for</h2>
            <p className="mt-2 text-ink/70">{service.bestFor}</p>
            <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-purple/8">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple/60">Pricing</p>
              <p className="mt-1 font-display text-xl font-semibold text-purple-deep">{service.pricingLabel}</p>
              <p className="mt-2 text-sm text-ink/60">
                Final pricing depends on the actual home and agreed scope. No surprise work is added just because it was mentioned on the website.
              </p>
            </div>
            <a href={`/book?service=${service.id}`} className="btn-primary mt-6 w-full">
              Request This Service
            </a>
          </aside>
        </div>
      </section>

      <ServiceArea />
      <PageCta
        title="Want to check a date?"
        copy="Send a preferred date and home details. Aunt B’s will confirm availability, scope, and the final quote before the appointment is final."
      />
    </>
  );
}

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={pricing.eyebrow}
        title={pricing.heading}
        description={pricing.intro}
        actions={
          <>
            <a href="/services" className="btn-secondary">Compare Services</a>
            <a href="/book" className="btn-primary">Request a Cleaning</a>
          </>
        }
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.id} className="rounded-3xl bg-lavender/50 p-6 shadow-card ring-1 ring-purple/5">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-hotpink">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-purple-deep ring-1 ring-purple/10">
                    {service.pricingLabel}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-purple-deep">{service.title}</h2>
                <p className="mt-2 text-sm text-ink/70">{service.description}</p>
                <a href={`/services/${service.id}`} className="mt-5 inline-flex text-sm font-semibold text-purple hover:text-hotpink">
                  See service details →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-4xl bg-cream p-7 ring-1 ring-purple/5">
              <p className="section-eyebrow">What affects a quote</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">The work behind the number</h2>
              <ul className="mt-5 space-y-3">
                {pricing.factors.map((factor) => (
                  <li key={factor} className="flex items-start gap-3 text-sm text-ink/75">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-hotpink" />
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-ink/60">{pricing.fullServiceNote}</p>
            </article>

            <article className="rounded-4xl bg-lavender p-7 ring-1 ring-purple/5">
              <p className="section-eyebrow">Specialty visits</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">Small visits with starting prices</h2>
              <div className="mt-5 space-y-4">
                {specialtyServices.cards.map((card) => (
                  <div key={card.id} className="rounded-2xl bg-white p-4 ring-1 ring-purple/8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold text-purple-deep">{card.title}</h3>
                      <span className="rounded-full bg-blush px-3 py-1 text-sm font-bold text-hotpink-dark">{card.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink/65">{card.tagline}</p>
                    <a href={`/book?service=${card.id}`} className="mt-3 inline-flex text-sm font-semibold text-purple hover:text-hotpink">
                      Request this visit →
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-ink/60">{pricing.specialtyNote}</p>
              <p className="mt-2 text-sm text-ink/60">{specialtyServices.pricingNote}</p>
            </article>
          </div>
        </div>
      </section>

      <PageCta
        title="Ready for a real quote?"
        copy="Share the home, service, and preferred date. Aunt B’s can confirm what the job actually needs before final pricing."
      />
    </>
  );
}

export function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Request service"
        title="Request a Cleaning"
        description="Choose the service, tell us about the home, request a preferred date, and send your contact details. Aunt B’s confirms the appointment afterward."
        actions={<a href="/pricing" className="btn-secondary">See Pricing First</a>}
      />
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <BookingRequestForm />
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Local & owner-operated"
        title="A cleaning business built around care"
        description="Meet the small local business behind the service and see what Aunt B’s tries to make easier for busy households."
        actions={<a href="/book" className="btn-primary">Request a Cleaning</a>}
      />
      <About />
      <WhyChooseUs />
      <ServiceArea />
    </>
  );
}

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Before & after gallery"
        description="This page is ready for real client work photos as they are approved for website use."
        actions={<a href="/book" className="btn-primary">Request a Cleaning</a>}
      />
      <Gallery />
      <PageCta
        title="Want your home to be next?"
        copy="Start with a service request or ask for a quote if you are not sure which cleaning fits."
      />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions before you book"
        title="Frequently Asked Questions"
        description="Quick answers about supplies, pets, recurring cleaning, quotes, and what a website booking request actually means."
      />
      <FAQ />
      <PageCta
        title="Still have a question?"
        copy="Call, text, or send a quote request and Aunt B’s can answer it before you schedule."
        primaryHref="/contact"
        primaryLabel="Contact Aunt B’s"
      />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask a question or request a quote"
        description="Use the quote form for cleaning details, or reach out directly by phone, text, email, or Facebook."
      />

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-5xl gap-5 px-5 sm:px-8 md:grid-cols-3">
          <a href={business.phoneHref} className="rounded-3xl bg-lavender/60 p-6 text-center ring-1 ring-purple/5 hover:bg-blush-light">
            <PhoneIcon className="mx-auto h-6 w-6 text-hotpink" />
            <p className="mt-3 font-display text-lg font-semibold text-purple-deep">Call or Text</p>
            <p className="mt-1 text-sm text-ink/65">{business.phone}</p>
          </a>
          <a href={`mailto:${business.email}`} className="rounded-3xl bg-lavender/60 p-6 text-center ring-1 ring-purple/5 hover:bg-blush-light">
            <MailIcon className="mx-auto h-6 w-6 text-hotpink" />
            <p className="mt-3 font-display text-lg font-semibold text-purple-deep">Email</p>
            <p className="mt-1 break-all text-sm text-ink/65">{business.email}</p>
          </a>
          <div className="rounded-3xl bg-lavender/60 p-6 text-center ring-1 ring-purple/5">
            <MapPinIcon className="mx-auto h-6 w-6 text-hotpink" />
            <p className="mt-3 font-display text-lg font-semibold text-purple-deep">Service Area</p>
            <p className="mt-1 text-sm text-ink/65">{business.serviceArea}</p>
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}

export function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow={serviceInformation.eyebrow}
        title={serviceInformation.heading}
        description={serviceInformation.intro}
        actions={<a href="/contact" className="btn-secondary">Ask a Question</a>}
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-4">
            {serviceInformation.items.map((item) => (
              <article key={item.title} className="rounded-3xl bg-cream p-6 ring-1 ring-purple/5">
                <h2 className="font-display text-xl font-semibold text-purple-deep">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta
        title="Ready to request service?"
        copy="You can send the preferred date now, then confirm the exact scope and price directly with Aunt B’s."
      />
    </>
  );
}

export function NotFoundPage() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="We couldn’t find that page"
      description="Head back home, browse services, or request a cleaning."
      actions={
        <>
          <a href="/" className="btn-secondary">Home</a>
          <a href="/services" className="btn-secondary">Services</a>
          <a href="/book" className="btn-primary">Request a Cleaning</a>
        </>
      }
    />
  );
}
