import React, { ChangeEvent } from 'react';

import { Values } from '../../utils/types';
import { SwitcherSize } from './switcher-size';

export type SwitcherType = Values<typeof SwitcherSize>;

export interface SwitcherProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  switcherProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  size?: SwitcherType;
  iconSize?: SwitcherType;
}
