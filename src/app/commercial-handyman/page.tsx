import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Commercial Handyman Services Los Angeles | Red Stag Handyman',
  description: 'Reliable, rapid commercial handyman services for property managers, retail stores, and offices in Los Angeles. Preventative maintenance and tenant turnovers.',
};

export default function CommercialHandymanPage() {
  const faqs = [
    {
      question: "Do you offer net-30 billing for property management companies?",
      answer: "Yes, for established commercial clients and high-volume property managers with verified accounts, we offer structured invoicing cycles. For ad-hoc one-off retail fixes, payment is due upon completion of the flat-rate service."
    },
    {
      question: "Can you send a technician out on the same day for a retail emergency?",
      answer: "Yes. In commercial environments, a broken door handle or a leaking restroom sink means lost revenue or severe liability. We maintain priority routing for our commercial partners and can usually dispatch a technician within hours across our 29-city LA footprint."
    },
    {
      question: "Do you carry the necessary commercial liability insurance?",
      answer: "Absolutely. We are fully licensed, bonded, and carry extensive commercial liability and workers' compensation insurance policies. We can easily provide your property management company with the necessary COIs (Certificates of Insurance) naming your building as an additional insured before stepping on site."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Commercial Handyman Services" 
      subtitle="The reliable, licensed maintenance partner that LA property managers and retail owners trust. Fast response, heavy liability coverage, zero headaches."
      heroImage="/images/hero.png"
      faqs={faqs}
    >
      <p><strong>What is commercial handyman service?</strong> It is the provision of dedicated, insured maintenance and repair services targeted entirely at businesses, retail storefronts, corporate offices, and property management firms, focusing on rapid response to mitigate physical liability and maintain brand aesthetics.</p>

      <h2>The Cost of Slow Maintenance</h2>
      <p>If you manage a retail store in Beverly Hills or a massive apartment complex in the Valley, deferred maintenance is incredibly expensive. A sticking entrance door frustrates customers. A cracked tile in the hallway becomes a massive slip-and-fall lawsuit waiting to happen. A unit whose previous tenant trashed the drywall sits empty—losing $3,000 a month in rent—because you can't find a contractor to patch it quickly.</p>
      <p>You do not have time to call five different specialists. You do not have time to vet whether the guy off the internet carries active workers' comp. You need a trusted, corporate-level partner who treats your properties with absolute precision. That is Red Stag Handyman.</p>

      <div className="cta-box rv">
        <p>Need a fast repair to get your storefront operational?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Request Commercial Dispatch &rarr;</a>
      </div>

      <h2>Our Commercial Offerings</h2>
      <p>We act as the heavily armed, fully-insured maintenance wing for businesses across Los Angeles County. We specialize in high-volume, low-friction resolutions:</p>
      <ul>
        <li><strong>Tenant Turnovers:</strong> When an apartment tenant moves out, the destruction can be severe. We patch the wall holes, fix the sticking hinges, re-caulk the shower, and replace broken fixtures so you can immediately put the unit back on the market.</li>
        <li><strong>Retail Aesthetics:</strong> When a fitting room mirror falls or shelving tracks break under heavy merchandise, we securely anchor everything back into metal studs so your store continues to look premium.</li>
        <li><strong>Liability Mitigation:</strong> Shaving down trip hazards on flooring transitions, securing loose stair handrails, and fixing broken heavy entryway doors.</li>
        <li><strong>Office Customizations:</strong> Mounting dozens of whiteboards perfectly level, hanging heavy presentation televisions in conference rooms, repairing broken corporate kitchen cabinet hinges, and assembling mass quantities of office furniture.</li>
      </ul>

      <h2>Why Property Managers Choose Red Stag</h2>
      <p>The Los Angeles commercial space is highly regulated. Using an unlicensed handyman in an apartment building you manage opens you up to catastrophic liability if that technician is injured on site. Red Stag Handyman eliminates that risk entirely.</p>
      <p>We are meticulously insured. We provide Certificates of Insurance swiftly. Our technicians are heavily vetted, background checked, uniquely uniformed, and trained to interact professionally with your tenants and customers. Furthermore, our flat-rate quote system means your accounting department never receives a surprise invoice inflated by hidden "hourly" overages.</p>

      <h2>Commercial Project Minimums</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Service Category</th>
              <th>Ideal For</th>
              <th>Dispatch Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One-Off Retail Repair</td>
              <td>Storefronts needing a broken door latch or shattered fitting room mirror mounted immediately.</td>
              <td>Same-Day Rush</td>
            </tr>
            <tr>
              <td>Apartment Unit Turnover</td>
              <td>Property managers needing punch lists executed (drywall, caulking, locks) before a new lease signs.</td>
              <td>Scheduled 24-48 Hours</td>
            </tr>
            <tr>
              <td>Retainer Maintenance</td>
              <td>Corporate offices requiring a technician on-site for 1 day a month to execute bulk fixes.</td>
              <td>Contracted Monthly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Stop managing unreliable vendors. Consolidate your maintenance with a tier-one LA brand. Partner with Red Stag.</p>
    </ServicePageTemplate>
  );
}
