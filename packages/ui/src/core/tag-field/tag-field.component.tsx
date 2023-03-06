import React, { useState, useMemo, useEffect } from 'react';
import PT, { Validator } from 'prop-types';
import { InfoOutline, CopyOutline } from '@scaleflex/icons';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import { Color } from '../../utils/types/palette';
import { lightPalette } from '../../theme/roots/palette';
import Tag from '../tag';
import Label from '../label';
import Tooltip from '../tooltip';
import FormHint from '../form-hint';
import Button from '../button/button.component';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { TagFieldProps, AddTagTypesType, TagType, SuggestionsFilterFnType } from './tag-field.props';
import { AddTagType, Size } from './types';
import { tagsSuggestionsFilter } from './tag-field.utils';
import { handleCopyIcon } from '../input/input.utils';
import InputStyled from '../input/input.styles';
import Styled from './tag-field.styles';

const TagField = intrinsicComponent<TagFieldProps, HTMLDivElement>(
  (
    {
      suggestedTags = [],
      tags = [],
      onAdd,
      onRemove,
      onGenerate,
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
      disableOnEnter,
      copyTextMessage = '',
      copySuccessIcon,
      submitOnSpace,
      showGenerateTagsButton = false,
      generateTagsButtonLabel = 'Generate tags',
      alwaysShowSuggestedTags = false,
      getTagLabel = (tag: TagType): string => tag as string,
      getTagValue = (tag: TagType): string => tag as string,
      getTagIcon,
      suggestionsFilter = tagsSuggestionsFilter as SuggestionsFilterFnType,
      ...rest
    }: TagFieldProps,
    ref
  ): JSX.Element => {
    const [userInput, setUserInput] = useState('');
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [tagsHint, setTagsHint] = useState(hint);
    const [tagsError, setTagsError] = useState(error);
    const filteredTags = useMemo<TagType[]>(() => tags.filter((tag) => tag), [tags]);
    const existingLabels = useMemo<string[]>(
      () => filteredTags.map((tag) => getTagLabel(tag).toLowerCase()),
      [filteredTags]
    );
    const filteredSuggestions = useMemo(() => {
      const filteredItems = suggestedTags.filter(
        (suggestion) => !existingLabels.includes(getTagLabel(suggestion).toLowerCase())
      );

      return suggestionsFilter(filteredItems, userInput, getTagLabel, alwaysShowSuggestedTags);
    }, [userInput, suggestedTags, existingLabels, suggestionsFilter]);

    const handleTagAdd = (item: any, type: AddTagTypesType): void => {
      if (!item) return;

      const tagLabel = type === AddTagType.UserInput ? item : getTagLabel(item);

      if (!filteredTags.some((tag: TagType) => getTagLabel(tag).toLowerCase() === tagLabel.toLowerCase())) {
        onAdd(item, type);
      }
    };

    const handleAddingTag = (): void => {
      if (userInput) {
        handleTagAdd(userInput, AddTagType.UserInput);
        setUserInput('');
      }
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
      } else {
        handleAddingTag();
      }
    };

    const handleUserInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if ((event.key === 'Enter' && !disableOnEnter) || (event.key === ' ' && submitOnSpace)) {
        event.preventDefault();
        handleTagsValidation();
      } else if (event.key === 'Backspace' && !userInput) {
        const index = filteredTags.length - 1;
        onRemove(index, getTagValue(filteredTags[index]));
      }
    };

    useEffect(() => {
      setTimeout(() => setShowCopyMessage(false), 2000);
    }, [showCopyMessage]);

    useEffect(() => {
      setTagsError(error);
      setTagsHint(hint);
    }, [error, hint]);

    return (
      <Styled.TagFieldRoot ref={ref}>
        <Styled.TagInputFieldWrapper>
          {label && (
            <Label error={tagsError} {...(LabelPropsData || {})}>
              {label}
            </Label>
          )}

          <Styled.TagFieldWrapper size={size} error={tagsError} {...rest}>
            <Styled.TagFieldListWrapper $loading={loading}>
              {filteredTags.map((tag: TagType, index: number) => (
                <Tag
                  key={getTagValue(tag)}
                  tagIndex={index}
                  crossIcon={crossIcon}
                  startIcon={typeof getTagIcon?.(tag) === 'object' ? getTagIcon?.(tag) : null}
                  size={size}
                  onRemove={disabled || readOnly || loading ? undefined : () => onRemove(index, getTagValue(tag))}
                  style={{ margin: '0px 8px 8px 0px' }}
                >
                  {getTagLabel(tag)}
                </Tag>
              ))}

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
                    placeholder={filteredTags?.length ? '' : placeholder}
                    onChange={(ev) => setUserInput(ev.target.value)}
                    onKeyDown={handleUserInputKeyDown}
                    onBlur={handleTagsValidation}
                    readOnly={readOnly}
                    disabled={disabled}
                  />
                </Styled.TagFieldInputWrapper>
              )}
            </Styled.TagFieldListWrapper>
            <Styled.TagFieldBottom>
              <Styled.TagFieldGenerateButton showGenerateTags={showGenerateTagsButton}>
                <Button color="link-primary" size={size} onClick={onGenerate}>
                  {generateTagsButtonLabel}
                </Button>
              </Styled.TagFieldGenerateButton>

              <Styled.TagFieldCopyIcon onClick={() => handleCopyIcon(userInput, setShowCopyMessage)}>
                <CopyOutline size={16} color={lightPalette[Color.IconsPrimary]} />
              </Styled.TagFieldCopyIcon>

              {showCopyMessage && (
                <InputStyled.NotificationBox size={size} style={{ bottom: size === Size.Md ? 148 : 140 }}>
                  <InputStyled.NotificationIcon>{copySuccessIcon}</InputStyled.NotificationIcon>
                  <InputStyled.NotificationText>{copyTextMessage}</InputStyled.NotificationText>
                </InputStyled.NotificationBox>
              )}
            </Styled.TagFieldBottom>
          </Styled.TagFieldWrapper>

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
  onValidate: PT.func,
  placeholder: PT.string,
  readOnly: PT.bool,
  disabled: PT.bool,
  label: PT.node,
  error: PT.bool,
  hint: PT.node,
  loading: PT.bool,
  disableOnEnter: PT.bool,
  size: PT.oneOf(objectValues(Size)),
  alwaysShowSuggestedTags: PT.bool,
  getTagValue: PT.func,
  getTagLabel: PT.func,
  getTagIcon: PT.func,
  submitOnSpace: PT.bool,
  showGenerateTagsButton: PT.bool,
  generateTagsButtonLabel: PT.string,
  suggestionsFilter: PT.func,
  suggestionLabel: PT.node,
  suggestionTooltipMessage: PT.string,
  copySuccessIcon: PT.oneOfType([PT.node, PT.func]),
  copyTextMessage: PT.string,
};

export default TagField;
