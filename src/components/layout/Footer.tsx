import Link from 'next/link';
import { cities } from '@/data/matrix';

export default function Footer() {
  return (
    <>
      <footer className="footer" style={{ paddingBottom: '100px' }}>
        <div className="ctn">
          <div className="fg" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '30px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                  <path d="M32 56V28M32 28C27 20 18 12 10 6M32 28C37 20 46 12 54 6" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 16C14 13 8 13 4 16M46 16C50 13 56 13 60 16" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.05rem', color: '#fff', letterSpacing: '.08em' }}>RED STAG</div>
                  <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 300, fontSize: '.5rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.25em', textTransform: 'uppercase' }}>Handyman</div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', fontWeight: 300, color: 'rgba(255,255,255,.7)', lineHeight: 1.7 }}>Licensed & insured handyman services across Los Angeles County. Part of the Red Stag family of premium home services.</p>
            </div>
            <div>
              <h4 className="fhh">Services</h4>
              <Link href="/handyman-services/" className="fll">General Handyman</Link>
              <Link href="/drywall-repair/" className="fll">Drywall Repair</Link>
              <Link href="/door-repair-installation/" className="fll">Door Install & Repair</Link>
              <Link href="/fixture-installation/" className="fll">Fixture Installation</Link>
              <Link href="/furniture-assembly-tv-mounting/" className="fll">TV & Assembly</Link>
            </div>
            <div>
              <h4 className="fhh">Service Areas</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {cities.map((city) => (
                   <Link key={city.slug} href={`/${city.slug}/`} className="fll" style={{ fontSize: '0.75rem' }}>{city.name}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="fhh">Contact</h4>
              <div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', color: 'rgba(255,255,255,.7)', lineHeight: 2.2 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2" strokeLinecap="round" style={{ verticalAlign: 'middle', marginRight: '4px' }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3" /></svg>
                (323) 555-1234<br />
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2" strokeLinecap="round" style={{ verticalAlign: 'middle', marginRight: '4px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                info@redstagrepair.com<br />
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2" strokeLinecap="round" style={{ verticalAlign: 'middle', marginRight: '4px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Los Angeles, CA
              </div>
              <div style={{ marginTop: '.5rem', fontFamily: 'var(--font-barlow)', fontSize: '.72rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.04em' }}>Mon&ndash;Sat 7am&ndash;7pm &middot; Emergency 24/7</div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: '1.3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-barlow)', fontSize: '.66rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.04em' }}>&copy; 2026 Red Stag Handyman. All rights reserved. CA Lic #XXXXXX</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="#" style={{ fontFamily: 'var(--font-barlow)', fontSize: '.66rem', color: 'rgba(255,255,255,.5)' }}>Privacy</Link>
              <Link href="#" style={{ fontFamily: 'var(--font-barlow)', fontSize: '.66rem', color: 'rgba(255,255,255,.5)' }}>Terms</Link>
              <Link href="#" style={{ fontFamily: 'var(--font-barlow)', fontSize: '.66rem', color: 'rgba(255,255,255,.5)' }}>Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* DESKTOP: FLOATING PHONE BUTTON */}
      <a href="tel:+13235551234" className="sfb" title="Call Red Stag Handyman">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>

      {/* MOBILE: BOTTOM BAR */}
      <div className="mcta">
        <a href="tel:+13235551234" className="mc1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          CALL (323) 555-1234
        </a>
      </div>
    </>
  );
}
