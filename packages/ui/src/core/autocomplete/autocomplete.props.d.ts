import type { PropsWithChildren } from 'react';
import type { MenuProps } from '../menu';

export interface AutocompleteProps extends PropsWithChildren, React.HTMLAttributes<HTMLSelectElement> {
  children?: React.ReactElementLike;
  size?: SelectSizeType;
  multiple?: boolean;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  options?: string[];
  disabled?: boolean;
  noOptionsText?: boolean;
  onChange?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => void;
  onOpen?: (event: Event) => void;
  onClose?: (event: Event) => void;
  MenuProps?: MenuProps;
}
