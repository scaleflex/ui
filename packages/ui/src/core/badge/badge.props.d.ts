import React from 'react';
import { Values, BadgeColor } from '../../utils/types';
import type { Values } from '../../utils/types';

export type BadgeColorType = Values<typeof BadgeColor>;

export interface BadgeProps {
  color?: BadgeColorType;
  badgeContent?: React.ReactNode;
  size?: number;
  fontSize?: number | string;
  padding?: number | string;
  inline?: boolean;
}
