import React, { useState } from 'react';
import PT from 'prop-types';
import { QuestionMarkOutline } from '@scaleflex/icons';
import { intrinsicComponent } from '../../utils/functions';
import Tag from '../tag';
import type { TagsFieldProps } from './tags-field.props';

import Styled from './tags-field.styles';

const TagsField = intrinsicComponent<TagsFieldProps, HTMLDivElement>((
  {
    suggestedTags, tags, onAdd, onRemove, ...rest
  }: TagsFieldProps,
  ref
): JSX.Element => {
  const [internalTags, setInternalTags] = useState(tags);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(['']);
  const [userInput, setUserInput] = useState('');

  const suggestionListChange = (input : string) : void => {
    const filteredSuggestionsArray = suggestedTags.filter(
      (suggestion : string) => suggestion.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestionsArray);
    setShowSuggestions(true);
    setUserInput(input);
  };
  const addTags = (ev: any):void => {
    const val = ev.target.value || ev.currentTarget.textContent;
    if (!val) { return; }
    setInternalTags([...internalTags, val]);
    onAdd(ev);
  };

  const suggestionChoose = (e : any):void => {
    setFilteredSuggestions([]);
    setUserInput(e.currentTarget.textContent);
    setShowSuggestions(false);
    addTags(e);
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
    <Styled.TagsFieldWrapper ref={ref} {...rest}>

      <Styled.TagsFieldListWrapper>
        {tags.map((tag : string, index:number) => (
          <Tag
            key={tag}
            size="md"
            tagIndex={index}
            onRemove={(index) => removeTag(index)}
            style={{ margin: '0 8px 8px 0' }}
          >

            {tag || internalTags}
          </Tag>
        ))}

        <Styled.TagsFieldInputWrapper>
          <Styled.TagsFieldInput
            type="text"
            autoComplete="off"
            placeholder="Add a tag (separate by pressing enter)"
            onChange={(e) => suggestionListChange(e.target.value)}
            onKeyDown={(e) => suggestionListKeyDown(e)}
              // readOnly={isGeneratingTags}
            value={userInput}
          />
        </Styled.TagsFieldInputWrapper>
      </Styled.TagsFieldListWrapper>

      {filteredSuggestions.length > 0 && showSuggestions && (
      <Styled.TagsFieldSuggestionWrapper>
        <Styled.TagsFieldSuggestionLabel>
          <QuestionMarkOutline size={12} color="#778285" style={{ marginRight: '4px' }} />
          <span>Suggested Tags</span>
        </Styled.TagsFieldSuggestionLabel>

        <Styled.TagsFieldSuggestionWrapperList>

          {filteredSuggestions.map((suggestion : string) => (
            <Tag
              key={suggestion}
              size="md"
              type="suggested"
              onSelect={(e) => suggestionChoose(e)}
              style={{ margin: '0 8px 8px 0' }}
            >
              {suggestion}
            </Tag>
          ))}

        </Styled.TagsFieldSuggestionWrapperList>
      </Styled.TagsFieldSuggestionWrapper>
      )}
    </Styled.TagsFieldWrapper>
  );
});

export default TagsField;
