import { Phone, Bot, LayoutDashboard } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Your AI Receptionist. Always On.</h2>
          <p className="section-sub">Set it up once. From that moment, every call is answered, every lead is qualified, every job is booked — automatically.</p>
        </div>
        <div className="steps-container">
          <div className="step fade-up">
            <div className="step-num"><Phone size={28} strokeWidth={1.75} /></div>
            <h3>Customer Calls Your Number</h3>
            <p>Your existing business number routes directly to SystemCall AI — no new number, no tech headaches, no changes for customers.</p>
          </div>
          <div className="step-connector" />
          <div className="step fade-up">
            <div className="step-num"><Bot size={28} strokeWidth={1.75} /></div>
            <h3>Sofia Answers, Qualifies &amp; Books</h3>
            <p>Sofia picks up instantly, asks the right questions, checks your real availability, and books the job — all in under 2 minutes.</p>
          </div>
          <div className="step-connector" />
          <div className="step fade-up">
            <div className="step-num"><LayoutDashboard size={28} strokeWidth={1.75} /></div>
            <h3>Job Logged in Your Custom CRM</h3>
            <p>Every booking drops straight into your custom CRM — job type, customer info, time slot — ready for your crew. Wake up to a full schedule, zero admin.</p>
          </div>
        </div>
        <div className="hiw-video">
          <iframe
            src="https://www.youtube.com/embed/KLJErd2Szn0"
            title="How Sofia Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="section-cta">
          <a href="/book" className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book a Free Demo →</a>
        </div>
      </div>
    </section>
  );
}
