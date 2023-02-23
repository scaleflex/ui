import type { Values } from '../../utils/types';
import { InputBackgroundColor } from '../../utils/types';
import { InputSizeType } from '../input/input.props';

export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  size?: InputSizeType;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  cols?: number;
  rows?: number;
}
