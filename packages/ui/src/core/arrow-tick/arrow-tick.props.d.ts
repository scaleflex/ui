import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values, Position } from '../../utils/types';

export type ArrowTickTypesType = Values<typeof Position>;

export interface ArrowTickProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTickTypesType;
  IconProps?: IconProps;
}
