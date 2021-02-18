import React, { useState } from 'react';
import PT from 'prop-types';
import { QuestionMarkOutline } from '@scaleflex/icons';

import { intrinsicComponent } from '../../utils/functions';
import Tag from '../tag';
import type { TagFieldProps } from './tag-field.props';

import Styled from './tag-field.styles';

const TagField = intrinsicComponent<TagFieldProps, HTMLDivElement>((
  {
    suggestedTags, tags, onAdd, onRemove, fullWidth, ...rest
  }: TagFieldProps,
  ref
): JSX.Element => {
  const [internalTags, setInternalTags] = useState(tags);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(['']);
  const [userInput, setUserInput] = useState('');

  const suggestionListChange = (input : string) : void => {
    let filteredSuggestionsArray = suggestedTags.filter(
      (suggestion : string) => suggestion.toLowerCase().includes(input.toLowerCase())
    );
    filteredSuggestionsArray = filteredSuggestionsArray.filter((item) => !internalTags.includes(item));

    setFilteredSuggestions(filteredSuggestionsArray);
    setShowSuggestions(true);
    setUserInput(input);
  };
  const addTags = (ev:any):void => {
    const val = ev.target.value || ev.currentTarget.textContent;
    const hasVal = internalTags.includes(val);
    let newTags = [];

    if (hasVal) {
      newTags = internalTags;
    } else {
      newTags = [...internalTags, val];
    }

    if (!val) { return; }
    setInternalTags(newTags);
    onAdd(newTags);
  };

  const suggestionChoose = (ev : any):void => {
    setFilteredSuggestions([]);
    setUserInput(ev.currentTarget.textContent);
    setShowSuggestions(false);
    addTags(ev);
    setUserInput('');
  };

  const removeTag = (index:number):void => {
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

  return (
    <Styled.TagFieldWrapper
      ref={ref}
      fullWidth={Boolean(fullWidth)}
      {...rest}
    >
      <Styled.TagFieldListWrapper>
        {tags.map((tag : string, index:number) => (
          <Tag
            key={tag}
            size="md"
            tagIndex={index}
            // eslint-disable-next-line no-shadow
            onRemove={(index) => removeTag(index)}
            style={{ margin: '4px 4px 4px 0' }}
          >
            {tag || internalTags}
          </Tag>
        ))}

        <Styled.TagFieldInputWrapper>
          <Styled.TagFieldInput
            type="text"
            autoComplete="off"
            placeholder="Add a tag (separate by pressing enter)"
            onChange={(ev) => suggestionListChange(ev.target.value)}
            onKeyDown={(ev) => suggestionListKeyDown(ev)}
            value={userInput}
          />
        </Styled.TagFieldInputWrapper>
      </Styled.TagFieldListWrapper>

      {filteredSuggestions.length > 0 && showSuggestions && (
      <Styled.TagFieldSuggestionWrapper>
        <Styled.TagFieldSuggestionLabel>
          <Styled.TagFieldSuggestionIcon>
            <QuestionMarkOutline size={12} color="#778285" />
          </Styled.TagFieldSuggestionIcon>
          <span>Suggested Tags</span>
        </Styled.TagFieldSuggestionLabel>

        <Styled.TagFieldSuggestionWrapperList>

          {filteredSuggestions.map((suggestion : string) => (
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
    </Styled.TagFieldWrapper>
  );
});

TagField.defaultProps = {
  tags: [''],
  suggestedTags: [''],
  fullWidth: false
};

TagField.propTypes = {
  tags: PT.arrayOf(PT.any).isRequired,
  suggestedTags: PT.arrayOf(PT.any).isRequired,
  onAdd: PT.func.isRequired,
  onRemove: PT.func.isRequired,
  fullWidth: PT.bool
};

export default TagField;
