import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import { Size, AddTagType } from './types';

export type AddTagTypesType = Values<typeof AddTagType>;
export type TagFieldSizeType = Values<typeof Size>;
export type TagType = string | object | null | undefined;
export type SuggestionsFilterFnType = (
  suggestions: TagType[],
  userInput: string,
  getTagLabel: (tag: TagType) => string,
  alwaysShowSuggestedTags: boolean
) => TagType[];

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: TagType[];
  suggestedTags?: TagType[];
  onAdd: (item: TagType, type: AddTagTypesType) => void;
  onRemove: (index: number, value: string) => void;
  onGenerate?: (event) => void;
  getTagLabel?: (tag: TagType) => string;
  getTagValue?: (tag: TagType) => string;
  onValidate?: (tagInput: string) => string | boolean;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  hint?: React.ReactNode;
  error?: boolean;
  size?: TagFieldSizeType;
  loading?: boolean;
  crossIcon?: boolean;
  disableOnEnter?: boolean;
  showGenerateTagsButton?: boolean;
  generateTagsButtonLabel?: string;
  alwaysShowSuggestedTags?: boolean;
  suggestionsFilter?: SuggestionsFilterFnType;
  suggestionLabel?: React.ReactNode;
  suggestionTooltipMessage?: string;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
}
