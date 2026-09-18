import { useEffect, useState } from 'react';
import Logo from './Logo';
import { nav } from '../data/content';
import { MenuIcon, CloseIcon } from './icons';

export default function Header({ currentPath = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function isActive(href) {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="Aunt B's Cleaning Services home">
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

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`font-body text-sm font-medium transition-colors hover:text-hotpink ${
                isActive(item.href) ? 'text-hotpink-dark' : 'text-ink/80'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="/book" className="btn-primary">
            Request a Cleaning
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-purple-deep hover:bg-blush-light lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-purple/10 bg-cream transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl px-3 py-2.5 font-body text-base font-medium hover:bg-blush-light hover:text-hotpink ${
                isActive(item.href) ? 'bg-blush-light text-hotpink-dark' : 'text-ink/85'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Request a Cleaning
          </a>
        </nav>
      </div>
    </header>
  );
}
