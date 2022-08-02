import type { Values } from '../../utils/types';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export type InputBackgroundType = Values<typeof InputBackgroundColor>;
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: InputSizeType;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  clearIcon?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  value?: any;
  readOnly?: boolean;
  /// / TODO: refactor how implement tags in input
  // renderTags?: React.ReactNode;
  iconClickStart?: () => void;
  iconClickEnd?: () => void;
  clearIconClick?: (event: Event) => void;
  background?: InputBackgroundType;
  focusOnMount?: boolean;
  focusOnClick?: boolean;
}
