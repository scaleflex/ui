import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Slider';

const Slider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette }, hideOverlay = false }: With<WithTheme, { hideOverlay: boolean }>) => css`
    width: 100%;
    display: flex;
    align-items: center;

    .slider {
      flex: 6;
      -webkit-appearance: ${hideOverlay ? 'none' : 'auto'};
      width: 100%;
      height: 4px;
      background: ${palette[PColor.BordersStrong]};
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 20px;
        background: ${palette[PColor.BorderActiveBottom]};
        cursor: ew-resize;
      }

      &::-moz-range-thumb {
        height: 15px;
        width: 15px;
        border-radius: 20px;
        background: ${palette[PColor.BorderActiveBottom]};
        cursor: ew-resize;
      }
    }
  `
);

const SliderContainerControlTooltip = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control-tootip'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    cursor: pointer;
    background: ${palette[PColor.LinkPrimary]};
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px 6px;
    border-radius: 2px;
    position: absolute;
    top: 2px;
    height: 18px;
    font-size: 10px;
    width: max-content;

    &::after {
      content: '';
      background: ${palette[PColor.LinkPrimary]};
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      position: absolute;
      bottom: -3px;
      font-size: 14px;
    }
  `
);

const SliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation'),
})`
  flex: 1;
`;

const Styled = applyDisplayNames({
  Slider,
  SliderContainerControlTooltip,
  SliderAnnotation,
});

export default Styled;
