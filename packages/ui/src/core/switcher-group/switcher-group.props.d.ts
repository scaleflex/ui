import { SwitcherType } from '../switcher/switcher.props';

export interface SwitcherGroupProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string;
  switcherProps?: React.InputHTMLAttributes;
  SwitcherProps?: React.InputHTMLAttributes;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  size?: SwitcherType;
}
