import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'RotationSlider';

const RotationSlider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  width: 100%;
  padding: 12px 0 0;
`;

const RotationSliderContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'container'),
})`
  position: relative;
`;

const RotationSliderList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'list'),
})`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
  width: 100%;
`;

const RotationSliderLabel = styled.label.attrs({
  className: generateClassNames(baseClassName, 'label'),
})``;

const RotationSliderBigDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'big-dot'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    width: 8px;
    height: 8px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${palette[PColor.LinkPrimary]};
    /* margin-right: 8px; */
  `
);

const RotationSliderSmallDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'small-dot'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    width: 2px;
    height: 2px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${palette[PColor.LinkPrimary]};
    margin-right: 8px;
  `
);
const RotationSliderDrag = styled.div.attrs({
  className: generateClassNames(baseClassName, 'drag'),
})`
  position: absolute;
  left: 0;
  bottom: 46px;
  height: 100%;
  width: 100%;
  z-index: 100;
`;

const RotationSliderControl = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control'),
})`
  height: 18px;
  width: 2px;
  background-color: #92a6bc;
  display: inline-block;
  position: absolute;
  top: 12px;
  cursor: ew-resize;
`;
const RotationSliderTooltip = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control-tootip'),
})(
  ({ theme: { palette }, isActive = false }: With<WithTheme, { isActive: boolean }>) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 6px;
    border-radius: 2px;
    width: max-content;
    background: ${isActive ? `${palette[PColor.LinkPrimary]}` : `${palette[PColor.ActiveSecondaryActive]}`};
    color: #fff;
    cursor: pointer;
    top: -18px;
    height: 18px;
    font-size: 10px;
    margin-left: -10px;

    &::after {
      content: '';
      background: ${isActive ? `${palette[PColor.LinkPrimary]}` : `${palette[PColor.ActiveSecondaryActive]}`};
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      position: absolute;
      bottom: -3px;
      font-size: 14px;
    }
  `
);

const RotationSliderAnnotation = styled.div.attrs({
  className: generateClassNames(baseClassName, 'annotation'),
})`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const RotationSliderMark = styled.div.attrs({
  className: generateClassNames(baseClassName, 'mark'),
})`
  margin-right: 8px;
`;
const RotationSliderMarkText = styled.div.attrs({
  className: generateClassNames(baseClassName, 'mark-text'),
})`
  position: absolute;
  bottom: -22px;
  font-size: 14px;
  color: #37414b;
`;

const Styled = applyDisplayNames({
  RotationSlider,
  RotationSliderContainer,
  RotationSliderList,
  RotationSliderBigDot,
  RotationSliderSmallDot,
  RotationSliderDrag,
  RotationSliderLabel,
  RotationSliderTooltip,
  RotationSliderControl,
  RotationSliderAnnotation,
  RotationSliderMark,
  RotationSliderMarkText,
});

export default Styled;
