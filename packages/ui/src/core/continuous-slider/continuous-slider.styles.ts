import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Slider';

const Slider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: flex;
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
  ({ theme: { palette } }: WithTheme) => css`
    height: 10px;
    width: 10px;
    border-radius: 20px;
    border: 2px solid ${palette[PColor.BorderActiveBottom]};
    border-color: ${palette[PColor.BorderActiveBottom]};
    background: ${palette[PColor.BorderActiveBottom]};
    display: inline-block;
    position: relative;
    top: -5px;
    cursor: ew-resize;
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
    top: -35px;
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

const SliderOverlay = styled.span.attrs({
  className: generateClassNames(baseClassName, 'overlay'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    background: ${palette[PColor.BorderActiveBottom]};
    height: 100%;
    pointer-events: none;
    position: absolute;
    display: block;
  `
);

const SliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation'),
})`
  display: inline-block;
  white-space: nowrap;
  margin-left: 8px;
  margin-top: 4px;
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
