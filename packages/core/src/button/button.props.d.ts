import type { PropsWithChildren } from 'react';
import type { Values } from '@sfx-ui/utils/types';
import type { BadgePropsContent } from '../badge/badge.props';
import { Size, Color, Status } from './types';

export type ButtonPropsSize = Values<typeof Size>;
export type ButtonPropsColor = Values<typeof Color>;
export type ButtonPropsStatus = Values<typeof Status>;

export interface ButtonProps extends PropsWithChildren, React.HTMLAttributes<HTMLButtonElement> {
  size?: ButtonPropsSize;
  color?: ButtonPropsColor;
  status?: ButtonPropsStatus;
  icon?: React.ReactNode;
  badge?: BadgePropsContent;
}
