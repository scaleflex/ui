import { IconProps } from '@scaleflex/icons/icon.props';

import type { CheckBoxProps } from '../check-box';
import type { Values } from '../../utils/types';
import { LabelPosition } from './types';
import { CheckBoxSizeType, CheckBoxType } from '../check-box/check-box.props';
import { Ref } from 'react';

export type LabelPositionType = Values<typeof LabelPosition>;

export interface CheckBoxGroupProps extends CheckBoxProps {
  label?: string;
  checkBoxProps?: React.InputHTMLAttributes<HTMLInputElement>;
  checkBoxGroupProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  readOnly?: boolean;
  disabled?: boolean;
  labelPosition?: LabelPositionType;
  size?: CheckBoxSizeType;
  type?: CheckBoxType;
  icon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  ref?: Ref<HTMLLabelElement>;
}
