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
            <div className="pricing-price"><sup>$</sup>997<span className="period">/mo</span></div>
            <div className="pricing-desc">Everything to stop missing calls today</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> AI Receptionist (24/7 call answering)</li>
              <li><span className="check">✓</span> Instant job booking &amp; calendar sync</li>
              <li><span className="check">✓</span> Lead qualification scripts</li>
              <li><span className="check">✓</span> SMS confirmation to customer</li>
              <li><span className="check">✓</span> Monthly performance report</li>
              <li><span className="check">✓</span> Dedicated onboarding call</li>
            </ul>
            <a href="#" className="btn-secondary pricing-btn">Get Started</a>
            <div className="pricing-guarantee">🛡️ First install guaranteed or full refund</div>
          </div>

          <div className="pricing-card featured fade-up">
            <div className="pricing-badge">MOST POPULAR</div>
            <div className="pricing-tier">Growth</div>
            <div className="pricing-price"><sup>$</sup>1,497<span className="period">/mo</span></div>
            <div className="pricing-desc">For businesses ready to scale revenue</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Everything in Starter</li>
              <li><span className="check">✓</span> Multichannel AI (phone + SMS + email)</li>
              <li><span className="check">✓</span> Website chat widget with AI</li>
              <li><span className="check">✓</span> Missed call text-back (instant)</li>
              <li><span className="check">✓</span> Google Reviews automation</li>
              <li><span className="check">✓</span> CRM integration (ServiceTitan, Jobber)</li>
            </ul>
            <a href="#" className="btn-primary pricing-btn">Get Started →</a>
            <div className="pricing-guarantee">🛡️ First install guaranteed or full refund</div>
          </div>

          <div className="pricing-card fade-up">
            <div className="pricing-tier">Pro</div>
            <div className="pricing-price"><sup>$</sup>1,997<span className="period">/mo</span></div>
            <div className="pricing-desc">Maximum revenue recovery, end-to-end</div>
            <div className="pricing-divider"></div>
            <ul className="pricing-features">
              <li><span className="check">✓</span> Everything in Growth</li>
              <li><span className="check">✓</span> Full follow-up sequences (3-touch)</li>
              <li><span className="check">✓</span> AI upsell &amp; maintenance plan pitching</li>
              <li><span className="check">✓</span> Advanced reporting dashboard</li>
              <li><span className="check">✓</span> Priority support (&lt;1hr response)</li>
              <li><span className="check">✓</span> Quarterly strategy calls</li>
            </ul>
            <a href="#" className="btn-secondary pricing-btn">Get Started</a>
            <div className="pricing-guarantee">🛡️ First install guaranteed or full refund</div>
          </div>

        </div>
      </div>
    </section>
  );
}
