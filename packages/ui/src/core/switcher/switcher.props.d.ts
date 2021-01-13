import { ChangeEvent } from 'react';

export interface SwitcherProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
