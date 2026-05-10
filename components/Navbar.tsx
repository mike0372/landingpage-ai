'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#hero" className="logo">AutoPilot <span>AI</span></a>
        <ul className={`nav-links${navOpen ? ' open' : ''}`} id="navLinks">
          <li><a href="#how-it-works" onClick={closeNav}>How It Works</a></li>
          <li><a href="#results" onClick={closeNav}>Results</a></li>
          <li><a href="#pricing" onClick={closeNav}>Pricing</a></li>
          <li style={{ display: 'block' }}>
            <a href="#pricing" className="btn-primary" onClick={closeNav}>Book a Demo</a>
          </li>
        </ul>
        <a href="#pricing" className="btn-primary nav-cta">Book a Demo</a>
        <div
          className="hamburger"
          onClick={() => setNavOpen(o => !o)}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
