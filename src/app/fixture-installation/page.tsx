import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Fixture Installation Los Angeles | Red Stag Handyman',
  description: 'Fast, secure fixture installation in Los Angeles. From ceiling fans and heavy chandeliers to smart doorbell cameras. Professional, licensed handyman service.',
};

export default function FixtureInstallationPage() {
  const faqs = [
    {
      question: "Do you install smart home devices like Ring doorbells & Nest thermostats?",
      answer: "Yes, Red Stag Handyman technicians frequently complete smart home installation requests. We install Ring cameras, Nest/Ecobee thermostats (if the C-wire is present), smart locks, and automated lighting hubs perfectly out of the box."
    },
    {
      question: "Do I need an electrician to hang a ceiling fan?",
      answer: "If the electrical box in the ceiling is already heavily braced and wired specifically for a fan, our handymen can safely swap the fixture. However, if new wire needs to be pulled from the breaker box or the ceiling requires major electrical retrofitting, we legally cannot perform that work and you will need a licensed electrician."
    },
    {
      question: "Will you pick up the fixture from the store for me?",
      answer: "We prefer that the homeowner purchases the exact fixture (light, fan, or faucet) they want prior to our arrival. However, if requested, we can supply basic utility fixtures or coordinate a pickup for an additional convenience fee."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Fixture Installation" 
      subtitle="You bought the perfect light, fan, or smart doorbell. We take it out of the box and put it exactly where it belongs, securely and safely."
      heroImage="/images/hero.png"
      faqs={faqs}
    >
      <p><strong>What is fixture installation?</strong> Fixture installation is the professional mounting and wiring of pre-bought household items like ceiling fans, lighting pendants, bathroom faucets, or smart home devices into existing electrical or plumbing systems to instantly upgrade a room's aesthetic or function.</p>

      <h2>The Frustration of the Unopened Box</h2>
      <p>It's a common story in Los Angeles. You go to Lowe's or order a sleek new ceiling fan online. When the box arrives, you open it, look at the fifty different screws and confusing wiring diagrams, put the lid back on, and shove it into the garage for three months.</p>
      <p>Fixture installation sounds easy until you are standing on a wobbly ladder, your arms are burning, and you're trying to figure out which wire is the ground. Stop risking a fall or an electrical shock. Red Stag Handyman provides rapid, professional installation services so you can actually enjoy the upgrades you purchased.</p>

      <div className="cta-box rv">
        <p>Tired of looking at that box in your hallway?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Schedule Your Install Today &rarr;</a>
      </div>

      <h2>What We Install in Your Home</h2>
      <p>We handle the heavy lifting for cosmetic and functional upgrades. If the existing wiring and plumbing infrastructure is in place, our technicians can expertly swap and mount:</p>
      <ul>
        <li><strong>Ceiling Fan Installation:</strong> Balancing blades to remove humming/shaking, wiring remotes, and securing heavy motors.</li>
        <li><strong>Lighting Upgrades:</strong> Dropping in heavy chandeliers, flush-mount lighting, wall sconces, and bathroom vanity lights.</li>
        <li><strong>Smart Home Installation:</strong> Mounting Ring or Nest video doorbells, smart deadbolts, and Wi-Fi enabled thermostats.</li>
        <li><strong>Plumbing Fixtures:</strong> Faucet installation in kitchens and bathrooms, swapping out worn showerheads, and installing new bidets or toilet mechanisms.</li>
        <li><strong>Window Treatments:</strong> Precise blind installation, heavy curtain rod mounting into drywall studs, and plantation shutter fitting.</li>
      </ul>

      <h2>The Danger of Heavy Installations</h2>
      <p>Hanging a  ৪০-pound crystal chandelier or a high-velocity ceiling fan requires absolute precision. If a generic "guy with a drill" mounts a heavy fixture into pure drywall instead of anchoring it directly into a ceiling joist, catastrophe is inevitable. The fixture will eventually tear a hole in your ceiling and crash to the floor.</p>
      <p>Our fixture installation handyman service ensures that heavy items are anchored with extreme prejudice. If your existing electrical box cannot support the weight of a new fan, we will diagnose it immediately before proceeding, ensuring your family's safety underneath it.</p>

      <h2>Typical Costs for Fixture Swaps</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Installation Type</th>
              <th>Estimated Cost</th>
              <th>Time to Complete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Light Fixture Swap</td>
              <td>$150 – $200</td>
              <td>Less than 1 hour</td>
            </tr>
            <tr>
              <td>Ceiling Fan Installation</td>
              <td>$200 – $300</td>
              <td>1 to 2 hours</td>
            </tr>
            <tr>
              <td>Kitchen Faucet Replacement</td>
              <td>$175 – $250</td>
              <td>1 to 1.5 hours</td>
            </tr>
            <tr>
              <td>Smart Doorbell / Lock Setup</td>
              <td>$150 – $225</td>
              <td>1 hour</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Stop paying licensed electricians an exorbitant minimum fee just to swap out a simple dining room light. Red Stag Handyman offers upfront, transparent flat-rate pricing to handle your fixture upgrades safely and rapidly.</p>
    </ServicePageTemplate>
  );
}
