export default function FAQ() {
  const items = [
    {
      q: "Does Sofia use my existing phone number?",
      a: "Yes — we route your current business number through Sofia. No new number to share with customers, no changes on your end.",
    },
    {
      q: "What happens if Sofia can't answer a question?",
      a: "Sofia is trained on your specific business — services, pricing, and availability. For anything outside that, she collects the caller's details and flags it for you immediately, so no lead is ever dropped.",
    },
    {
      q: "How long does setup take?",
      a: "Most businesses are live within 48–72 hours. We handle the full configuration. You just show up for the onboarding call and you're done.",
    },
    {
      q: "Which scheduling software does Sofia integrate with?",
      a: "Sofia syncs with ServiceTitan, Jobber, Housecall Pro, and Google Calendar. If you use something else, we'll work with you to get it connected.",
    },
    {
      q: "What's included in the Custom CRM?",
      a: "The Complete plan includes a CRM built specifically around Sofia's activity — every call, every lead, and every booking tracked in one dashboard. You see exactly how your AI is performing, which leads converted, and where revenue is coming from.",
    },
    {
      q: "Are there long-term contracts?",
      a: "No. Both plans are month-to-month after the initial setup. Cancel anytime — no penalties, no fine print.",
    },
    {
      q: "What does the first-install guarantee cover?",
      a: "If Sofia doesn't perform as promised after the initial setup and onboarding, you get a full refund — setup fee included. We're confident enough in the results to back it up completely.",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-header fade-up">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-sub">Everything you need to know before getting started.</p>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <details key={i} className="faq-item fade-up">
              <summary className="faq-question">{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
        <div className="section-cta">
          <a href="/book" className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Still Have Questions? Book a Call →</a>
        </div>
      </div>
    </section>
  );
}
