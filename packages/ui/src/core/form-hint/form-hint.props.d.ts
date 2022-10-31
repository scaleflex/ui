import { InputSizeType } from '../input/input.props';

export interface FormHintProps extends React.HTMLAttributes<HTMLSpanElement> {
  error?: boolean;
  disabled?: boolean;
  size?: InputSizeType;
}
