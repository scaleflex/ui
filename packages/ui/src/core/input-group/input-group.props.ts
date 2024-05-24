import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import type { InputProps } from '../input';
import type { TextareaProps } from '../textarea';
import { Type } from './types';
import { InputSizeType } from '../input/input.props';

export type InputGroupTypesType = Values<typeof Type>;

export type LabelAndHintType = {
  error?: boolean;
};

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: InputSizeType;
  label?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  hint?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  type?: InputGroupTypesType;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  hideCopyIcon?: boolean;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode;
  fullWidth?: boolean;
  onChange?: (event: any) => void;
  placeholder?: string;
  value?: any;
  LabelProps?: LabelProps;
  InputProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: InputProps;
  inputRef?:
    | ((instance: HTMLInputElement | null | undefined) => void)
    | React.MutableRefObject<HTMLInputElement | null>
    | null;
  TextareaProps?: TextareaProps;
}
