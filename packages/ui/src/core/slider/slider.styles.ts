import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PC } from '../../utils/types/palette';
import type { SliderProps } from './slider.props';

const baseClassName = 'Slider';

const Slider = styled.span.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme, disabled = false }: With<WithTheme, SliderProps>) => css`
    display: inline-block;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    touch-action: none;
    color: ${disabled ? theme.palette[PC.AccentPrimaryDisabled] : theme.palette[PC.BorderActiveBottom]};
    height: 4px;
    width: 100%;
    padding: 12px 0;
  `
);

const Rail = styled.span.attrs({
  className: generateClassNames(baseClassName, 'rail'),
})`
  display: block;
  position: absolute;
  border-radius: inherit;
  background-color: currentColor;
  opacity: 0.38;
  width: 100%;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`;

const Track = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Track'),
})`
  display: block;
  position: absolute;
  border-radius: inherit;
  border: 1px solid currentColor;
  background-color: currentColor;
  height: inherit;
  top: 50%;
  transform: translateY(-50%);
`;

const Thumb = styled.span.attrs({
  className: generateClassNames(baseClassName, 'thumb'),
})`
  position: absolute;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0;
  background-color: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translate(-50%, -50%);

  & > input {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 100%;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    white-space: nowrap;
    width: 100%;
    direction: ltr;
  }

  &::before {
    position: absolute;
    content: '';
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }

  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
    width: 42px;
    height: 42px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LabelTooltip = styled.span.attrs({
  className: generateClassNames(baseClassName, 'label'),
})(
  ({ theme, open = false, disabled = false }: With<WithTheme, { open: boolean; disabled: boolean }>) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 6px;
    border-radius: 2px;
    position: absolute;
    top: -10px;
    font-size: 10px;
    z-index: 1;
    white-space: nowrap;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform-origin: bottom center;
    transform: ${open ? 'translateY(-100%) scale(1)' : 'translateY(-100%) scale(0)'};
    background-color: ${disabled ? theme.palette[PC.AccentPrimaryDisabled] : theme.palette[PC.LinkStateless]};
    color: #fff;
    cursor: pointer;
    transition: all 100ms ease-out;

    &::before {
      position: absolute;
      content: '';
      background-color: inherit;
      width: 8px;
      height: 8px;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 50%) rotate(45deg);
    }
  `
);

const SliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation'),
})(
  ({ theme }: WithTheme) => css`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    color: ${theme.palette[PC.TextSecondary]};
  `
);

const Styled = applyDisplayNames({
  Slider,
  Rail,
  Track,
  Thumb,
  SliderAnnotation,
  LabelTooltip,
});

export default Styled;
