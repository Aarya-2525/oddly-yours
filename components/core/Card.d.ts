import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Rounded surface, thick ink border, soft shadow" viewport="700x260"
 */
export interface CardProps {
  /** Lifts and tilts slightly on hover. Default true. */
  hoverable?: boolean;
  /** CSS color for a thick top accent stripe, e.g. var(--color-mint-green). */
  accent?: string;
  children: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
