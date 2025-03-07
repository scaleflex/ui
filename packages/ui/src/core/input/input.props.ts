import React, { Ref } from 'react';
import { IconProps } from '@scaleflex/icons/icon.props';

import type { Values } from '../../utils/types';
// TODO: Move types to this file
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export type IconFuncType = (props: IconProps) => React.ReactNode;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  readOnly?: boolean;
  disabled?: boolean;
  isEllipsis?: boolean;
  isHovering?: boolean;
  size?: InputSizeType;
  iconStart?: React.ReactNode | IconFuncType;
  iconEnd?: React.ReactNode | IconFuncType;
  inputActions?: React.ReactNode;
  iconChange?: React.ReactNode | IconFuncType;
  clearIcon?: React.ReactNode | IconFuncType;
  inputType?: string;
  type?: any;
  error?: boolean;
  fullWidth?: boolean;
  isSearchInput?: boolean;
  hideCopyIcon?: boolean;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode;
  value?: any;
  selectedItems?: any;
  isSelectedItems?: boolean;
  renderTags?: () => React.ReactNode;
  iconClickStart?: (event: Event) => void;
  iconClickEnd?: (event: Event) => void;
  clearIconClick?: (event: Event) => void;
  focusOnMount?: boolean;
  focusOnClick?: boolean;
  showPlaceholder?: (value: boolean) => void;
  placeholder?: string;
  InputProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  ref?: Ref<HTMLInputElement>;
}
