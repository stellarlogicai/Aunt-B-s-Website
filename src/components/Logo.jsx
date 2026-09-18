import { useState } from 'react';
import { business } from '../data/content';

// Fixed, literal Tailwind classes per variant — written out in full so
// Tailwind's build-time scanner can find and generate them (dynamically
// interpolated class names like `w-[${size}px]` would not survive a
// production build).
const VARIANTS = {
  header: { px: 48, classes: 'w-12 h-12' },
  hero: { px: 128, classes: 'w-28 h-28 sm:w-32 sm:h-32' },
  footer: { px: 56, classes: 'w-14 h-14' },
  compact: { px: 36, classes: 'w-9 h-9' },
};

// Renders the Aunt B's badge logo (public/AuntBsLogo.png). If the image is
// ever missing from /public, it falls back to a simple monogram so the
// header/footer never show a broken image.
export default function Logo({ variant = 'header', withWordmark = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const { px, classes } = VARIANTS[variant] || VARIANTS.header;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {!failed ? (
        <img
          src={business.logoSrc}
          alt={`${business.name} logo`}
          width={px}
          height={px}
          onError={() => setFailed(true)}
          className={`${classes} object-contain select-none`}
        />
      ) : (
        <span
          className={`${classes} grid place-items-center rounded-full bg-hotpink-dark font-display font-semibold text-white select-none`}
          aria-hidden="true"
        >
          B
        </span>
      )}
      {withWordmark && (
        <span className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold text-purple-deep sm:text-xl">
            {business.name}
          </span>
          <span className="font-script -mt-0.5 text-base text-hotpink">
            {business.tagline}
          </span>
        </span>
      )}
    </span>
  );
}
