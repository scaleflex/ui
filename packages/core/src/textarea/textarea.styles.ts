import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { WithTheme } from '@sfx-ui/theme/entity';
import type { With } from '@sfx-ui/utils/types';
import { Color as PaletteColor } from '@sfx-ui/utils/types/palette';
import type { TextareaProps } from './textarea.props';
import { errorMixin } from './textarea.mixin';

const baseClassName = 'Textarea';

const Textarea = styled.textarea.attrs({
  className: generateClassNames(baseClassName, 'root'),
  rows: '3',
})<TextareaProps>(
  ({ error = false, theme }: With<WithTheme, TextareaProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: text;
    width: 300px;
    padding: 7px 12px;
    background: ${theme.palette[PaletteColor.BackgroundPrimary]};
    border: 1px solid ${theme.palette[PaletteColor.BordersSecondary]};
    border-radius: 2px;
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily};
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: ${theme.palette[PaletteColor.TextPrimary]};
    outline: none;
    resize: none;

    &:focus,
    &:hover {
      background-color: ${theme.palette[PaletteColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PaletteColor.AccentPrimary]};
    }

    ${error ? errorMixin({ theme }) : undefined}
  `
);

const Styled = { Textarea };

export default Styled;
