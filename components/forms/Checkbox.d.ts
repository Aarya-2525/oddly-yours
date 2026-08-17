import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Rounded-square checkbox, mint fill when checked" viewport="700x110"
 */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
