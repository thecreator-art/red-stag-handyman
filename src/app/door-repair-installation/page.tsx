import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Door Repair & Installation Los Angeles | Red Stag Handyman',
  description: 'Stop living with a sticking door. Professional door repair, hardware replacement, and interior door installation in LA. Same-day service. Flat-rate quotes.',
};

export default function DoorRepairPage() {
  const faqs = [
    {
      question: "Can you fix an interior door that won't close properly?",
      answer: "Yes. Sticking or poorly latching doors are incredibly common in Los Angeles due to foundation settling and humidity changes fighting against older door frames. We can plane the door edges, shim the hinges, re-align the strike plate, or repair the frame to restore perfect closure."
    },
    {
      question: "Do you install new exterior front doors?",
      answer: "Red Stag Handyman primarily focuses on interior door swaps, screen door installation, security doors, and minor frame repairs. For full exterior front door replacements or heavy sliding glass door systems, we will refer you directly to our sister company, Red Stag Windows & Doors, for specialized structural installation."
    },
    {
      question: "How much does door repair cost?",
      answer: "Replacing a door knob or smart lock typically runs $150 to $200. Adjusting a sticking door or replacing interior hinges costs $150 to $250. Hanging a brand new pre-hung interior door typically ranges from $250 to $450 depending on the trim and framing required."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Door Repair & Installation" 
      subtitle="Stop living with that squeaking, sticking, annoying doorway. From closet bifold tracks to smart locks, we fix the entrance to every room in your home."
      heroImage="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is door repair services?</strong> Professional door repair involves the realignment, hardware replacement, framing adjustment, or complete swapping of residential doors to ensure they swing freely, latch securely, and block drafts, eliminating daily annoyances for the homeowner.</p>

      <h2>The Agitation of a Broken Door</h2>
      <p>A door that doesn't work properly is one of the most frustrating things a homeowner can endure. Every morning, you have to aggressively hip-check the bathroom door to get it to latch. The bifold doors in your bedroom closet jump off their flimsy top track every time you try to grab a jacket. The front door has a massive gap underneath it, letting out your expensive AC and letting in pests.</p>
      <p>You use your doors dozens of times a day. You shouldn't have to fight them. A professional door repairman near me is the fastest way to permanently restore peace to your household passing points.</p>

      <div className="cta-box rv">
        <p>Ready to make your doors swing smoothly again?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Get A Free Quote Today &rarr;</a>
      </div>

      <h2>Door Problems We Fix in Los Angeles</h2>
      <p>Los Angeles is home to an aging housing stock spanning from 1920s Craftsmans to 1960s Mid-Century Moderns. This means door frames are rarely completely plumb or square, leading to constant door friction. We don't just replace door handles—we completely troubleshoot the geometry of the opening. Here is what we handle:</p>
      <ul>
        <li><strong>Sticking & Squeaking:</strong> Planing down swollen wood, lubricating or replacing rusted hinges, and shimming hardware so the door floats effortlessly.</li>
        <li><strong>Hardware Swaps:</strong> Changing door knob installations out for modern ADA lever handles or high-security deadbolts.</li>
        <li><strong>Closet Systems:</strong> Extensive bifold door installation and repair, replacing broken top-tracks and bottom pivot pins.</li>
        <li><strong>Pocket Doors:</strong> Pocket door installation and repair. These are notorious in LA homes for coming off their interior wall tracks; we extract the door and replace the hanging rollers.</li>
        <li><strong>Screen & Security:</strong> Screen door installation to let the coastal breeze in, and heavy security door installation to keep intruders out.</li>
        <li><strong>Pet Accessibility:</strong> Precise doggie door installation cut perfectly through your existing solid core or hollow core interior doors.</li>
        <li><strong>Draft Control:</strong> Replacing door threshold plates and installing heavy-duty weatherstripping to lower energy bills.</li>
      </ul>

      <h2>Repair vs. Replacement</h2>
      <p>Most door issues can be fixed without throwing away the door itself. Usually, replacing door frames or chiseling out the strike plate ½ an inch lower corrects structural settling. However, if a hollow core door has been punched through or aggressively water damaged, replacing it is required.</p>
      <p>Please note: Red Stag Handyman specializes in interior doors and basic exterior utility doors. If you require a highly secure, custom exterior front entryway system or heavy patio sliding doors, we seamlessly hand that off to our dedicated branch, Red Stag Windows & Doors, for maximum structural security.</p>

      <h2>Typical Pricing for Door Installation Near Me</h2>
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
              <td>Hardware / Knob Swap</td>
              <td>$150 – $200</td>
              <td>Removing old hardware, chiseling out core if necessary, installing new knob or smart lock system.</td>
            </tr>
            <tr>
              <td>Door Plane & Adjustment</td>
              <td>$150 – $250</td>
              <td>Taking door off hinges, shaving the sticking edges down, sanding, and re-hanging perfectly plumb.</td>
            </tr>
            <tr>
              <td>Interior Prehung Door Install</td>
              <td>$250 – $450</td>
              <td>Removing existing slab and frame, installing new prehung frame, shimming, nailing trim casing, and testing latch.</td>
            </tr>
            <tr>
              <td>Security Screen Door Install</td>
              <td>$300 – $600</td>
              <td>Mounting heavy metal security frame into exterior stucco/wood casing, installing custom tamper-proof hinges.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ServicePageTemplate>
  );
}
