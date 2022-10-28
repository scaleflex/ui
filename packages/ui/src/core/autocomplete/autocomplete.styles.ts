import styled, { css } from 'styled-components';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

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
`;

const TickIcon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'tickIcon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    color: ${palette[PColor.AccentStateless]};
  `
);

const AutocompleteContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})``;

const Styled = applyDisplayNames({ Autocomplete, AutocompleteContainer, TickIcon });

export default Styled;
