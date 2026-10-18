'use client';

import Image from 'next/image';
import { useState } from 'react';

const TABS = [
  { label: 'Dashboard', src: '/media/crm-dashboard.webp', alt: 'CRM dashboard: missed calls, bookings, revenue and call queue' },
  { label: 'Pipeline', src: '/media/crm-pipeline.webp', alt: 'CRM pipeline: leads moving from new to completed' },
  { label: 'Calendar', src: '/media/crm-calendar.webp', alt: 'CRM calendar: weekly schedule of booked jobs' },
];

export default function DemoShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="demo-showcase">
      <figure className="demo-phone">
        {/* preload="none": 0 video bytes until the visitor presses play */}
        <video controls playsInline preload="none" poster="/media/demo-poster.webp" src="/media/demo.mp4" aria-label="AutoPilot AI demo: Sofia answers a call and books a job" />
        <figcaption>Sofia takes the call</figcaption>
      </figure>
      <figure className="demo-crm">
        <div className="demo-tabs" role="tablist" aria-label="CRM screens">
          {TABS.map((t, i) => (
            <button key={t.label} role="tab" aria-selected={i === active} className={i === active ? 'on' : ''} onClick={() => setActive(i)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="demo-screen" role="tabpanel">
          {TABS.map((t, i) => (
            <Image key={t.src} src={t.src} alt={t.alt} fill sizes="(max-width: 768px) 92vw, 800px" quality={90} className={i === active ? 'on' : ''} aria-hidden={i !== active} />
          ))}
        </div>
        <figcaption>The booked job lands in your CRM</figcaption>
      </figure>
    </div>
  );
}
