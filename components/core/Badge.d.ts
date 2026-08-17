import * as React from 'react';

/**
 * @startingPoint section="Components" subtitle="Small pill label for status/category" viewport="700x150"
 */
export interface BadgeProps {
  color?: 'pink' | 'blue' | 'mint' | 'lavender' | 'yellow' | 'orange' | 'ink';
  children: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;

export interface TagProps {
  color?: 'pink' | 'blue' | 'mint' | 'lavender' | 'yellow';
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

/** Clickable filter/category tag with a playful scale+tilt hover. */
export function Tag(props: TagProps): JSX.Element;
