import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import type { LabelProps } from './label.props';
import { errorMixin } from './label.mixin';

const baseClassName = 'Label';

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ error = false, theme }: With<WithTheme, LabelProps>) => css`
    display: flex;
    align-items: center;
    padding: 4px 0px;
    color: ${theme.palette[PColor.TextSecondary]};

    ${error ? errorMixin({ theme }) : undefined}
  `
);

const Base = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Base'),
})(() => css`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* margin: 4px 0px; */
`);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ error = false, theme: { palette } }: With<WithTheme, {error: boolean}>) => css`
    display: flex;
    margin-right: 4px;
    color: ${palette[PColor.IconsPrimary]};

    ${error ? `color: ${palette[PColor.Error]};` : ''}
  `
);

const Styled = {
  Label,
  Base,
  Icon,
};

export default Styled;
