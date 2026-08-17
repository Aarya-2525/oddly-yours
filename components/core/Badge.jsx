import React from 'react';

export function Badge({ color = 'pink', children }) {
  const map = {
    pink: 'var(--color-bubblegum-pink)',
    blue: 'var(--color-splash-blue)',
    mint: 'var(--color-mint-green)',
    lavender: 'var(--color-dreamy-lavender)',
    yellow: 'var(--color-sunshine-yellow)',
    orange: 'var(--color-tang-orange)',
    ink: 'var(--color-almost-ink)',
  };
  const bg = map[color] || map.pink;
  const isInk = color === 'ink';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-xs)',
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        background: bg,
        color: isInk ? 'var(--text-on-ink)' : 'var(--text-primary)',
        border: '1.5px solid rgba(32,26,43,0.15)',
      }}
    >
      {children}
    </span>
  );
}

export function Tag({ color = 'pink', selected = false, children, onClick }) {
  const map = {
    pink: 'var(--color-bubblegum-pink)',
    blue: 'var(--color-splash-blue)',
    mint: 'var(--color-mint-green)',
    lavender: 'var(--color-dreamy-lavender)',
    yellow: 'var(--color-sunshine-yellow)',
  };
  return (
    <span
      className="oy-tag"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'var(--text-sm)',
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        cursor: onClick ? 'pointer' : 'default',
        background: selected ? map[color] || map.pink : 'var(--surface-card)',
        border: '2px solid var(--color-almost-ink)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </span>
  );
}
