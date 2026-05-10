export default function BookingCTA() {
  return (
    <section id="booking-cta">
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="cta-grid-overlay" />

      <div className="container">
        <div className="cta-card fade-up">
          <div className="cta-card-glow" />

          <div className="cta-badge">
            <span className="cta-dot" />
            Taking new clients — limited spots this month
          </div>

          <h2 className="cta-title">
            One call away from<br />
            <span className="cta-title-highlight">never missing another job.</span>
          </h2>

          <p className="cta-sub">
            20 minutes. We&apos;ll walk through your current setup, show you exactly how AutoPilot handles your calls, and tell you what it would cost. No pitch decks. No pressure.
          </p>

          <a
            href="/book"
            className="btn-primary cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book My Free Demo Call →
          </a>

          <div className="cta-trust">
            <span>✓ No contracts</span>
            <span className="cta-trust-dot" />
            <span>✓ Live within 48–72 hrs</span>
            <span className="cta-trust-dot" />
            <span>✓ First install guaranteed</span>
          </div>
        </div>

        <div className="cta-inline-faq fade-up">
          <span className="cta-inline-q">How much does it cost?</span>
          <span className="cta-inline-a">Pricing is tailored to your business size and call volume. Book a call and we&apos;ll tell you exactly what makes sense for you.</span>
        </div>
      </div>
    </section>
  );
}
