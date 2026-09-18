// Lightweight, dependency-free icon set. Each icon is a simple stroke-based
// SVG using currentColor, so it picks up Tailwind text-color utilities.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
};

export function HomeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M3.5 11.5 12 4l8.5 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9" />
      <path d="M9.5 20v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V20" />
    </svg>
  );
}

export function PawIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="4.5" ry="3.8" />
      <ellipse cx="5.5" cy="9.5" rx="1.8" ry="2.2" />
      <ellipse cx="9.3" cy="6.3" rx="1.8" ry="2.3" />
      <ellipse cx="14.7" cy="6.3" rx="1.8" ry="2.3" />
      <ellipse cx="18.5" cy="9.5" rx="1.8" ry="2.2" />
    </svg>
  );
}

export function RepeatIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 7.5h12.5A3.5 3.5 0 0 1 20 11v1" />
      <path d="M7 4.5 4 7.5 7 10.5" />
      <path d="M20 16.5H7.5A3.5 3.5 0 0 1 4 13v-1" />
      <path d="M17 19.5 20 16.5 17 13.5" />
    </svg>
  );
}

export function SparkleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5c.35 3.6 1.2 6 2.6 7.4 1.4 1.4 3.8 2.25 7.4 2.6-3.6.35-6 1.2-7.4 2.6-1.4 1.4-2.25 3.8-2.6 7.4-.35-3.6-1.2-6-2.6-7.4C8 13.7 5.6 12.85 2 12.5c3.6-.35 6-1.2 7.4-2.6C10.8 8.5 11.65 6.1 12 2.5Z" />
      <circle cx="19.2" cy="4.8" r="1.1" />
      <circle cx="4.6" cy="18.6" r="0.85" />
    </svg>
  );
}

export function BoxIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
      <path d="M3.5 8v8L12 20l8.5-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}

export function PlusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </svg>
  );
}

export function HeartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 20s-7.5-4.6-9.7-9.3C.7 7.3 2.4 4 5.8 4c2 0 3.4 1.1 4.2 2.3C10.8 5.1 12.2 4 14.2 4c3.4 0 5.1 3.3 3.5 6.7C15.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function PhoneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C9.8 18.7 5.3 14.2 4.5 7.6 4.4 6 4.5 4.5 5 4.5Z" />
    </svg>
  );
}

export function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7 5.5L18.5 7" />
    </svg>
  );
}

export function MapPinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9.5h2.5V6.6H14c-2.2 0-3.5 1.3-3.5 3.4v1.8H8.5v2.8H10.5V21h3v-6.4h2.2l.4-2.8h-2.6v-1.3c0-.7.3-1 1.5-1Z" />
    </svg>
  );
}

export function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="m5.5 8.5 6.5 7 6.5-7" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

export const iconMap = {
  home: HomeIcon,
  paw: PawIcon,
  repeat: RepeatIcon,
  sparkle: SparkleIcon,
  box: BoxIcon,
  plus: PlusIcon,
  heart: HeartIcon,
  plant: PlantIcon,
  droplet: DropletIcon,
  clock: ClockIcon,
};

export function Icon({ name, className }) {
  const Cmp = iconMap[name] || SparkleIcon;
  return <Cmp className={className} />;
}

export function PlantIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      {/* stem */}
      <path d="M12 21V10" />
      {/* left leaf */}
      <path d="M12 16c-2-1.5-5-1-6.5 1.5C7 19 10 19.5 12 18" />
      {/* right leaf */}
      <path d="M12 13c2-2 5-2 6.5.5C17 16 14 16.5 12 15" />
      {/* pot */}
      <path d="M8.5 21h7l-.8-3.5H9.3L8.5 21Z" />
      {/* pot rim */}
      <path d="M8 17.5h8" />
    </svg>
  );
}

export function DropletIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 3S6.5 9 6.5 13.5a5.5 5.5 0 0 0 11 0C17.5 9 12 3 12 3Z" />
    </svg>
  );
}

export function ClockIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
