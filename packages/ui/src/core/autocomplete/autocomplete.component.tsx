import React from 'react';
import PT, { Validator } from 'prop-types';
import Tick from '@scaleflex/icons/tick';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { AutocompleteProps, AutocompleteOptionType, AutocompleteHookReturn } from './autocomplete.props';
import { propTypes as labelPropTypes } from '../label/label.component';
import { propTypes as inputPropTypes } from '../input/input.component';
import type { InputProps } from '../input';
import type { LabelProps } from '../label';
import ArrowTick from '../arrow-tick';
import Input from '../input';
import Tag from '../tag';
import MenuItem, { MenuItemActions } from '../menu-item';
import { InputSize } from '../../utils/types';
import { Size } from '../menu-item/types';
import Styled from './autocomplete.styles';
import { renderLabel, renderHint, defaultGetOptionValue, defaultGetOptionLabel } from './autocomplete.utils';
import { useAutocomplete } from './autocomplete.hook';

const Autocomplete = intrinsicComponent<AutocompleteProps, HTMLDivElement>((props, ref): JSX.Element => {
  const {
    children,
    MenuProps,
    LabelProps: LabelPropsData,
    InputProps: InputPropsData,
    error,
    label,
    hint,
    value,
    noOptionsText,
    focusOnOpen,
    onChange,
    onOpen,
    onClose,
    getOptionDisabled = () => false,
    getOptionValue = defaultGetOptionValue,
    getOptionLabel = defaultGetOptionLabel,
    multiple,
    size,
    disabled,
    scroll,
    readOnly,
    options,
    placeholder,
    fullWidth,
    sortAlphabetically,
    submitOnBlur,
    maxMenuHeight = 250,
    showClearIcon = false,
    renderLabelIconEnd,
    renderOptionLabel,
    renderSearchEmptyMenuItem,
    renderGroup,
    groupBy,
    ...rest
  } = props;
  const {
    formattedValue,
    filteredOptions,
    groupedFilteredOptions,
    optionsList,
    inputRef,
    inputValue,
    isValueSelected,
    open,
    anchorEl,
    handleMenuItemClick,
    handleOpenMenuClick,
    handleChangeSearchTerm,
    handleCloseMenuClick,
    handleOnRemoveItem,
    handleOnBlur,
    handleKeyDown,
    handleClearIconClick,
    checkIsIdSelected,
    getOptionById,
  }: Partial<AutocompleteHookReturn> = useAutocomplete({ ...props, getOptionValue, getOptionLabel, getOptionDisabled });
  const isMultiple = Boolean(multiple) && Array.isArray(formattedValue);

  const renderMenuItem = (option: AutocompleteOptionType): JSX.Element => {
    const optionId = getOptionValue(option);
    const optionLabel = getOptionLabel(option);
    const isActive = checkIsIdSelected(optionId);

    return (
      <MenuItem
        key={optionId}
        value={optionId}
        size={size}
        onMouseDown={(e) => e.preventDefault()}
        disabled={getOptionDisabled(option)}
        active={isActive}
        onClick={handleMenuItemClick(option)}
        enableScrollIntoView
      >
        {renderOptionLabel ? renderOptionLabel(option) : optionLabel}

        {isActive && !renderOptionLabel && (
          <MenuItemActions>
            <Styled.TickIcon>
              <Tick size={12} />
            </Styled.TickIcon>
          </MenuItemActions>
        )}
      </MenuItem>
    );
  };

  const renderTags = (): JSX.Element[] | JSX.Element | boolean | undefined =>
    isMultiple &&
    formattedValue.map((optionId, index) => {
      const option = getOptionById(optionId);
      const optionLabel = option ? getOptionLabel(option) : optionId;

      return (
        <Tag
          key={optionId}
          tagIndex={index}
          crossIcon
          onRemove={(_, event) => handleOnRemoveItem(event, optionId)}
          title={optionLabel}
          size={size}
        >
          {optionLabel}
        </Tag>
      );
    });

  const renderMenuContent = (): JSX.Element | JSX.Element[] | React.ReactNode => {
    if (filteredOptions.length > 0) {
      if (groupBy) {
        return groupedFilteredOptions.map(({ options: groupOptions, groupedByValue }, index) => {
          const groupKey = ['string', 'number'].includes(typeof groupedByValue) ? groupedByValue : index;
          const groupChildren = groupOptions.map(renderMenuItem);

          return renderGroup ? (
            renderGroup({ key: groupKey, group: groupedByValue, children: groupChildren })
          ) : (
            <Styled.OptionGroup key={groupKey}>{groupChildren}</Styled.OptionGroup>
          );
        });
      }

      return filteredOptions.map(renderMenuItem);
    }

    if (optionsList.length > 0 && renderSearchEmptyMenuItem) {
      return renderSearchEmptyMenuItem();
    }

    return (
      <MenuItem noOptionsText size={size}>
        {noOptionsText}
      </MenuItem>
    );
  };

  return (
    <Styled.Autocomplete ref={ref} {...rest}>
      {renderLabel({ label, error, size, LabelProps: LabelPropsData })}

      <Styled.AutocompleteContainer onClick={disabled || readOnly ? undefined : handleOpenMenuClick}>
        <Input
          {...(isMultiple ? { renderTags, selectedItems: formattedValue } : {})}
          {...(InputPropsData || {})}
          ref={inputRef}
          size={size}
          value={inputValue}
          readOnly={readOnly}
          error={error}
          focusOnMount={focusOnOpen}
          onKeyDown={handleKeyDown}
          onChange={handleChangeSearchTerm}
          onBlur={handleOnBlur}
          disabled={disabled}
          placeholder={placeholder}
          fullWidth={fullWidth}
          isEllipsis
          iconEnd={() => (
            <Styled.InputIconEndContainer>
              {renderLabelIconEnd &&
                renderLabelIconEnd({
                  isMultiple,
                  option:
                    !isMultiple && formattedValue && typeof formattedValue === 'string'
                      ? getOptionById(formattedValue)
                      : null,
                })}

              <ArrowTick
                {...(!disabled && !readOnly ? { onClick: handleOpenMenuClick } : {})}
                type={open ? 'top' : 'bottom'}
                IconProps={{ size: size === Size.Md ? 11 : 10 }}
              />
            </Styled.InputIconEndContainer>
          )}
          {...(showClearIcon
            ? {
                clearIcon: isValueSelected && <Styled.CrossIcon size={size === 'md' ? 11 : 10} />,
                clearIconClick: handleClearIconClick,
              }
            : {})}
        />
      </Styled.AutocompleteContainer>

      <Styled.Menu
        onClose={handleCloseMenuClick}
        open={open}
        scroll={scroll}
        anchorEl={anchorEl}
        maxMenuHeight={maxMenuHeight}
        {...MenuProps}
      >
        {renderMenuContent()}
      </Styled.Menu>

      {renderHint({ hint, error, size })}
    </Styled.Autocomplete>
  );
});

