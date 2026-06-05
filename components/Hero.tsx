'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export default function Hero() {
  const [callSeconds, setCallSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCallSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(callSeconds / 60);
  const s = callSeconds % 60;
  const timerText = `${m}:${s.toString().padStart(2, '0')}`;

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="container">
        <div className="hero-content">

          <div>
            <div className="hero-badge">
              <span className="dot"></span>
              Built for HVAC Businesses Across the USA
            </div>
            <h1 className="hero-title">
              Never Miss<br />Another Call.<br />
              <span className="highlight">Never Lose<br />Another Job.</span>
            </h1>
            <p className="hero-sub">
              Sofia answers every call 24/7, qualifies leads, books jobs, and logs everything into your custom CRM — so your business keeps running while your crew is out on the job.
            </p>
            <div className="hero-btns">
              <a href="#how-it-works" className="btn-secondary btn-lg">See How It Works</a>
              <a href="/book" className="btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Book a Free Demo →</a>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-glow"></div>
            <div className="phone-glow-2"></div>
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar">AI</div>
                  <div className="phone-contact">
                    <div className="phone-contact-name">Sofia · AI Receptionist</div>
                    <div className="phone-contact-status">Active call</div>
                  </div>
                  <div className="call-timer">{timerText}</div>
                </div>
                <div className="phone-messages">
                  <div className="msg msg-ai">
                    <div className="msg-label">Sofia</div>
                    Thanks for calling Air Pro HVAC! Is this an emergency repair or a new install?
                  </div>
                  <div className="msg msg-user">
                    <div className="msg-label">Customer</div>
                    My AC stopped working — it&apos;s 97°F outside
                  </div>
                  <div className="msg msg-ai">
                    <div className="msg-label">Sofia</div>
                    Got it — emergency repair. I have a tech available today at 2 PM or 4 PM. Which works?
                  </div>
                  <div className="msg msg-user">
                    <div className="msg-label">Customer</div>
                    2 PM please
                  </div>
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="phone-booked">
                  <div className="phone-booked-icon"><Check size={14} strokeWidth={2.5} color="white" /></div>
                  <div className="phone-booked-text">
                    <div className="phone-booked-title">Job Booked!</div>
                    <div className="phone-booked-sub">Today · 2:00 PM · AC Emergency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
