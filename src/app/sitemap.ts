import { MetadataRoute } from 'next';
import { cities, services } from '@/data/matrix';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.redstagrepair.com';
  const currentDate = new Date();

  // Initialize with Home
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  // Map the 10 core service paths
  services.forEach((service) => {
    routes.push({
      url: `${baseUrl}/${service.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Map the 29 City Landing Pages
  cities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Map the 290 Matrix Pages
  services.forEach((service) => {
    cities.forEach((city) => {
      routes.push({
        url: `${baseUrl}/${service.id}-${city.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
