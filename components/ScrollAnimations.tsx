'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));

    function animateCountUp(el: HTMLElement) {
      const target = parseInt(el.dataset.target ?? '0', 10);
      const prefix = el.dataset.prefix ?? '';
      const suffix = el.dataset.suffix ?? '';
      const duration = 2000;
      const startTime = performance.now();

      function tick(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const valueEl = entry.target.querySelector('.stat-value') as HTMLElement | null;
            if (valueEl && !valueEl.dataset.animated) {
              valueEl.dataset.animated = '1';
              animateCountUp(valueEl);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.stat-card').forEach((card) => statObserver.observe(card));

    return () => {
      fadeObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return null;
}
