import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
// import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { LoaderProps } from './loader.props';

const baseClassName = 'Loader';

const Spinner = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Spinner'),
})<LoaderProps>(
  () => css`
    position: absolute;
    display: inline-block;
    top: 42.21%;
    left: 38.77%;
    color: white;

    svg {
      animation: spinner 1.2s linear infinite;
    }

  `
);

const Loader = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<LoaderProps>(
  ({ theme: { palette } }: WithTheme) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${palette[PColor.AccentPrimary]};
  `
);

const Styled = applyDisplayNames({ Loader, Spinner });

export default Styled;
