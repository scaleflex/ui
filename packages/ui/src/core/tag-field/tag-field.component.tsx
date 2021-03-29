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
import type { TagFieldProps, TagObjectTypes } from './tag-field.props';

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
    const [internalTags, setInternalTags] = useState<(string | TagObjectTypes)[]>([]);
    const [internalIds, setInternalIds] = useState<(string | undefined)[]>([]);
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
      let newTags: any = [];
      let newIds: any = [];

      if (hasVal) {
        newTags = internalTags;
        newIds = internalIds;
      } else {
        newTags = [...internalTags, val];
        newIds = [...internalIds, val];
      }

      if (!val) {
        return;
      }
      setInternalTags(newTags);
      setInternalIds(newIds);

      if (tags.some((tag) => typeof tag === 'object')) {
        let newObjectTags: (string | TagObjectTypes)[] = [];
        newTags.forEach((tag: string, index: number) => {
          newObjectTags = [...newObjectTags, { id: newIds[index], label: tag }];
        });
        onAdd(newObjectTags);
      } else {
        onAdd(newTags);
      }
    };

    const suggestionChoose = (ev: any): void => {
      setFilteredSuggestions([]);
      setUserInput(ev.currentTarget.textContent);
      setShowSuggestions(false);
      addTags(ev);
      setUserInput('');
    };

    const returnObjorString = (newTags: (string | TagObjectTypes)[]): void => {
      if (tags.some((tag) => typeof tag === 'object')) {
        const tagLabels = newTags.map((tag: any) => {
          return tag.label;
        });
        const tagIds = newTags.map((tag: any) => {
          return tag.id;
        });
        setInternalTags(tagLabels);
        setInternalIds(tagIds);
      } else {
        setInternalTags(newTags);
      }
    };

    const removeTag = (index: number): void => {
      const newTags = [...tags];
      newTags.splice(index, 1);

      returnObjorString(newTags);
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
      // let newTags: any = [];
      // tags.forEach((tag, index) => {
      //   if (!tag) {
      //     newTags = [...tags];
      //     newTags.splice(index, 1);
      //   }
      // });

      returnObjorString(tags);
    }, []);

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
    const renderTags = (): (JSX.Element | undefined)[] => {
      // eslint-disable-next-line consistent-return
      // eslint-disable-next-line array-callback-return
      return tags.map((tag: string | TagObjectTypes, index: number) => {
        if (tag) {
          return (
            <Tag
              key={typeof tag === 'object' ? internalIds[index] : tag}
              type="default"
              size="md"
              tagIndex={index}
              // eslint-disable-next-line no-shadow
              onRemove={readOnly || loading ? undefined : (index) => removeTag(index)}
              style={{ margin: '4px 4px 4px 0' }}
            >
              {typeof tag === 'object' ? internalTags[index] : tag}
            </Tag>
          );
        }
      });
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
            {renderTags()}
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
  tags: PT.arrayOf(
    PT.oneOfType([
      PT.string.isRequired,
      PT.shape({
        id: PT.string.isRequired,
        label: PT.string.isRequired,
      }).isRequired as Validator<TagObjectTypes>,
    ])
  ).isRequired,
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
