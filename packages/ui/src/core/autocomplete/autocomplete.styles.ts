import styled, { css } from 'styled-components';
import CrossOutline from '@scaleflex/icons/cross-outline';
import StyledLabel from '../label/label.styles';
import StyledFormHint from '../form-hint/form-hint.styles';
import SfxMenu from '../menu';
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
})`
  max-height: ${({ maxMenuHeight }: { maxMenuHeight: string | number }) => (+maxMenuHeight ? `${+maxMenuHeight}px` : maxMenuHeight)};
  background: #ffffff;
`;

const Styled = applyDisplayNames({
  Autocomplete,
  AutocompleteContainer,
  TickIcon,
  CrossIcon,
  InputIconEndContainer,
  Menu,
});

export default Styled;
