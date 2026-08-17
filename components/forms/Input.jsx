import React from 'react';

export function Input({ label, placeholder, error, type = 'text', ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)' }}>
      {label ? (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</span>
      ) : null}
      <input
        className="oy-input"
        type={type}
        placeholder={placeholder}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          border: `2.5px solid ${error ? 'var(--color-tang-orange)' : 'var(--color-almost-ink)'}`,
          background: 'var(--surface-card)',
          color: 'var(--text-primary)',
        }}
        {...rest}
      />
      {error ? (
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-tang-orange)', fontWeight: 600 }}>{error}</span>
      ) : null}
    </label>
  );
}
