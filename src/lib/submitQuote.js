// ---------------------------------------------------------------------------
// Centralized quote-submission logic.
//
// QuoteForm.jsx calls submitQuote(payload) and only cares that it returns a
// Promise that resolves on success and throws/rejects on failure. That means
// you can swap the implementation below for a different backend without
// touching any component code.
//
// Lead-tracking metadata
// -----------------------
// Every submission is tagged with fixed metadata so a future ServicesOS
// import can recognize where the lead came from. Don't remove these keys.
//   leadSource     — always "website" (the technical source: this form)
//   sourceDetail   — always "auntbs_website_quote_form"
//   leadStatus     — always "new"
//   leadCost       — always 0 (this funnel is free/low-cost by design)
// `selfReportedSource` (the customer's own "How did you hear about us?"
// answer, e.g. "Facebook" or "Friend / referral") is passed in separately by
// QuoteForm.jsx and is NOT the same thing as leadSource — leadSource is the
// technical channel (this website form), selfReportedSource is what the
// customer says. Never let one overwrite the other.
// ---------------------------------------------------------------------------

const LEAD_METADATA = {
  leadSource: 'website',
  sourceDetail: 'auntbs_website_quote_form',
  leadStatus: 'new',
  leadCost: 0,
};

// ---------------------------------------------------------------------------
// ACTIVE PATH — Netlify Forms.
//
// This is the lowest-cost safe option available: free, no backend code,
// no new dependency. It only actually delivers a lead if this site is
// deployed on Netlify — see README.md ("Deploying & verifying the quote
// form") for the exact one-time setup and how to confirm it's working.
//
// A hidden static replica of this form already lives in index.html with
// matching field `name` attributes (required so Netlify's build bot can
// detect and register the form — it can't see forms React renders later).
//
// If this site ends up hosted somewhere other than Netlify, this fetch
// call will fail (almost every static host rejects a POST to "/"), which
// correctly triggers the failure state in QuoteForm.jsx rather than a false
// "success" — so leads are never silently lost even on the wrong host.
// To switch hosts, replace the body of this function with OPTION B below.
// ---------------------------------------------------------------------------
export async function submitQuote(payload) {
  const fullPayload = { ...LEAD_METADATA, ...payload };

  const body = new URLSearchParams({
    'form-name': 'quote-request',
    ...Object.fromEntries(
      Object.entries(fullPayload).map(([key, value]) => [key, String(value ?? '')])
    ),
  }).toString();

  let response;
  try {
    response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
  } catch (networkErr) {
    throw new Error('Network error submitting quote request');
  }

  if (!response.ok) {
    throw new Error(`Netlify form submission failed (status ${response.status})`);
  }

  return { ok: true };
}

// ---------------------------------------------------------------------------
// OPTION B — your own API endpoint. Use this instead of the Netlify path
// above if hosting elsewhere (e.g. Vercel with a serverless function, or
// any backend you control). To activate: replace the body of submitQuote()
// above with the block below.
// ---------------------------------------------------------------------------
// export async function submitQuote(payload) {
//   const fullPayload = { ...LEAD_METADATA, ...payload };
//   const response = await fetch('/api/quote-requests', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(fullPayload),
//   });
//   if (!response.ok) throw new Error('Failed to submit quote request');
//   return response.json();
// }

// ---------------------------------------------------------------------------
// FUTURE — direct ServicesOS handoff. Do NOT wire this up until a safe,
// explicitly-approved ServicesOS endpoint for website leads exists.
// When it does, a lead should be created with:
//   leadSource = "website"
//   sourceDetail = "auntbs_website_quote_form"
//   leadStatus = "new"
//   leadCost = 0
//   selfReportedSource = value from "How did you hear about us?"
// ---------------------------------------------------------------------------
// const response = await fetch('https://api.servicesos.com/v1/leads', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${import.meta.env.VITE_SERVICESOS_API_KEY}`,
//   },
//   body: JSON.stringify(fullPayload),
// });
// if (!response.ok) throw new Error('Failed to submit quote request');
// return response.json();
