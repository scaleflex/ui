import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type SelectSizeType = Values<typeof InputSize>;
export type SelectSimpleValueType = string | number | null | undefined;
export type SelectBackgroundType = Values<typeof InputBackgroundColor>;

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SelectSizeType;
  error?: boolean;
  fullWidth?: boolean;
  children?: React.ReactElementLike;
  multiple?: boolean;
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  onChange?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => void;
  selectProps?: React.InputHTMLAttributes;
  MenuProps?: MenuProps;
  readOnly?: boolean;
  disabled?: boolean;
  background?: SelectBackgroundType;
  renderLabel?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => React.ReactNode;
}

export interface RenderOption {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  size?: SelectSizeType;
  onClose?: () => void;
  onChange?: (value) => void;
}

export interface RenderValue {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  children?: React.ReactElementLike;
}
