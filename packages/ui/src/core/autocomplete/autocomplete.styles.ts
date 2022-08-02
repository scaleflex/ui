import styled from 'styled-components';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

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

const AutocompleteContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})``;

const Styled = applyDisplayNames({ Autocomplete, AutocompleteContainer });

export default Styled;
