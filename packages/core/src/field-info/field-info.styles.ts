import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
import type { With } from '@sfx-ui/utils/types';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { FieldInfoProps } from './field-info.props';

const baseClassName = 'FieldInfo';

const FieldInfo = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<FieldInfoProps>(
  ({ error = false, theme }: With<WithTheme, FieldInfoProps>) => css`
    display: flex;
    align-items: center;
    margin-top: 2px;
    font-size: 10px;
    line-height: 12px;
    color: ${error ? theme.palette[PaletteColor.Error] : theme.palette[PaletteColor.TextSecondary]};
  `
);

const Styled = { FieldInfo };

export default Styled;
