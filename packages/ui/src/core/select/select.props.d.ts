import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type SelectSizeType = Values<typeof InputSize>;
export type SelectSimpleValueType = string | number | boolean | null | undefined;
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
  showClearIcon?: boolean;
  showSelectionKey?: boolean;
  hideMenuItemsActions?: boolean;
  scroll?: boolean;
  onRequestClose?: () => void;
  renderLabel?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => React.ReactNode;
  hideEllipsis?: boolean;
}

export interface RenderOption {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  size?: SelectSizeType;
  hideMenuItemsActions?: boolean;
  onClose?: () => void;
  onChange?: (value) => void;
}

export interface RenderValue {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  showSelectionKey?: boolean;
  children?: React.ReactElementLike;
}
