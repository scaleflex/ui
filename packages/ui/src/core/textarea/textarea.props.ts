import { ChangeEvent, SyntheticEvent } from 'react';

import type { Values } from '../../utils/types';
import { InputBackgroundColor } from '../../utils/types';
import { InputSizeType } from '../input/input.props';

export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  value: any;
  size?: InputSizeType;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  disableActionButton?: boolean;
  isActionButtonLoading?: boolean;
  fullWidth?: boolean;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode;
  cols?: number;
  rows?: number;
  showActionButton?: boolean;
  showClearButton?: boolean;
  hideCopyIcon?: boolean;
  actionButtonLabel?: string;
  clearAllButtonLabel?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickActionButton?: (event: SyntheticEvent) => void;
  onClear?: (event: SyntheticEvent) => void;
}
