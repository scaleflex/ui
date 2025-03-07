import { ChangeEvent, Ref } from 'react';

import { Values } from '../../utils/types';
import { RadioSize } from './size';

export type RadioSizeType = Values<typeof RadioSize>;

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  radioProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
  readOnly?: boolean;
  disabled?: boolean;
  size?: RadioSizeType;
  ref?: Ref<HTMLSpanElement>;
}
