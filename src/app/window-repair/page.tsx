import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Window Repair Los Angeles | Red Stag Handyman',
  description: 'Expert residential window repair in LA. We fix stuck sashes, broken latches, torn screens, and draft leaks quickly and affordably.',
};

export default function WindowRepairPage() {
  const faqs = [
    {
      question: "Do you repair cracked or shattered window glass?",
      answer: "No. Red Stag Handyman specializes in the mechanical and structural operation of the window (the tracking, latches, framing, and screens). If the actual double-pane glass is shattered or has lost its argon gas seal (appearing foggy), you will need to call a dedicated local glazier to replace the glass unit."
    },
    {
      question: "Why is my window so hard to open?",
      answer: "Usually, it's caused by dirt and debris caking inside the track over several years, or the balance springs (which counteract the weight of the sash) snapping. In older wooden homes, layers of paint can physically glue the sash shut. We clean the tracks, lubricate the channels, and can free up stuck sashes."
    },
    {
      question: "Can you fix torn window screens?",
      answer: "Yes, window screen replacement is a very common service. Ripped screens let in mosquitoes and spiders. We remove the frame, pull out the old spline, roll in heavy-duty fiberglass or pet-resistant mesh, and reinstall it looking brand new."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Window Repair" 
      subtitle="Stuck sashes, broken locks, torn screens, and severe drafts. We get your windows sliding smoothly and locking securely."
      heroImage="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is window repair?</strong> Window repair focuses on restoring the mechanical functionality of a window—freeing painted-shut sashes, replacing malfunctioning locks, repairing tracks for smooth opening, and replacing torn screens, without having to undergo a highly expensive full-frame window replacement.</p>

      <h2>The Danger of Malfunctioning Windows</h2>
      <p>In Los Angeles, a functional window is a literal lifeline. When the marine layer burns off and the afternoon heat hits, being able to crack a window for cross-ventilation keeps your home livable. But windows that won't slide essentially trap you. Conversely, ground-floor windows with broken latches that cannot properly lock are a massive security liability for your family, serving as a bright green light for intruders.</p>
      <p>Many homeowners assume a broken window means they have to spend $1,500 entirely replacing it. For mechanical issues, this is rarely true. Our technicians specialize in diagnosing the track and lock mechanisms to get the unit completely operational for a fraction of the cost.</p>

      <div className="cta-box rv">
        <p>Is your ground-floor window failing to lock securely?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Secure Your Home Today &rarr;</a>
      </div>

      <h2>Mechanical Window Fixes</h2>
      <p>We work on sliding windows, single-hung, and double-hung residential windows throughout LA County. Our common window repair services include:</p>
      <ul>
        <li><strong>Freeing Stuck Windows:</strong> Older wooden homes in Pasadena or Hollywood often feature windows that have been painted over multiple times, gluing them completely shut. We carefully score the paint lines, pry the sashes loose, sand the channels, and restore movement without destroying the wood.</li>
        <li><strong>Lock & Latch Replacement:</strong> If the sweep lock snaps off your vinyl window, you can't secure your home. We drill out the old hardware and mount heavy-duty replacement locks that actually latch tight.</li>
        <li><strong>Track Cleaning & Lubrication:</strong> Aluminum sliders running roughly? We extract the window, deep clean the caked mud and pet hair out of the bottom track, lubricate it with dry silicone spray (which doesn't attract dirt like WD-40), and restore glide.</li>
        <li><strong>Window Screen Replacement:</strong> We re-screen torn or sun-rotted window screens directly on-site, including the option to install heavy "pet mesh" that resists claws.</li>
      </ul>

      <h2>When to Repair vs. Fully Replace</h2>
      <p>Our goal is to save you money by repairing the mechanics of your existing window. However, if the frame itself is heavily dry-rotted from water damage, or the dual-pane glass seal has failed causing massive internal fogging, a handyman repair is no longer sufficient.</p>
      <p>In cases where the structural integrity of the window has completely failed, we refer our clients to our dedicated sister company, Red Stag Windows & Doors, who handle full-frame exterior replacements seamlessly.</p>

      <h2>Typical Costs for Window Repair</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Estimated Cost</th>
              <th>What's Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Latch/Lock Replacement</td>
              <td>$150 – $200</td>
              <td>Removing stripped screws, drilling new anchor points, installing the new locking mechanism so the window is perfectly secure.</td>
            </tr>
            <tr>
              <td>Un-sticking Painted Windows</td>
              <td>$175 – $250</td>
              <td>Slow, delicate work involving sharp glazing knives to separate generations of paint holding wooden sashes shut.</td>
            </tr>
            <tr>
              <td>Window Screen Re-Meshing</td>
              <td>$150 – $200</td>
              <td>Extracting the old mesh and rolling in new fiberglass mesh for up to 3 screens in a single service visit.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ServicePageTemplate>
  );
}
