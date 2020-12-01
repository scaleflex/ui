import { Values } from '@sfx-ui/utils/types';
import React from 'react';
import type { Values } from '@sfx-ui/utils/types';
import { Color } from './types';

export type BadgePropsColor = Values<typeof Color>;
export type BadgePropsContent = React.Node | string | number;

export interface BadgeProps {
  color?: BadgePropsColor;
  badgeContent?: BadgePropsContent;
  size?: number;
  fontSize?: number | string;
  padding?: number | string;
  inline?: boolean;
}
