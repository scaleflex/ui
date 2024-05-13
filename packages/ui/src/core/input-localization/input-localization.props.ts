import { IconProps } from '@scaleflex/icons/icon.props';

import type { SelectProps } from '../select';
import { InputSize, Values } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export interface InputLocalizationProps extends Omit<SelectProps, 'error' | 'size'> {
  icon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  size?: InputSizeType;
  readOnly?: boolean;
  disabled?: boolean;
}
