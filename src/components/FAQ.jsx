import { useState } from 'react';
import { faq } from '../data/content';
import { ChevronDownIcon } from './icons';

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="rounded-2xl bg-white shadow-card ring-1 ring-purple/5">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
        >
          <span className="font-display text-base font-semibold text-purple-deep sm:text-lg">
            {item.question}
          </span>
          <ChevronDownIcon
            className={`h-5 w-5 flex-shrink-0 text-hotpink transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-5 text-sm text-ink/70 sm:px-6">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="section-eyebrow">{faq.eyebrow}</p>
          <h2 className="section-heading mt-2">{faq.heading}</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faq.items.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
