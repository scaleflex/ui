import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

// import type { TagsFieldProps } from './tags-field.props';

const baseClassName = 'TagsField';

const TagsFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  font-size: 16px;
  overflow: hidden;
`;

const TagsFieldListWrapper = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'listWrapper'),
})`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 8px 12px;
  margin-bottom: 16px;
  list-style: none;
  border: 1px solid #E9EFF4;
  border-radius: 2px;
  font-size: 14px;
  line-height: 1.5;
  padding: 6px 8px;
  background: #F8FAFB;
  width:100%;
`;

const TagsFieldInputWrapper = styled.li.attrs({
  className: generateClassNames(baseClassName, 'inputWrapper'),
})`
    background: none;
    flex-grow: 1;
    padding: 5px 0;
`;

const TagsFieldInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'input'),
})`
    background: transparent;
    border: none;
    width: 100%;
    outline: none;
`;

const TagsFieldSuggestionWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapper'),
})`
  position: relative;
`;
const TagsFieldSuggestionLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'suggestionLabel'),
})`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 0;
`;
const TagsFieldSuggestionWrapperList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapperList'),
})`
     
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
`;

const TagsFieldSuggestionList = styled.li.attrs({
  className: generateClassNames(baseClassName, 'suggestionList'),
})`
    position: relative;
  
    align-items: center;
    margin: 0 8px 8px 0;
    padding: 4px 12px;
    border-radius: 2px;
    border: 1px dashed #5D6D7E;
    background: transparent;
    color: #5D6D7E;
    display: -ms-flexbox;
    display: flex;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16.4px;
    font-weight: 400;
    list-style: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    max-height: 24px;
`;

const Styled = applyDisplayNames({
  TagsFieldWrapper,
  TagsFieldListWrapper,
  TagsFieldInputWrapper,
  TagsFieldInput,
  TagsFieldSuggestionWrapper,
  TagsFieldSuggestionLabel,
  TagsFieldSuggestionWrapperList,
  TagsFieldSuggestionList,

});

export default Styled;
