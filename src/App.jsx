import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialtyServices from './components/SpecialtyServices';
import About from './components/About';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyQuoteBar from './components/StickyQuoteBar';

export default function App() {
  return (
    <div className="min-h-screen bg-cream pb-24 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <SpecialtyServices />
        <About />
        <Gallery />
        <ServiceArea />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <StickyQuoteBar />
    </div>
  );
}
