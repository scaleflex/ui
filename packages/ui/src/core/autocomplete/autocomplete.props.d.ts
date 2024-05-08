import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import type { MenuProps } from '../menu';
import type { InputProps } from '../input';
import { InputBackgroundColor, InputSize } from '../../utils/types';
import { AnchorElType } from '../menu/menu.props';

export type AutocompleteBackgroundType = Values<typeof InputBackgroundColor>;
export type AutocompleteSizeType = Values<typeof InputSize>;
export type AutocompleteOptionIdType = string;
export type AutocompleteOptionLabelType = string;
export type AutocompleteOptionObjectType = {
  [key: string]: any;
};
export type AutocompleteOptionType = AutocompleteOptionIdType | AutocompleteOptionObjectType;
export type AutocompleteValueType = AutocompleteOptionIdType | AutocompleteOptionIdType[];

export type AutocompleteOptionsGroupType = {
  options: AutocompleteOptionType[];
  groupedByValue?: any
};

export interface AutocompleteProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElementLike;
  size?: AutocompleteSizeType;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value?: AutocompleteValueType;
  options: AutocompleteOptionType[];
  noOptionsText?: string;
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  scroll?: boolean;
  error?: boolean;
  sortAlphabetically?: boolean;
  focusOnOpen?: boolean;
  onChange?: (newValue: AutocompleteValueType) => void;
  onOpen?: (event: React.SyntheticEvent<HTMLElement>) => void;
  onClose?: (event: React.SyntheticEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | undefined) => void;
  getOptionDisabled?: (option: AutocompleteOptionType) => boolean;
  getOptionValue?: (option: AutocompleteOptionType) => AutocompleteOptionIdType;
  getOptionLabel?: (option: AutocompleteOptionType) => AutocompleteOptionLabelType;
  groupBy?: (option: AutocompleteOptionType) => any;
  submitOnBlur?: () => void;
  MenuProps?: MenuProps;
  LabelProps?: LabelProps;
  InputProps?: InputProps;
  background?: AutocompleteBackgroundType;
  maxMenuHeight?: string | number;
  showClearIcon?: boolean;
  renderLabelIconEnd?: ({
    option,
    isMultiple,
  }: {
    option?: AutocompleteOptionType | null | undefined;
    isMultiple: boolean;
  }) => React.ReactNode;
  renderOptionLabel?: (option: AutocompleteOptionType) => React.ReactNode;
  renderSearchEmptyMenuItem?: () => React.ReactNode;
  renderGroup?: ({
    key,
    group,
    children,
  }: {
    key: string | number;
    group: any;
    children: React.ReactNode;
  }) => React.ReactNode;
}

export interface RenderLabelProps {
  label?: React.ReactNode;
  error?: boolean;
  size?: AutocompleteSizeType;
  LabelProps?: LabelProps;
}

export interface RenderHintProps {
  hint?: React.ReactNode;
  error?: boolean;
  size?: AutocompleteSizeType;
}

export interface AutocompleteHookReturn {
  formattedValue: AutocompleteValueType;
  filteredOptions: AutocompleteOptionType[];
  groupedFilteredOptions: AutocompleteOptionsGroupType[];
  optionsList: AutocompleteOptionType[];
  inputRef: React.Ref;
  inputValue: string;
  isValueSelected?: boolean;
  open: boolean;
  anchorEl: AnchorElType;
  handleMenuItemClick: (option: AutocompleteOptionType) => () => void;
  handleOpenMenuClick: (event: React.SyntheticEvent<HTMLSpanElement>) => void;
  handleChangeSearchTerm: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  handleCloseMenuClick: (
    event?: React.SyntheticEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  checkIsIdSelected: (optionId: AutocompleteOptionIdType) => boolean;
  getOptionById: (optionId: AutocompleteOptionIdType) => AutocompleteOptionType | undefined | null;
  handleOnRemoveItem: (event: React.SyntheticEvent<HTMLElement>, optionId: AutocompleteOptionIdType) => void;
  handleOnBlur: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClearIconClick: () => void;
}
