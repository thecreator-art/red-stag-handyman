import { Metadata } from 'next';
import ServicePageTemplate from '@/components/layout/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Handyman Services Los Angeles | Red Stag Handyman',
  description: 'Professional handyman services in LA. Stop stressing over your to-do list. From odd jobs to licensed repairs, Red Stag is your one-call solution. Free flat-rate estimates.',
  // SEO schema injection would go here natively or in the template
};

export default function GeneralHandymanPage() {
  const faqs = [
    {
      question: "How much does a handyman cost in Los Angeles?",
      answer: "In Los Angeles, a professional handyman typically costs between $150 and $500 depending on the scope of the project. A single, small task like swapping a fixture might be $150, while a full-day punch list could run over $800. We quote a guaranteed flat rate so you never pay surprise hourly fees."
    },
    {
      question: "Do I need a licensed handyman?",
      answer: "California law strictly mandates that any project exceeding $500 (combined labor and materials) requires a licensed contractor. Using an unlicensed handyperson for anything above that carries immense financial and liability risks. Red Stag Handyman operates fully licensed, bonded, and insured."
    },
    {
      question: "What's included in a handyman visit?",
      answer: "A standard visit includes our heavily equipped technicians arriving on-time, protecting your floors and furnishings, completing the agreed-upon tasks to perfection, and rigorously cleaning the workspace before signing off. The flat-rate quote covers exactly the repairs discussed with no hidden travel fees."
    }
  ];

  return (
    <ServicePageTemplate 
      title="Handyman Services Los Angeles" 
      subtitle="Stop staring at your growing to-do list. From drywall and doors to fixtures and furniture, we are the one-call solution that handles every small fix in your LA home—permanently."
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      faqs={faqs}
    >
      <p><strong>What is a general handyman service?</strong> A professional handyman service provides a single, highly skilled technician equipped to handle a wide variety of minor home repairs, maintenance tasks, and small installations in a single visit, eliminating the need to hire multiple expensive specialists like plumbers, electricians, or carpenters.</p>

      <h2>The Homeowner's Breaking Point</h2>
      <p>If you're reading this, you probably have a list. It might be written down on the fridge, or it might just be living rent-free in your head. It's the wobbly ceiling fan in the guest room. The bifold closet door that jumps off its track every single morning. The hole in the drywall from when a piece of furniture was moved too aggressively.</p>
      <p>The problem in Los Angeles isn't finding someone to do the work; the problem is finding someone who will actually <em>show up</em> for the small stuff. General contractors won't return your call for a six-item punch list. It’s too small for them. But the stakes are too high for a random, unvetted gig-worker off an app. You need a deeply reliable, licensed handyman near you who specializes precisely in tackling the residential to-do list efficiently.</p>

      <div className="cta-box rv">
        <p>Ready to clear that list today?</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Get A Free Flat-Rate Quote &rarr;</a>
      </div>

      <h2>Your One-Call Solution in Los Angeles</h2>
      <p>Red Stag Handyman was built specifically to solve the frustration of the mounting to-do list. We don't build additions or pour foundations. We fix, patch, hang, swap, and repair. We represent the premium echelon of home handyman services in LA County.</p>
      <p>When you hire us, you aren't just getting a guy with a toolbox. You are getting a fully licensed handyperson near you backed by the infrastructure of the Red Stag brand. That means upfront, flat-rate pricing. It means technicians who have undergone rigorous background checks. It means strict arrival windows—if we say we'll be there at 9 AM, we are knocking on your door at 8:55 AM. And most importantly, it means an obsession with protecting your home and cleaning up our mess.</p>

      <h2>What Our Handyman Can Do</h2>
      <p>Homeowners often ask what falls under the umbrella of "handyman companies." The short answer is: almost everything that doesn't demand pulling a major structural permit. Here are twenty of the most common tasks our local handyman contractors handle weekly across Los Angeles:</p>
      
      <ul>
        <li><strong>Wall Repair:</strong> <a href="/drywall-repair/" style={{color:'var(--red)'}}>Drywall patching</a>, texture matching, and painting over water damage or accidental holes.</li>
        <li><strong>Door Operations:</strong> <a href="/door-repair-installation/" style={{color:'var(--red)'}}>Fixing sticking doors</a>, replacing thresholds, installing smart locks, and realigning hinges.</li>
        <li><strong>Weatherproofing:</strong> <a href="/caulking-weatherproofing/" style={{color:'var(--red)'}}>Re-caulking showers</a>, sealing drafts around drafty windows, and adding weatherstripping.</li>
        <li><strong>Fixtures:</strong> <a href="/fixture-installation/" style={{color:'var(--red)'}}>Swapping outdated chandeliers</a>, ceiling fans, or bathroom faucets.</li>
        <li><strong>Tech & Assembly:</strong> <a href="/furniture-assembly-tv-mounting/" style={{color:'var(--red)'}}>Flat-pack IKEA furniture assembly</a> and heavy-duty TV mounting.</li>
        <li>Hanging heavy mirrors, artwork, and gallery walls safely into studs.</li>
        <li>Replacing hard-to-reach smoke detector batteries or light bulbs.</li>
        <li>Fixing a persistently running toilet or swapping out toilet hardware.</li>
        <li>Repairing torn or aged window screens.</li>
        <li>Fixing loose or squeaking stair railings.</li>
        <li>Patching up minor stucco cracks on the exterior of your LA home.</li>
        <li>Installing grab bars and ADA compliance hardware for <a href="/senior-handyman-services/" style={{color:'var(--red)'}}>senior safety</a>.</li>
        <li>Replacing broken bathroom tiles or re-grouting stained shower floors.</li>
        <li>Mounting shelving systems in garages or closets.</li>
        <li>Fixing fences, gates, or latches that are sagging.</li>
        <li>Repairing baseboards damaged by pets or moisture.</li>
        <li>Swapping out kitchen cabinet hardware or hinges.</li>
        <li>Installing doggie-doors into existing exterior doors.</li>
        <li>Patching subfloors or fixing minor wood rot issues.</li>
        <li>Tenant turnover repairs for <a href="/commercial-handyman/" style={{color:'var(--red)'}}>commercial property managers</a>.</li>
      </ul>

      <div className="cta-box rv">
        <p>Don't see your specific problem listed? We probably fix it.</p>
        <a href="#estimate" className="btn br" style={{ padding: '12px 24px', fontSize: '.75rem' }}>Tell Us What You Need &rarr;</a>
      </div>

      <h2>Why Hiring a Licensed Handyman Matters</h2>
      <p>In Los Angeles, there is a massive underground market of unlicensed individuals offering cheap "home handyman services." It looks like a great deal until a water pipe is accidentally drilled into during a TV mounting, flooding your living room. An unlicensed handyperson carries no liability insurance.</p>
      <p>Using a fully licensed handyman essentially shifts all risk off your shoulders. We hold the necessary California state contractor licensing required to legally execute jobs. We hold robust general liability insurance. If a disaster happens, you are not financially ruined. We believe that peace of mind is worth doing it right the first time. We are background checked, highly trained, and bring zero unmanaged risk onto your property.</p>

      <h2>Typical Pricing Expectations for Handyman Jobs</h2>
      <div className="table-wrapper rv">
        <table>
          <thead>
            <tr>
              <th>Project Scope</th>
              <th>Typical LA Average Cost</th>
              <th>What It Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single Small Task</td>
              <td>$150 – $250</td>
              <td>Swapping a faucet, mounting a TV, or fixing a stuck door lock. Usually finished in 1 to 2 hours.</td>
            </tr>
            <tr>
              <td>Multi-Item Punch List</td>
              <td>$350 – $600</td>
              <td>Tackling 3-6 miscellaneous items (e.g., hanging 3 heavy mirrors, a ceiling fan swap, and re-caulking a tub). Half-day work.</td>
            </tr>
            <tr>
              <td>Complex or Heavy Repair</td>
              <td>$600 – $1,200+</td>
              <td>Large drywall blowouts requiring texture matching, extensive wood rot repair, or full-day commercial tenant preparations.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Unlike other handyman companies near you that use deceptive "hourly rates" where a slow worker costs you double, Red Stag Handyman utilizes a flat-rate quoting model. When we look at your list, we give you a firm number. Whether it takes us one hour or three hours, that number absolutely does not change.</p>
    </ServicePageTemplate>
  );
}
