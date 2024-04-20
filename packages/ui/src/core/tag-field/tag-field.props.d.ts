import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import { Size, AddTagType } from './types';

export type AddTagTypesType = Values<typeof AddTagType>;
export type TagFieldSizeType = Values<typeof Size>;
export type TagType = string | object | React.ReactNode | null | undefined;
export type SuggestionsFilterFnType = (
  suggestions: TagType[],
  userInput: string,
  getTagLabel: (tag: TagType) => string,
  alwaysShowSuggestedTags: boolean
) => TagType[];

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: TagType[];
  suggestedTags?: TagType[];
  onAdd: (item: TagType, type: AddTagTypesType, setUserInput) => void;
  onRemove: (index: number, value: string, setUserInput, event: any) => void;
  onGenerate?: (event) => void;
  onClear: () => void;
  getTagLabel?: (tag: TagType) => string;
  getTagValue?: (tag: TagType) => string;
  getTagIcon?: (tag: TagType) => string;
  onValidate?: (tagInput: string) => string | boolean;
  appliedValue: PT.string;
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
  showTooltip?: boolean;
  submitOnSpace?: boolean;
  preventSubmitOnBlur?: boolean;
  showGenerateTagsButton?: boolean;
  generateTagsButtonLabel?: string;
  clearTagsButtonLabel?: string;
  hideCopyIcon?: boolean;
  alwaysShowSuggestedTags?: boolean;
  placeholderAlwaysVisible?: boolean;
  suggestionsFilter?: SuggestionsFilterFnType;
  suggestionLabel?: React.ReactNode;
  suggestionTooltipMessage?: string;
  copyTextMessage?: string;
  copySuccessIcon?: React.ReactNode | ((props: IconProps) => React.ReactNode);
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, setUserInput: (value: any) => void) => void;
  filterInputWidth?: string | number;
  fullWidth?: boolean;
  hideClearButton?: boolean;
}
