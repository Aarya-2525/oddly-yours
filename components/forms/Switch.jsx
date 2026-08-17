import React from 'react';

export function Switch({ checked = false, onChange, label }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
      <span
        className="oy-switch-track"
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: '48px',
          height: '28px',
          borderRadius: 'var(--radius-pill)',
          border: '2.5px solid var(--color-almost-ink)',
          background: checked ? 'var(--color-bubblegum-pink)' : 'var(--surface-sunken)',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '2px',
          boxSizing: 'border-box',
        }}
      >
        <span
          className="oy-switch-thumb"
          style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'var(--color-almost-ink)',
            transform: checked ? 'translateX(20px)' : 'translateX(0)',
          }}
        />
      </span>
      {label ? <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>{label}</span> : null}
    </label>
  );
}
