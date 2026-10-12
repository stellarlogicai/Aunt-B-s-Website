# Aunt B's — Home & Family Services Website Plan
**Status:** Planning only — no website code or live deployment changes  
**Prepared:** 2026-10-12  
**Owner:** Brittany ("Aunt B")  
**Repository:** `stellarlogicai/Aunt-B-s-Website`  
**Candidate site:** https://auntbs-cleaning-services.netlify.app/ (deployment-to-repository mapping not yet independently verified)  
**Other site:** https://auntbscleaningsevices.netlify.app/ (separate existing version)

## 1. Goal and positioning

Aunt B's currently advertises primarily as a residential cleaning company, but Brittany's intended business is a broader **local home-and-family-services provider**. The website should help residents around Bolivar, Missouri discover her, understand her services, trust her, and make an inquiry quickly.

**Brand direction (proposal, not an approved legal name change):**
- Main brand: **Aunt B's** — a long-standing personal nickname, not a newly invented marketing name.
- Consumer-facing descriptor: **Home & Family Services** (or **Cleaning & Family Services**, pending Brittany's choice).
- Keep the current Facebook/business name during the transition if desired; avoid implying the legal business name has already been changed.
- Tone: friendly, local, respectful, dependable, family-oriented; avoid unverified promises such as "licensed", "insured", "bonded", "background checked", or guaranteed availability.

**Core offerings:**
1. Residential cleaning — standard, deep, recurring, move-in/move-out, turnover and agreed add-ons.
2. Childcare / babysitting — occasional, evening, and overnight care only where permitted, feasible, and agreed.
3. Pet care — feeding, check-ins, walks, and in-home pet sitting.
4. House sitting / home checks — plants, mail/packages, home check-ins, and other agreed tasks.

Service boundaries, scheduling, insurance and applicable rules differ. Do not market every option as universally available until Brittany confirms it.

## 2. Current code baseline (reviewed 2026-10-12)

The `main` branch is a React 18 + Vite + Tailwind one-page marketing website. It has:
- `src/App.jsx`: Header, Hero, Services, WhyChooseUs, SpecialtyServices, About, Gallery, ServiceArea, QuoteForm, FAQ, Footer, StickyQuoteBar.
- `src/data/content.js`: centralized business copy, service cards, FAQ, quote options, phone/email/Facebook.
- `src/components/QuoteForm.jsx`: form with name, city, phone/email, cleaning-specific home details, service type, date, notes, attribution; basic client validation and honeypot.
- `src/lib/submitQuote.js`: POST to Netlify Forms, with `leadSource=website`, `sourceDetail=auntbs_website_quote_form`, `leadStatus=new`, `leadCost=0`, plus self-reported source.
- `index.html`: static Netlify form registration markup.
- `netlify.toml`: `npm run build` and `dist` publish directory.
- `README.md`: existing Netlify Forms deployment/verification guidance.

**Known content gaps:**
- Hero, services, quote form, SEO description, footer and FAQ primarily discuss cleaning.
- Gallery contains placeholders rather than approved real job images.
- About section uses owner-photo placeholder.
- FAQ claims the business brings all equipment and supplies; verify against actual practice (customer-provided supplies/equipment have been discussed).
- The quote form does not yet offer childcare, pet sitting or house sitting.
- README describes Netlify Forms as active in code; **live form delivery and notification setup are not verified by this planning review**.
- Current site version on Netlify has not been independently matched to the GitHub `main` commit.

## 3. Customer journey and site structure

**Primary journey:** Facebook/community post, referral, or local search → website landing page → choose service → see relevant details and trust information → submit low-friction inquiry → receive acknowledgment → Brittany follows up → optional detailed intake and agreement.

**Recommended sections / pages:**
- Home: "Aunt B's — Home & Family Services"; four service categories above the fold; prominent **Request Help / Check Availability** and **Call or Text** actions.
- Services overview: four category cards linking to relevant detail sections/pages.
- Service detail pages: what is offered, what's excluded/subject to agreement, what information Brittany needs, and a tailored inquiry CTA.
- About Aunt B: authentic introduction, real experience and personal story; owner photo with permission.
- Areas served: Bolivar and only surrounding communities Brittany is genuinely willing to travel to; quote travel fees individually.
- Reviews: authentic customer testimonials with permission; no invented ratings.
- Gallery: consented cleaning photos and appropriate pet/home photos; no identifying photos or private details of children.
- Contact: click-to-call/text, Facebook link, accessible form, reasonable response-time expectations.
- Privacy and policies: plain-language data use and retention, cancellation expectations and service-specific safety/consent information.

**Mobile first:** persistent contact CTA; clear text, large tap targets, short initial form, fast loading, accessible labels/errors, and no unnecessary account requirement.

## 4. Forms: short inquiry first, detailed intake second

**Stage A — website inquiry (all service types):**
- Name, city/area, at least one contact method, service category, approximate dates/times, short description, "How did you hear about us?"
- Branch into *minimal* service-specific questions; do not ask every visitor for home size/bedrooms.
- Confirm submission success only after the server confirms receipt; provide a phone/text fallback.
- Preserve `leadSource` and `selfReportedSource` separately for future reporting.

**Stage B — detailed intake after initial contact:**
- Cleaning: property size, bathrooms, scope, supplies/equipment, pets, access details.
- Childcare: the existing reusable Google Form (shareable link), routines, emergency contacts, caregiver handoff and safety details. No hardcoded 7:30 AM or individual client's schedule.
- Pet care: pet count, feeding, care routines, vet/emergency instructions, access.
- House sitting: check-in frequency, plants, mail, access, home-specific responsibilities.

**Interim implementation:** Embed or link the existing Google Forms as appropriate. Test embedded mobile sizing and direct-link fallback. Do not put sensitive child health details in ordinary public Netlify lead forms, marketing emails, analytics, or URLs; use restricted-access intake and a documented retention process. Obtain appropriate consent and confirm any childcare-specific requirements before launch.

**Longer-term platform direction:**
- **SLAIWeb:** reusable, branded form builder, conditional logic, publishing/embedding, shareable links.
- **ServicesOS:** authorized lead intake, customer/job records, scheduling, workflows, agreements and permissions.
- **GrowthAI (standalone, optionally integrated):** pricing/negotiation guidance, marketing assistance and owner-approved drafts.
- Integration is **future work**; no live ServicesOS API integration or credential-in-frontend implementation is authorized. Never embed a private API key in Vite client variables.

## 5. Implementation phases and acceptance checks

### Phase 0 — verify and protect current baseline
- [ ] Confirm which Netlify site is deployed from which repo/branch.
- [ ] Save current production deployment reference and rollback procedure.
- [ ] Verify live quote form with a test submission in Netlify Forms and email notification receipt; remove test personal data.
- [ ] Confirm phone/email/Facebook links, service area, supplies FAQ, existing prices and any legal/insurance claims with Brittany.
- [ ] Check mobile layout, page title/meta description, broken links and basic accessibility.

**Exit:** Verified baseline and known rollback; no lost leads.

### Phase 1 — high-impact messaging, minimal code
- [ ] Agree on consumer-facing descriptor while preserving Aunt B's identity.
- [ ] Update hero, navigation, footer, title/description, About and service-area copy to reflect four services.
- [ ] Add four primary service cards, while retaining cleaning subtypes.
- [ ] Change main CTA to "Request a Quote / Check Availability" rather than cleaning-only.
- [ ] Replace placeholder photos with approved real content when available.
- [ ] Correct equipment/supplies claims; avoid unsupported trust badges.

**Exit:** A new visitor can identify all four services and contact Brittany within seconds on mobile.

### Phase 2 — conversion and intake
- [ ] Expand quote service-type taxonomy without losing attribution fields or existing submissions.
- [ ] Add short, service-specific inquiry prompts; do not demand cleaning-only fields for childcare/pet sitting.
- [ ] Add Google Forms intake links or tested embeds, with mobile direct-link fallback.
- [ ] Verify each service route, validation, submission, email notification, spam protection, success/error states.
- [ ] Add appropriate privacy messaging and restrict access to sensitive intake responses.

**Exit:** A complete inquiry from each of the four service categories reaches Brittany reliably.

### Phase 3 — trust, local discoverability, measurement
- [ ] Publish owner story and relevant experience accurately.
- [ ] Add consented reviews and authentic photos.
- [ ] Add service-specific page titles/descriptions and local content without keyword stuffing.
- [ ] Set up basic privacy-conscious analytics or manual inquiry logging.
- [ ] Connect Facebook CTA and Google Business Profile (if eligible) to the right landing page.

**Exit:** Every major marketing channel has a measurable path to an inquiry.

### Phase 4 — optional SLAI ecosystem integration
- [ ] Define authenticated, rate-limited ServicesOS lead-ingestion API with server-side secrets.
- [ ] Establish deduplication, consent, permissions, retention, and audit logs.
- [ ] Migrate forms to SLAIWeb when its native builder is ready.
- [ ] Offer GrowthAI suggestions to Brittany with human review/approval.

**Exit:** No loss of existing lead capture; safe end-to-end workflow.

## 6. Decisions still needed

- [ ] Brittany's preferred public descriptor and whether/when to change Facebook page name.
- [ ] Actual services, geographic range, hours and any travel minimums.
- [ ] Supplies/equipment policy by service.
- [ ] Which service categories can be publicly offered now, considering registration, insurance and applicable rules.
- [ ] Whether Netlify Forms notifications are configured and working.
- [ ] Which Google Forms can be embedded versus linked; privacy/retention for sensitive responses.
- [ ] Owner-approved photos, testimonials and bio.
- [ ] Which of the two Netlify domains will be the canonical public link.

## 7. Change controls

This is a **planning document only**. No code edits, merges, deployments, DNS changes, live form rewiring, or changes to customer data are part of this document. Implement changes in reviewable slices with tests, preserve a rollback path, and obtain Brittany's approval of public-facing claims.
