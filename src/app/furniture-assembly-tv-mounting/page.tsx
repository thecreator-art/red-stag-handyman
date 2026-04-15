import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Furniture Assembly & TV Mounting Los Angeles | Red Stag Handyman',
  description: 'Flawless TV mounting and IKEA furniture assembly in Los Angeles. Wall mount experts who hide cables and strictly anchor into studs. Save your weekend.',
};

export default function FurnitureAssemblyTvMountingPage() {
  const faqs = [
    {
      question: "Do you hide the cables behind the wall when mounting a TV?",
      answer: "Yes, cable concealment is an optional upgrade for our TV mounting service. We can run your HDMI and power cables completely behind the drywall (if firewall building codes permit in that specific wall) using an in-wall rated wiring kit for a totally clean, floating look."
    },
    {
      question: "Can you mount a TV into metal studs or brick in a condo?",
      answer: "Absolutely. Many modern Los Angeles high-rises and condos utilize metal studs instead of traditional wood. We carry specialized heavy-duty toggle anchors specifically rated for metal studs, brick, and concrete, ensuring your TV is just as secure."
    },
    {
      question: "Do you build beds, dressers, and complex IKEA furniture?",
      answer: "Yes. Furniture assembly is one of our most requested services. Whether it's a complicated IKEA Pax wardrobe system, a hydraulic bed frame, or an outdoor patio set, our teams assemble it fast with zero leftover parts."
    }
  ];

  return (
    <ServicePageTemplate 
      title="TV Mounting & Furniture Assembly" 
      subtitle="Save your weekend and your sanity. Perfect, level TV mounting into structural studs, and fast, expert assembly of any flat-pack furniture."
      heroImage="https://plus.unsplash.com/premium_photo-1681406994503-456075902166?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is TV mounting and furniture assembly?</strong> It is the professional service of securely anchoring advanced electronics to walls using heavy-duty hardware and studs, and the rapid, correct construction of complex flat-pack retail furniture, eliminating the intense frustration and risk of DIY attempts.</p>

      <h2>The Risk of Doing It Yourself</h2>
      <p>We've all been there. You just spent $1,500 on a gorgeous 75-inch OLED TV. You buy a mount off Amazon, grab a stud finder that you barely trust, and start drilling holes into your living room wall. You hang the TV, step back, and realize it's croocked. Or worse—an hour later you hear a horrifying rip as the drywall gives way and your massive investment crashes into the floor.</p>
      <p>Similarly, nothing destroys a Saturday faster than opening a box of IKEA furniture and seeing 400 indistinguishable screws and a confusing diagram that looks like ancient hieroglyphics. Don't sacrifice your weekend to frustration. Red Stag Handyman provides elite TV mounting and furniture assembly services designed to get your home operational immediately.</p>

      <div className="cta-box rv">
        <p>Your TV deserves to be on the wall, not the floor.</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Schedule Professional TV Mounting &rarr;</a>
      </div>

      <h2>Expert TV Mounting Services in LA</h2>
      <p>Mounting a television securely in earthquake-prone Los Angeles requires absolute structural anchoring. We do not gamble with expensive electronics. Our technicians carry heavy-duty mounting hardware and utilize professional stud finders to ensure the mount is driven directly into load-bearing wood or metal studs.</p>
      <ul>
        <li><strong>Perfectly Level Positioning:</strong> We use laser levels to guarantee your screen is flawlessly straight.</li>
        <li><strong>All Wall Types:</strong> Standard drywall, plaster, brick fireplaces, and metal studs in high-rise condos.</li>
        <li><strong>Cable Concealment:</strong> We can drop your wires behind the drywall (where permitted by code) or install clean, paintable raceways to hide the ugly cord mess.</li>
        <li><strong>Soundbar & Shelf Mounting:</strong> We don't just hang the TV. We'll mount your Sonos soundbar or floating media consoles directly beneath it.</li>
      </ul>

      <h2>Rapid Furniture Assembly</h2>
      <p>Retailers are shifting entirely to flat-pack shipping. From Wayfair and Amazon to massive IKEA hauls, assembling modern furniture requires significant physical endurance and spatial reasoning. What takes a homeowner 5 hours to build with a tiny allen wrench, our professionals can assemble in 1 hour using specialized power tools and experience.</p>
      <p>We assemble bedroom sets, mechanical standing desks, intricate wardrobe systems, dining room tables, bookcases, and complex outdoor patio furniture. We build it efficiently, move it to exactly where you want it in the room, and take all the heavy cardboard boxes to your recycling bin when we leave.</p>

      <h2>Typical Costs for TV Mounting and Assembly</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Service Item</th>
              <th>Estimated Cost</th>
              <th>What's Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TV Mounting (Up to 65")</td>
              <td>$150 – $225</td>
              <td>Mounting to wood studs, leveling, attaching TV, connecting basic cables. (Mount bracket not included).</td>
            </tr>
            <tr>
              <td>TV Mounting (70"+ or Fireplace)</td>
              <td>$225 – $350</td>
              <td>Two-man heavy lifting crew, specialized masonry bits for brick fireplaces, securing ultra-heavy panels.</td>
            </tr>
            <tr>
              <td>In-Wall Cord Concealment</td>
              <td>$100 – $150 (Add-on)</td>
              <td>Cutting drywall boxes, dropping HDMI and power cords down the wall cavity, installing clean faceplates.</td>
            </tr>
            <tr>
              <td>Furniture Assembly</td>
              <td>$150 – $300+</td>
              <td>Priced primarily by complexity and size of the item (e.g., a simple chair vs. a massive, multi-drawer dresser unit).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Protect your expensive electronics and your free time. Call the exact team that property managers and busy LA professionals trust for their own mounting needs.</p>
    </ServicePageTemplate>
  );
}
