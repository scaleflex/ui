import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values } from '../../utils/types';

export const Type = {
  Left: 'left',
  Right: 'right',
  Top: 'top',
  Bottom: 'bottom',
} as const;

export type ArrowTickTypesType = Values<typeof Type>;

export interface ArrowTickProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTickTypesType;
  IconProps?: IconProps;
  ref?: React.Ref<HTMLSpanElement>;
}
