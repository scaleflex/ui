import React, { useState, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { QuestionMarkOutline } from '@scaleflex/icons';
import SpinnerIcon from '@scaleflex/icons/spinner';
import { intrinsicComponent } from '../../utils/functions';
import Tag from '../tag';
import Label from '../label';
import FormHint from '../form-hint';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { TagFieldProps, AddTagTypesType, TagType } from './tag-field.props';
import { AddTagType } from './types';
import Styled from './tag-field.styles';

const TagField = intrinsicComponent<TagFieldProps, HTMLDivElement>(
  (
    {
      suggestedTags = [],
      tags = [],
      onAdd,
      onRemove,
      fullWidth,
      placeholder,
      disabled,
      readOnly,
      label,
      LabelProps: LabelPropsData,
      error,
      hint,
      loading,
      getTagLabel = (tag: TagType): string => tag as string,
      getTagValue = (tag: TagType): string => tag as string,
      ...rest
    }: TagFieldProps,
    ref
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ): JSX.Element => {
    const [userInput, setUserInput] = useState('');
    const filteredTags = useMemo<TagType[]>(() => tags.filter((tag) => tag), [tags]);
    const showSuggestions = useMemo<boolean>(() => (userInput || '').length > 0, [userInput]);
    const existingLabels = useMemo<string[]>(() => filteredTags.map((tag) => getTagLabel(tag).toLowerCase()), [
      filteredTags,
    ]);
    const filteredSuggestions = useMemo(() => {
      let filteredItems = suggestedTags.filter(
        (suggestion) => !existingLabels.includes(getTagLabel(suggestion).toLowerCase())
      );
      if (userInput) {
        const regexp = new RegExp(userInput, 'i');
        filteredItems = filteredItems.filter((suggestion: TagType) => regexp.test(getTagLabel(suggestion)));
      }
      return filteredItems;
    }, [userInput, suggestedTags, existingLabels]);

    const handleTagAdd = (item: TagType, type: AddTagTypesType): void => {
      if (!item) return;

      const tagLabel = type === AddTagType.UserInput ? item : getTagLabel(item);
      const regexp = new RegExp(tagLabel as string, 'i');

      if (!filteredTags.some((tag: TagType) => regexp.test(getTagLabel(tag)))) {
        onAdd(item, type);
      }
    };

    const handleUserInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter' && userInput) {
        event.preventDefault();
        handleTagAdd(userInput, AddTagType.UserInput);
        setUserInput('');
      } else if (event.key === 'Backspace' && !userInput) {
        const index = filteredTags.length - 1;
        onRemove(index, getTagValue(filteredTags[index]));
      }
    };

    return (
      <Styled.TagFieldRoot ref={ref}>
        {label && (
          <Label error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        )}

        <Styled.TagFieldWrapper fullWidth={Boolean(fullWidth)} {...rest}>
          <Styled.TagFieldListWrapper $loading={loading}>
            {filteredTags.map((tag: TagType, index: number) => (
              <Tag
                key={getTagValue(tag)}
                tagIndex={index}
                onRemove={disabled || readOnly || loading ? undefined : () => onRemove(index, getTagValue(tag))}
                style={{ margin: '4px 4px 4px 0' }}
              >
                {getTagLabel(tag)}
              </Tag>
            ))}

            {loading ? (
              <Styled.TagFieldLoader>
                <SpinnerIcon size={16} color="#768184" />
              </Styled.TagFieldLoader>
            ) : (
              <Styled.TagFieldInputWrapper>
                <Styled.TagFieldInput
                  value={userInput}
                  type="text"
                  autoComplete="off"
                  placeholder={placeholder}
                  onChange={(ev) => setUserInput(ev.target.value)}
                  onKeyDown={handleUserInputKeyDown}
                  readOnly={readOnly}
                  disabled={disabled}
                />
              </Styled.TagFieldInputWrapper>
            )}
          </Styled.TagFieldListWrapper>
        </Styled.TagFieldWrapper>

        {hint && <FormHint error={error}>{hint}</FormHint>}

        {filteredSuggestions.length > 0 && showSuggestions && (
          <Styled.TagFieldSuggestionWrapper>
            <Styled.TagFieldSuggestionLabel>
              <Styled.TagFieldSuggestionIcon>
                <QuestionMarkOutline size={12} color="#778285" />
              </Styled.TagFieldSuggestionIcon>
              <span>Suggested Tags</span>
            </Styled.TagFieldSuggestionLabel>

            <Styled.TagFieldSuggestionWrapperList>
              {filteredSuggestions.map((suggestion: TagType) => (
                <Tag
                  key={getTagValue(suggestion)}
                  type="suggested"
                  onSelect={() => {
                    handleTagAdd(suggestion, AddTagType.Suggestion);
                    setUserInput('');
                  }}
                  style={{ margin: '0 8px 8px 0' }}
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
  fullWidth: false,
  placeholder: 'Add a tag (separate by pressing enter)',
  disabled: false,
  readOnly: false,
};

TagField.propTypes = {
  tags: PT.arrayOf(PT.oneOfType([PT.string, PT.object])).isRequired,
  suggestedTags: PT.arrayOf(PT.oneOfType([PT.string, PT.object])),
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  onAdd: PT.func.isRequired,
  onRemove: PT.func.isRequired,
  fullWidth: PT.bool,
  placeholder: PT.string,
  readOnly: PT.bool,
  disabled: PT.bool,
  label: PT.node,
  error: PT.bool,
  hint: PT.node,
  loading: PT.bool,
  getTagValue: PT.func,
  getTagLabel: PT.func,
};

export default TagField;
