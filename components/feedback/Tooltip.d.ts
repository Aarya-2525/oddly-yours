import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Dark pill tooltip, fades and lifts in on hover" viewport="700x140"
 */
export interface TooltipProps {
  label: string;
  side?: 'top' | 'bottom';
  children: React.ReactNode;
}

export function Tooltip(props: TooltipProps): JSX.Element;
