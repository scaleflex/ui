import type { Values } from '../../utils/types';
import type { IconProps } from '@scaleflex/icons/icon.props';
import { Type } from './types';

export type ArrowTickTypesType = Values<typeof Type>;

export interface ArrowTickProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTickTypesType;
  IconProps?: IconProps;
}
