import React, { useState, useEffect } from 'react';
import PT, { Validator } from 'prop-types';
import { QuestionMarkOutline } from '@scaleflex/icons';
import SpinnerIcon from '@scaleflex/icons/spinner';

import { intrinsicComponent } from '../../utils/functions';
import Tag from '../tag';
import Label from '../label';
import FormHint from '../form-hint';
import { propTypes as labelPropTypes } from '../label/label.component';
import type { LabelProps } from '../label';
import type { TagFieldProps } from './tag-field.props';

import Styled from './tag-field.styles';

const TagField = intrinsicComponent<TagFieldProps, HTMLDivElement>(
  (
    {
      suggestedTags,
      tags,
      onAdd,
      onRemove,
      fullWidth,
      placeholder,
      readOnly,
      label,
      LabelProps: LabelPropsData,
      error,
      hint,
      loading,
      ...rest
    }: TagFieldProps,
    ref
  ): JSX.Element => {
    const [internalTags, setInternalTags] = useState(tags);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState(['']);
    const [userInput, setUserInput] = useState('');

    const suggestionListChange = (input: string): void => {
      let filteredSuggestionsArray = suggestedTags.filter((suggestion: string) =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      );
      filteredSuggestionsArray = filteredSuggestionsArray.filter((item) => !internalTags.includes(item));

      setFilteredSuggestions(filteredSuggestionsArray);
      setShowSuggestions(true);
      setUserInput(input);
    };
    const addTags = (ev: any): void => {
      const val = ev.target.value || ev.currentTarget.textContent;
      const hasVal = internalTags.includes(val);
      let newTags = [];

      if (hasVal) {
        newTags = internalTags;
      } else {
        newTags = [...internalTags, val];
      }

      if (!val) {
        return;
      }
      setInternalTags(newTags);
      onAdd(newTags);
    };

    const suggestionChoose = (ev: any): void => {
      setFilteredSuggestions([]);
      setUserInput(ev.currentTarget.textContent);
      setShowSuggestions(false);
      addTags(ev);
      setUserInput('');
    };

    const removeTag = (index: number): void => {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setInternalTags(newTags);
      onRemove(newTags);
    };

    const suggestionListKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addTags(event);
        setUserInput('');
      } else if (event.key === 'Backspace' && !userInput) {
        removeTag(tags.length - 1);
      }
    };

    useEffect(() => {
      setInternalTags(tags);
    }, [tags]);

    const renderLabel = (): string | number | null | JSX.Element | any => {
      if (label) {
        if (typeof label === 'function') {
          return label({ error });
        }

        if (typeof label === 'object') {
          return label;
        }

        return (
          <Label error={error} {...(LabelPropsData || {})}>
            {label}
          </Label>
        );
      }

      return null;
    };

    const renderHint = (): string | number | null | JSX.Element | any => {
      if (hint) {
        if (typeof hint === 'function') {
          return hint({ error });
        }

        if (typeof hint === 'object') {
          return hint;
        }

        return <FormHint error={error}>{hint}</FormHint>;
      }

      return null;
    };

    const renderInputSection = (): JSX.Element => (
      <>
        {loading ? (
          <Styled.TagFieldLoader>
            <SpinnerIcon size={16} color="#768184" />
          </Styled.TagFieldLoader>
        ) : (
          <Styled.TagFieldInputWrapper>
            <Styled.TagFieldInput
              type="text"
              autoComplete="off"
              placeholder={placeholder ?? 'Add a tag (separate by pressing enter)'}
              onChange={(ev) => suggestionListChange(ev.target.value)}
              onKeyDown={(ev) => suggestionListKeyDown(ev)}
              value={userInput}
              readOnly={readOnly}
            />
          </Styled.TagFieldInputWrapper>
        )}
      </>
    );

    return (
      <Styled.TagFieldRoot>
        {renderLabel()}
        <Styled.TagFieldWrapper ref={ref} fullWidth={Boolean(fullWidth)} {...rest}>
          <Styled.TagFieldListWrapper $loading={loading}>
            {tags.map((tag: string, index: number) => (
              <Tag
                key={tag}
                size="md"
                tagIndex={index}
                // eslint-disable-next-line no-shadow
                onRemove={readOnly || loading ? undefined : (index) => removeTag(index)}
                style={{ margin: '4px 4px 4px 0' }}
              >
                {tag || internalTags}
              </Tag>
            ))}
            {renderInputSection()}
          </Styled.TagFieldListWrapper>
        </Styled.TagFieldWrapper>
        {renderHint()}
        {filteredSuggestions.length > 0 && showSuggestions && (
          <Styled.TagFieldSuggestionWrapper>
            <Styled.TagFieldSuggestionLabel>
              <Styled.TagFieldSuggestionIcon>
                <QuestionMarkOutline size={12} color="#778285" />
              </Styled.TagFieldSuggestionIcon>
              <span>Suggested Tags</span>
            </Styled.TagFieldSuggestionLabel>

            <Styled.TagFieldSuggestionWrapperList>
              {filteredSuggestions.map((suggestion: string) => (
                <Tag
                  key={suggestion}
                  size="md"
                  type="suggested"
                  onSelect={(ev) => suggestionChoose(ev)}
                  style={{ margin: '0 8px 8px 0' }}
                >
                  {suggestion}
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
  tags: [''],
  suggestedTags: [''],
  fullWidth: false,
};

TagField.propTypes = {
  tags: PT.arrayOf(PT.any).isRequired,
  suggestedTags: PT.arrayOf(PT.any).isRequired,
  LabelProps: PT.exact(labelPropTypes) as Validator<LabelProps>,
  onAdd: PT.func.isRequired,
  onRemove: PT.func.isRequired,
  fullWidth: PT.bool,
  placeholder: PT.string,
  readOnly: PT.bool,
  label: PT.node,
  error: PT.bool,
  hint: PT.node,
  loading: PT.bool,
};

export default TagField;
