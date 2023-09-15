import type { Values } from '../../utils/types';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type InputSizeType = Values<typeof InputSize>;
export type InputBackgroundType = Values<typeof InputBackgroundColor>;

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  disabled?: boolean;
  isEllipsis?: boolean;
  isHovering?: boolean;
  size?: InputSizeType;
  iconStart?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  iconEnd?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  iconChange?: React.ReactNode;
  clearIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  iconType?: string;
  inputType?: string;
  type?: any;
  error?: boolean;
  fullWidth?: boolean;
  isSearchInput?: boolean;
  hideCopyIcon?: boolean;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  value?: any;
  selectedItems?: any;
  isSelectedItems?: boolean;
  renderTags?: () => React.ReactNode;
  iconClickStart?: (event: Event) => void;
  iconClickEnd?: (event: Event) => void;
  clearIconClick?: (event: Event) => void;
  focusOnMount?: boolean;
  focusOnClick?: boolean;
  showPlaceholder?: (value: boolean) => void;
}
