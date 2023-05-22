import type { CheckBoxProps } from '../check-box';
import type { Values } from '../../utils/types';
import { LabelPosition } from './types';
import { CheckBoxSizeType, CheckBoxType } from '../check-box/check-box.props';

export type LabelPositionType = Values<typeof LabelPosition>;

export interface CheckBoxGroupProps extends CheckBoxProps {
  label?: string;
  checkBoxProps?: React.InputHTMLAttributes;
  checkBoxGroupProps?: any;
  readOnly?: boolean;
  disabled?: boolean;
  labelPosition?: LabelPositionType;
  size?: CheckBoxSizeType;
  type?: CheckBoxType;
  icon?: React.ReactNode;
}
