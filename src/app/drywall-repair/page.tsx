import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Drywall Repair Los Angeles | Red Stag Handyman',
  description: 'Professional drywall repair in Los Angeles. Flawless patches, water damage replacement, and perfect texture matching. Same-day service available. Call for a flat-rate quote.',
};

export default function DrywallRepairPage() {
  const faqs = [
    {
      question: "How much does drywall repair cost in LA?",
      answer: "In Los Angeles, drywall repair generally costs between $150 and $500. A small fist-sized hole usually falls between $100–$175. Medium damage (like a major water leak patch) is $200–$400, while replacing the sheetrock on an entire wall section can run upwards of $500 to $1,500 depending on texture matching complexity."
    },
    {
      question: "Can you match my existing wall texture?",
      answer: "Absolutely. Los Angeles homes have highly diverse wall textures—from heavy Spanish knockdown and standard orange peel, to smooth levels 4 and 5 finishes in modern homes. Our technicians specialize in blending the edges of the patch and replicating your specific texture so the repair completely vanishes."
    },
    {
      question: "How long does drywall repair take?",
      answer: "A standard hole or patch takes roughly 1.5 to 2.5 hours total. This involves setting the backing, applying the compound, force-drying it, sanding, shooting texture, and painting it. Large scale water damage or extensive termite damage repair may require a full day or a return visit if the joint compound needs an overnight cure."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Drywall & Wall Repair" 
      subtitle="Flawless patches, water damage remediation, perfectly matched textures, and fresh paint. We make holes disappear."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is drywall repair?</strong> Drywall repair (or sheetrock repair) is the meticulous process of cutting out compromised gypsum board—due to accidental holes, plumbing leaks, or settling cracks—installing new backing, applying specialized joint compound, blending the wall texture perfectly with the existing surface, and fully repainting it.</p>

      <h2>The Reality of Drywall Damage</h2>
      <p>Drywall damage in a home usually happens quickly and without warning. A doorknob gets slammed into a bedroom wall. A slow leak behind the bathroom tile turns the drywall to mush. You try to remove a tightly secured mounted TV, and an aggressive tug rips out an enormous chunk of plaster. Or, like many older homes throughout Los Angeles, natural structural settling creates long, unsightly hairline cracks across your vaulted ceilings.</p>
      <p>Whatever caused it, that hole becomes the only thing you see every time you walk into the room. It makes an otherwise beautiful home feel instantly neglected. Finding high-quality drywall repair near me hasn't always been easy in LA; most large contractors refuse to travel out for a single wall patch, leaving homeowners stuck with a glaring hole.</p>

      <div className="cta-box rv">
        <p>Ready to make that hole disappear today?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Schedule Your Wall Repair &rarr;</a>
      </div>

      <h2>Patching vs. Skim Coating vs. Replacement</h2>
      <p>Not all sheetrock repair is identical. Based on the severity of the damage, your Red Stag technician will deploy one of three core techniques:</p>
      <ul>
        <li><strong>Standard Patching:</strong> Used for doorknob holes, fist holes, or minor nail pops. We cut a clean square around the damage, insert a new piece of sheetrock or reinforcing mesh, apply fast-setting "hot mud", sand it flush, and texture match.</li>
        <li><strong>Skim Coating:</strong> When a wall has experienced massive cosmetic damage (like peeling wallpaper tearing the paper facing off the drywall, or heavy dog scratches), we apply a thin coat of joint compound over the <em>entire wall</em> to restore a perfectly smooth, level 5 finish.</li>
        <li><strong>Section Replacement:</strong> Used heavily in water damaged walls. If a pipe bursts, the drywall acts like a sponge. Wet drywall cannot be saved—it must be cut out entirely from stud to stud, returning structural integrity to the wall.</li>
      </ul>

      <h2>The Threat of Moldy Drywall</h2>
      <p>If your drywall damage is the result of water, time is deeply critical. In the warm climate of Southern California, wet drywall can begin germinating mold spores within 48 to 72 hours. Once mold sets in behind the paint layer, you are dealing with a severe indoor air quality hazard, not just a cosmetic blemish.</p>
      <p>Moldy drywall cannot simply be bleached and painted over; ignoring it is incredibly dangerous. We strictly enforce the removal of moldy sheetrock. We cut at least 12 inches past the visible water line to ensure the rot hasn't spread up the wall cavity. While we do not handle hazardous mold remediation for hyper-toxic situations, we function as the rapid-response team to completely rip out wet materials and perform flawless water damage wall repair before mold has the chance to establish a massive colony.</p>

      <div className="cta-box rv">
        <p>Smell a musty odor near a crack or water stain?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Request Immediate Inspection &rarr;</a>
      </div>

      <h2>DIY Spackle vs. Professional Drywall Contractors</h2>
      <p>A staggering amount of the work our drywall contractors do involves fixing "DIY spackle" jobs. The temptation to buy a $10 tub of pink spackle and smear it into a hole is high. However, standard spackle shrinks, cracks, and refuses to hold paint evenly. Furthermore, homeowners often lack the specialized pneumatic hoppers and specialized spray cans required to match the surrounding wall texture.</p>
      <p>LA homes are notoriously heavily textured. The difference between orange peel, knockdown, and Santa Fe textures is immense. If you slap smooth spackle over a hole on an orange-peel wall and paint it, the smooth circle will flash harshly in the sunlight, drawing more attention to the patch than the original hole did. A professional sheetrock repair near me focuses on the <em>blend</em>. We feather the edges out 12 to 18 inches past the repair site and shoot custom-matched texture so that when the final drop of paint dries, the repair is physically invisible.</p>

      <h2>Typical Costs for Drywall Repair</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Type of Damage</th>
              <th>LA Handyman Estimated Cost</th>
              <th>Repair Process</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doorknob / Fist Hole</td>
              <td>$150 – $225</td>
              <td>Cut flush, install California patch or mesh tape, 2 coats of fast-dry compound, sand, texture, and paint.</td>
            </tr>
            <tr>
              <td>Medium Hole / Plumber Access Hole</td>
              <td>$250 – $400</td>
              <td>Install wooden backing strips behind the drywall to support the new, heavier cut piece of sheetrock, tape seams, texture heavily.</td>
            </tr>
            <tr>
              <td>Water Damage Wall Repair (Baseboards)</td>
              <td>$400 – $800+</td>
              <td>Removing 2-4 feet of ruined drywall across an entire wall length, treating studs for moisture, replacing insulation, installing new panels.</td>
            </tr>
            <tr>
              <td>Full Ceiling Patching</td>
              <td>$500 – $1,200</td>
              <td>Working overhead on ladders or scaffolding, battling gravity to secure sheets, complex acoustic or knockdown ceiling texture matching.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>As one of the premier drywall companies specializing in residential repairs, Red Stag Handyman is dedicated to making a stressful situation fast and seamless. Don't hide the hole behind a potted plant anymore. Let us fix the sheetrock the right way.</p>
    </ServicePageTemplate>
  );
}
