import { Values } from '../../utils/types';
import React from 'react';
import type { Values } from '../../utils/types';
import { Color } from './types';

export type BadgeColorType = Values<typeof Color>;

export interface BadgeProps {
  color?: BadgeColorType;
  badgeContent?: React.ReactNode;
  size?: number;
  fontSize?: number | string;
  padding?: number | string;
  inline?: boolean;
}
