import type { SwitcherProps } from '../switcher';

export interface SwitcherGroupProps extends SwitcherProps {
  label?: string;
  switcherProps?: React.InputHTMLAttributes;
  readOnly?: boolean;
  disabled?: boolean;
}
