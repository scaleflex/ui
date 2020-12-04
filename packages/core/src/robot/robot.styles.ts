import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
// import type { WithTheme } from '@sfx-ui/theme/entity';
// import { Color as PColor } from '@sfx-ui/utils/types/palette';
// import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';
import type { RobotProps } from './robot.props';

const baseClassName = 'Robot';

const Robot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RobotProps>(
  () => css`
  `
);

const Styled = { Robot };

export default Styled;
