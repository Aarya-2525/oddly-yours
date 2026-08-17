import React from 'react';

const VARIANTS = {
  primary: { bg: 'var(--color-bubblegum-pink)', color: 'var(--text-primary)' },
  secondary: { bg: 'var(--color-cream-canvas)', color: 'var(--text-primary)' },
  ink: { bg: 'var(--color-almost-ink)', color: 'var(--text-on-ink)' },
  ghost: { bg: 'transparent', color: 'var(--text-primary)' },
};

const SIZES = {
  sm: { padding: '10px 18px', fontSize: 'var(--text-sm)' },
  md: { padding: '14px 26px', fontSize: 'var(--text-base)' },
  lg: { padding: '18px 34px', fontSize: 'var(--text-md)' },
};

export function Button({ variant = 'primary', size = 'md', icon, disabled = false, children, onClick, style, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const isGhost = variant === 'ghost';
  return (
    <button
      className="oy-btn"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        border: isGhost ? '2.5px solid transparent' : '2.5px solid var(--color-almost-ink)',
        borderRadius: 'var(--radius-pill)',
        background: v.bg,
        color: v.color,
        boxShadow: isGhost || disabled ? 'none' : 'var(--shadow-card)',
        ...s,
        ...style,
      }}
      {...rest}
    >
      {icon ? <span aria-hidden="true" style={{ display: 'inline-flex', fontSize: '1.1em' }}>{icon}</span> : null}
      {children}
    </button>
  );
}
