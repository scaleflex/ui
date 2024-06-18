import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PC } from '../../utils/types/palette';

const baseClassName = 'RotationSlider';

const RotationSliderList = styled.ul.attrs({
  className: generateClassNames(baseClassName, 'list'),
})`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  width: 100%;
  list-style: none;
`;

const RotationSliderBigDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'big-dot'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${palette[PC.LinkPrimary]};
    cursor: pointer;
  `
);

const RotationSliderSmallDotWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'small-dot-wrapper'),
})`
  padding: 2px;
`;

const RotationSliderSmallDot = styled.li.attrs({
  className: generateClassNames(baseClassName, 'small-dot'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${palette[PC.LinkPrimary]};
    cursor: pointer;
  `
);

const RotationSliderControl = styled.span.attrs({
  className: generateClassNames(baseClassName, 'control'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 18px;
    width: 2px;
    transform: translate(-50%, -50%);
    top: 50%;
    background-color: ${palette[PC.LinkActive]};

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
      box-shadow:
        0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%),
        0px 1px 5px 0px rgb(0 0 0 / 12%);
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
  `
);

const RotationSliderMark = styled.div.attrs({
  className: generateClassNames(baseClassName, 'mark'),
})`
  padding: 4px;
`;

const RotationSliderMarkText = styled.span.attrs({
  className: generateClassNames(baseClassName, 'mark-text'),
})<WithTheme>(
  ({ theme: { palette } }) => css`
    position: absolute;
    top: 20px;
    font-size: 14px;
    transform: translateX(-10%);
    color: ${palette[PC.TextPrimary]};
  `
);

const Styled = applyDisplayNames({
  RotationSliderList,
  RotationSliderBigDot,
  RotationSliderSmallDotWrapper,
  RotationSliderSmallDot,
  RotationSliderControl,
  RotationSliderMark,
  RotationSliderMarkText,
});

export default Styled;
