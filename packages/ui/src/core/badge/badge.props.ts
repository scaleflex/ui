import React from 'react';
import type { Values } from '../../utils/types';

export const BadgeColor = {
  Primary: 'primary',
  Secondary: 'secondary',
  White: 'white',
} as const;

export type BadgeColorType = Values<typeof BadgeColor>;

export interface BadgeProps {
  color?: BadgeColorType;
  badgeContent?: React.ReactNode;
  size?: number;
  fontSize?: number | string;
  padding?: number | string;
  inline?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}
