import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
// import type { With } from '@sfx-ui/utils/types';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { RadioGroupProps } from './radio-group.props';

const baseClassName = 'RadioGroup';

const Label = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Label'),
  type: 'checkbox',
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 14px;
    margin-left: 8px;
    color: ${theme.palette[PaletteColor.TextPrimary]};
  `
);

const RadioGroup = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<RadioGroupProps>(
  () => css`
    position: relative;
    display: inline-flex;
    cursor: pointer;
  `
);

const Styled = { RadioGroup, Label };

export default Styled;
