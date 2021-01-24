import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
// import type { WithTheme } from '../../theme/entity';
// import { Color as PColor } from '../../utils/types/palette';
// import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { RobotProps } from './robot.props';

const baseClassName = 'Robot';

const Robot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RobotProps>(
  () => css`
    display: flex;
  `
);

const Styled = applyDisplayNames({ Robot });

export default Styled;
