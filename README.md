# Aunt B's Cleaning Services — Website

A responsive, one-page marketing site built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
public/
  AuntBsLogo.png        ← your logo, used everywhere via the Logo component
src/
  components/
    Header.jsx           Sticky nav, logo, CTA, mobile menu
    Hero.jsx              Headline, CTAs, trust chips
    Services.jsx          Service cards
    WhyChooseUs.jsx        "Why Choose Aunt B's" section
    About.jsx              About copy + owner photo placeholder
    Gallery.jsx             Before/after placeholder cards
    ServiceArea.jsx          Dedicated "areas we serve" section
    QuoteForm.jsx           Free quote request form
    FAQ.jsx                 Accessible accordion
    Footer.jsx               Logo, contact info, links
    StickyQuoteBar.jsx        Mobile-only sticky "Request a Quote" bar
    icons.jsx                  Small hand-rolled icon set (no icon library)
    Logo.jsx                    Renders AuntBsLogo.png with a text fallback
  data/
    content.js              All editable copy: nav, hero text, services,
                             FAQ, footer info, form options, etc.
  lib/
    submitQuote.js           Quote form submit handler — posts to Netlify
                              Forms (active). Swap for another host or a
                              future ServicesOS endpoint — see below.
```

## Editing copy

Almost all text on the site lives in `src/data/content.js` — company info,
navigation labels, hero copy, service descriptions, FAQ answers, footer
contact details, and the dropdown options in the quote form. Edit values
there first before touching component markup.

## Logo

The header, hero, and footer all pull from `public/AuntBsLogo.png` through
the shared `<Logo />` component. To swap logos, just replace that file —
no code changes needed. If the file is ever missing, `Logo.jsx` falls back
to a simple "B" monogram so the layout never breaks.

## Deploying & verifying the quote form (Netlify Forms — active path)

**Current status: live.** Quote submissions now actually POST to Netlify
Forms (see `src/lib/submitQuote.js`). This only delivers a real lead once
this site is deployed on Netlify — if it's hosted somewhere else, the form
will correctly show its **failure** state (not a false success) and point
the visitor to call/text instead, so no inquiry is ever silently lost.

### One-time setup on Netlify

1. **Deploy this site to Netlify.** Either drag-and-drop the `dist/`
   folder after running `npm run build`, or connect this repo in the
   Netlify dashboard with:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. **No further configuration is required for form capture itself.**
   Netlify automatically scans the built `index.html` for the hidden
   `<form name="quote-request" data-netlify="true">` (already included)
   and registers it the moment you deploy. The live React form posts to
   that same registered form name.
3. **Set up email notifications** (so Aunt B / Jamie gets emailed on every
   new lead, not just see it in the dashboard):
   - Netlify dashboard → your site → **Forms** tab → **Settings and usage**
   - Click **Add notification** → **Email notification**
   - Enter the email that should receive new leads (e.g.
     `auntbs.cleaning.service@gmail.com`)
   - Save. Every new submission will now also arrive by email.

### How to verify a real submission is working

1. After deploying, visit the live Netlify URL and fill out the quote
   form with test info (name, city, service type, and either a phone or
   email), then submit.
2. You should see the green success message in the browser.
3. In the Netlify dashboard, go to your site → **Forms** → **quote-request**
   — the test submission should appear there within a few seconds.
4. If you set up email notifications, you should also receive an email
   for that same test submission.
5. Delete the test submission from the Netlify dashboard when done.

### If this site is NOT hosted on Netlify

The Netlify path will fail safely (visitors see the failure message with
a call/text fallback — no leads silently vanish), but no leads will reach
anywhere outside the browser until one of these is done:

- **TODO (Vercel or another host):** Replace the body of `submitQuote()`
  in `src/lib/submitQuote.js` with the commented-out "OPTION B" block in
  that same file, pointed at a real API route or serverless function you
  control, then redeploy.
- **TODO (still undecided):** Tell me the hosting platform and I'll wire
  up the matching free option.

Every submission carries the future-ServicesOS lead metadata
(`leadSource: "website"`, `sourceDetail: "auntbs_website_quote_form"`,
`leadStatus: "new"`, `leadCost: 0`), plus `selfReportedSource` from the
"How did you hear about us?" field — these are kept distinct on purpose
(see the comment in `submitQuote.js`). **Do not wire a direct ServicesOS
endpoint** until one is explicitly approved for website leads — see the
commented "FUTURE" block in `submitQuote.js` for the exact shape it should
receive.

The form also includes a basic spam honeypot (an invisible field real
visitors never fill in, paired with Netlify's own honeypot check) and a
short privacy note above the submit button.

## Placeholders to update before launch

- `business.phone`, `business.email`, `business.serviceArea`,
  `business.facebookUrl` in `src/data/content.js`
- Owner photo in `About.jsx` (currently a placeholder card)
- Real before/after photos in `Gallery.jsx` (currently placeholder panels)
- Confirm this site is deployed on Netlify (form capture depends on it —
  see "Deploying & verifying the quote form" above), or swap in OPTION B
  if hosting elsewhere
- Set up the Netlify Forms email notification so leads reach an inbox

## Tech notes

- Tailwind theme tokens (brand colors, fonts) live in `tailwind.config.js`.
- Smooth scrolling for nav anchors is enabled globally in `src/index.css`.
- Reduced-motion preferences are respected (animations shorten automatically).
- No paid or external UI libraries — icons and the FAQ accordion are
  hand-built so the project has zero non-React runtime dependencies.
