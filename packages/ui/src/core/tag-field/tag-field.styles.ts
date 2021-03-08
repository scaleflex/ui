import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
// import type { TagFieldProps } from './tag-field.props';

const baseClassName = 'TagField';

const TagFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ fullWidth = false, theme }: WithTheme & { fullWidth: boolean }) => css`
    overflow: hidden;
    border: 1px solid ${theme.palette[PColor.ActiveSecondary]};
    border-radius: 2px;
    width: ${fullWidth ? '100%' : '50%'};
  `
);

const TagFieldListWrapper = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'listWrapper'),
})`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 8px 12px;
  list-style: none;
  font-size: 14px;
  line-height: 1.5;
  padding: 6px 8px;
  background: #f8fafb;
  width: 100%;
`;

const TagFieldInputWrapper = styled.li.attrs({
  className: generateClassNames(baseClassName, 'inputWrapper'),
})`
  background: none;
  flex-grow: 1;
  padding: 5px 0;
`;

const TagFieldInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'input'),
})`
  background: transparent;
  border: none;
  width: 100%;
  outline: none;
`;

const TagFieldSuggestionWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapper'),
})`
  position: relative;
  margin-top: 16px;
`;
const TagFieldSuggestionLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'suggestionLabel'),
})`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 4px 0;
`;

const TagFieldSuggestionIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`
    display: inline-flex;
    margin-right: 4px;
  `
);
const TagFieldSuggestionWrapperList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapperList'),
})`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const TagFieldSuggestionList = styled.li.attrs({
  className: generateClassNames(baseClassName, 'suggestionList'),
})(
  ({ theme }: WithTheme) => css`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 8px 8px 0;
    padding: 4px 12px;
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    border: 1px dashed ${theme.palette[PColor.LinkPrimary]};
    background: transparent;
    color: ${theme.palette[PColor.LinkPrimary]};
    line-height: 16.4px;
    list-style: none;
    user-select: none;
    max-height: 24px;
  `
);

const Styled = applyDisplayNames({
  TagFieldWrapper,
  TagFieldListWrapper,
  TagFieldInputWrapper,
  TagFieldInput,
  TagFieldSuggestionWrapper,
  TagFieldSuggestionLabel,
  TagFieldSuggestionIcon,
  TagFieldSuggestionWrapperList,
  TagFieldSuggestionList,
});

export default Styled;