Autocomplete.defaultProps = {
  size: InputSize.Md,
  multiple: false,
  disabled: false,
  scroll: true,
  readOnly: false,
  sortAlphabetically: false,
  options: [],
  noOptionsText: 'No options',
};

Autocomplete.propTypes = {
  children: PT.oneOfType([PT.element, PT.arrayOf(PT.element)]),
  size: PT.oneOf(objectValues(InputSize)),
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  InputProps: PT.exact(inputPropTypes) as Validator<InputProps>,
  value: PT.oneOfType([PT.string, PT.array]),
  label: PT.oneOfType([PT.node, PT.func]),
  hint: PT.oneOfType([PT.node, PT.func]),
  options: PT.array.isRequired,
  noOptionsText: PT.string,
  placeholder: PT.string,
  readOnly: PT.bool,
  fullWidth: PT.bool,
  multiple: PT.bool,
  disabled: PT.bool,
  scroll: PT.bool,
  focusOnOpen: PT.bool,
  error: PT.bool,
  onChange: PT.func,
  onOpen: PT.func,
  onClose: PT.func,
  getOptionDisabled: PT.func,
  getOptionValue: PT.func,
  getOptionLabel: PT.func,
  submitOnBlur: PT.func,
  sortAlphabetically: PT.bool,
  showClearIcon: PT.bool,
  maxMenuHeight: PT.oneOfType([PT.string, PT.number]),
  renderLabelIconEnd: PT.func,
  renderOptionLabel: PT.func,
  renderSearchEmptyMenuItem: PT.func,
  groupBy: PT.func,
};

export default Autocomplete;
