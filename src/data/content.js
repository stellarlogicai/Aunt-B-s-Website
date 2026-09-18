// ---------------------------------------------------------------------------
// Aunt B's Cleaning Services — site copy & content
// Edit the values below to update text across the site without touching
// component markup. Keep keys stable; components read from this file.
// ---------------------------------------------------------------------------

export const business = {
  name: "Aunt B's Cleaning Services",
  tagline: 'Making Homes Shine',
  phone: '(417) 319-4957',
  phoneHref: 'tel:+14173194957',
  email: 'auntbs.cleaning.service@gmail.com',
  serviceArea: 'Serving Bolivar, MO & surrounding areas',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61591536207381',
  logoSrc: '/AuntBsLogo.png',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#quote' },
];

export const hero = {
  headline: 'Reliable cleaning help for busy homes, move-outs, and fresh starts.',
  subheadline:
    "Aunt B's Cleaning Services helps with recurring residential cleaning, deep cleans, move-out cleans, and real-estate prep cleaning.",
  primaryCta: { label: 'Get a Free Cleaning Quote', href: '#quote' },
  secondaryCta: { label: 'Call or Text', href: business.phoneHref },
  trustChips: [
    { label: 'Local Service', icon: 'home' },
    { label: 'Pet-Friendly', icon: 'paw' },
    { label: 'Recurring Cleanings', icon: 'repeat' },
    { label: 'Deep Cleans', icon: 'sparkle' },
  ],
};

export const services = [
  {
    id: 'standard',
    icon: 'home',
    title: 'Standard Cleaning',
    description:
      'Regular upkeep that keeps every room fresh, tidy, and welcoming.',
    bullets: [
      'Dusting & wipe-downs throughout',
      'Vacuuming & mopping all floors',
      'Kitchen & bathroom refresh',
      'Trash removal & tidying',
    ],
  },
  {
    id: 'deep',
    icon: 'sparkle',
    title: 'Deep Cleaning',
    description: 'A top-to-bottom reset for homes that need extra love.',
    bullets: [
      'Baseboards & window sills',
      'Inside microwave & appliance exteriors',
      'Grout & tile detailing',
      'Ceiling fans & light fixtures',
    ],
  },
  {
    id: 'move',
    icon: 'box',
    title: 'Move-In / Move-Out Cleaning',
    description: 'A spotless start (or finish) for your next chapter.',
    bullets: [
      'Full empty-home deep clean',
      'Inside cabinets & drawers',
      'Closets & shelving wiped down',
      'Move-day ready in one visit',
    ],
  },
  {
    id: 'realestate',
    icon: 'box',
    title: 'Real-Estate Prep & Turnover Cleaning',
    description:
      'Listing-ready and guest-ready cleans for agents, landlords, and short-term rental hosts.',
    bullets: [
      'Showing & listing-ready clean',
      'Tenant turnover between leases',
      'Short-term rental / Airbnb turnover',
      'Quick-turnaround scheduling',
    ],
  },
  {
    id: 'recurring',
    icon: 'repeat',
    title: 'Recurring Cleaning',
    description:
      'Weekly, biweekly, or monthly visits that fit your routine.',
    bullets: [
      'Flexible scheduling that works for you',
      'Same trusted cleaner when possible',
      'Easy to reschedule or adjust',
      'Loyalty-friendly recurring pricing',
    ],
  },
  {
    id: 'addon',
    icon: 'plus',
    title: 'Add-On Services',
    description: 'A few extra touches to make your visit go further.',
    bullets: [
      'Inside oven & refrigerator',
      'Laundry & fresh linens',
      'Interior window cleaning',
      'Garage or patio sweep',
    ],
  },
];

export const whyChooseUs = [
  {
    icon: 'sparkle',
    title: 'Detail-Focused Cleaning',
    description:
      "We notice the little things, because little things make a home feel truly clean.",
  },
  {
    icon: 'heart',
    title: 'Friendly & Reliable Service',
    description:
      'Punctual, communicative, and easy to welcome into your home, every single visit.',
  },
  {
    icon: 'repeat',
    title: 'Flexible Recurring Options',
    description:
      'Weekly, biweekly, monthly, or a one-time visit, scheduled around your life.',
  },
  {
    icon: 'paw',
    title: 'Pet-Friendly Homes Welcome',
    description:
      'Cats, dogs, and the occasional curious pup underfoot? Always welcome here.',
  },
  {
    icon: 'home',
    title: 'Local & Owner-Operated',
    description:
      "A real local business that treats your home the way we'd treat our own.",
  },
];

export const about = {
  eyebrow: 'Hi, neighbor!',
  heading: "About Aunt B's",
  paragraphs: [
    "Aunt B's Cleaning Services started with a simple idea: every family deserves to come home to a space that feels calm, cared for, and truly clean, without spending a Saturday scrubbing it themselves.",
    "We treat each home like it's our own, working carefully around the things that matter to you, from a favorite reading chair to a nervous new puppy. Busy households, growing families, and anyone who just needs a little breathing room can count on us to show up, listen, and leave every room a little brighter.",
    "Less stress, more shine. That's the Aunt B's promise.",
  ],
  ownerNote: {
    name: 'Aunt B',
    role: 'Owner & Founder',
    quote: 'Your home, cared for like family.',
  },
};

