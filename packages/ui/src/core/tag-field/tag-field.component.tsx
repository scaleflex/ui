import React, { useState, useMemo, useEffect, ReactElement } from 'react';
import PT, { Validator } from 'prop-types';
import { InfoOutline, CopyOutline, Success } from '@scaleflex/icons';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Color } from '../../utils/types/palette';
import { lightPalette } from '../../theme/roots/palette';
import Tag from '../tag';
import Label from '../label';
import Tooltip from '../tooltip';
import FormHint from '../form-hint';
import Button from '../button';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { TagFieldProps, AddTagTypesType, TagType, SuggestionsFilterFnType } from './tag-field.props';
import { AddTagType, Size } from './types';
import { tagsSuggestionsFilter } from './tag-field.utils';
import { handleCopyIcon } from '../input/input.utils';
import TooltipV2 from '../tooltip-v2/tooltip-v2.component';
import { onClickByMouseDown } from '../../utils/functions/on-click-by-mouse-down';
import Styled from './tag-field.styles';

const TagField = intrinsicComponent<TagFieldProps, HTMLDivElement>(
  (
    {
      suggestedTags = [],
      tags = [],
      onAdd,
      onRemove,
      onGenerate,
      onClear,
      onValidate,
      placeholder,
      disabled,
      readOnly,
      label,
      suggestionLabel,
      suggestionTooltipMessage,
      LabelProps: LabelPropsData,
      error = false,
      hint,
      size = Size.Md,
      crossIcon = true,
      loading,
      appliedValue,
      disableOnEnter,
      showTooltip,
      submitOnSpace,
      preventSubmitOnBlur,
      hideCopyIcon = false,
      hideClearButton = false,
      showGenerateTagsButton = false,
      generateTagsButtonLabel = 'Generate tags',
      clearTagsButtonLabel = 'Clear all',
      alwaysShowSuggestedTags = false,
      placeholderAlwaysVisible = false,
      filterInputWidth = 100,
      fullWidth = false,
      getTagLabel = (tag: TagType): string => tag as string,
      getTagValue = (tag: TagType): string => tag as string,
      getTagIcon,
      suggestionsFilter = tagsSuggestionsFilter as SuggestionsFilterFnType,
      onFocus,
      onBlur,
      ...rest
    }: TagFieldProps,
    ref
  ): JSX.Element => {
    const [userInput, setUserInput] = useState('');
    const [showCopySuccessIcon, setShowCopySucessIcon] = useState(false);
    const [tagsHint, setTagsHint] = useState(hint);
    const [tagsError, setTagsError] = useState(error);
    const [isFieldFocused, setFieldFocused] = useState(false);
    const [isFieldHovered, setFieldHovered] = useState(false);

    const filteredTags = useMemo<TagType[]>(() => tags.filter((tag) => tag), [tags]);
    const existingLabels = useMemo<string[]>(
      () => filteredTags.map((tag) => getTagLabel(tag).toLowerCase()),
      [filteredTags]
    );

    const showCopyIcon = (tags || []).length > 0 && !hideCopyIcon;
    const showClearButton = (filteredTags || []).length > 0 && !hideClearButton && clearTagsButtonLabel;
    const showPlaceholder = placeholderAlwaysVisible || isFieldFocused || isFieldHovered || !filteredTags?.length;

    const filteredSuggestions = useMemo(() => {
      const filteredItems = suggestedTags?.filter(
        (suggestion) => !existingLabels?.includes(getTagLabel(suggestion)?.toLowerCase())
      );

      return suggestionsFilter(filteredItems, userInput, getTagLabel, alwaysShowSuggestedTags);
    }, [userInput, suggestedTags, existingLabels, suggestionsFilter]);

    const handleTagAdd = (item: any, type: AddTagTypesType): void => {
      if (!item) return;
      const tagLabel = type === AddTagType.UserInput ? item : getTagLabel(item);

      if (!filteredTags.some((tag: TagType) => getTagLabel(tag).toLowerCase() === tagLabel.toLowerCase())) {
        onAdd(item, type, setUserInput);
      }
    };

    const convertToLower = (value: string): string => value.toLocaleLowerCase();

    const isMatchingSuggestedTag = filteredSuggestions.some(
      (item) => convertToLower(getTagLabel(item)) === convertToLower(userInput)
    );

    const handleAddingTag = (): void => {
      if (userInput) {
        if (isMatchingSuggestedTag) {
          const nextUserInput = filteredSuggestions.find(
            (item) => convertToLower(getTagLabel(item)) === convertToLower(userInput)
          );
          handleTagAdd(nextUserInput, AddTagType.Suggestion);
        } else {
          handleTagAdd(userInput, AddTagType.UserInput);
        }
      }

      setUserInput('');
    };

    const handleTagsValidation = (): void => {
      if (!userInput?.length) return;

      if (typeof onValidate === 'function') {
        const isValid = onValidate(userInput);

        if (typeof isValid === 'string') {
          setTagsHint(isValid);
          setTagsError(true);
          return;
        }

        setTagsHint('');
        setTagsError(false);
        handleAddingTag();
      }
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
      setFieldFocused(false);
      if (preventSubmitOnBlur) return;

      handleTagsValidation();

      if (typeof onBlur === 'function') {
        onBlur(event, setUserInput);
      }
    };

    const handleUserInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if ((event.key === 'Enter' && !disableOnEnter) || (event.key === ' ' && submitOnSpace)) {
        event.preventDefault();
        handleAddingTag();
      } else if (event.key === 'Backspace' && !userInput && filteredTags?.length > 0) {
        const index = filteredTags.length - 1;
        onRemove(index, getTagValue(filteredTags[index]), setUserInput, event);
      }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
      setFieldFocused(true);

      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    };

    const handleClearAllTags = (): void => {
      setUserInput('');

      if (onClear) {
        onClear();
      }
    };

    const handleGenerateTags = (event: any): void => {
      if (onGenerate) {
        onGenerate(event);
      }
    };

    const copyIconHandler = (): void => {
      handleCopyIcon((tags || []).map(getTagLabel).join(', '), setShowCopySucessIcon);
    };

    // TODO remove when add clear all button
    useEffect(() => {
      if (typeof appliedValue === 'string' && !appliedValue) {
        setUserInput('');
      }
    }, [appliedValue]);

    useEffect(() => {
      if (showCopySuccessIcon) {
        setTimeout(() => setShowCopySucessIcon(false), 2000);
      }
    }, [showCopySuccessIcon]);

    useEffect(() => {
      setTagsError(error);
      setTagsHint(hint);
    }, [error, hint]);

    const renderTag = (tag: TagType, tagLabel: string, index: number): ReactElement => (
      <Tag
        key={getTagValue(tag)}
        tagIndex={index}
        crossIcon={crossIcon}
        startIcon={typeof getTagIcon?.(tag) === 'object' ? getTagIcon?.(tag) : null}
        size={size}
        onRemove={
          disabled || readOnly || loading
            ? undefined
            : (_tagIndex, event) => onRemove(index, getTagValue(tag), setUserInput, event)
        }
        title={tagLabel}
      >
        {tagLabel}
      </Tag>
    );

    return (
      <Styled.TagFieldRoot ref={ref} fullWidth={fullWidth}>
        <Styled.TagInputFieldWrapper>
          {label && (
            <Label error={tagsError} {...(LabelPropsData || {})}>
              {label}
            </Label>
          )}

          <Styled.Wrapper>
            <Styled.TagFieldWrapper
              size={size}
              error={tagsError}
              onMouseOver={() => setFieldHovered(true)}
              onMouseOut={() => setFieldHovered(false)}
              {...rest}
            >
              <Styled.TagFieldListWrapper $loading={loading}>
                {filteredTags.map((tag: TagType, index: number) => {
                  const tagLabel = getTagLabel(tag);

                  return showTooltip ? (
                    <TooltipV2 key={getTagValue(tag)} title={tagLabel}>
                      {renderTag(tag, tagLabel, index)}
                    </TooltipV2>
                  ) : (
                    renderTag(tag, tagLabel, index)
                  );
                })}

                {loading ? (
                  <Styled.TagFieldLoader>
                    <SpinnerIcon size={16} color={lightPalette[Color.IconsPrimary]} />
                  </Styled.TagFieldLoader>
                ) : (
                  <Styled.TagFieldInputWrapper size={size} filterInputWidth={filterInputWidth}>
                    <Styled.TagFieldInput
                      value={userInput}
                      type="text"
                      autoComplete="off"
                      placeholder={showPlaceholder ? placeholder : ''}
                      onChange={(ev) => setUserInput(ev.target.value)}
                      onKeyDown={handleUserInputKeyDown}
                      onBlur={handleOnBlur}
                      onFocus={handleInputFocus}
                      readOnly={readOnly}
                      disabled={disabled}
                    />
                  </Styled.TagFieldInputWrapper>
                )}
              </Styled.TagFieldListWrapper>

              {(showGenerateTagsButton || showClearButton || showCopyIcon) && (
                <Styled.TagFieldActions>
                  {showGenerateTagsButton && (
                    <Button
                      color="link-primary"
                      size={size}
                      onMouseDown={(event) => onClickByMouseDown(event, handleGenerateTags)}
                    >
                      {generateTagsButtonLabel}
                    </Button>
                  )}

                  {showClearButton && (
                    <Button
                      color="link-secondary"
                      size={size}
                      onMouseDown={(event) => onClickByMouseDown(event, handleClearAllTags)}
                    >
                      {clearTagsButtonLabel}
                    </Button>
                  )}

                  {showCopyIcon && (
                    <Styled.TagFieldCopyIcon
                      onMouseDown={(event) =>
                        showCopySuccessIcon ? undefined : onClickByMouseDown(event, copyIconHandler)
                      }
                    >
                      {showCopySuccessIcon ? (
                        <Success size={16} color={lightPalette[Color.Success]} />
                      ) : (
                        <CopyOutline size={16} color={lightPalette[Color.IconsPrimary]} />
                      )}
                    </Styled.TagFieldCopyIcon>
                  )}
                </Styled.TagFieldActions>
              )}
            </Styled.TagFieldWrapper>
          </Styled.Wrapper>

          {tagsHint && <FormHint error={tagsError}>{tagsHint}</FormHint>}
        </Styled.TagInputFieldWrapper>

        {filteredSuggestions.length > 0 && (
          <Styled.TagFieldSuggestionWrapper>
            <Styled.TagFieldSuggestionLabel>
              {suggestionLabel || <span>Suggested Tags</span>}
              {suggestionTooltipMessage && (
                <Tooltip title={suggestionTooltipMessage} size={Size.Sm} arrow position="right">
                  <Styled.TagFieldSuggestionIcon>
                    <InfoOutline size={12} color={lightPalette[Color.IconsSecondary]} />
                  </Styled.TagFieldSuggestionIcon>
                </Tooltip>
              )}
            </Styled.TagFieldSuggestionLabel>
            <Styled.TagFieldSuggestionWrapperList>
              {filteredSuggestions.map((suggestion: TagType) => (
                <Tag
                  key={getTagValue(suggestion)}
                  type="suggested"
                  crossIcon={false}
                  onSelect={() => {
                    handleTagAdd(suggestion, AddTagType.Suggestion);
                    setUserInput('');
                  }}
                  startIcon={typeof getTagIcon?.(suggestion) === 'object' ? getTagIcon?.(suggestion) : null}
                  size={size}
                >
                  {getTagLabel(suggestion)}
                </Tag>
              ))}
            </Styled.TagFieldSuggestionWrapperList>
          </Styled.TagFieldSuggestionWrapper>
        )}
      </Styled.TagFieldRoot>
    );
  }
);

