import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import { AddTagType } from './types';

export type AddTagTypesType = Values<typeof AddTagType>;
export type TagType = string | object | null | undefined;

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: TagType[];
  suggestedTags?: TagType[];
  onAdd: (item: TagType, type: AddTagTypesType) => void;
  onRemove: (index: number, value: string) => void;
  fullWidth?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  hint?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
  getTagLabel?: (tag: TagType) => string;
  getTagValue?: (tag: TagType) => string;
}
