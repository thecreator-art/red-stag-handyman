'use client';

import { useState } from 'react';

type FAQInfo = {
  question: string;
  answer: string;
}

export default function FaqList({ faqs }: { faqs: FAQInfo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="rv" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, i) => (
        <div 
          key={i}
          className={`faq-item ${openIndex === i ? 'open' : ''}`}
          style={{ borderColor: 'rgba(11,26,43,.08)' }}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <div className="faq-q" onClick={() => toggle(i)} style={{ color: 'var(--dark)' }}>
            <span itemProp="name">{faq.question}</span><span className="faq-t">+</span>
          </div>
          <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" style={{ fontFamily: 'var(--font-crimson)', fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.8, }}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
