import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import ClientReveal from '@/components/ui/ClientReveal';
import FaqList from '@/components/ui/FaqList';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  faqs: { question: string; answer: string; }[];
  children: React.ReactNode;
}

export default function ServicePageTemplate({ title, subtitle, heroImage, faqs, children }: ServicePageProps) {
  return (
    <>
      <ClientReveal />

      {/* COMPACT HERO FOR SERVICE PAGES */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hi" style={{position: 'absolute', inset: 0, zIndex: -1}}><Image src={heroImage} alt={title} fill priority style={{objectFit: 'cover'}} /></div>
        <div className="ho"></div>
        <div className="hvl"><div className="hvd"></div></div>
        <div className="ctn" style={{ position: 'relative', zIndex: 10, paddingTop: '160px', paddingBottom: '60px' }}>
          <div className="hg" style={{ gridTemplateColumns: '1fr' }}>
            <div style={{ maxWidth: '800px' }}>
              <div className="ey rv"><div className="el"></div><span className="et">Red Stag Handyman Services</span></div>
              <h1 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: .93, color: '#fff', marginBottom: '1.2rem', textTransform: 'uppercase' }} className="rv">
                {title}
              </h1>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: 'clamp(1rem,1.4vw,1.15rem)', color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: '2rem' }} className="rv">
                {subtitle}
              </p>
              <div className="rv" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#estimate" className="btn br">Get Your Flat-Rate Quote &rarr;</a>
                <a href="tel:+13235551234" className="btn bo" style={{ color: '#fff' }}>(323) 555-1234</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dv" style={{ marginTop: '-2px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <rect width="1440" height="60" fill="#F5F2ED" />
          <path d="M0 0H440L480 30L520 0H920L960 30L1000 0H1440V60H0V0Z" fill="#0B1A2B" />
        </svg>
      </div>

      {/* MAIN CONTENT AREA */}
      <section className="sec" style={{ background: 'var(--cream)', padding: 'clamp(3rem,6vw,5rem) clamp(1.2rem,4vw,3rem)' }}>
        <div className="ctn" style={{ maxWidth: '900px' }}>
          <div className="content-body" style={{ fontFamily: 'var(--font-crimson)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--dark)' }}>
            {children}
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM & CTA BOTTOM */}
      <div className="dv"><svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}><rect width="1440" height="90" fill="#0B1A2B" /><path d="M0 90L1440 15V90H0Z" fill="#F5F2ED" /></svg></div>
      <section id="estimate" className="sec" style={{ background: 'var(--navy)' }}>
        <div className="ctn">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'center' }}>
            <div className="rl">
              <div className="ey"><div className="el"></div><span className="et" style={{ color: '#fff' }}>Free Estimate</span></div>
              <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.3rem)', color: '#fff', lineHeight: .95, marginBottom: '1.5rem' }}>SAME-DAY SERVICE.<br /><span style={{ color: 'var(--red)' }}>NO HIDDEN BILLS.</span></h2>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2rem' }}>We review your project, give you a flat-rate number, and we stick to it.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg><span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.85rem', color: '#fff', fontWeight: 500 }}>No obligation &mdash; 100% free</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg><span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.85rem', color: '#fff', fontWeight: 500 }}>We call back in under 30 minutes</span></div>
              </div>
            </div>
            <div className="rv">
              <div style={{ background: '#fff', padding: 'clamp(1.8rem,3.5vw,2.5rem)', border: '1px solid rgba(11,26,43,.06)' }}>
                <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--dark)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> Request Your Quote</div>
                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)' }} />
                <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)' }} />
                <textarea placeholder="Tell us what needs fixing..." style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '14px', outline: 'none', background: 'var(--cream)', minHeight: '90px', resize: 'vertical' }}></textarea>
                <button style={{ width: '100%', padding: '16px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-barlow)', fontSize: '.88rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background .3s' }}>Get My Free Estimate &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dv"><svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}><rect width="1440" height="90" fill="#F5F2ED" /><path d="M0 90L1440 0V90H0Z" fill="#0B1A2B" /></svg></div>

      {/* FAQ SECTION */}
      <section className="sec" style={{ background: 'var(--cream)', paddingBottom: '8rem' }}>
        <div className="ctn" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="rv">
            <div className="ey" style={{ justifyContent: 'center' }}><div className="el"></div><span className="et">Service FAQ</span><div className="el"></div></div>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)', lineHeight: .95 }}>QUESTIONS ABOUT <span style={{ color: 'var(--red)' }}>THIS SERVICE?</span></h2>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <style>{`
        .content-body h2 {
          font-family: var(--font-barlow);
          font-weight: 800;
          font-size: 2.2rem;
          color: var(--dark);
          margin: 2.5rem 0 1rem;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .content-body h3 {
          font-family: var(--font-barlow);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--navy);
          margin: 1.8rem 0 0.8rem;
          line-height: 1.2;
        }
        .content-body p {
          margin-bottom: 1.5rem;
        }
        .content-body ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .content-body li {
          margin-bottom: 0.5rem;
          font-style: italic;
        }
        .content-body .table-wrapper {
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid rgba(11,26,43,.1);
          background: #fff;
        }
        .content-body table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .content-body th, .content-body td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(11,26,43,.05);
        }
        .content-body th {
          background: var(--navy);
          color: #fff;
          font-family: var(--font-barlow);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: .05em;
          font-size: .9rem;
        }
        .content-body td {
          font-family: var(--font-crimson);
          color: var(--muted);
          font-size: .95rem;
        }
        .content-body .cta-box {
          background: rgba(200, 16, 46, .03);
          border-left: 4px solid var(--red);
          padding: 1.5rem;
          margin: 2rem 0;
        }
        .content-body .cta-box p {
          margin: 0 0 1rem 0;
          font-weight: 600;
          color: var(--navy);
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
}