TagField.defaultProps = {
  tags: [],
  suggestedTags: [],
  placeholder: 'Add a tag (separate by pressing enter)',
  disabled: false,
  readOnly: false,
  size: Size.Md,
};

TagField.propTypes = {
  tags: PT.arrayOf(PT.oneOfType([PT.string, PT.object, PT.node])).isRequired,
  suggestedTags: PT.arrayOf(PT.oneOfType([PT.string, PT.object])),
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  onAdd: PT.func.isRequired,
  onRemove: PT.func.isRequired,
  onGenerate: PT.func,
  onClear: PT.func.isRequired,
  onValidate: PT.func,
  placeholder: PT.string,
  appliedValue: PT.string,
  readOnly: PT.bool,
  disabled: PT.bool,
  label: PT.node,
  error: PT.bool,
  hint: PT.node,
  loading: PT.bool,
  disableOnEnter: PT.bool,
  showTooltip: PT.bool,
  size: PT.oneOf(objectValues(Size)),
  hideCopyIcon: PT.bool,
  alwaysShowSuggestedTags: PT.bool,
  getTagValue: PT.func,
  getTagLabel: PT.func,
  getTagIcon: PT.func,
  submitOnSpace: PT.bool,
  preventSubmitOnBlur: PT.bool,
  showGenerateTagsButton: PT.bool,
  generateTagsButtonLabel: PT.string,
  clearTagsButtonLabel: PT.string,
  suggestionsFilter: PT.func,
  suggestionLabel: PT.node,
  suggestionTooltipMessage: PT.string,
  onFocus: PT.func,
  onBlur: PT.func,
  placeholderAlwaysVisible: PT.bool,
  fullWidth: PT.bool,
  filterInputWidth: PT.oneOfType([PT.string, PT.number]),
  hideClearButton: PT.bool,
};

export default TagField;
