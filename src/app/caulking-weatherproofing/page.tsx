import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Caulking & Weatherproofing Los Angeles | Red Stag Handyman',
  description: 'Professional shower caulking and home weatherproofing services in Los Angeles. Stop water damage and lower your energy bills today.',
};

export default function CaulkingWeatherproofingPage() {
  const faqs = [
    {
      question: "Why is the caulk in my shower turning black?",
      answer: "Black spots in shower caulk are mold spores that have penetrated completely <i>behind</i> the silicone boundary due to microscopic tears. Bleach will temporarily fade the surface, but the mold will return immediately. The only permanent fix is to completely slice out the old caulk, treat the gap with an anti-microbial agent, and re-seal it with fresh 100% silicone."
    },
    {
      question: "How often should windows be re-caulked in Los Angeles?",
      answer: "Because Los Angeles experiences intense UV radiation combined with sudden, drastic temperature drops off the coast, exterior window caulking degrades much faster than in other climates—typically cracking and shrinking every 5 to 7 years. Once it cracks, your expensive AC is leaking straight into the neighborhood."
    },
    {
      question: "Can weatherstripping really lower my energy bills?",
      answer: "Yes, significantly. The US Department of Energy estimates that drafts from unsealed doors and windows account for up to 30% of a home's cooling and heating loss. Installing $250 worth of high-quality weatherstripping on your main exterior doors usually pays for itself in lower HVAC bills within a single summer."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Caulking & Weatherproofing" 
      subtitle="Stop water damage before it rots your frame, and stop your air conditioning from leaking out the front door. Precise sealing services."
      heroImage="/images/hero.png"
      faqs={faqs}
    >
      <p><strong>What is caulking and weatherproofing?</strong> It is the application of specialized silicone, acrylic sealants, and physical weatherstripping barriers around plumbing fixtures, windows, and doors to create an impenetrable seal against water intrusion and prevent indoor air from escaping.</p>

      <h2>The Silent Threat of Failing Caulk</h2>
      <p>Caulk is arguably the most important, least appreciated material in your home. A tiny bead of silicone in the corner of your bathtub is the only thing standing between the shower water and the wooden framing of your floor. When that caulk cracks, water silently seeps behind the tile. For months, you won't notice a thing. Then, the ceiling below the bathroom starts to stain. By the time you call a repairman, a missing $10 bead of caulk has caused $5,000 in structural wood rot and mold remediation.</p>
      <p>Preventative caulking maintenance is the single highest ROI investment you can make as a homeowner. Do not wait for the leak to show itself.</p>

      <div className="cta-box rv">
        <p>Seeing dark mold creeping behind your shower edges?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Get A Re-Caulking Quote &rarr;</a>
      </div>

      <h2>Interior Sealant Services</h2>
      <p>We provide comprehensive interior sealing focusing on wet zones where mold and water damage are highest risk:</p>
      <ul>
        <li><strong>Shower & Tub Re-Caulking:</strong> We meticulously dig out old, moldy, cracked caulk using specialized tools, thoroughly sanitize the gap, and lay a flawless, thick bead of premium 100% waterproof silicone.</li>
        <li><strong>Kitchen Sink & Backsplash Sealing:</strong> Preventing dishwater from seeping behind the countertops and swelling the particleboard cabinetry below.</li>
        <li><strong>Baseboard Sealing:</strong> Applying a clean line of painter's caulk between the baseboards and the wall for a seamless, high-end cosmetic finish prior to paint.</li>
      </ul>

      <h2>Exterior Weatherproofing for LA Climates</h2>
      <p>Los Angeles is hot. If you are running your central air conditioning all summer, but you can feel a warm breeze coming from under your front door or around your living room windows, you are literally throwing money into the street.</p>
      <ul>
        <li><strong>Door Draft Sweeps:</strong> Installing heavy-duty aluminum and rubber sweeps on the bottoms of all exterior doors to block drafts, bugs, and dust.</li>
        <li><strong>V-Seal Weatherstripping:</strong> Applying compression strips inside the door jambs so the door closes tightly against a soft seal.</li>
        <li><strong>Exterior Window Caulking:</strong> We inspect the exterior perimeter of your windows, slicing out dry-rotted sealant and replacing it with highly flexible exterior elastomeric caulk that expands and contracts with the intense LA sun without instantly cracking.</li>
      </ul>

      <h2>Typical Costs for Caulking and Sealing</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Estimated LA Cost</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shower Re-Caulking</td>
              <td>$175 – $250</td>
              <td>Labor intensive. Involves slicing out the old caulk cleanly—if you just caulk over old mold, the seal fails instantly.</td>
            </tr>
            <tr>
              <td>Kitchen Sink / Backsplash</td>
              <td>$150 – $200</td>
              <td>Sealing the perimeter of sinks and the junction where countertops meet the wall to prevent water swelling.</td>
            </tr>
            <tr>
              <td>Front Door Weatherstripping</td>
              <td>$150 – $225</td>
              <td>Installing a heavy-duty bottom sweep and applying compressed stripping around the inner frame perimeter.</td>
            </tr>
            <tr>
              <td>Whole-Home Exterior Window Sealing</td>
              <td>$500 – $1,000+</td>
              <td>Extensive exterior ladder work to re-bead the perimeter of aging windows, protecting against rain intrusion.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>A $200 investment today protects against thousands in damage tomorrow. Let the Red Stag team secure your home envelope.</p>
    </ServicePageTemplate>
  );
}
