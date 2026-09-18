import { useMemo, useState } from 'react';
import { booking, business, quoteForm, services, specialtyServices } from '../data/content';
import { submitBookingRequest } from '../lib/submitBookingRequest';
import { CheckIcon, PhoneIcon, SparkleIcon } from './icons';

const serviceOptions = [
  ...services.map((service) => ({ id: service.id, label: service.title })),
  ...specialtyServices.cards.map((card) => ({ id: card.id, label: card.title })),
  { id: 'not-sure', label: 'Not sure yet' },
];

function initialServiceId() {
  if (typeof window === 'undefined') return '';
  const requested = new URLSearchParams(window.location.search).get('service') || '';
  return serviceOptions.some((option) => option.id === requested) ? requested : '';
}

const initialValues = {
  serviceId: initialServiceId(),
  frequency: '',
  homeSize: '',
  bedrooms: '',
  bathrooms: '',
  pets: '',
  street: '',
  city: '',
  zip: '',
  preferredDate: '',
  timeWindow: '',
  access: '',
  name: '',
  phone: '',
  email: '',
  notes: '',
  botField: '',
};

const inputClasses =
  'w-full rounded-xl border border-purple/15 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-hotpink focus:outline-none focus:ring-2 focus:ring-hotpink/30';

function Field({ label, htmlFor, required, error, hint, children }) {
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

export default function BookingRequestForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const selectedService = useMemo(
    () => serviceOptions.find((option) => option.id === values.serviceId),
    [values.serviceId]
  );

  const today = useMemo(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
  }, []);

  function change(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined, contact: undefined }));
  }

  function validateStep(index) {
    const next = {};

    if (index === 0) {
      if (!values.serviceId) next.serviceId = 'Choose a service or select “Not sure yet.”';
      if (!values.frequency) next.frequency = 'Choose a frequency.';
    }

    if (index === 1) {
      if (!values.city.trim()) next.city = 'City is required.';
      if (!values.zip.trim()) next.zip = 'ZIP code is required.';
    }

    if (index === 2) {
      if (!values.preferredDate) next.preferredDate = 'Choose a preferred date.';
      if (!values.timeWindow) next.timeWindow = 'Choose a preferred time window.';
      if (!values.access) next.access = 'Choose the closest access option.';
    }

    if (index === 3) {
      if (!values.name.trim()) next.name = 'Name is required.';
      const hasPhone = values.phone.trim().length > 0;
      const hasEmail = values.email.trim().length > 0;
      if (!hasPhone && !hasEmail) next.contact = 'Provide a phone number or email address.';
      if (hasPhone && values.phone.replace(/\D/g, '').length < 7) {
        next.phone = 'Enter a valid phone number.';
      }
      if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        next.email = 'Enter a valid email address.';
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (validateStep(step)) {
      setStep((current) => Math.min(current + 1, 3));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function previousStep() {
    setErrors({});
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function submit(event) {
    event.preventDefault();

    if (values.botField) {
      setStatus('success');
      return;
    }

    if (!validateStep(3)) return;

    setStatus('submitting');
    try {
      await submitBookingRequest({
        serviceId: values.serviceId,
        serviceType: selectedService?.label || values.serviceId,
        frequency: values.frequency,
        homeSize: values.homeSize,
        bedrooms: values.bedrooms,
        bathrooms: values.bathrooms,
        pets: values.pets,
        street: values.street,
        city: values.city,
        zip: values.zip,
        preferredDate: values.preferredDate,
        timeWindow: values.timeWindow,
        access: values.access,
        name: values.name,
        phone: values.phone,
        email: values.email,
        notes: values.notes,
        submittedAt: new Date().toISOString(),
      });
      setStatus('success');
      setValues(initialValues);
    } catch (error) {
      console.error('Booking request failed:', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-4xl bg-white p-8 text-center shadow-soft ring-1 ring-purple/5 sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blush text-hotpink-dark">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h2 className="mt-5 font-display text-3xl font-semibold text-purple-deep">
          Request received
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          Thanks! Aunt B’s will review the request and contact you to confirm the date,
          cleaning scope, and final price. The appointment is not confirmed until that follow-up happens.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={business.phoneHref} className="btn-secondary">
            <PhoneIcon className="h-4 w-4" />
            Call or Text
          </a>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const stepLabels = ['Service', 'Home', 'Schedule', 'Contact'];

  return (
    <form onSubmit={submit} className="rounded-4xl bg-white p-6 shadow-soft ring-1 ring-purple/5 sm:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2" aria-label="Booking request progress">
          {stepLabels.map((label, index) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <span
                className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-xs font-bold ${
                  index <= step ? 'bg-hotpink-dark text-white' : 'bg-lavender text-purple/60'
                }`}
              >
                {index + 1}
              </span>
              <span className={`hidden text-xs font-semibold sm:inline ${
                index <= step ? 'text-purple-deep' : 'text-ink/40'
              }`}>
                {label}
              </span>
              {index < stepLabels.length - 1 && (
                <span className={`h-px flex-1 ${
                  index < step ? 'bg-hotpink/40' : 'bg-purple/10'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">Step 1</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">
              What can we help with?
            </h2>
          </div>

          <Field label="Service" htmlFor="serviceId" required error={errors.serviceId}>
            <select
              id="serviceId"
              name="serviceId"
              value={values.serviceId}
              onChange={change}
              className={inputClasses}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
          </Field>

          <Field label="Frequency" htmlFor="frequency" required error={errors.frequency}>
            <select
              id="frequency"
              name="frequency"
              value={values.frequency}
              onChange={change}
              className={inputClasses}
            >
              <option value="">Select frequency</option>
              {booking.frequencyOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">Step 2</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">
              Tell us about the home
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              Rough estimates are okay. We use these details to understand the likely scope.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Home size" htmlFor="homeSize">
              <select id="homeSize" name="homeSize" value={values.homeSize} onChange={change} className={inputClasses}>
                <option value="">Select a size</option>
                {quoteForm.homeSizeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
            <Field label="Pets" htmlFor="pets">
              <select id="pets" name="pets" value={values.pets} onChange={change} className={inputClasses}>
                <option value="">Select</option>
                {quoteForm.petsOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
            <Field label="Bedrooms" htmlFor="bedrooms">
              <select id="bedrooms" name="bedrooms" value={values.bedrooms} onChange={change} className={inputClasses}>
                <option value="">Select</option>
                {quoteForm.bedroomsOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
            <Field label="Bathrooms" htmlFor="bathrooms">
              <select id="bathrooms" name="bathrooms" value={values.bathrooms} onChange={change} className={inputClasses}>
                <option value="">Select</option>
                {quoteForm.bathroomsOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Street address" htmlFor="street" hint="Optional at this stage if you would rather share it during follow-up.">
            <input
              id="street"
              name="street"
              value={values.street}
              onChange={change}
              autoComplete="street-address"
              className={inputClasses}
              placeholder="123 Main St"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-[1fr_0.55fr]">
            <Field label="City" htmlFor="city" required error={errors.city}>
              <input
                id="city"
                name="city"
                value={values.city}
                onChange={change}
                autoComplete="address-level2"
                className={inputClasses}
                placeholder="Bolivar"
              />
            </Field>
            <Field label="ZIP code" htmlFor="zip" required error={errors.zip}>
              <input
                id="zip"
                name="zip"
                value={values.zip}
                onChange={change}
                autoComplete="postal-code"
                inputMode="numeric"
                className={inputClasses}
                placeholder="65613"
              />
            </Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">Step 3</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">
              When would you prefer service?
            </h2>
            <p className="mt-2 text-sm text-ink/60">{booking.confirmationNotice}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred date" htmlFor="preferredDate" required error={errors.preferredDate}>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                min={today}
                value={values.preferredDate}
                onChange={change}
                className={inputClasses}
              />
            </Field>
            <Field label="Preferred time" htmlFor="timeWindow" required error={errors.timeWindow}>
              <select
                id="timeWindow"
                name="timeWindow"
                value={values.timeWindow}
                onChange={change}
                className={inputClasses}
              >
                <option value="">Select a window</option>
                {booking.timeWindows.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Home access" htmlFor="access" required error={errors.access}>
            <select id="access" name="access" value={values.access} onChange={change} className={inputClasses}>
              <option value="">Select the closest option</option>
              {booking.accessOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field label="Notes or special requests" htmlFor="notes" hint="Please do not include payment-card information.">
            <textarea
              id="notes"
              name="notes"
              rows={5}
              value={values.notes}
              onChange={change}
              className={`${inputClasses} resize-y`}
              placeholder="Priority rooms, access notes, allergies, special surfaces, or anything else we should know."
            />
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow">Step 4</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-purple-deep">
              How should we reach you?
            </h2>
          </div>

          <Field label="Name" htmlFor="name" required error={errors.name}>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={change}
              autoComplete="name"
              className={inputClasses}
              placeholder="Your name"
            />
          </Field>

          {errors.contact && <p className="text-sm font-medium text-hotpink-dark">{errors.contact}</p>}

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" htmlFor="phone" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={change}
                autoComplete="tel"
                className={inputClasses}
                placeholder="(417) 555-0123"
              />
            </Field>
            <Field label="Email" htmlFor="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={change}
                autoComplete="email"
                className={inputClasses}
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <div className="rounded-2xl bg-lavender/60 p-5 ring-1 ring-purple/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple/60">Request summary</p>
            <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-ink/50">Service</dt>
                <dd className="font-semibold text-purple-deep">{selectedService?.label || 'Not selected'}</dd>
              </div>
              <div>
                <dt className="text-ink/50">Frequency</dt>
                <dd className="font-semibold text-purple-deep">{values.frequency || 'Not selected'}</dd>
              </div>
              <div>
                <dt className="text-ink/50">Preferred date</dt>
                <dd className="font-semibold text-purple-deep">{values.preferredDate || 'Not selected'}</dd>
              </div>
              <div>
                <dt className="text-ink/50">Time window</dt>
                <dd className="font-semibold text-purple-deep">{values.timeWindow || 'Not selected'}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-blush-light px-5 py-4 text-sm text-ink/70">
            <strong className="text-purple-deep">Before you send:</strong>{' '}
            {booking.confirmationNotice}
          </div>

          {status === 'error' && (
            <div className="rounded-xl bg-hotpink/10 px-4 py-3 text-sm font-medium text-hotpink-dark">
              We could not send the request. Please try again or call/text{' '}
              <a href={business.phoneHref} className="underline">{business.phone}</a>.
            </div>
          )}

          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="booking-bot-field">Leave this field blank</label>
            <input
              id="booking-bot-field"
              name="botField"
              value={values.botField}
              onChange={change}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-purple/10 pt-6 sm:flex-row sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={previousStep} className="btn-secondary">
            Back
          </button>
        ) : (
          <a href="/pricing" className="btn-secondary">
            View Pricing First
          </a>
        )}

        {step < 3 ? (
          <button type="button" onClick={nextStep} className="btn-primary">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
            <SparkleIcon className="h-4 w-4" />
            {status === 'submitting' ? 'Sending…' : 'Send Booking Request'}
          </button>
        )}
      </div>
    </form>
  );
}
