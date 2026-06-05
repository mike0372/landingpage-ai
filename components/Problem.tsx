import { TrendingDown, Zap, Moon } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="problem-header">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">Every Missed Call is Money<br />Walking Out the Door</h2>
          <p className="section-sub">HVAC businesses lose thousands every month — not because they&apos;re bad at the work, but because no one picks up the phone.</p>
        </div>
        <div className="problem-cards stagger">
          <div className="problem-card fade-up">
            <div className="problem-icon"><TrendingDown size={22} strokeWidth={1.75} /></div>
            <div className="problem-stat">$5k–$20k lost</div>
            <h3>Per Month in Missed Revenue</h3>
            <p>10–20 missed calls/month at an average ticket of $1,000+ is money you&apos;re handing to your competitors without realizing it.</p>
          </div>
          <div className="problem-card fade-up">
            <div className="problem-icon"><Zap size={22} strokeWidth={1.75} /></div>
            <div className="problem-stat">5 minutes</div>
            <h3>Slow Follow-Up = Customer Gone</h3>
            <p>If you don&apos;t respond within 5 minutes, 80% of customers have already called your competitor. Speed wins every single time.</p>
          </div>
          <div className="problem-card fade-up">
            <div className="problem-icon"><Moon size={22} strokeWidth={1.75} /></div>
            <div className="problem-stat">After hours</div>
            <h3>Calls Go Straight to Voicemail</h3>
            <p>Half your leads call after 6 PM or on weekends. Without 24/7 coverage, you&apos;re handing those emergency jobs to whoever answers.</p>
          </div>
        </div>
        <div className="section-cta">
          <a href="/book" className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Fix It — Book a Free Demo →</a>
        </div>
      </div>
    </section>
  );
}
