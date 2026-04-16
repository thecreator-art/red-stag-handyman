import Link from 'next/link';
import { services, cities } from '@/data/matrix';

export default function Footer() {
  return (
    <>
      <footer className="footer" style={{ paddingBottom: '100px', background: 'var(--navy)' }}>
        <div className="ctn" style={{ maxWidth: '1400px' }}>
          
          <div className="fg" style={{ gridTemplateColumns: 'minmax(250px, 1.5fr) 1fr 1fr 1.5fr', gap: '30px' }}>
            
            {/* COLUMN 1: BRANDING */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                  <path d="M32 56V28M32 28C27 20 18 12 10 6M32 28C37 20 46 12 54 6" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 16C14 13 8 13 4 16M46 16C50 13 56 13 60 16" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div>
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, fontSize: '1.1rem', color: '#fff', letterSpacing: '.08em' }}>RED STAG</div>
                  <div style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600, fontSize: '.5rem', color: '#fff', letterSpacing: '.25em', textTransform: 'uppercase' }}>Handyman</div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '.9rem', fontWeight: 500, color: '#fff', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Built on Craft. Driven by Accountability.
              </p>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.85rem', color: '#fff', lineHeight: 2 }}>
                <strong>License #964664</strong><br />
                Est. 2011<br />
                Licensed General Contractor - State of California<br />
                CSLB License #964664
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem' }}>
                <a href="#" style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* COLUMN 2: CONTACT US */}
            <div>
              <h4 className="fhh">CONTACT US</h4>
              
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Phone</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>(626) 652-2303</div>
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Email</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '.9rem', color: '#fff' }}>support@redstagcc.com</div>
              </div>

              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Address</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '.9rem', color: '#fff', lineHeight: 1.5 }}>
                  3211 Cahuenga Blvd W Ste 207<br />
                  Los Angeles, CA 90068
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>Hours</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '.9rem', color: '#fff' }}>Mon-Sat 8AM-6PM</div>
              </div>
            </div>

            {/* COLUMN 3: SERVICES */}
            <div>
              <h4 className="fhh">COMPANY</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/about" className="fll">About Red Stag</Link>
                <Link href="/#portfolio" className="fll">Our Portfolio</Link>
                <Link href="/#areas" className="fll">Areas We Serve</Link>
                <Link href="/#faq" className="fll">FAQ</Link>
                <Link href="/#reviews" className="fll">Reviews</Link>
                <Link href="/#license" className="fll">Licenses & Insurance</Link>
              </div>
            </div>

            {/* COLUMN 4: SERVICE AREAS (USING MATRIX CITIES OR JUST A GENERAL LINK TO KEEP IT CLEAN) */}
            <div>
              <h4 className="fhh">AREAS WE SERVE</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {cities.slice(0, 14).map((city) => (
                   <Link key={city.slug} href={`/${city.slug}`} className="fll" style={{ fontSize: '0.8rem' }}>{city.name}</Link>
                ))}
              </div>
              <Link href="/#areas" style={{ display: 'inline-block', marginTop: '15px', color: 'var(--red)', fontFamily: 'var(--font-inter)', fontSize: '.85rem', fontWeight: 600 }}>See All 29 Locations &rarr;</Link>
            </div>

          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: '1.3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-inter)', fontSize: '.75rem', color: 'rgba(255,255,255,.7)', letterSpacing: '.04em' }}>&copy; 2026 Red Stag Handyman. All rights reserved. CA Lic #964664</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="#" style={{ fontFamily: 'var(--font-inter)', fontSize: '.75rem', color: 'rgba(255,255,255,.7)' }}>Privacy</Link>
              <Link href="#" style={{ fontFamily: 'var(--font-inter)', fontSize: '.75rem', color: 'rgba(255,255,255,.7)' }}>Terms</Link>
              <Link href="/sitemap.xml" style={{ fontFamily: 'var(--font-inter)', fontSize: '.75rem', color: 'rgba(255,255,255,.7)' }}>Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
