import { InputSizeType } from '../input/input.props';

export interface SearchProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  size?: InputSizeType;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}
