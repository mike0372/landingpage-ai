export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Your AI Receptionist. Always On.</h2>
          <p className="section-sub">Set it up once. From that moment, every call is answered, every lead is qualified, every job is booked — automatically.</p>
        </div>
        <div className="steps-container stagger">
          <div className="step-connector"></div>
          <div className="step fade-up">
            <div className="step-num">📞</div>
            <h3>Customer Calls Your Number</h3>
            <p>Your existing business number routes directly to AutoPilot AI — no new number, no tech headaches, no changes for customers.</p>
          </div>
          <div className="step fade-up">
            <div className="step-num">🤖</div>
            <h3>AI Answers, Qualifies &amp; Books</h3>
            <p>AutoPilot picks up instantly, asks the right questions, checks your real availability, and books the job — all in under 2 minutes.</p>
          </div>
          <div className="step fade-up">
            <div className="step-num">📅</div>
            <h3>Job Appears in Your Calendar</h3>
            <p>The booking syncs to your scheduling software automatically. Wake up to a full calendar — without lifting a finger.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
