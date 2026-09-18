import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyQuoteBar from './components/StickyQuoteBar';
import {
  AboutPage,
  BookingPage,
  ContactPage,
  FaqPage,
  GalleryPage,
  HomePage,
  NotFoundPage,
  PoliciesPage,
  PricingPage,
  ServiceDetailPage,
  ServicesPage,
} from './pages/SitePages';

const routeMeta = {
  '/': {
    title: "Aunt B's Cleaning Services | Making Homes Shine",
    description:
      'Friendly, detail-focused residential cleaning in Bolivar, Missouri and surrounding areas. Browse services, understand pricing, request a cleaning, or ask for a quote.',
  },
  '/services': {
    title: "Cleaning Services | Aunt B's Cleaning Services",
    description:
      'Compare standard, deep, recurring, move-in/move-out, real-estate turnover, and specialty cleaning services.',
  },
  '/pricing': {
    title: "Cleaning Pricing | Aunt B's Cleaning Services",
    description:
      'See how Aunt B’s cleaning quotes are built, what affects pricing, and current starting prices for specialty plant-care visits.',
  },
  '/book': {
    title: "Request a Cleaning | Aunt B's Cleaning Services",
    description:
      'Request a preferred cleaning date and share home details. Aunt B’s confirms availability, scope, and final pricing before the appointment is final.',
  },
  '/about': {
    title: "About Aunt B's Cleaning Services",
    description:
      'Learn about Aunt B’s local, owner-operated cleaning service and the care behind each visit.',
  },
  '/gallery': {
    title: "Cleaning Gallery | Aunt B's Cleaning Services",
    description:
      'Browse the before-and-after gallery area for Aunt B’s Cleaning Services.',
  },
  '/faq': {
    title: "Cleaning FAQ | Aunt B's Cleaning Services",
    description:
      'Answers about cleaning supplies, pets, recurring service, deep cleans, quotes, and booking requests.',
  },
  '/contact': {
    title: "Contact Aunt B's Cleaning Services",
    description:
      'Call, text, email, or send a free cleaning quote request to Aunt B’s Cleaning Services.',
  },
  '/policies': {
    title: "Scheduling & Service Information | Aunt B's Cleaning Services",
    description:
      'Review booking confirmation, pricing, scheduling, access, service-area, and contact-information basics before service.',
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function resolvePage(path) {
  if (path === '/') return <HomePage />;
  if (path === '/services') return <ServicesPage />;
  if (path === '/pricing') return <PricingPage />;
  if (path === '/book') return <BookingPage />;
  if (path === '/about') return <AboutPage />;
  if (path === '/gallery') return <GalleryPage />;
  if (path === '/faq') return <FaqPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/policies') return <PoliciesPage />;

  if (path.startsWith('/services/')) {
    const serviceId = path.split('/')[2] || '';
    return <ServiceDetailPage serviceId={serviceId} />;
  }

  return <NotFoundPage />;
}

export default function App() {
  const path = normalizePath(window.location.pathname);

  useEffect(() => {
    const baseMeta = routeMeta[path];
    const serviceId = path.startsWith('/services/') ? path.split('/')[2] : null;
    const meta = baseMeta || (serviceId
      ? {
          title: "Cleaning Service Details | Aunt B's Cleaning Services",
          description:
            'Review service details, pricing approach, and request a preferred cleaning date.',
        }
      : {
          title: "Page Not Found | Aunt B's Cleaning Services",
          description: 'Browse Aunt B’s cleaning services or request a cleaning.',
        });

    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', meta.description);
  }, [path]);

  return (
    <div className="min-h-screen bg-cream pb-24 md:pb-0">
      <Header currentPath={path} />
      <main id="main-content">{resolvePage(path)}</main>
      <Footer />
      <StickyQuoteBar />
    </div>
  );
}
