import type { Values } from '../../utils/types';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  disabled?: boolean;
  size?: InputSizeType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  clearIcon?: React.ReactNode;
  iconType?: string;
  error?: boolean;
  fullWidth?: boolean;
  isSearchInput?: boolean;
  value?: any;
  iconClickStart?: (event: Event) => void;
  iconClickEnd?: (event: Event) => void;
  clearIconClick?: (event: Event) => void;
  focusOnMount?: boolean;
  focusOnClick?: boolean;
}
