import { ChangeEvent } from 'react';
import { SwitcherSizeType } from '../switcher/switcher.props';

export interface SwitcherGroupProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  label?: string;
  switcherProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
  SwitcherProps?: React.HTMLAttributes<HTMLDivElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: SwitcherSizeType;
}
