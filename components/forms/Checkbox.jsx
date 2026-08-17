import React from 'react';

export function Checkbox({ checked = false, onChange, label }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
      <span
        className="oy-checkbox-box"
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '8px',
          border: '2.5px solid var(--color-almost-ink)',
          background: checked ? 'var(--color-mint-green)' : 'var(--surface-card)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {checked ? (
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <path d="M1 5.5L5 9.5L13 1.5" stroke="#201A2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </span>
      {label ? <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>{label}</span> : null}
    </label>
  );
}