export const serviceAreaContent = {
  eyebrow: 'Local & nearby',
  heading: 'Proudly Serving Bolivar, MO',
  description:
    "Based right in Bolivar, MO and happy to clean homes throughout the surrounding area. Not sure if you're in range? Just ask, we'll let you know.",
};

export const gallery = {
  eyebrow: 'See the difference',
  heading: 'Before & After',
  description:
    'A few of the spaces we love transforming. Real client photos coming soon!',
  items: [
    { id: 1, label: 'Kitchen Refresh' },
    { id: 2, label: 'Living Room Reset' },
    { id: 3, label: 'Bathroom Deep Clean' },
    { id: 4, label: 'Bedroom Tidy-Up' },
  ],
};

// ---------------------------------------------------------------------------
// Specialty / add-on services — presented separately from core cleaning so
// pricing is never confused with the higher minimums for full cleaning jobs.
// ---------------------------------------------------------------------------
export const specialtyServices = {
  eyebrow: 'Something a little different',
  heading: 'Plant Care & Light Home Refresh',
  description:
    "Whether you're away from home or just need a small upkeep visit, Aunt B's can help with indoor plant watering and light refresh tasks.",
  cards: [
    {
      id: 'plant-care',
      icon: 'plant',
      title: 'Plant Care Visit',
      price: 'Starting at $30',
      tagline: 'Great for quick stop-ins to water indoor plants and do a basic home check.',
      listLabel: 'Includes:',
      bullets: [
        'Water indoor plants',
        'Quick visual home check',
        'Follow simple plant care instructions',
        'Message update after the visit, if requested',
      ],
    },
    {
      id: 'plant-refresh',
      icon: 'droplet',
      title: 'Plant Care + Light Home Refresh',
      price: 'Starting at $50',
      tagline:
        "Perfect for plant watering plus a few light upkeep tasks while you're away or between cleanings.",
      listLabel: 'May include:',
      bullets: [
        'Water indoor plants',
        'Wipe kitchen counters',
        'Light dusting',
        'Take out trash',
        'Sweep or vacuum one main area',
        'Quick bathroom refresh',
        'Check for packages or mail area, if requested',
      ],
    },
  ],
  pricingNote:
    'Additional time is billed at $30 per half hour. Travel fees may apply outside the Bolivar area.',
  disclaimer:
    'Light refresh visits are limited to the agreed tasks and time window. Full kitchens, bathrooms, floors, deep cleaning, laundry, dishes, or whole-home cleaning may require a standard cleaning quote.',
};

export const quoteForm = {
  eyebrow: 'Let’s get you scheduled',
  heading: 'Get Your Free Cleaning Quote',
  description:
    "Tell us a little about your home and we'll follow up with a personalized quote, no obligation at all.",
  homeSizeOptions: [
    'Under 1,000 sq ft',
    '1,000–1,500 sq ft',
    '1,500–2,500 sq ft',
    '2,500–3,500 sq ft',
    'Over 3,500 sq ft',
  ],
  bedroomsOptions: ['1', '2', '3', '4', '5+'],
  bathroomsOptions: ['1', '1.5', '2', '2.5', '3', '3.5+'],
  // This list doubles as the lead-tracking taxonomy for future ServicesOS
  // reporting, so keep these values stable rather than editing freely.
  serviceTypeOptions: [
    'Recurring cleaning',
    'Deep cleaning',
    'Move-out cleaning',
    'Move-in cleaning',
    'Real-estate prep cleaning',
    'Short-term rental / turnover cleaning',
    'Plant Care Visit',
    'Plant Care + Light Home Refresh',
    'Not sure yet',
  ],
  petsOptions: ['No pets', 'Dog(s)', 'Cat(s)', 'Dogs & cats', 'Other pets'],
  hearAboutOptions: [
    'Facebook',
    'Friend / referral',
    'Google',
    'Angi',
    'Website',
    'Repeat customer',
    'Other',
  ],
  privacyNote:
    "We'll only use your information to respond to your cleaning quote request.",
  successMessage:
    "Thanks! Your quote request was sent. Aunt B's Cleaning Services will follow up as soon as possible.",
};

export const faq = {
  eyebrow: 'Good to know',
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'Do you bring supplies?',
      answer:
        "Yes! We arrive with everything needed to get the job done, vacuums, mops, cloths, and cleaning products included. If you'd prefer we use specific or eco-friendly products you provide, just let us know ahead of time.",
    },
    {
      question: 'Do you offer recurring cleaning?',
      answer:
        'Absolutely. Weekly, biweekly, and monthly plans are available, and we’ll happily adjust your schedule as life changes.',
    },
    {
      question: 'Are pets okay?',
      answer:
        "Of course! We love pets and are comfortable working around cats, dogs, and other furry housemates. Just let us know about any pets so we can plan ahead and keep everyone comfortable.",
    },
    {
      question: 'How do quotes work?',
      answer:
        "Share a few details about your home using our quick form below and we'll follow up with a personalized, no-obligation quote, usually within one business day.",
    },
    {
      question: 'Do you offer deep cleans?',
      answer:
        'Yes! Deep cleans are perfect for a first-time visit, seasonal refresh, or getting a home guest-ready. Ask us about pairing a deep clean with a recurring plan.',
    },
  ],
};
