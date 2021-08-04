import type { IconProps } from '@scaleflex/icons/icon.props';
import type { Values, Position } from '../../utils/types';

export type ArrowTypesType = Values<typeof Position>;

export interface ArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTypesType;
  IconProps?: IconProps;
}
