import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Pill CTA button with hard drop-shadow and press animation" viewport="700x230"
 */
export interface ButtonProps {
  /** Visual style. primary = loud pink, secondary = cream, ink = dark, ghost = text-only. */
  variant?: 'primary' | 'secondary' | 'ink' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon/emoji-free glyph node. */
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
