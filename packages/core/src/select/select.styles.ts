import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';
import InputStyled from '../input/input.styles';

const baseClassName = 'Select';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: flex;
    flex-shrink: 0;

    svg {
      color: ${palette[PColor.IconsPrimary]};
    }
  `
);

const Container = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Container'),
})`display: flex;`;

const Select = styled(InputStyled.Input).attrs({
  className: generateClassNames(baseClassName, 'root'),
})`cursor: pointer;`;

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
`;

const Styled = {
  Container,
  Select,
  Label,
  Icon,
  Input,
};

export default Styled;
