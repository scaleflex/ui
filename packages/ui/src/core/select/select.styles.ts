import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import InputStyled from '../input/input.styles';

const baseClassName = 'Select';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;
    color: ${palette[PColor.IconsPrimary]};
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})(
  ({ fullWidth = false }: {fullWidth: boolean}) => css`
    position: relative;
    display: inline-flex;
    ${fullWidth ? 'width: 100%' : ''}
  `
);

const Select = styled(InputStyled.Input).attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  cursor: pointer;
  user-select: none;
`;

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})`flex-grow: 1;`;

const Input = styled.input.attrs({
  className: generateClassNames(baseClassName, 'Input'),
  'aria-hidden': 'true',
  tabindex: '-1',
})`
  left: 0;
  width: 100%;
  bottom: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
`;

const Styled = applyDisplayNames({
  Container,
  Select,
  Label,
  Icon,
  Input,
});

export default Styled;
