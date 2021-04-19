import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { TextareaProps } from './textarea.props';
import { errorMixin } from './textarea.mixin';
import { Background } from '../input/types';

const baseClassName = 'Textarea';

const Textarea = styled.textarea.attrs({
  className: generateClassNames(baseClassName, 'root'),
  rows: 3,
})<TextareaProps>(
  ({ error = false, background = Background.Primary, theme }: With<WithTheme, TextareaProps>) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: text;
    width: 300px;
    padding: 7px 12px;
    background: ${background === 'primary'
      ? theme.palette[PColor.BackgroundSecondary]
      : theme.palette[PColor.BackgroundPrimary]};
    border: 1px solid ${theme.palette[PColor.BordersSecondary]};
    border-radius: ${theme.shape.borderRadius[BRSize.Sm]};
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily};
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: ${theme.palette[PColor.TextPrimary]};
    outline: none;
    resize: none;

    &:focus-within {
      background-color: ${theme.palette[PColor.BackgroundSecondary]};
      border: 1px solid ${theme.palette[PColor.AccentPrimary]};
    }

    &:hover {
      background-color: ${theme.palette[PColor.BackgroundPrimaryHover]};
    }

    ${error && errorMixin}
  `
);

const Styled = applyDisplayNames({ Textarea });

export default Styled;
