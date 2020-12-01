import { ChangeEvent } from 'react';

export interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
