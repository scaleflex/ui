import type { Values } from '../../utils/types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { Type } from './types';

export type ArrowTypesType = Values<typeof Type>;

export interface ArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTypesType;
  IconProps?: IconProps;
}
