import styled, { css } from 'styled-components';
import CrossOutline from '@scaleflex/icons/cross-outline';

import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import SfxMenu from '../menu';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import StyledTag from '../tag/tag.styles';
import { AutocompleteProps } from './autocomplete.props';
import arrowTick from '../arrow-tick';

const baseClassName = 'Autocomplete';

const Autocomplete = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<AutocompleteProps>`
  ${StyledFormHint.FormHint} {
    margin-top: 4px;
  }

  ${StyledLabel.Label} {
    margin-bottom: 4px;
  }

  ${StyledTag.Tag} {
    max-width: 100%;
  }

  ${StyledTag.Label} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;

const TickIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'tickIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PColor.AccentStateless]};
  `
);

const CrossIcon = styled(CrossOutline)`
  ${({ theme: { palette } }) => css`
    color: ${palette[PColor.IconsSecondary]};
  `}
`;

const AutocompleteContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})``;

const InputIconEndContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'inputIconEndContainer'),
})`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Menu = styled(SfxMenu).attrs({
  className: generateClassNames(baseClassName, 'menu'),
})<{ maxMenuHeight: string | number }>(
  ({ maxMenuHeight }) => css`
    max-height: ${+maxMenuHeight ? `${+maxMenuHeight}px` : maxMenuHeight};
    background: #ffffff;
  `
);

const OptionGroup = styled.div.attrs({
  className: generateClassNames(baseClassName, 'optionGroup'),
})`
  &:not(:last-child) {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid ${({ theme: { palette } }: WithTheme) => palette[PColor.BordersSecondary]};
  }
`;

const Arrow = styled(arrowTick)`
  margin-left: auto;
  cursor: pointer;
`;

const Styled = applyDisplayNames({
  Autocomplete,
  AutocompleteContainer,
  TickIcon,
  CrossIcon,
  InputIconEndContainer,
  Menu,
  OptionGroup,
  Arrow,
});

export default Styled;
