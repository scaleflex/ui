import type { SwitcherProps } from '../switcher';
import { SwitcherType } from '../switcher/switcher.props';

export interface SwitcherGroupProps extends SwitcherProps {
  label?: string;
  switcherProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
  size?: SwitcherType;
}
