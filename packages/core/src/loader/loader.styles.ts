import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
// import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
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

const Styled = { Loader, Spinner };

export default Styled;
