import styled, { css, keyframes } from 'styled-components';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color, Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '../../utils/types/typography';
import { lightPalette } from '../../theme/roots/palette';
import { WithTheme } from '../../theme/entity';
import { With } from '../../utils/types';

const baseClassName = 'image-comparison-slider';

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;

const ComparisonSlider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  user-select: none;
`;

const Image = styled.img.attrs({
  className: generateClassNames(baseClassName, 'image'),
})<With<WithTheme, { $isLoading: boolean }>>(
  ({ $isLoading = false, theme }) => css`
    width: 100%;
    height: auto;
    vertical-align: middle;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: none;
    touch-action: none;

    ${$isLoading &&
    css`
      background-color: ${theme?.palette[PaletteColor.BackgroundHover]};
      animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
      width: 100%;
      height: 100%;
    `}
  `
);

const LeftImageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'leftImageWrapper'),
})`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const RightImageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'rightImageWrapper'),
})`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const Handle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'handle'),
})<With<WithTheme, { color?: string; $thumbColor?: string; $thumbIconPadding?: number; $thumbIconSize?: number }>>(
  ({ color = '', $thumbColor = '', $thumbIconPadding = 8, $thumbIconSize = 16, theme }) => css`
    position: absolute;
    width: 6px;
    height: 100%;
    background: ${color};
    z-index: 3;
    cursor: col-resize;
    top: 0;

    svg {
      display: block;
      position: absolute;
      top: ${`calc(50% - ${$thumbIconPadding + $thumbIconSize / 2}px)`};
      right: ${`calc(50% - ${$thumbIconPadding + $thumbIconSize / 2}px)`};
      background: ${$thumbColor};
      width: ${`${$thumbIconSize}px`};
      height: ${`${$thumbIconSize}px`};
      border-radius: 8px;
      padding: ${`${$thumbIconPadding}px`};
      border: 1px solid ${theme?.palette[PaletteColor.IconsPrimary]};
      box-sizing: content-box;
    }
  `
);

const FallbackPreviewWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'fallbackPreviewWrapper'),
})<{ backgroundColor?: string; gap?: number }>(
  ({ backgroundColor = '', gap = 2 }) => css`
    display: flex;
    flex-direction: column;
    gap: ${`${gap}px`};
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: ${backgroundColor};
  `
);

const FallbackPreviewMsg = styled.span.attrs({
  className: generateClassNames(baseClassName, 'fallbackPreviewMsg'),
})<With<WithTheme, { color?: string }>>(
  ({ theme: { typography }, color = lightPalette[Color.TextSecondary] }) => css`
    ${typography.font[FontVariant.TextMedium]};
    user-select: none;
    color: ${color};
  `
);

const SliderWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'sliderWrapper'),
})`
  position: relative;
  overflow: hidden;
  touch-action: none;
  height: 100%;
`;

const ImagesWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'imagesWrapper'),
})`
  height: 100%;
`;

const Footer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'footer'),
})<WithTheme>(
  ({ theme }) => css`
    ${theme.typography.font[FontVariant.TextMedium]};
    display: flex;
    width: 100%;
    justify-content: space-between;
  `
);

const Styled = applyDisplayNames({
  Image,
  LeftImageWrapper,
  RightImageWrapper,
  FallbackPreviewMsg,
  Handle,
  ImagesWrapper,
  ComparisonSlider,
  FallbackPreviewWrapper,
  SliderWrapper,
  Footer,
});

export default Styled;
