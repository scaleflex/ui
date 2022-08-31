import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import type { MenuProps } from '../menu';
import type { InputProps } from '../input';
import { InputBackgroundColor, InputSize } from '../../utils/types';

export type AutocompleteBackgroundType = Values<typeof InputBackgroundColor>;
export type AutocompleteSizeType = Values<typeof InputSize>;
export type AutocompleteObjectOptionstype = {
  id: number;
  label: string;
};

export interface AutocompleteProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElementLike;
  size?: AutocompleteSizeType;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value: any;
  options: string[] | AutocompleteObjectOptionstype[];
  noOptionsText?: string;
  placeholder?: string;
  fullWidth?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  error?: boolean;
  focusOnOpen?: boolean;
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>, value: string | AutocompleteValueType[]) => void;
  onOpen?: (event) => void;
  onClose?: (event: React.SyntheticEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
  getOptionDisabled?: (item: string, index: number) => boolean;
  MenuProps?: MenuProps;
  LabelProps?: LabelProps;
  InputProps?: InputProps;
  background?: AutocompleteBackgroundType;
}
