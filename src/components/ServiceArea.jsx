import { serviceAreaContent, business } from '../data/content';
import { MapPinIcon } from './icons';

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blush text-hotpink-dark">
          <MapPinIcon className="h-6 w-6" />
        </span>
        <p className="section-eyebrow mt-4">{serviceAreaContent.eyebrow}</p>
        <h2 className="section-heading mt-2">{serviceAreaContent.heading}</h2>
        <p className="mt-3 text-ink/70">{serviceAreaContent.description}</p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-lavender px-5 py-2 text-sm font-semibold text-purple-deep">
          <MapPinIcon className="h-4 w-4 text-hotpink" />
          {business.serviceArea}
        </p>
      </div>
    </section>
  );
}
