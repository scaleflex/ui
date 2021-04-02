import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import { AddTagType } from './types';

export type AddTagTypesType = Values<typeof AddTagType>;

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: (string | object)[];
  suggestedTags?: (string | object)[];
  onAdd: (item: string | object, type: AddTagTypesType) => void;
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
  getTagLabel?: (tag: string | object) => string;
  getTagValue?: (tag: string | object) => string;
}
