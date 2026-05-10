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
            <span className="stat-value" data-target="100" data-prefix="$" data-suffix="k+/mo">$0</span>
            <div className="stat-label">Recovered revenue per month for avg. HVAC business</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="100" data-suffix="% answered">0%</span>
            <div className="stat-label">Every call answered — zero missed, zero sent to voicemail</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="30" data-prefix="< " data-suffix="s to book">&lt;0s</span>
            <div className="stat-label">Time from first ring to confirmed job booking</div>
          </div>
          <div className="stat-card fade-up">
            <span className="stat-value" data-target="24" data-suffix="/7 coverage">0/7</span>
            <div className="stat-label">Always on — nights, weekends, holidays, no exceptions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
