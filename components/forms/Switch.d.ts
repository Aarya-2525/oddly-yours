import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Pill switch with bouncy thumb, pink track when on" viewport="700x110"
 */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function Switch(props: SwitchProps): JSX.Element;
