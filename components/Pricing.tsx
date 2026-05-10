export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, Predictable Pricing</h2>
          <p className="section-sub">Every plan includes a first-install guarantee — if it doesn&apos;t work as promised, you get a full refund. No questions asked.</p>
        </div>
        <div className="pricing-grid stagger">

          <div className="pricing-card fade-up">
            <div className="pricing-tier">Starter</div>
            <div className="pricing-price"><sup>$</sup>947<span className="period">/mo</span></div>
            <div className="pricing-setup">+ $1,497 one-time setup</div>
            <div className="pricing-desc">Sofia handles every incoming call — 24/7, no exceptions</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Sofia AI Receptionist (24/7 call answering)</li>
              <li><span className="check">✓</span> Instant job booking &amp; calendar sync</li>
              <li><span className="check">✓</span> Lead qualification scripts</li>
              <li><span className="check">✓</span> SMS confirmation to customer</li>
              <li><span className="check">✓</span> Monthly performance report</li>
              <li><span className="check">✓</span> Dedicated onboarding call</li>
            </ul>
            <a href="/book" target="_blank" rel="noopener noreferrer" className="btn-secondary pricing-btn">Get Started</a>
            <div className="pricing-guarantee">🛡️ First install guaranteed or full refund</div>
          </div>

          <div className="pricing-card featured fade-up">
            <div className="pricing-badge">MOST POPULAR</div>
            <div className="pricing-tier">Complete</div>
            <div className="pricing-price"><sup>$</sup>1,497<span className="period">/mo</span></div>
            <div className="pricing-setup">+ $2,497 one-time setup</div>
            <div className="pricing-desc">Sofia + a custom CRM built around your business</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Everything in Starter</li>
              <li><span className="check">✓</span> Custom CRM built for your AI</li>
              <li><span className="check">✓</span> Full call log &amp; AI activity tracking</li>
              <li><span className="check">✓</span> Lead pipeline &amp; follow-up management</li>
              <li><span className="check">✓</span> AI performance dashboard</li>
              <li><span className="check">✓</span> Revenue attribution per booking</li>
              <li><span className="check">✓</span> Priority support (&lt;1hr response)</li>
            </ul>
            <a href="/book" target="_blank" rel="noopener noreferrer" className="btn-primary pricing-btn">Get Started →</a>
            <div className="pricing-guarantee">🛡️ First install guaranteed or full refund</div>
          </div>

        </div>
      </div>
    </section>
  );
}
