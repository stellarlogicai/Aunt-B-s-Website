import { about } from '../data/content';
import { HeartIcon } from './icons';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="section-heading mt-2">{about.heading}</h2>

          <div className="mt-5 space-y-4 text-ink/75">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === about.paragraphs.length - 1
                    ? 'font-display text-lg font-medium text-purple-deep'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative rounded-4xl bg-lavender p-5 shadow-soft">
            {/* Owner photo placeholder — swap the inner div for a real <img> when a photo is available */}
            <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white text-center ring-1 ring-purple/10">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-blush text-hotpink-dark">
                <HeartIcon className="h-8 w-8" />
              </span>
              <p className="px-6 text-sm font-medium text-ink/55">
                Owner photo coming soon
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-center ring-1 ring-purple/10">
              <p className="font-script text-2xl text-hotpink">
                &ldquo;{about.ownerNote.quote}&rdquo;
              </p>
              <p className="mt-1 text-sm font-semibold text-purple-deep">
                {about.ownerNote.name}
              </p>
              <p className="text-xs text-ink/55">{about.ownerNote.role}</p>
            </div>
          </div>

          <span className="absolute right-6 top-3 -rotate-6 rounded-full bg-hotpink-dark px-3 py-1 text-xs font-semibold text-white shadow-soft sm:right-10">
            Meet Aunt B
          </span>
        </div>
      </div>
    </section>
  );
}
