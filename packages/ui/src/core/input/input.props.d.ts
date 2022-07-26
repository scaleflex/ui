import type { Values } from '../../utils/types';
import { Size, Background } from './types';

export type InputSizeType = Values<typeof Size>;
export type InputBackgroundType = Values<typeof Background>;
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: InputSizeType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  clearIcon?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  readOnly?: boolean;
  renderedValues?: React.ReactNode;
  iconClickStart?: () => void;
  iconClickEnd?: () => void;
  clearIconClick?: (event: Event) => void;
  background?: InputBackgroundType;
  focusOnMount?: boolean;
  focusOnClick?: boolean;
}
