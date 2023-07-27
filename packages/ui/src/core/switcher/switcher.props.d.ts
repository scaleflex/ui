import React, { ChangeEvent } from 'react';

import { Values } from '../../utils/types';
import { SwitcherSize } from './switcher-size';

export type SwitcherType = Values<typeof SwitcherSize>;

export interface SwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  switcherProps?: React.InputHTMLAttributes;
  SwitcherPropsData?: React.InputHTMLAttributes;
  readOnly?: boolean;
  $disabled?: boolean;
  disabled?: boolean;
  size?: SwitcherType;
}
