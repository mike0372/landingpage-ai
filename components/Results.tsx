export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <div className="results-header">
          <div className="section-label">Results</div>
          <h2 className="section-title">Numbers That Move the Needle</h2>
          <p className="section-sub">HVAC owners using AutoPilot AI see dramatic shifts in revenue and operations within the first 30 days.</p>
        </div>
        <div className="stats-grid stagger">
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="14" data-prefix="$" data-suffix="k+/mo">$0</span>
            <div className="stat-label">Up to $14k+/mo in recovered revenue — based on 10-20 missed calls/month at an average ticket of $1,000+</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="100" data-suffix="% answered">0%</span>
            <div className="stat-label">Every inbound call answered — zero missed, zero voicemails</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="45" data-prefix="< " data-suffix="s">&lt;0s</span>
            <div className="stat-label">From first ring to a confirmed job on your calendar</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="24" data-suffix="/7 active">0/7</span>
            <div className="stat-label">Always on — nights, weekends, holidays, no exceptions</div>
          </div>
        </div>
        <div className="section-cta">
          <a href="/book" className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Start Recovering Revenue →</a>
        </div>
      </div>
    </section>
  );
}
