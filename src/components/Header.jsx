import { useEffect, useState } from 'react';
import Logo from './Logo';
import { nav } from '../data/content';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo variant="header" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-purple-deep">
              Aunt B&rsquo;s
            </span>
            <span className="text-xs font-medium text-ink/60">
              Cleaning Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[15px] font-medium text-ink/80 transition-colors hover:text-hotpink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#quote" className="btn-primary">
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-purple-deep hover:bg-blush-light md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-purple/10 bg-cream transition-[max-height,opacity] duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4"
          aria-label="Mobile primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 font-body text-base font-medium text-ink/85 hover:bg-blush-light hover:text-hotpink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
