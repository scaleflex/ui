import type { CheckBoxProps } from '../check-box';
import type { Values } from '../../utils/types';
import { LabelPosition } from './types';

export type LabelPositionType = Values<typeof LabelPosition>;
export interface CheckBoxGroupProps extends CheckBoxProps {
  label?: string;
  checkBoxProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  labelPosition?: LabelPositionType;
}
