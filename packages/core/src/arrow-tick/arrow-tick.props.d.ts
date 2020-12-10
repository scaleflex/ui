import type { Values } from '@sfx-ui/utils/types';
import type { IconProps } from '@sfx-ui/icons/icon.props';
import { Type } from './types';

export type ArrowTickPropsType = Values<typeof Type>;

export interface ArrowTickProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: ArrowTickPropsType;
  IconProps?: IconProps;
}
