import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, services, getSpunTestimonial, getGeneralFaqs } from '@/data/matrix';
import CityLandingTemplate from '@/components/layout/CityLandingTemplate';
import ServiceCityTemplate from '@/components/layout/ServiceCityTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  // Generate the 29 City Landing Pages (/sherman-oaks)
  cities.forEach(city => {
    paths.push({ slug: city.slug });
  });

  // Generate the 290 Service x City Pages (/drywall-repair-sherman-oaks)
  services.forEach(service => {
    cities.forEach(city => {
      paths.push({ slug: `${service.id}-${city.slug}` });
    });
  });

  return paths; // 319 paths total
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const cityMatch = cities.find(c => c.slug === slug);
  if (cityMatch) {
    return {
      title: `Handyman in ${cityMatch.name}, CA | Red Stag Handyman`,
      description: `Expert handyman services in ${cityMatch.name}. Licensed, insured, and flat-rate pricing. Same-day service available in the ${cityMatch.region}.`
    };
  }

  for (const service of services) {
    if (slug.startsWith(service.id + '-')) {
      const citySlug = slug.replace(service.id + '-', '');
      const city = cities.find(c => c.slug === citySlug);
      if (city) {
        return {
          title: `${service.name} in ${city.name}, CA | Red Stag`,
          description: `Professional ${service.name.toLowerCase()} in ${city.name}. Reliable, heavily vetted technicians serving the ${city.region}. Request your free quote.`
        };
      }
    }
  }

  return { title: 'Service Not Found' };
}

export default async function DynamicMatrixPage({ params }: PageProps) {
  const slug = (await params).slug;

  // Case 1: Pure City Page (e.g., /sherman-oaks)
  const cityMatch = cities.find(c => c.slug === slug);
  if (cityMatch) {
    return (
      <CityLandingTemplate 
        cityName={cityMatch.name}
        region={cityMatch.region}
        services={services}
        faqs={getGeneralFaqs(cityMatch.name)}
        testimonial={getSpunTestimonial(cityMatch.name, cities.indexOf(cityMatch))}
      />
    );
  }

  // Case 2: Service x City Page (e.g., /drywall-repair-sherman-oaks)
  for (const service of services) {
    if (slug.startsWith(`${service.id}-`)) {
      const citySlug = slug.replace(`${service.id}-`, '');
      const city = cities.find(c => c.slug === citySlug);
      
      if (city) {
        const seedIndex = cities.indexOf(city) + services.indexOf(service);
        return (
          <ServiceCityTemplate 
            service={service}
            city={city}
            faqs={getGeneralFaqs(city.name)}
            testimonial={getSpunTestimonial(city.name, seedIndex)}
          />
        );
      }
    }
  }

  // If the slug matches neither, throw 404
  notFound();
}
