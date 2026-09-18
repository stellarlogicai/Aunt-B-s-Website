import { gallery } from '../data/content';
import { SparkleIcon } from './icons';

function PlaceholderPane({ label }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1.5 bg-white/70 py-8 text-center">
      <SparkleIcon className="h-5 w-5 text-hotpink/70" />
      <span className="text-xs font-semibold uppercase tracking-wide text-purple/60">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-lavender py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{gallery.eyebrow}</p>
          <h2 className="section-heading mt-2">{gallery.heading}</h2>
          <p className="mt-3 text-ink/70">{gallery.description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {gallery.items.map((item) => (
            <figure
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-purple/5"
            >
              <div className="flex divide-x divide-purple/10">
                <PlaceholderPane label="Before" />
                <PlaceholderPane label="After" />
              </div>
              <figcaption className="border-t border-purple/10 px-5 py-3 text-sm font-semibold text-purple-deep">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/50">
          Replace these cards with real client photos anytime, just swap the
          <code className="mx-1 rounded bg-white px-1.5 py-0.5 text-xs text-purple-deep">
            PlaceholderPane
          </code>
          panels in <code className="rounded bg-white px-1.5 py-0.5 text-xs text-purple-deep">Gallery.jsx</code> for{' '}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs text-purple-deep">&lt;img /&gt;</code> tags.
        </p>
      </div>
    </section>
  );
}
