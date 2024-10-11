import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { InputBackgroundColor, InputSize } from '../../utils/types';
import React from 'react';

export type SelectSizeType = Values<typeof InputSize>;
export type SelectSimpleValueType = string | number | boolean | null | undefined;
export type SelectBackgroundType = Values<typeof InputBackgroundColor>;

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  size?: SelectSizeType;
  error?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode | React.ReactElement;
  multiple?: boolean;
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  onChange?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => void;
  selectProps?: React.InputHTMLAttributes<HTMLInputElement>;
  MenuProps?: Omit<MenuProps, 'open'>;
  readOnly?: boolean;
  disabled?: boolean;
  showClearIcon?: boolean;
  showSelectionKey?: boolean;
  hideMenuItemsActions?: boolean;
  scroll?: boolean;
  onRequestClose?: () => void;
  renderLabel?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => React.ReactNode;
  hideEllipsis?: boolean;
  placeholder?: string;
}

export interface RenderOption {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  size?: SelectSizeType;
  hideMenuItemsActions?: boolean;
  onClose?: () => void;
  onChange?: (value: string[]) => void;
}

export interface RenderValue {
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  multiple?: boolean;
  showSelectionKey?: boolean;
  children?: any;
}
