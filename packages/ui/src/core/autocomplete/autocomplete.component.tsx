import React from 'react';
import Tick from '@scaleflex/icons/tick';

import { intrinsicComponent } from '../../utils/functions';
import type { AutocompleteProps, AutocompleteOptionType, AutocompleteHookReturn } from './autocomplete.props';

import ArrowTick from '../arrow-tick';
import Input from '../input';
import Tag from '../tag';
import MenuItem, { MenuItemActions } from '../menu-item';
import { InputSize } from '../../utils/types';
import { Size } from '../menu-item/types';
import Styled from './autocomplete.styles';
import { renderLabel, renderHint, defaultGetOptionValue, defaultGetOptionLabel } from './autocomplete.utils';
import { useAutocomplete } from './autocomplete.hook';
import TextWithHighlights from '../text-with-highlights';
import EllipsedText from '../ellipsed-text';

const Autocomplete = intrinsicComponent<AutocompleteProps, HTMLDivElement>(
  (props: AutocompleteProps, ref): JSX.Element => {
    const {
      MenuProps,
      LabelProps: LabelPropsData,
      InputProps: InputPropsData,
      error,
      label,
      hint,
      noOptionsText = 'No options',
      focusOnOpen,
      getOptionDisabled = () => false,
      getOptionValue = defaultGetOptionValue,
      getOptionLabel = defaultGetOptionLabel,
      multiple = false,
      size = InputSize.Md,
      disabled = false,
      scroll = true,
      disableTextEllipse = false,
      readOnly = false,
      placeholder,
      fullWidth,
      maxMenuHeight = 250,
      showClearIcon = false,
      renderLabelIconEnd,
      renderOptionLabel,
      renderSearchEmptyMenuItem,
      renderGroup,
      groupBy,
      hideArrow = false,
      renderTag,
      renderMenuItem: renderMenuItemCustomFn,
      onChange,
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
      searchTerm,
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
      focusedMenuItemIndex,
    }: Partial<AutocompleteHookReturn> = useAutocomplete({
      ...props,
      onChange,
      getOptionValue,
      getOptionLabel,
      getOptionDisabled,
    });
    const isMultiple = Boolean(multiple) && Array.isArray(formattedValue);

    const renderMenuItem = (option: AutocompleteOptionType, index: number): JSX.Element | React.ReactNode => {
      const optionId = getOptionValue(option);
      const optionLabel = getOptionLabel(option);
      const isActive = checkIsIdSelected(optionId);
      const isDisabled = getOptionDisabled(option);
      const label = renderOptionLabel ? (
        renderOptionLabel(option)
      ) : (
        <TextWithHighlights highlightText={searchTerm} text={optionLabel} />
      );

      const menuItemProps = {
        key: optionId,
        value: optionId,
        size,
        onMouseDown: (event: React.MouseEvent<HTMLElement>) => event.preventDefault(),
        disabled: isDisabled,
        active: isActive,
        isFocused: index === focusedMenuItemIndex,
        onClick: () => handleMenuItemClick(option),
        enableScrollIntoView: true,
        children: (
          <>
            {disableTextEllipse ? label : <EllipsedText maxLinesCount={1}>{label}</EllipsedText>}

            {isActive && !renderOptionLabel && (
              <MenuItemActions>
                <Styled.TickIcon>
                  <Tick size={12} />
                </Styled.TickIcon>
              </MenuItemActions>
            )}
          </>
        ),
      };

      if (typeof renderMenuItemCustomFn === 'function') {
        const option = getOptionById(optionId);

        return renderMenuItemCustomFn({
          id: optionId,
          label,
          option,
          menuItemProps,
        });
      }

      return <MenuItem {...menuItemProps} />;
    };

    const renderTags = (): JSX.Element[] | JSX.Element | React.ReactNode | boolean | undefined =>
      isMultiple &&
      formattedValue.map((optionId, index) => {
        const option = getOptionById(optionId);
        const optionLabel = option ? getOptionLabel(option) : optionId;

        if (typeof renderTag === 'function') {
          return renderTag({
            id: optionId,
            label: optionLabel,
            option,
            size,
            onRemove: (event: React.MouseEvent<HTMLElement>) => handleOnRemoveItem(event, optionId),
          });
        }

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

                {!hideArrow && (
                  <ArrowTick
                    {...(!disabled && !readOnly ? { onClick: handleOpenMenuClick } : {})}
                    type={open ? 'top' : 'bottom'}
                    IconProps={{ size: size === Size.Md ? 11 : 10 }}
                  />
                )}
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
  }
);

export default Autocomplete;
