import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
// import type { SliderProps } from './slider.props';

const baseClassName = 'Slider';

const Slider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  width: 100%;
  padding: 12px 0 0;
`;

const SliderContainerLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'label'),
})``;

const SliderContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    display: block;
    width: 100%;
    height: 4px;
    background: ${palette[PColor.BordersStrong]};
    border-radius: 20px;
    position: relative;
    margin-top: 12px;
    cursor: pointer;

    ${SliderContainerLabel} {
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
    }
  `
);

const SliderContainerControl = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control'),
})(
  ({ isActive = false }: { isActive: boolean }) => css`
    height: 10px;
    width: 10px;
    border-radius: 20px;
    border: 2px solid #d5d8dc;
    border-color: ${isActive && '#6879EB'};
    background: #fff;
    display: inline-block;
    position: relative;
    top: -3px;
    cursor: ew-resize;
  `
);

const SliderContainerControlTooltip = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control-tootip'),
})(
  ({ isActive = false }: { isActive: boolean }) => css`
    cursor: pointer;
    background: ${isActive ? '#5D6D7E' : '#cbd3da'};
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 6px;
    border-radius: 2px;
    position: absolute;
    top: -35px;
    height: 18px;
    font-size: 10px;
    width: max-content;

    &::after {
      content: '';
      background: ${isActive ? '#5D6D7E' : '#cbd3da'};
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      position: absolute;
      bottom: -3px;
      font-size: 14px;
    }
  `
);

const SliderOverlay = styled.span.attrs({
  className: generateClassNames(baseClassName, 'overlay'),
})(
  ({ isActive = false }: With<WithTheme, { isActive: boolean }>) => css`
    background: ${isActive ? '#6879EB' : '#cbd3da'};
    height: 100%;
    pointer-events: none;
    position: absolute;
    display: block;
  `
);

const SliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation'),
})`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Styled = applyDisplayNames({
  Slider,
  SliderContainer,
  SliderContainerLabel,
  SliderContainerControl,
  SliderContainerControlTooltip,
  SliderOverlay,
  SliderAnnotation,
});

export default Styled;
