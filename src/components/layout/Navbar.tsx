'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      <nav className={`nav ${scrolled ? 's' : ''}`} id="nav">
        <div className="ni">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
              <path d="M32 56V28" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M32 28C27 20 18 12 10 6M32 28C37 20 46 12 54 6" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 16C14 13 8 13 4 16M46 16C50 13 56 13 60 16" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
              <path d="M24 22L16 19M40 22L48 19" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.3rem', color: '#fff', letterSpacing: '.07em', lineHeight: 1 }}>RED STAG</div>
              <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 300, fontSize: '.55rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.25em', textTransform: 'uppercase' }}>HANDYMAN</div>
            </div>
          </Link>
          <div className="nl">
            <Link href="/#areas" className="nk">Areas We Serve</Link>
            <Link href="/#services" className="nk">Services</Link>
            <Link href="/#process" className="nk">About Us / Process</Link>
            <Link href="/#reviews" className="nk">Reviews</Link>
            <a href="tel:+13235551234" className="nav-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (323) 555-1234
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
