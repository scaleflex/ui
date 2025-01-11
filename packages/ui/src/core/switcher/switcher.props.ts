import React, { ChangeEvent } from 'react';

import { Values } from '../../utils/types';
import { SwitcherSize } from './switcher-size';

export type SwitcherSizeType = Values<typeof SwitcherSize>;

export interface SwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  switcherProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
  SwitcherPropsData?: React.HTMLAttributes<HTMLDivElement>;
  readOnly?: boolean;
  disabled?: boolean;
  size?: SwitcherSizeType;
}
