import { Values } from '@scaleflex/ui/utils/types';
import React, { ChangeEvent } from 'react';
import { Size } from '../menu-item/types';

export type SwitcherType = Values<typeof Size>;
export interface SwitcherProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  switcherProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  size?: SwitcherType;
  iconSize?: SwitcherType;
}
