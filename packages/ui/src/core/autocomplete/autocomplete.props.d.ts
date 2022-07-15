import type { PropsWithChildren } from 'react';
import type { MenuProps } from '../menu';

export interface AutocompleteProps extends PropsWithChildren, React.HTMLAttributes<HTMLSelectElement> {
  children?: React.ReactElementLike;
  size?: SelectSizeType;
  multiple?: boolean;
  value?: SelectSimpleValueType | SelectSimpleValueType[];
  options?: string[];
  onChange?: (value: SelectSimpleValueType | SelectSimpleValueType[]) => void;
  MenuProps?: MenuProps;
  readOnly?: boolean;
  disabled?: boolean;
}
