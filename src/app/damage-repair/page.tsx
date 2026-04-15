import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Damage Repair Los Angeles | Red Stag Handyman',
  description: 'Fast, professional repair for water damage, pet damage, and structural tenant damage across Los Angeles. We make your home whole again.',
};

export default function DamageRepairPage() {
  const faqs = [
    {
      question: "Do you fix walls after the plumber opens them up?",
      answer: "Yes, this is one of our most frequent requests. When plumbers fix a pipe in the wall, they cut a massive access hole and leave. They are not drywallers. We come in immediately behind them, patch the hole, texture match it, and paint it so you never know they were there."
    },
    {
      question: "Can you fix baseboards that my dog chewed?",
      answer: "Yes. Puppies commonly chew the corners of baseboards and door casings while teething. We can cut out the damaged wood section, splice in an identical piece, caulk it seamlessly, and paint it. The damage vanishes."
    },
    {
      question: "Do you repair termite damage?",
      answer: "We replace the wood that termites leave behind. Once a licensed exterminator has legally cleared your home and tented it, we come in, cut out the hollow, compromised wood (e.g., in fascia boards or patio covers), and install structurally sound wood replacements."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Property Damage Repair" 
      subtitle="From plumbers cutting access holes to puppies chewing door frames. After the dust settles, we come in and make your home whole again."
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is property damage repair?</strong> It is the specialty service of restoring a home's interior finishes—specifically drywall, baseboards, door casings, and structural wood—after it has been compromised by plumbing accidents, pet interactions, termite infestations, or reckless tenant behavior.</p>

      <h2>The Mess Left Behind</h2>
      <p>Your main plumbing line bursts cleanly inside the wall. You call an emergency plumber who rushes out, takes out a Sawzall, cuts a massive 4-foot by 4-foot square out of your living room wall, fixes the pipe, hands you a $3,000 bill, and leaves.</p>
      <p>Now you are staring at a massive, gaping hole exposing the insulation in your living room. The leak is fixed, but your house is destroyed. General contractors won't return your call for a single wall patch, leaving homeowners deeply frustrated. Red Stag Handyman is the rapid-response team you call after the emergency is over. We put your home back together.</p>

      <div className="cta-box rv">
        <p>Staring at an ugly hole after a plumbing repair?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Schedule Your Repair Today &rarr;</a>
      </div>

      <h2>Specialized Damage Scenarios We Fix</h2>
      <p>Homes take a beating in Los Angeles. We are heavily experienced in triaging and resolving specific types of cosmetic and structural damage, including:</p>
      <ul>
        <li><strong>Post-Plumbing / HVAC Access Holes:</strong> Patching massive access cuts in drywall and ceilings, installing new backing, and applying heavy texture matching so you never know the hole existed.</li>
        <li><strong>Pet Damage Mitigation:</strong> Replacing scratched doors (from dogs asking to go out), chewed wooden door casings, ruined baseboards, and ripped window screens.</li>
        <li><strong>Water Damage Repair (The Aftermath):</strong> Once the leak is stopped and the moisture is mitigated, we re-install the rotted drywall, cut out the warped MDF baseboards, and secure the room.</li>
        <li><strong>Termite Wood Replacement:</strong> After your home is aggressively exterminated and tented, we cut out the brittle, hollowed wood from your patio covers, fascia, and interior studs and splice in fresh, treated reinforcements.</li>
        <li><strong>Tenant Turnover Destruction:</strong> For property managers dealing with punched doors, kicked-in drywall, ripped-down curtain rods, or intensely stained fixtures, we swoop in and reset the unit for the next deposit.</li>
      </ul>

      <h2>The Red Stag Restoration Standard</h2>
      <p>When you are recovering from property damage, you want a contractor who will respect your home. Red Stag technicians arrive on time, heavily protect your floors and furniture with thick drop-cloths, mitigate the massive amounts of dust generated from sanding drywall, and execute the repair swiftly.</p>
      <p>Because we operate under a fully licensed structure in California, we handle all the structural risks legally. We do not apply "band-aid" fixes over rotting wood. We cut it out, and we fix it right.</p>

      <h2>Typical Costs for Damage Repair</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Damage Type</th>
              <th>Estimated Cost</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plumber Wall Patch</td>
              <td>$200 – $400</td>
              <td>Replacing the massive drywall cutout, applying multiple coats of mud, heavily texturing the seam, and painting.</td>
            </tr>
            <tr>
              <td>Chewed Baseboard / Casing Replacement</td>
              <td>$175 – $250</td>
              <td>Splicing in identical trim profiles, securing with finishing nails, caulking gaps, and prepping for paint.</td>
            </tr>
            <tr>
              <td>Water Damaged Wall Base</td>
              <td>$400 – $800+</td>
              <td>Removing the soggy bottom 2-feet of drywall, treating the studs for mold, and replacing the wall and trim.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ServicePageTemplate>
  );
}
