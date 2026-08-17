import * as React from 'react';

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

/**
 * @startingPoint section="Components" subtitle="FAQ-style expandable list with bouncy chevron" viewport="700x300"
 */
export interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion(props: AccordionProps): JSX.Element;
