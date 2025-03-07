import type { PropsWithChildren } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

import type { Values } from '../../utils/types';
import { LabelSize } from './types/size';

export type LabelSizeType = Values<typeof LabelSize>;

export interface LabelProps extends PropsWithChildren, React.HTMLAttributes<HTMLLabelElement> {
  iconStart?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  iconEnd?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  error?: boolean;
  disabled?: boolean;
  size?: LabelSizeType;
  ref?: React.Ref<HTMLLabelElement>;
}
