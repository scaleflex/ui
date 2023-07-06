import styled, { css } from 'styled-components';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import StyledTag from '../tag/tag.styles';

const baseClassName = 'Autocomplete';

const Autocomplete = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
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

const CrossIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'crossIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PColor.IconsSecondary]};
  `
);

const AutocompleteContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})``;

const Styled = applyDisplayNames({ Autocomplete, AutocompleteContainer, TickIcon, CrossIcon });

export default Styled;
