import { business } from '../data/content';
import { SparkleIcon, PhoneIcon } from './icons';

export default function StickyQuoteBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-purple/10 bg-white/95 p-3 backdrop-blur md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href={business.phoneHref}
        aria-label="Call or text Aunt B's Cleaning Services"
        className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-blush-light text-purple-deep"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a href="/book" className="btn-primary flex-1">
        <SparkleIcon className="h-4 w-4" />
        Request a Cleaning
      </a>
    </div>
  );
}
