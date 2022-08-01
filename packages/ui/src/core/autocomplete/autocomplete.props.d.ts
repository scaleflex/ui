import type { PropsWithChildren } from 'react';
import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import type { MenuProps } from '../menu';
import { Background } from './types';

export type AutocompleteValueType = string;
export type AutocompleteBackgroundType = Values<typeof Background>;
export interface AutocompleteProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElementLike;
  size?: SelectSizeType;
  multiple?: boolean;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value: string | string[];
  options?: string[];
  disabled?: boolean;
  noOptionsText?: string;
  focusOnOpen?: boolean;
  onChange?: (event: Event, value: AutocompleteValueType | AutocompleteValueType[]) => void;
  onOpen?: (event) => void;
  onClose?: (event: React.SyntheticEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
  getOptionDisabled?: (item: string, index: number) => boolean;
  MenuProps?: MenuProps;
  error?: boolean;
  LabelProps?: LabelProps;
  background?: AutocompleteBackgroundType;
}
