import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import type { MenuProps } from '../menu';
import { Background } from './types';

export type AutocompleteBackgroundType = Values<typeof Background>;
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
  focusOnOpen?: boolean;
  tags?: boolean;
  onChange?: (event: Event, value: SelectSimpleValueType | SelectSimpleValueType[]) => void;
  onOpen?: (event: Event) => void;
  onClose?: (event: Event) => void;
  getOptionDisabled?: (item: string, index: number) => boolean;
  MenuProps?: MenuProps;
  background?: AutocompleteBackgroundType;
}
