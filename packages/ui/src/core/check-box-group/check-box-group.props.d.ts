import type { CheckBoxProps } from '../check-box';
import type { Values } from '../../utils/types';
import { LabelPosition } from './types';
import { Size } from '../check-box/size';

export type LabelPositionType = Values<typeof LabelPosition>;
export type CheckBoxSizeType = Values<typeof Size>;
export interface CheckBoxGroupProps extends CheckBoxProps {
  label?: string;
  title?: string;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  labelPosition?: LabelPositionType;
  size?: CheckBoxSizeType;
}
