'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { services, cities } from '@/data/matrix';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Dropdown states
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(p * 100);
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="sp" style={{ width: `${scrollProgress}%` }}></div>
      <nav className={`nav ${scrolled ? 's' : ''}`} id="nav" style={{ overflow: 'visible' }}>
        <div className="ni" style={{ maxWidth: '1400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* LOGO */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
              <path d="M32 56V28" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M32 28C27 20 18 12 10 6M32 28C37 20 46 12 54 6" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 16C14 13 8 13 4 16M46 16C50 13 56 13 60 16" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
              <path d="M24 22L16 19M40 22L48 19" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '1.3rem', color: '#fff', letterSpacing: '.07em', lineHeight: 1 }}>RED STAG</div>
              <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '.55rem', color: '#fff', letterSpacing: '.25em', textTransform: 'uppercase' }}>HANDYMAN</div>
            </div>
          </Link>

          {/* MAIN LINKS */}
          <div className="nl" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', position: 'relative' }}>
            <Link href="/" className="nk">Home</Link>

            {/* SERVICES DROPDOWN */}
            <div 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
              style={{ position: 'relative', padding: '20px 0', cursor: 'pointer' }}
            >
              <div className="nk" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              {isServicesOpen && (
                <div style={{ position: 'absolute', top: '100%', left: '-20px', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.1)', minWidth: '260px', padding: '15px 0', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 99999 }}>
                  {services.map(s => (
                    <Link key={s.id} href={`/${s.id}`} style={{ display: 'block', padding: '10px 25px', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '0.9rem', transition: 'background 0.2s', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="dd-link">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#portfolio" className="nk">Our Work</Link>

            {/* AREAS WE SERVE DROPDOWN */}
            <div 
              onMouseEnter={() => setIsAreasOpen(true)} 
              onMouseLeave={() => setIsAreasOpen(false)}
              style={{ position: 'relative', padding: '20px 0', cursor: 'pointer' }}
            >
              <div className="nk" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Areas We Serve
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
              {isAreasOpen && (
                <div style={{ position: 'absolute', top: '100%', left: '-200px', background: 'var(--navy)', border: '1px solid rgba(255,255,255,0.1)', width: '600px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 99999, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  {cities.map(c => (
                    <Link key={c.slug} href={`/${c.slug}`} style={{ display: 'block', color: '#fff', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', padding: '5px', transition: 'color 0.2s' }} className="dd-link">{c.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#about" className="nk">About</Link>
            <Link href="/#faq" className="nk">FAQ</Link>
            <Link href="/#blog" className="nk">Blog</Link>
          </div>

          {/* CTA SPLIT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>Call Us Anytime</div>
              <a href="tel:+16266522303" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--red)', letterSpacing: '0.05em' }}>
                (626) 652-2303
              </a>
            </div>
            <a href="tel:+16266522303" style={{ padding: '16px 30px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-montserrat)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.1em', transition: 'background 0.3s' }} className="nav-cta-btn">
              GET AN ESTIMATE
            </a>
          </div>
        </div>
      </nav>
      
      <style dangerouslySetInnerHTML={{__html: `
        .dd-link:hover { color: var(--red) !important; background: rgba(255,255,255,0.02) !important; }
        .nav-cta-btn:hover { background: var(--red-dk) !important; }
      `}} />
    </>
  );
}
