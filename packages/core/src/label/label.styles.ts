import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { LabelProps } from './label.props';
import { errorMixin } from './label.mixin';
// import { Type } from './types';

const baseClassName = 'Label';

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<LabelProps>(
  ({ error = false, theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    padding: 4px 0px;
    color: ${theme.palette[PaletteColor.TextSecondary]};

    ${error ? errorMixin({ theme }) : undefined}
  `
);

const Base = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})(({ theme: { palette } }: WithTheme) => css`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin: 4px 0px;
`);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ error = false, theme: { palette } }: WithTheme) => css`
    display: flex;
    margin-right: 4px;
    color: ${palette[PaletteColor.IconsPrimary]};

    ${error ? `color: ${palette[PaletteColor.Error]};` : ''}
  `
);

const Styled = {
  Label,
  Base,
  Icon,
};

export default Styled;
