import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Text field with thick border, orange focus ring" viewport="700x140"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps): JSX.Element;
