import { useState } from 'react';
import { quoteForm, business } from '../data/content';
import { submitQuote } from '../lib/submitQuote';
import { CheckIcon, SparkleIcon, PhoneIcon } from './icons';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  city: '',
  homeSize: '',
  bedrooms: '',
  bathrooms: '',
  serviceType: '',
  pets: '',
  preferredDate: '',
  notes: '',
  hearAbout: '',
  // Honeypot — real visitors never see or fill this field. If it comes back
  // non-empty, we quietly treat the submission as spam (see handleSubmit).
  botField: '',
};

const REQUIRED_FIELDS = ['name', 'city', 'serviceType'];

function validate(values) {
  const errors = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!values[field] || !values[field].trim()) {
      errors[field] = 'This field is required.';
    }
  });

  // We need at least one way to reach the customer back — phone or email —
  // but don't require both.
  const hasPhone = values.phone.trim().length > 0;
  const hasEmail = values.email.trim().length > 0;
  if (!hasPhone && !hasEmail) {
    errors.contactMethod = 'Please provide a phone number or an email address.';
  }

  if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (hasPhone && values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
}

function Field({ label, htmlFor, error, required, children, hint }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-purple-deep">
        {label}
        {required && <span className="ml-0.5 text-hotpink">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && !error && <p className="mt-1 text-xs text-ink/50">{hint}</p>}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1 text-xs font-medium text-hotpink-dark">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  'w-full rounded-xl border border-purple/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-hotpink focus:outline-none focus:ring-2 focus:ring-hotpink/30';

export default function QuoteForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: a real visitor never types into this field. If it's
    // filled in, quietly stop here without revealing to the bot that it was
    // caught — just act like the submission worked.
    if (values.botField) {
      setStatus('success');
      setValues(initialValues);
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    try {
      const { botField, hearAbout, ...rest } = values;
      await submitQuote({
        ...rest,
        // Self-reported source ("How did you hear about us?") is kept
        // separate from the technical leadSource metadata added in
        // submitQuote.js — see the note there for why both matter.
        selfReportedSource: hearAbout,
        submittedAt: new Date().toISOString(),
      });
      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Quote submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section id="quote" className="bg-blush-light py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">{quoteForm.eyebrow}</p>
          <h2 className="section-heading mt-2">{quoteForm.heading}</h2>
          <p className="mt-3 text-ink/70">{quoteForm.description}</p>
        </div>

        <div className="mt-10 rounded-4xl bg-white p-6 shadow-soft ring-1 ring-purple/5 sm:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-blush text-hotpink-dark">
                <CheckIcon className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-purple-deep">
                {quoteForm.successMessage}
              </h3>
              <p className="mt-2 max-w-md text-ink/70">
                Need us sooner? Call or text{' '}
                <a href={business.phoneHref} className="font-semibold text-hotpink-dark">
                  {business.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="btn-secondary mt-6"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name" error={errors.name} required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Jane Doe"
                />
              </Field>

              <Field label="City" htmlFor="city" error={errors.city} required>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={values.city}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                  placeholder="Bolivar"
                />
              </Field>

              <div className="sm:col-span-2">
                <p className="text-sm font-semibold text-purple-deep">
                  Phone or email <span className="text-hotpink">*</span>
                  <span className="ml-1 font-normal text-ink/50">(at least one)</span>
                </p>
                {errors.contactMethod && (
                  <p className="mt-1 text-xs font-medium text-hotpink-dark">
                    {errors.contactMethod}
                  </p>
                )}
                <div className="mt-1.5 grid gap-5 sm:grid-cols-2">
                  <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      aria-invalid={Boolean(errors.phone || errors.contactMethod)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      placeholder="(417) 555-0123"
                    />
                  </Field>
                  <Field label="Email address" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      className={inputClasses}
                      aria-invalid={Boolean(errors.email || errors.contactMethod)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="jane@example.com"
                    />
                  </Field>
                </div>
              </div>

              <Field label="Service type" htmlFor="serviceType" error={errors.serviceType} required>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={values.serviceType}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.serviceType)}
                  aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
                >
                  <option value="">Select a service</option>
                  {quoteForm.serviceTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Home size" htmlFor="homeSize" hint="Roughly is fine!">
                <select
                  id="homeSize"
                  name="homeSize"
                  value={values.homeSize}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a size</option>
                  {quoteForm.homeSizeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Bedrooms" htmlFor="bedrooms">
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={values.bedrooms}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select</option>
                  {quoteForm.bedroomsOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Bathrooms" htmlFor="bathrooms">
                <select
                  id="bathrooms"
                  name="bathrooms"
                  value={values.bathrooms}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select</option>
                  {quoteForm.bathroomsOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Pets in the home" htmlFor="pets">
                <select
                  id="pets"
                  name="pets"
                  value={values.pets}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select</option>
                  {quoteForm.petsOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred date" htmlFor="preferredDate" hint="We'll confirm exact timing with you.">
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={values.preferredDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Anything else we should know?" htmlFor="notes" hint="Access instructions, problem areas, special requests, etc.">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={values.notes}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="e.g. Gate code is 1234, please focus on the kitchen and bathrooms."
                  />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field label="How did you hear about us?" htmlFor="hearAbout">
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={values.hearAbout}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select one</option>
                    {quoteForm.hearAboutOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Honeypot field — visually hidden and unreachable by tab,
                  so real visitors never notice or fill it. */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="bot-field">Leave this field blank</label>
                <input
                  id="bot-field"
                  name="botField"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.botField}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <div className="sm:col-span-2 rounded-xl bg-hotpink/10 px-4 py-3 text-sm font-medium text-hotpink-dark">
                  Something went wrong submitting your request. Please try
                  again, or call/text us directly at{' '}
                  <a href={business.phoneHref} className="underline">
                    {business.phone}
                  </a>
                  .
                </div>
              )}

              <div className="sm:col-span-2 flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-ink/50">
                    <span className="text-hotpink">*</span> Required fields
                  </p>
                  <p className="mt-1 text-xs text-ink/50">{quoteForm.privacyNote}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={business.phoneHref} className="btn-secondary">
                    <PhoneIcon className="h-4 w-4" />
                    Call or Text Instead
                  </a>
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-70">
                    <SparkleIcon className="h-4 w-4" />
                    {status === 'submitting' ? 'Sending…' : 'Get a Free Cleaning Quote'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
