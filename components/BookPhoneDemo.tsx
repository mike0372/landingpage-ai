'use client';

import { useEffect, useState } from 'react';

export default function BookPhoneDemo() {
  const [callSeconds, setCallSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCallSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(callSeconds / 60);
  const s = callSeconds % 60;
  const timerText = `${m}:${s.toString().padStart(2, '0')}`;

  return (
    <div className="book-demo-wrap">
      <div className="book-demo-header">
        <div className="section-label">Live Demo</div>
        <h2 className="book-demo-title">Before you book — watch Sofia handle a real call</h2>
        <p className="book-demo-sub">
          This is exactly what your customers experience when they call after hours, on weekends, or whenever you&apos;re tied up on a job.
        </p>
      </div>

      <div className="book-demo-phone">
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
              <div className="phone-booked-icon">✓</div>
              <div className="phone-booked-text">
                <div className="phone-booked-title">Job Booked!</div>
                <div className="phone-booked-sub">Today · 2:00 PM · AC Emergency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="book-demo-divider">
        <span className="book-demo-divider-text">Ready to see it live on your business?</span>
      </div>
    </div>
  );
}
