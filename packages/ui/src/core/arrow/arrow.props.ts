import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';

export const Type = {
  Left: 'left',
  Right: 'right',
  Top: 'top',
  Bottom: 'bottom',
} as const;

export type ArrowTypesType = Values<typeof Type>;

export interface ArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTypesType;
  IconProps?: IconProps;
}
