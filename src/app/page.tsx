import Image from 'next/image';
import Link from 'next/link';
import ClientReveal from '@/components/ui/ClientReveal';
import FaqList from '@/components/ui/FaqList';

export default function Home() {
  const faqs = [
    {
      question: "How much does a handyman charge in Los Angeles?",
      answer: "Most handyman jobs in LA cost between $150 and $500. Small fixes like a door knob or small drywall patch start around $150. Bigger punch lists run $300 to $800. Red Stag gives you a flat-rate quote before any work begins."
    },
    {
      question: "Do I need a licensed handyman in California?",
      answer: "California law requires a contractor's license for any job over $500 in combined labor and materials. Red Stag holds an active license and carries full liability insurance, so you're covered on every job regardless of size."
    },
    {
      question: "Can I get same-day handyman service in LA?",
      answer: "Yes. Same-day service is available across most of our 29-city coverage area in LA County. Call before noon and we can usually have a tech at your door by the afternoon. Emergency service runs 24/7."
    },
    {
      question: "What cities does Red Stag Handyman serve?",
      answer: "Red Stag Handyman serves 29 cities across Los Angeles County including Hollywood, Glendale, Burbank, Pasadena, Beverly Hills, Sherman Oaks, Santa Monica, Studio City, Long Beach, Encino, Calabasas, and more."
    },
    {
      question: "Is there a minimum service charge?",
      answer: "Our minimum is $150, which covers the first hour of work. Most small jobs like a knob swap, small patch, or fixture install finish within that first hour. Larger jobs are quoted flat-rate before we begin."
    }
  ];

  return (
    <>
      <ClientReveal />
      
      {/* HERO */}
      <section className="hero">
        <div className="hi"></div><div className="ho"></div>
        <div className="hvl"><div className="hvd"></div></div>
        <div className="ctn" style={{ position: 'relative', zIndex: 10, paddingTop: '140px', paddingBottom: '80px' }}>
          <div className="hg">
            <div>
              <div className="ey rv"><div className="el"></div><span className="et">Licensed & Insured &middot; Los Angeles County</span></div>
              <h1 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.8rem,7vw,5.6rem)', lineHeight: .93, color: '#fff', maxWidth: '700px', marginBottom: '1.2rem' }} className="rv">
                STOP STARING AT <span style={{ color: 'var(--red)' }}>YOUR TO-DO LIST.</span>
              </h1>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: 'clamp(1rem,1.4vw,1.12rem)', color: 'rgba(255,255,255,.4)', maxWidth: '440px', lineHeight: 1.75, marginBottom: '1.5rem' }} className="rv">
                One call. One team. Every small fix, repair, and install your home has been waiting for &mdash; handled by licensed LA pros who show up on time and don't leave until you're happy.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }} className="rv">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.35)', letterSpacing: '.06em' }}>WE CALL BACK IN UNDER 30 MINUTES</span>
              </div>
              <div className="hs rv">
                <div><div className="sn" data-count="15">0</div><div className="sl">Years in LA</div></div>
                <div><div className="sn" data-count="2500">0</div><div className="sl">Jobs Done</div></div>
                <div><div className="sn" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: 'clamp(1.5rem,3vw,2.6rem)', color: 'var(--red)' }}>4.9 &#9733;</div><div className="sl">Google Rating</div></div>
                <div><div className="sn" data-count="29">0</div><div className="sl">Cities Served</div></div>
              </div>
            </div>
            
            {/* HERO FORM */}
            <div className="hf rv">
              <div className="hft">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" style={{ marginRight: '5px', verticalAlign: 'middle' }}>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>Get Today's Estimate
              </div>
              <div className="hfs">No obligation. We call back in under 30 min.</div>
              <input type="text" className="fi" placeholder="Your Name" aria-label="Name" />
              <input type="tel" className="fi" placeholder="Phone Number" aria-label="Phone" />
              <select className="fi fs" aria-label="Service">
                <option value="">What do you need help with?</option>
                <option>General Handyman</option>
                <option>Drywall & Wall Repair</option>
                <option>Door Repair & Install</option>
                <option>Fixture Installation</option>
                <option>TV & Furniture Assembly</option>
                <option>Caulking & Sealing</option>
                <option>Window Repair</option>
                <option>Damage Repair</option>
                <option>Commercial</option>
                <option>Senior Services</option>
                <option>Other / Not Sure</option>
              </select>
              <button className="fb-btn">Get My Free Estimate &rarr;</button>
              <div className="hf-social">
                <span>127 homeowners booked this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="tb">
        <div className="tbi">
          <div className="tbg"><div className="tbc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>Licensed & Insured</div>
          <div className="tbg"><div className="tbc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>Background Checked</div>
          <div className="tbg"><div className="tbc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>Same-Day Available</div>
          <div className="tbg"><div className="tbc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>Happiness Guaranteed</div>
          <div className="tbg"><div className="tbc"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>150+ Five-Star Reviews</div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="mq">
        <div className="mt">
          <span className="mi">24-HOUR SERVICE &bull;</span><span className="mi">FREE ESTIMATES &bull;</span><span className="mi">HAPPINESS GUARANTEED &bull;</span><span className="mi">LICENSED &amp; INSURED &bull;</span><span className="mi">SAME-DAY AVAILABLE &bull;</span><span className="mi">BACKGROUND CHECKED &bull;</span><span className="mi">29 CITIES SERVED &bull;</span><span className="mi">NO JOB TOO SMALL &bull;</span>
          <span className="mi">24-HOUR SERVICE &bull;</span><span className="mi">FREE ESTIMATES &bull;</span><span className="mi">HAPPINESS GUARANTEED &bull;</span><span className="mi">LICENSED &amp; INSURED &bull;</span><span className="mi">SAME-DAY AVAILABLE &bull;</span><span className="mi">BACKGROUND CHECKED &bull;</span><span className="mi">29 CITIES SERVED &bull;</span><span className="mi">NO JOB TOO SMALL &bull;</span>
        </div>
      </div>

      <div className="dv">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}>
          <rect width="1440" height="90" fill="#C8102E" /><path d="M0 90L1440 0V90H0Z" fill="#F5F2ED" />
        </svg>
      </div>

      {/* WHY US */}
      <section className="sec" style={{ background: 'var(--cream)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .018, background: 'repeating-linear-gradient(45deg,var(--navy) 0px,var(--navy) 1px,transparent 1px,transparent 14px)' }}></div>
        <div className="ctn" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'center' }}>
            <div>
              <div className="ey rl"><div className="el"></div><span className="et">Why LA Homeowners Choose Us</span></div>
              <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.4rem)', color: 'var(--dark)', lineHeight: .95, marginBottom: '1.8rem' }} className="rv">
                YOUR TO-DO LIST ISN'T GETTING SHORTER.<br /><span style={{ color: 'var(--red)' }}>WE FIX THAT.</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.85, maxWidth: '450px', marginBottom: '2.2rem' }} className="rv">
                That leaky faucet. The door that sticks. The hole in the wall from last Thanksgiving. You've been meaning to fix it for months. Red Stag shows up, knocks out the whole list, and leaves your home better than we found it.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }} className="rv">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ minWidth: '22px', height: '22px', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.9rem', color: 'var(--dark)' }}>Licensed & insured</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', color: 'var(--muted)', }}>CA contractor license on file &mdash; you're protected</div></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ minWidth: '22px', height: '22px', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.9rem', color: 'var(--dark)' }}>Same-day service</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', color: 'var(--muted)', }}>Call before noon, we're at your door by afternoon</div></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ minWidth: '22px', height: '22px', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.9rem', color: 'var(--dark)' }}>Flat-rate quotes</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', color: 'var(--muted)', }}>You know the price before we pick up a tool</div></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ minWidth: '22px', height: '22px', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.9rem', color: 'var(--dark)' }}>We clean up after ourselves</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.85rem', color: 'var(--muted)', }}>Your home is cleaner when we leave than when we arrive</div></div>
                </div>
              </div>
            </div>
            <div className="rv">
              <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" alt="Red Stag handyman professional repairing drywall in Los Angeles home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" width={800} height={600} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(11,26,43,.6),transparent 50%)' }}></div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ background: 'var(--navy)', padding: '14px 22px' }}>
                    <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.8rem', color: '#fff', lineHeight: 1 }}>30 min</div>
                    <div style={{ fontFamily: 'var(--font-barlow)', fontSize: '.55rem', fontWeight: 500, color: 'rgba(255,255,255,.4)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '2px' }}>Callback time</div>
                  </div>
                  <div style={{ background: 'rgba(11,26,43,.85)', padding: '14px 22px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.8rem', color: 'var(--red)', lineHeight: 1 }}>100%</div>
                    <div style={{ fontFamily: 'var(--font-barlow)', fontSize: '.55rem', fontWeight: 500, color: 'rgba(255,255,255,.35)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '2px' }}>Guaranteed</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '16px', right: '16px', width: '45px', height: '45px', borderTop: '2px solid rgba(255,255,255,.08)', borderRight: '2px solid rgba(255,255,255,.08)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dv">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ height: '80px' }}>
          <rect width="1440" height="80" fill="#F5F2ED" />
          <path d="M0 45C120 20 240 60 360 35C480 10 600 55 720 40C840 25 960 50 1080 30C1200 10 1320 45 1440 25V80H0V45Z" fill="#0B1A2B" />
        </svg>
      </div>

      {/* SERVICES */}
      <section id="services" className="sec" style={{ background: 'var(--navy)' }}>
        <div className="ctn">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="rv">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,.08)' }}></div>
              <svg width="16" height="16" viewBox="0 0 64 64" fill="none"><path d="M32 56V28M32 28C27 20 18 12 10 6M32 28C37 20 46 12 54 6" stroke="rgba(200,16,46,.4)" strokeWidth="2.5" strokeLinecap="round" /></svg>
              <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,.08)' }}></div>
            </div>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,5vw,3.6rem)', color: '#fff', lineHeight: .93 }}>
              EVERY FIX YOUR HOME <span style={{ color: 'var(--red)' }}>HAS BEEN WAITING FOR.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, color: 'rgba(255,255,255,.25)', maxWidth: '440px', margin: '.8rem auto 0', fontSize: '.95rem', lineHeight: 1.7 }}>
              10 handyman services. One team. Licensed across all of LA County.
            </p>
          </div>
          <div className="sg">
            <Link href="/handyman-services/" className="sc"><div className="snn">01</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div><h3 className="st">General Handyman</h3><p className="sd">That entire to-do list you've been staring at? Hand it to us. We'll knock it out in one visit.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/drywall-repair/" className="sc"><div className="snn">02</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div><h3 className="st">Drywall & Wall Repair</h3><p className="sd">Holes, cracks, water stains. We patch it, texture-match it, paint it. Gone by afternoon.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/door-repair-installation/" className="sc"><div className="snn">03</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17h7"/></svg></div><h3 className="st">Door Repair & Install</h3><p className="sd">That door that's been sticking since you moved in? Fixed. Screens, knobs, frames &mdash; all of it.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/fixture-installation/" className="sc"><div className="snn">04</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/></svg></div><h3 className="st">Fixture Installation</h3><p className="sd">Bought a new light? Smart doorbell? Ceiling fan? You unbox it, we install it. Today.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/furniture-assembly-tv-mounting/" className="sc"><div className="snn">05</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg></div><h3 className="st">TV & Furniture Assembly</h3><p className="sd">Wall-mounted right. IKEA assembled right. Zero holes in the wrong spot, guaranteed.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/caulking-weatherproofing/" className="sc"><div className="snn">06</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg></div><h3 className="st">Caulking & Sealing</h3><p className="sd">Shower caulk cracking? Windows drafty? A $200 seal job today saves a $5K water bill tomorrow.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/window-repair/" className="sc"><div className="snn">07</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><h3 className="st">Window Repair</h3><p className="sd">Stuck, foggy, or won't latch? We fix the window. If it needs replacing, our sister company handles that.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/damage-repair/" className="sc"><div className="snn">08</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 className="st">Damage Repair</h3><p className="sd">After the plumber leaves or the termite company finishes &mdash; we come in and make the walls whole again.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/commercial-handyman/" className="sc"><div className="snn">09</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10h10M7 14h10M12 2v20"/></svg></div><h3 className="st">Commercial Services</h3><p className="sd">Property managers: one handyman on retainer replaces five separate specialty calls. We handle turnovers.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
            <Link href="/senior-handyman-services/" className="sc"><div className="snn">10</div><div className="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h3 className="st">Senior Services</h3><p className="sd">Grab bars, lever handles, ramp installs. Patient, respectful techs who treat your parents' home like their own.</p><div className="sll">Learn More <span>&rarr;</span></div></Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="rv"><a href="#estimate" className="btn br">Get Today's Estimate &rarr;</a></div>
        </div>
      </section>


      {/* PROCESS */}
      <section id="process" className="sec" style={{ background: 'var(--cream)' }}>
        <div className="ctn">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="rv">
            <div className="ey" style={{ justifyContent: 'center' }}><div className="el"></div><span className="et">How It Works</span><div className="el"></div></div>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.3rem)', color: 'var(--dark)', lineHeight: .95 }}>FOUR STEPS. <span style={{ color: 'var(--red)' }}>ZERO HEADACHES.</span></h2>
          </div>
          <div className="pcg rv">
            <div className="pc"><div style={{ position: 'absolute', top: '8px', right: '14px', fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '3.5rem', color: 'rgba(11,26,43,.04)', lineHeight: 1 }}>01</div><div style={{ marginBottom: '.8rem' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg></div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.68rem', color: 'var(--muted)', letterSpacing: '.15em', marginBottom: '.3rem' }}>STEP 01</div><h3 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--dark)', textTransform: 'uppercase', marginBottom: '.7rem' }}>You Call or Click</h3><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.92rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75 }}>Tell us what's bugging you. Snap a photo if you want. We get back to you in under 30 minutes.</p></div>
            <div className="pc"><div style={{ position: 'absolute', top: '8px', right: '14px', fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '3.5rem', color: 'rgba(11,26,43,.04)', lineHeight: 1 }}>02</div><div style={{ marginBottom: '.8rem' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.68rem', color: 'var(--muted)', letterSpacing: '.15em', marginBottom: '.3rem' }}>STEP 02</div><h3 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--dark)', textTransform: 'uppercase', marginBottom: '.7rem' }}>We Quote It Flat</h3><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.92rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75 }}>No hourly surprises. No hidden fees. You see the number, you approve it, then we schedule.</p></div>
            <div className="pc"><div style={{ position: 'absolute', top: '8px', right: '14px', fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '3.5rem', color: 'rgba(11,26,43,.04)', lineHeight: 1 }}>03</div><div style={{ marginBottom: '.8rem' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg></div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.68rem', color: 'var(--muted)', letterSpacing: '.15em', marginBottom: '.3rem' }}>STEP 03</div><h3 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--dark)', textTransform: 'uppercase', marginBottom: '.7rem' }}>We Show Up & Fix</h3><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.92rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75 }}>On time. Uniformed. Equipped. We protect your floors, do the work, and clean up everything.</p></div>
            <div className="pc"><div style={{ position: 'absolute', top: '8px', right: '14px', fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '3.5rem', color: 'rgba(11,26,43,.04)', lineHeight: 1 }}>04</div><div style={{ marginBottom: '.8rem' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.68rem', color: 'var(--muted)', letterSpacing: '.15em', marginBottom: '.3rem' }}>STEP 04</div><h3 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--dark)', textTransform: 'uppercase', marginBottom: '.7rem' }}>You Walk & Approve</h3><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.92rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75 }}>We walk every job with you. Not happy? We fix it before we leave. That's the guarantee.</p></div>
          </div>
        </div>
      </section>
      
      <div className="dv"><svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}><rect width="1440" height="90" fill="#F5F2ED" /><path d="M0 90L1440 0V90H0Z" fill="#0B1A2B" /></svg></div>

      {/* REVIEWS */}
      <section id="reviews" className="sec" style={{ background: 'var(--navy)' }}>
        <div className="ctn">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} className="rv">
            <div className="ey" style={{ justifyContent: 'center' }}><div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,.08)' }}></div><span className="et">What Homeowners Say</span><div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,.08)' }}></div></div>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.3rem)', color: '#fff', lineHeight: .95 }}>THEY CALLED FOR A FIX.<br /><span style={{ color: 'var(--red)' }}>THEY STAYED FOR LIFE.</span></h2>
            <p style={{ fontFamily: 'var(--font-barlow)', fontWeight: 600, fontSize: '.82rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.08em', marginTop: '.8rem' }}>4.9 &#9733; AVERAGE &middot; 150+ VERIFIED GOOGLE REVIEWS</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,330px),1fr))', gap: '1.3rem' }} className="rv">
            <div className="rc"><div style={{ position: 'absolute', top: '14px', right: '18px', fontFamily: 'var(--font-crimson)', fontSize: '4.5rem', lineHeight: 1, color: 'rgba(200,16,46,.05)', }}>&ldquo;</div><div style={{ color: 'var(--red)', fontSize: '.85rem', letterSpacing: '2px', marginBottom: '.8rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.95rem', fontWeight: 300, color: 'rgba(11,26,43,.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>&ldquo;Called at 9am about a doorknob hole. They were here by 1pm. Patched it, matched the texture, painted. You literally cannot tell. This is my handyman for life.&rdquo;</p><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '38px', height: '38px', background: 'var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow)', fontWeight: 800, color: 'var(--navy)', fontSize: '.95rem' }}>S</div><div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.88rem', color: 'var(--dark)' }}>Sarah M.</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.78rem', color: 'var(--muted)', }}>Sherman Oaks</div></div></div></div>
            <div className="rc"><div style={{ position: 'absolute', top: '14px', right: '18px', fontFamily: 'var(--font-crimson)', fontSize: '4.5rem', lineHeight: 1, color: 'rgba(200,16,46,.05)', }}>&ldquo;</div><div style={{ color: 'var(--red)', fontSize: '.85rem', letterSpacing: '2px', marginBottom: '.8rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.95rem', fontWeight: 300, color: 'rgba(11,26,43,.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>&ldquo;14 things bugging me for months. Red Stag knocked out every single one in an afternoon. Doors, outlets, ceiling fan, a loose railing. All handled. Incredible.&rdquo;</p><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '38px', height: '38px', background: 'var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow)', fontWeight: 800, color: 'var(--navy)', fontSize: '.95rem' }}>M</div><div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.88rem', color: 'var(--dark)' }}>Marcus T.</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.78rem', color: 'var(--muted)', }}>Glendale</div></div></div></div>
            <div className="rc"><div style={{ position: 'absolute', top: '14px', right: '18px', fontFamily: 'var(--font-crimson)', fontSize: '4.5rem', lineHeight: 1, color: 'rgba(200,16,46,.05)', }}>&ldquo;</div><div style={{ color: 'var(--red)', fontSize: '.85rem', letterSpacing: '2px', marginBottom: '.8rem' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style={{ fontFamily: 'var(--font-crimson)', fontSize: '.95rem', fontWeight: 300, color: 'rgba(11,26,43,.55)', lineHeight: 1.8, marginBottom: '1.5rem' }}>&ldquo;Hired them for grab bars in my mother's Craftsman home. So patient, so respectful. They noticed a loose stair railing and fixed it unprompted. That's genuine care.&rdquo;</p><div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '38px', height: '38px', background: 'var(--bone)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-barlow)', fontWeight: 800, color: 'var(--navy)', fontSize: '.95rem' }}>J</div><div><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.88rem', color: 'var(--dark)' }}>Jennifer L.</div><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.78rem', color: 'var(--muted)', }}>Pasadena</div></div></div></div>
          </div>
        </div>
      </section>

      <div className="dv"><svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ height: '100px' }}><rect width="1440" height="100" fill="#0B1A2B" /><path d="M0 100L1440 15V100H0Z" fill="#F5F2ED" /><path d="M0 100L1440 25V30L0 100Z" fill="var(--navy)" opacity=".08" /></svg></div>

      {/* ESTIMATE FORM + MAP */}
      <section id="estimate" className="sec" style={{ background: 'var(--cream)' }}>
        <div className="ctn">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 'clamp(3rem,6vw,5rem)', alignItems: 'start' }}>
            <div className="rl">
              <div className="ey"><div className="el"></div><span className="et">Free Estimate</span></div>
              <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.3rem)', color: 'var(--dark)', lineHeight: .95, marginBottom: '1.5rem' }}>TELL US WHAT'S BROKEN.<br /><span style={{ color: 'var(--red)' }}>WE'LL TELL YOU WHAT IT COSTS.</span></h2>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2rem' }}>Flat-rate quote. No obligation. No surprises. You approve the price before we pick up a single tool.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg><span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.85rem', color: 'var(--text)', fontWeight: 500 }}>No obligation &mdash; 100% free</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg><span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.85rem', color: 'var(--text)', fontWeight: 500 }}>We call back in under 30 minutes</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /></svg><span style={{ fontFamily: 'var(--font-barlow)', fontSize: '.85rem', color: 'var(--text)', fontWeight: 500 }}>Flat-rate &mdash; no hourly surprises</span></div>
              </div>
              <div style={{ padding: '1.2rem', background: 'var(--navy)' }}><div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '.78rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.08em', marginBottom: '.2rem' }}>PREFER TO CALL?</div><a href="tel:+13235551234" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.6rem', color: '#fff', letterSpacing: '.04em' }}>(323) 555-1234</a><div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.78rem', color: 'rgba(255,255,255,.25)', marginTop: '.2rem' }}>Mon&ndash;Sat 7am&ndash;7pm &middot; Emergency 24/7</div></div>
            </div>
            <div className="rv">
              <div style={{ background: '#fff', padding: 'clamp(1.8rem,3.5vw,2.5rem)', border: '1px solid rgba(11,26,43,.06)' }}>
                <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--dark)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> Request Your Free Quote</div>
                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)' }} aria-label="Full Name" />
                <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)' }} aria-label="Phone" />
                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)' }} aria-label="Email" />
                <select style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '10px', outline: 'none', background: 'var(--cream)', appearance: 'none', cursor: 'pointer', color: 'var(--muted)' }} aria-label="Service"><option value="">Select a Service</option><option>General Handyman</option><option>Drywall & Wall Repair</option><option>Door Repair & Install</option><option>Fixture Installation</option><option>TV & Furniture Assembly</option><option>Caulking & Sealing</option><option>Window Repair</option><option>Damage Repair</option><option>Commercial</option><option>Senior Services</option><option>Other</option></select>
                <textarea placeholder="Tell us what needs fixing..." style={{ width: '100%', padding: '13px 16px', border: '1px solid rgba(11,26,43,.1)', fontFamily: 'var(--font-crimson)', fontSize: '.95rem', marginBottom: '14px', outline: 'none', background: 'var(--cream)', minHeight: '90px', resize: 'vertical' }} aria-label="Details"></textarea>
                <button style={{ width: '100%', padding: '16px', background: 'var(--red)', color: '#fff', fontFamily: 'var(--font-barlow)', fontSize: '.88rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background .3s' }}>Get My Free Estimate &rarr;</button>
                <div style={{ fontFamily: 'var(--font-crimson)', fontSize: '.73rem', color: 'var(--muted)', textAlign: 'center', marginTop: '.7rem' }}>No spam. We respect your time and your inbox.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dv"><svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}><rect width="1440" height="90" fill="#F5F2ED" /><path d="M0 90L1440 0V90H0Z" fill="#0B1A2B" /></svg></div>

      {/* AREAS + MAP */}
      <section id="areas" className="sec" style={{ background: 'var(--navy)' }}>
        <div className="ctn">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div className="rl">
              <div className="ey"><div style={{ width: '35px', height: '1.5px', background: 'rgba(200,16,46,.3)' }}></div><span className="et">Service Areas</span></div>
              <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.1rem,4.5vw,3.3rem)', color: '#fff', lineHeight: .95, marginBottom: '1.3rem' }}>WE COME TO YOU.<br /><span style={{ color: 'var(--red)' }}>ANYWHERE IN LA.</span></h2>
              <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, color: 'rgba(255,255,255,.3)', lineHeight: 1.8, maxWidth: '380px', marginBottom: '1.5rem', fontSize: '1rem' }}>29 cities across Los Angeles County. Same-day service in most areas. If you're in LA, we're at your door.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '2rem' }}>
                <span className="ct">Hollywood</span><span className="ct">West Hollywood</span><span className="ct">Silver Lake</span><span className="ct">Los Feliz</span><span className="ct">Echo Park</span><span className="ct">Glendale</span><span className="ct">Burbank</span><span className="ct">Studio City</span><span className="ct">Sherman Oaks</span><span className="ct">North Hollywood</span><span className="ct">Toluca Lake</span><span className="ct">Pasadena</span><span className="ct">Beverly Hills</span><span className="ct">Bel Air</span><span className="ct">Brentwood</span><span className="ct">Santa Monica</span><span className="ct">Culver City</span><span className="ct">Eagle Rock</span><span className="ct">Highland Park</span><span className="ct">Atwater Village</span><span className="ct">La Ca&ntilde;ada Flintridge</span><span className="ct">Long Beach</span><span className="ct">Encino</span><span className="ct">Tarzana</span><span className="ct">Woodland Hills</span><span className="ct">Calabasas</span><span className="ct">Arcadia</span><span className="ct">Monrovia</span><span className="ct">Downey</span>
              </div>
            </div>
            <div className="rv" style={{ height: '100%', minHeight: '400px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405779905!2d-118.69192113701154!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1" width="100%" height="100%" style={{ border: 0, minHeight: '400px', filter: 'grayscale(.35) contrast(1.05)' }} allowFullScreen loading="lazy" title="Red Stag Handyman Service Area Los Angeles County"></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="dv"><svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ height: '110px' }}><rect width="1440" height="110" fill="#0B1A2B" /><path d="M0 50C180 90 360 10 540 50C720 90 900 10 1080 50C1260 90 1350 30 1440 60V110H0V50Z" fill="#F5F2ED" /></svg></div>

      {/* FAQ */}
      <section id="faq" className="sec" style={{ background: 'var(--cream)' }}>
        <div className="ctn" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="rv">
            <div className="ey" style={{ justifyContent: 'center' }}><div className="el"></div><span className="et">FAQ</span><div className="el"></div></div>
            <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)', lineHeight: .95 }}>QUESTIONS WE GET <span style={{ color: 'var(--red)' }}>EVERY DAY.</span></h2>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* CTA BAND */}
      <div className="dv"><svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ height: '90px' }}><rect width="1440" height="90" fill="#F5F2ED" /><path d="M0 90L1440 15V90H0Z" fill="#C8102E" /></svg></div>
      <section className="sec cta-band" style={{ background: 'var(--red)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="cta-p"></div>
        <div className="ctn" style={{ position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: 'clamp(2.3rem,5.5vw,3.8rem)', color: '#fff', lineHeight: .93, marginBottom: '.8rem' }} className="rv">THAT LIST ISN'T FIXING ITSELF.</h2>
          <p style={{ fontFamily: 'var(--font-crimson)', fontWeight: 300, fontSize: '1.1rem', color: 'rgba(255,255,255,.7)', maxWidth: '440px', margin: '0 auto 2.2rem', lineHeight: 1.7 }} className="rv">Free estimate. Same-day available. One call.</p>
          <div className="rv" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+13235551234" className="btn bd" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (323) 555-1234
            </a>
            <a href="#estimate" className="btn bo">Request Online &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}
