import React, { useState, useMemo, useEffect, ReactElement } from 'react';
import PT, { Validator } from 'prop-types';
import { InfoOutline, CopyOutline } from '@scaleflex/icons';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Color } from '../../utils/types/palette';
import { ButtonSize } from '../../utils/types';
import { lightPalette } from '../../theme/roots/palette';
import Tag from '../tag';
import Label from '../label';
import Tooltip from '../tooltip';
import FormHint from '../form-hint';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { TagFieldProps, AddTagTypesType, TagType, SuggestionsFilterFnType } from './tag-field.props';
import { AddTagType, Size } from './types';
import { tagsSuggestionsFilter } from './tag-field.utils';
import { handleCopyIcon } from '../input/input.utils';
import InputStyled from '../input/input.styles';
import TooltipV2 from '../tooltip-v2/tooltip-v2.component';
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
      copyTextMessage = '',
      copySuccessIcon,
      submitOnSpace,
      preventSubmitOnBlur,
      hideCopyIcon = false,
      showGenerateTagsButton = false,
      generateTagsButtonLabel = 'Generate tags',
      clearTagsButtonLabel = 'Clear all',
      alwaysShowSuggestedTags = false,
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
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [tagsHint, setTagsHint] = useState(hint);
    const [tagsError, setTagsError] = useState(error);
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    const filteredTags = useMemo<TagType[]>(() => tags.filter((tag) => tag), [tags]);
    const existingLabels = useMemo<string[]>(
      () => filteredTags.map((tag) => getTagLabel(tag).toLowerCase()),
      [filteredTags]
    );
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
      setShowPlaceholder(false);
      if (preventSubmitOnBlur) return;

      handleTagsValidation();

      if (typeof onBlur === 'function') {
        onBlur(event);
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
      setShowPlaceholder(true);

      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    };

    const handleClearAllTags = (): void => {
      if (onClear) {
        onClear();
      }
    };

    useEffect(() => {
      if (!filteredTags?.length) {
        setShowPlaceholder(true);
      }
    }, [filteredTags]);

    // TODO remove when add clear all button
    useEffect(() => {
      if (typeof appliedValue === 'string' && !appliedValue) {
        setUserInput('');
      }
    }, [appliedValue]);

    useEffect(() => {
      setTimeout(() => setShowCopyMessage(false), 2000);
    }, [showCopyMessage]);

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
        style={{ margin: '0px 8px 8px 0px' }}
      >
        {tagLabel}
      </Tag>
    );

    return (
      <Styled.TagFieldRoot ref={ref}>
        <Styled.TagInputFieldWrapper>
          {label && (
            <Label error={tagsError} {...(LabelPropsData || {})}>
              {label}
            </Label>
          )}

          <Styled.Wrapper>
            <Styled.TagFieldWrapper size={size} error={tagsError} {...rest}>
              <Styled.TagFieldListWrapper $loading={loading} size={size}>
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
                  <Styled.TagFieldInputWrapper size={size}>
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
            </Styled.TagFieldWrapper>
            {showGenerateTagsButton && (
              <Styled.GenerateButton color="link-primary" size={size} onClick={onGenerate}>
                {generateTagsButtonLabel}
              </Styled.GenerateButton>
            )}

            <Styled.ClearAllButton
              color="link-secondary"
              size={size === Size.Md ? Size.Sm : ButtonSize.Xs}
              onClick={handleClearAllTags}
            >
              {clearTagsButtonLabel}
            </Styled.ClearAllButton>

            {!hideCopyIcon && (
              <Styled.TagFieldCopyIcon size={size} onClick={() => handleCopyIcon(userInput, setShowCopyMessage)}>
                <CopyOutline size={16} color={lightPalette[Color.IconsPrimary]} />
              </Styled.TagFieldCopyIcon>
            )}

            {showCopyMessage && (
              <InputStyled.NotificationBox size={size} style={{ bottom: -38 }}>
                <InputStyled.NotificationIcon>{copySuccessIcon}</InputStyled.NotificationIcon>
                <InputStyled.NotificationText>{copyTextMessage}</InputStyled.NotificationText>
              </InputStyled.NotificationBox>
            )}
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
                  style={{ margin: '0 8px 8px 0' }}
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
  copySuccessIcon: PT.oneOfType([PT.node, PT.func]),
  copyTextMessage: PT.string,
  onFocus: PT.func,
  onBlur: PT.func,
};

export default TagField;
