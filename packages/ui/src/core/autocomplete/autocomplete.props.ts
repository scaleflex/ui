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
  uuid: string;
  name: string;
  endIcon?: React.ReactNode;
  favorite?: boolean;
  disabled?: boolean;
  label?: string;
};

export type AutocompleteOptionType = AutocompleteOptionIdType | AutocompleteOptionObjectType;
export type AutocompleteValueType = AutocompleteOptionIdType | AutocompleteOptionIdType[];

export type AutocompleteOptionsGroupType = {
  options: AutocompleteOptionType[];
  groupedByValue?: any;
};

export type LabelAndHintType = {
  error?: boolean;
};

export interface AutocompleteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: React.ReactNode;
  size?: AutocompleteSizeType;
  label?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  hint?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
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
  onClose?: (
    event:
      | React.SyntheticEvent<HTMLElement>
      | React.KeyboardEvent<HTMLElement>
      | React.MouseEvent<HTMLElement>
      | undefined
  ) => void;
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
  hideArrow?: boolean;
  renderTag?: ({
    id,
    label,
    option,
    size,
    onRemove,
  }: {
    id: AutocompleteOptionIdType;
    label: AutocompleteOptionLabelType;
    option: AutocompleteOptionType | undefined | null;
    size: AutocompleteSizeType;
    onRemove: (event: React.MouseEvent<HTMLElement>) => void;
  }) => React.ReactNode;
  renderMenuItem?: ({
    id,
    label,
    option,
    menuItemProps,
  }: {
    id: AutocompleteOptionIdType;
    label: AutocompleteOptionLabelType | React.ReactNode;
    option: AutocompleteOptionType | undefined | null;
    menuItemProps: {
      key: AutocompleteOptionIdType;
      value: AutocompleteOptionIdType;
      size: AutocompleteSizeType;
      onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
      disabled: boolean;
      active: boolean;
      onClick: (event: React.MouseEvent<HTMLElement>) => void;
      enableScrollIntoView: boolean;
      children: React.ReactNode;
    };
  }) => React.ReactNode;
}

export interface RenderLabelProps {
  label?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  error?: boolean;
  size?: AutocompleteSizeType;
  LabelProps?: LabelProps;
}

export interface RenderHintProps {
  hint?: React.ReactNode | ((props: LabelAndHintType) => React.ReactNode);
  error?: boolean;
  size?: AutocompleteSizeType;
}

export interface AutocompleteHookReturn {
  formattedValue: AutocompleteValueType;
  filteredOptions: AutocompleteOptionType[];
  groupedFilteredOptions: AutocompleteOptionsGroupType[];
  optionsList: AutocompleteOptionType[];
  inputRef: ((instance: HTMLInputElement | null) => void) | React.MutableRefObject<HTMLInputElement | null> | null;
  inputValue: string;
  isValueSelected?: boolean;
  open: boolean;
  anchorEl: AnchorElType;
  handleMenuItemClick: (option: AutocompleteOptionType) => () => void;
  handleOpenMenuClick: (event: React.SyntheticEvent<HTMLSpanElement>) => void;
  handleChangeSearchTerm: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  handleCloseMenuClick: (
    event?:
      | React.SyntheticEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement>
  ) => void;
  checkIsIdSelected: (optionId: AutocompleteOptionIdType) => boolean;
  getOptionById: (optionId: AutocompleteOptionIdType) => AutocompleteOptionType | undefined | null;
  handleOnRemoveItem: (
    event: React.SyntheticEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>,
    optionId: AutocompleteOptionIdType
  ) => void;
  handleOnBlur: () => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClearIconClick: () => void;
}
