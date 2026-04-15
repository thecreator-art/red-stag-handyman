import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Senior Handyman Services Los Angeles | Red Stag Handyman',
  description: 'Compassionate, reliable handyman services for seniors in Los Angeles. Grab bar installation, wheelchair ramps, trip hazard removal, and ADA compliant modifications.',
};

export default function SeniorHandymanServicesPage() {
  const faqs = [
    {
      question: "Are your technicians background checked?",
      answer: "Absolutely. Every single Red Stag Handyman technician undergoes rigorous state and federal background checks before they are permitted to wear our uniform. Furthermore, we are fully licensed and bonded, providing maximum security and peace of mind when we enter your or your parents' home."
    },
    {
      question: "Do you install bathroom grab bars into tile or fiberglass?",
      answer: "Yes, installing heavy-duty grab bars securely into fiberglass shower surrounds, ceramic tile, and marble is one of our most highly requested senior services. We utilize specialized masonry and glass bits to prevent cracking the tile, and we anchor the hardware directly into the structural wooden studs behind the wall—never relying on flimsy plastic anchors that could pull out during a fall."
    },
    {
      question: "Can I manage and pay for the services remotely for my parents?",
      answer: "Yes. Many of our clients are adult children living out of state who need a reliable contractor in Los Angeles to handle their parents' home maintenance. We can coordinate the flat-rate quoting, scheduling, and digital payment entirely with you over the phone or via email, while treating your parents with the utmost patience and respect on-site."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Senior Handyman Services" 
      subtitle="Aging in place requires modifications. We provide patient, respectful, and fully background-checked technicians to make your home safer, immediately."
      heroImage="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What are senior handyman services?</strong> It is a specialized branch of home maintenance focused heavily on safety modifications—such as grab bar installation, ramp construction, and trip-hazard removal—delivered by extensively vetted, patient technicians trained to respect the home and the homeowner, allowing seniors to safely age in place.</p>

      <h2>The Risk of Aging in Place</h2>
      <p>The vast majority of seniors in Los Angeles fiercely prefer to stay in their own homes as they age. However, incredibly common household features—a slippery bathtub floor, a slightly raised threshold between the kitchen and the living room, or a loose stair railing—rapidly transform from minor annoyances into life-threatening hazards.</p>
      <p>A single fall can permanently alter the trajectory of a senior's independence. Preventative home modification is the most critical step you can take for yourself or for your aging parents.</p>

      <div className="cta-box rv">
        <p>Concerned about a slippery shower or a loose railing?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Schedule A Safety Upgrade &rarr;</a>
      </div>

      <h2>Specialized Safety Installations</h2>
      <p>Our senior services focus intensely on fall prevention and daily quality of life improvements. We routinely install:</p>
      <ul>
        <li><strong>Bathroom Safety:</strong> Heavy-duty, ADA-compliant grab bar installation securely anchored into studs (even through tough porcelain tile). Upgrading standard toilets to ADA-height models. Installing handheld shower wands and built-in shower seating.</li>
        <li><strong>Mobility Access:</strong> Constructing custom wooden wheelchair ramps over front steps, replacing round doorknobs with easy-to-press lever handles, and widening doorways if structurally feasible.</li>
        <li><strong>Trip Hazard Removal:</strong> Shaving down uneven flooring transitions, securing loose carpets, repairing bulging subfloors, and taping down heavy area rugs.</li>
        <li><strong>General Convenience:</strong> Pulling down heavy items from high shelves, changing high-ceiling light bulbs, swapping unreachable smoke detector batteries, and installing extremely bright motion-sensor lighting in hallways and along exterior pathways.</li>
      </ul>

      <h2>Trust and Patience Over Everything</h2>
      <p>We understand the intense vulnerability of letting a contractor into the home of an aging parent. Trust is the absolute currency of our senior service division. We do not hire "gig workers" off an app.</p>
      <p>Every Red Stag technician is a verified employee who has passed a rigorous background check. They arrive exactly on time, in a clean, clearly branded uniform, driving a marked vehicle. More importantly, they execute their work with extreme patience. They will happily explain what they are doing, answer questions kindly, and ensure the homeowner feels completely comfortable before, during, and after the repair process.</p>

      <h2>Remote Coordination for Adult Children</h2>
      <p>If you live out of state but your parents live in Sherman Oaks, managing their home maintenance is incredibly stressful. You can't be there to inspect the work or verify the contractor.</p>
      <p>Red Stag Handyman acts as your boots on the ground. You can call us, describe the issue, and we will dispatch a vetted tech. We can provide you with photos of the issue, a flat-rate quote for approval, and secure digital payment links. You handle the logistics seamlessly; we take care of your parents on-site respectfully.</p>

      <h2>Typical Costs for Senior Upgrades</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Modification Type</th>
              <th>Estimated Cost</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grab Bar Installation (Tile)</td>
              <td>$150 – $225 per bar</td>
              <td>Includes the specialized diamond-tip masonry drilling to prevent cracking the shower tile, and anchoring tightly into studs.</td>
            </tr>
            <tr>
              <td>Lever Door Hardware Swap</td>
              <td>$100 – $150</td>
              <td>Swapping out difficult round knobs for easy-to-use lever handles on entryways or bathrooms.</td>
            </tr>
            <tr>
              <td>Custom Entry Ramp</td>
              <td>$400 – $900+</td>
              <td>Varies heavily based on elevation and materials (custom-built pressure-treated wood vs. installing a pre-fab aluminum ramp).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Proactive modifications save lives. Contact Red Stag Handyman today to make aging in place safe, secure, and entirely stress-free.</p>
    </ServicePageTemplate>
  );
}
