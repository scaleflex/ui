import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import {
  sizeTagFieldMixin,
  fontTagFieldMixin,
  positionIconMixin,
  positionGenerateButtonMixin,
  positionClearAllButtonMixin,
  marginTagFieldListMixin,
} from './tag-field.mixin';
import type { ClearAllButtonSizeType, TagFieldSizeType } from './tag-field.props';
import Button from '../button/button.component';
import { Size } from './types';

const baseClassName = 'TagField';

const TagFieldRoot = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  ${StyledFormHint.FormHint} {
    margin-top: 4px;
  }

  ${StyledLabel.Label} {
    margin-bottom: 4px;
  }
`;

const TagInputFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagInputFieldWrapper'),
})`
  position: relative;
  width: fit-content;
`;

const TagFieldWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldWrapper'),
})(
  ({ size, error, theme }: With<WithTheme, { size: TagFieldSizeType; error: boolean }>) => css`
    overflow: hidden;
    border: 1px solid ${error ? theme.palette[PColor.Error] : theme.palette[PColor.BackgroundPrimaryStateless]};
    border-radius: 2px;
    background: transparent;
    width: 310px;

    ${StyledFormHint.FormHint} {
      margin-top: 4px;
    }

    ${StyledLabel.Label} {
      margin-bottom: 4px;
    }

    ${sizeTagFieldMixin[size]}
  `
);

const TagFieldLoader = styled.span.attrs({
  className: generateClassNames(baseClassName, 'loader'),
})`
  display: flex;
  margin-left: 8px;
`;

const TagFieldListWrapper = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'listWrapper'),
})(
  ({ $loading, size }: { $loading: boolean | undefined; size: TagFieldSizeType }) => css`
    display: inline-flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    min-height: 80px;
    ${marginTagFieldListMixin[size]}

    ${TagFieldLoader} {
      svg {
        animation: ${$loading ? 'spinner 1.2s linear infinite' : '1.2s'};
      }
    }
  `
);

const TagFieldInput = styled.input.attrs({
  className: generateClassNames(baseClassName, 'input'),
})(
  ({ theme }: WithTheme) => css`
    background: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: ${theme.palette[PColor.LinkHover]};
  `
);

const TagFieldInputWrapper = styled.li.attrs({
  className: generateClassNames(baseClassName, 'inputWrapper'),
})(
  ({ size = Size.Md, theme }: With<WithTheme, { size: TagFieldSizeType }>) => css`
    background: none;
    flex-grow: 1;
    padding: 4px 0px;
    width: 100px;

    ${TagFieldInput} {
      &::-webkit-input-placeholder {
        color: ${theme.palette[PColor.TextPlaceholder]};
        ${fontTagFieldMixin[size]}
      }
    }
  `
);

const TagFieldButtonsWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldButtonsWrapper'),
})(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `
);

const TagFieldCopyIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'tagFieldCopyIcon'),
})(
  ({ size }: { size: TagFieldSizeType }) => css`
    ${positionIconMixin[size]}
    cursor: pointer;
    height: 16px;
  `
);

const TagFieldSuggestionWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'suggestionWrapper'),
})`
  position: relative;
  margin-top: 16px;
`;

const TagFieldSuggestionLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'suggestionLabel'),
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 6px 0;
    color: ${theme.palette[PColor.LinkHover]};
  `
);

const TagFieldSuggestionIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`
    display: inline-flex;
    margin-left: 4px;
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

const Wrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'wrapper'),
})`
  position: relative;
`;

const GenerateButton = styled(Button).attrs({
  className: generateClassNames(baseClassName, 'generateButton'),
})(
  ({ size }: { size: TagFieldSizeType }) => css`
    ${positionGenerateButtonMixin[size]}
  `
);

const ClearAllButton = styled(Button).attrs({
  className: generateClassNames(baseClassName, 'clearAllButton'),
})(
  ({ size }: { size: ClearAllButtonSizeType }) => css`
    ${positionClearAllButtonMixin[size]}
  `
);

const Styled = applyDisplayNames({
  TagFieldRoot,
  TagInputFieldWrapper,
  TagFieldWrapper,
  TagFieldListWrapper,
  TagFieldInputWrapper,
  TagFieldInput,
  TagFieldSuggestionWrapper,
  TagFieldSuggestionLabel,
  TagFieldSuggestionIcon,
  TagFieldSuggestionWrapperList,
  TagFieldSuggestionList,
  TagFieldLoader,
  TagFieldButtonsWrapper,
  TagFieldCopyIcon,
  GenerateButton,
  ClearAllButton,
  Wrapper,
});

export default Styled;
