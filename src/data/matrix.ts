export interface ServiceData {
  id: string;
  name: string;
  niche: string;
}

export interface CityData {
  slug: string;
  name: string;
  region: string;
  mapEmbed: string;
}

export const services: ServiceData[] = [
  { id: 'handyman-services', name: 'Handyman Services', niche: 'Repairs & Maintenance' },
  { id: 'drywall-repair', name: 'Drywall Repair', niche: 'Wall & Ceiling Patching' },
  { id: 'door-repair-installation', name: 'Door Repair & Installation', niche: 'Entry & Interior Doors' },
  { id: 'fixture-installation', name: 'Fixture Installation', niche: 'Electrical & Plumbing Fixtures' },
  { id: 'furniture-assembly-tv-mounting', name: 'TV Mounting & Furniture Assembly', niche: 'Tech & IKEA Assembly' },
  { id: 'caulking-weatherproofing', name: 'Caulking & Weatherproofing', niche: 'Draft & Leak Prevention' },
  { id: 'window-repair', name: 'Window Repair', niche: 'Glass Mechanics & Locks' },
  { id: 'damage-repair', name: 'Damage Repair', niche: 'Accidental & Pet Damage' },
  { id: 'commercial-handyman', name: 'Commercial Handyman', niche: 'Retail & Office Maintenance' },
  { id: 'senior-handyman-services', name: 'Senior Handyman Services', niche: 'Safety & ADA Upgrades' }
];

export const cities: CityData[] = [
  { slug: 'hollywood', name: 'Hollywood', region: 'Central LA', mapEmbed: '!1m18!1m12!1m3!1d3303.9!2d-118.3!3d34.09' },
  { slug: 'west-hollywood', name: 'West Hollywood', region: 'Central LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.36!3d34.09' },
  { slug: 'silver-lake', name: 'Silver Lake', region: 'Central LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.27!3d34.08' },
  { slug: 'los-feliz', name: 'Los Feliz', region: 'Central LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.28!3d34.11' },
  { slug: 'echo-park', name: 'Echo Park', region: 'Central LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.26!3d34.07' },
  { slug: 'glendale', name: 'Glendale', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.25!3d34.14' },
  { slug: 'burbank', name: 'Burbank', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.30!3d34.18' },
  { slug: 'studio-city', name: 'Studio City', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.39!3d34.14' },
  { slug: 'sherman-oaks', name: 'Sherman Oaks', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.45!3d34.15' },
  { slug: 'north-hollywood', name: 'North Hollywood', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.38!3d34.17' },
  { slug: 'toluca-lake', name: 'Toluca Lake', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.36!3d34.15' },
  { slug: 'pasadena', name: 'Pasadena', region: 'San Gabriel Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.14!3d34.14' },
  { slug: 'beverly-hills', name: 'Beverly Hills', region: 'Westside', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.4!3d34.07' },
  { slug: 'bel-air', name: 'Bel Air', region: 'Westside', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.44!3d34.08' },
  { slug: 'brentwood', name: 'Brentwood', region: 'Westside', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.48!3d34.05' },
  { slug: 'santa-monica', name: 'Santa Monica', region: 'Coastal', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.49!3d34.01' },
  { slug: 'culver-city', name: 'Culver City', region: 'Westside', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.39!3d34.02' },
  { slug: 'eagle-rock', name: 'Eagle Rock', region: 'Northeast LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.2!3d34.13' },
  { slug: 'highland-park', name: 'Highland Park', region: 'Northeast LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.19!3d34.11' },
  { slug: 'atwater-village', name: 'Atwater Village', region: 'Northeast LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.26!3d34.11' },
  { slug: 'la-canada-flintridge', name: 'La Cañada Flintridge', region: 'Verdugo Mountains', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.2!3d34.2' },
  { slug: 'long-beach', name: 'Long Beach', region: 'South Bay', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.19!3d33.77' },
  { slug: 'encino', name: 'Encino', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.5!3d34.16' },
  { slug: 'tarzana', name: 'Tarzana', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.53!3d34.17' },
  { slug: 'woodland-hills', name: 'Woodland Hills', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.6!3d34.16' },
  { slug: 'calabasas', name: 'Calabasas', region: 'The Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.64!3d34.15' },
  { slug: 'arcadia', name: 'Arcadia', region: 'San Gabriel Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.03!3d34.14' },
  { slug: 'monrovia', name: 'Monrovia', region: 'San Gabriel Valley', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.0!3d34.14' },
  { slug: 'downey', name: 'Downey', region: 'Southeast LA', mapEmbed: '!1m18!1m12!1m3!1d1!2d-118.13!3d33.94' }
];

export const getSpunTestimonial = (cityName: string, index: number) => {
  const pools = [
    { name: 'Sarah M.', text: `We called about a hole in the wall. The Red Stag tech showed up perfectly on time in ${cityName}, patched it so you can't even tell it was there, and left the room spotless.` },
    { name: 'Marcus T.', text: `I had 14 different things broken around my house. The team came out to ${cityName} and knocked out every single issue in one afternoon. Unbelievable service.` },
    { name: 'Jennifer L.', text: `Finding a reliable contractor in ${cityName} is impossible, but Red Stag is the real deal. Flat rate quote, zero surprises, and they did the job perfectly.` }
  ];
  return pools[index % pools.length];
};

export const getGeneralFaqs = (cityName: string) => [
  { question: `Are your technicians licensed and insured in ${cityName}?`, answer: `Yes, we are fully licensed in California and carry complete liability insurance to operate safely within ${cityName} and surrounding areas.` },
  { question: "Do you offer flat-rate pricing?", answer: "Yes, we never charge by the hour. We assess the job and give you a guaranteed flat-rate number before we pick up any tools." },
  { question: `Can you provide same-day service in ${cityName}?`, answer: `In most cases, yes! If you call before noon, we can typically dispatch a technician to ${cityName} by the afternoon.` }
];
