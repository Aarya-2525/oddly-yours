import React from 'react';

export function Card({ hoverable = true, accent, children, style, ...rest }) {
  return (
    <div
      className={hoverable ? 'oy-card oy-card--hoverable' : 'oy-card'}
      style={{
        background: 'var(--surface-card)',
        border: '2.5px solid var(--color-almost-ink)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-card-soft)',
        borderTop: accent ? `10px solid ${accent}` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
