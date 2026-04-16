import React from 'react';
import Link from 'next/link';
import FaqList from '../ui/FaqList';
import { ServiceData, CityData } from '@/data/matrix';

interface ServiceCityTemplateProps {
  service: ServiceData;
  city: CityData;
  faqs: { question: string; answer: string }[];
  testimonial: { name: string; text: string };
}

export default function ServiceCityTemplate({ service, city, faqs, testimonial }: ServiceCityTemplateProps) {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero Section */}
      <section style={{ padding: '100px 24px', background: 'var(--navy)', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          TOP RATED {service.name.toUpperCase()} IN <br /><span style={{ color: 'var(--red)' }}>{city.name.toUpperCase()}</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Serving {city.name} and the entire {city.region}. 
          We specialize in highly reliable <strong>{service.niche}</strong>. Fast response, flat-rate pricing, and zero unmanaged risk.
        </p>
        <Link href="#quote" style={{ display: 'inline-block', padding: '16px 32px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-montserrat)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Schedule Service in {city.name}
        </Link>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2.2rem', color: 'var(--dark)', marginBottom: '1.5rem' }}>
          Why {city.name} Homeowners Trust Us for {service.name}
        </h2>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--text)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Finding a reliable contractor for {service.name.toLowerCase()} in {city.region} is notoriously frustrating. Large companies won't show up for a single repair, while unvetted gig-workers carry massive liability risks. Red Stag Handyman is the one-call solution dedicated specifically to handling these residential upgrades and repairs legally and efficiently.
        </p>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--text)', marginBottom: '3rem', lineHeight: 1.8 }}>
          Whether you need immediate {service.niche.toLowerCase()} or long-term preventative maintenance on your property in {city.name}, our fully licensed, background-checked technicians arrive on time, execute flawlessly, and strictly protect your home environment.
        </p>

        {/* Local Testimonial Block */}
        <div style={{ background: 'var(--cream)', padding: '40px', borderLeft: '4px solid var(--red)', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--dark)', marginBottom: '1rem' }}>
            "{testimonial.text}"
          </p>
          <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, color: 'var(--red)', textTransform: 'uppercase' }}>
            — {testimonial.name}, {city.name}
          </div>
        </div>
      </section>

      {/* FAQ & Schema */}
      <section style={{ padding: '80px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{city.name.toUpperCase()} FREQUENTLY ASKED QUESTIONS</h2>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
