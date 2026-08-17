import React, { useState } from 'react';

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontFamily: 'var(--font-body)' }}>
      {items.map((it, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: '2.5px solid var(--color-almost-ink)',
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface-card)',
              overflow: 'hidden',
            }}
          >
            <div
              className="oy-accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'var(--text-md)',
                color: 'var(--text-primary)',
              }}
            >
              {it.question}
              <span
                className="oy-accordion-chevron"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-flex' }}
              >
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M1 1L8 8L15 1" stroke="#201A2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div
              style={{
                maxHeight: isOpen ? '240px' : '0px',
                transition: 'max-height var(--duration-slow) var(--ease-out)',
              }}
            >
              <div style={{ padding: '0 20px 18px', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                {it.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
