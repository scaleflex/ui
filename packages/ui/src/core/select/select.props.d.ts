import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { Size, Background } from './types';

export type SelectSizeType = Values<typeof Size>;
export type SelectSimpleValueType = string | number | null | undefined;
export type SelectBackgroundType = Values<typeof Background>;

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
