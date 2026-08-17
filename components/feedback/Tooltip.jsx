import React, { useState } from 'react';

export function Tooltip({ label, children, side = 'top' }) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: { bottom: '120%', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: '120%', left: '50%', transform: 'translateX(-50%)' },
  }[side] || { bottom: '120%', left: '50%', transform: 'translateX(-50%)' };
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <span
        className="oy-tooltip"
        style={{
          position: 'absolute',
          ...pos,
          background: 'var(--color-almost-ink)',
          color: 'var(--text-on-ink)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'var(--text-xs)',
          padding: '6px 12px',
          borderRadius: 'var(--radius-pill)',
          whiteSpace: 'nowrap',
          opacity: open ? 1 : 0,
          pointerEvents: 'none',
          transform: `${pos.transform} translateY(${open ? '0' : '4px'})`,
        }}
      >
        {label}
      </span>
    </span>
  );
}
