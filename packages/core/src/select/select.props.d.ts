import type { Values } from '@sfx-ui/utils/types';
import { Size } from './types';

export type SelectPropsSizeType = Values<typeof Size>;
export type SelectPropsSimpleValueType = string | number | null | undefined;

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SelectPropsSizeType;
  error?: boolean;
  children: React.ReactElementLike[];
  multiple?: boolean;
  value?: SelectPropsSimpleValueType | SelectPropsSimpleValueType[];
  onChange?: (value: SelectPropsSimpleValueType | SelectPropsSimpleValueType[]) => void;
}

export interface RenderOption {
  value?: SelectPropsSimpleValueType | SelectPropsSimpleValueType[];
  multiple?: boolean;
  size?: SelectPropsSizeType;
  onClose?: () => void;
  onChange?: (value: SelectPropsSimpleValueType | SelectPropsSimpleValueType[]) => void;
}

export interface RenderValue {
  value?: SelectPropsSimpleValueType | SelectPropsSimpleValueType[];
  multiple?: boolean;
  children: React.ReactElementLike[];
}
