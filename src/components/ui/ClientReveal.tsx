'use client';

import { useEffect } from 'react';

export default function ClientReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.rv, .rl').forEach((el) => {
      obs.observe(el);
    });

    const numObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const end = parseInt(el.dataset.count || '0');
          const dur = 2200;
          const st = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - st) / dur, 1);
            el.textContent = Math.floor((1 - Math.pow(1 - p, 4)) * end) + '+';
            if (p < 1) requestAnimationFrame(tick);
          };
          tick();
          numObs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-count]').forEach((el) => {
      numObs.observe(el);
    });

    return () => {
      obs.disconnect();
      numObs.disconnect();
    };
  }, []);

  return null;
}
