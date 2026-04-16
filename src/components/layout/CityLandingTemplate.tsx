import React from 'react';
import Link from 'next/link';
import FaqList from '../ui/FaqList';

interface CityLandingTemplateProps {
  cityName: string;
  region: string;
  services: { id: string; name: string; niche: string }[];
  faqs: { question: string; answer: string }[];
  testimonial: { name: string; text: string };
}

export default function CityLandingTemplate({ cityName, region, services, faqs, testimonial }: CityLandingTemplateProps) {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 24px', background: 'var(--navy)', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1.1 }}>
          THE PREMIER HANDYMAN IN <br /><span style={{ color: 'var(--red)' }}>{cityName.toUpperCase()}</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Providing extremely reliable, flat-rate, licensed handyman services throughout {cityName} and the {region}.
        </p>
        <Link href="#quote" style={{ display: 'inline-block', padding: '16px 32px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-montserrat)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Get A Free Flat-Rate Quote
        </Link>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2.5rem', marginBottom: '1rem' }}>WHAT WE FIX IN {cityName.toUpperCase()}</h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', color: 'var(--muted)' }}>From small odd jobs to major dry wall repairs, we cover it all.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {services.map((svc) => (
            <Link key={svc.id} href={`/${svc.id}-${cityName.toLowerCase().replace(/\s+/g, '-')}`} style={{ display: 'block', padding: '30px', background: 'var(--cream)', borderLeft: '4px solid var(--red)' }}>
              <div style={{ fontFamily: 'var(--font-montserrat)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '10px' }}>{svc.name}</div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'var(--muted)' }}>{svc.niche}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local Testimonial */}
      <section style={{ padding: '80px 24px', background: 'var(--bone)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 1.5rem', fontWeight: 500 }}>"{testimonial.text}"</p>
        <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700, color: 'var(--red)', textTransform: 'uppercase' }}>— {testimonial.name}, {cityName} Resident</div>
      </section>

      {/* FAQ & Schema */}
      <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>FREQUENTLY ASKED QUESTIONS</h2>
        <FaqList faqs={faqs} />
      </section>
    </div>
  );
}
