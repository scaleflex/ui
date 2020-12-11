import type { Values } from '@sfx-ui/utils/types';
import type { IconProps } from '@sfx-ui/icons/icon.props';
import { Type } from './types';

export type ArrowTypesType = Values<typeof Type>;

export interface ArrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTypesType;
  IconProps?: IconProps;
}
