import styled, { css, keyframes } from 'styled-components';
import { With } from '@scaleflex/ui/utils/types';
import { WithTheme } from '@scaleflex/ui/theme/entity';
import { FontVariant } from '@scaleflex/ui/utils/types/typography';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color, Color as PaletteColor } from '../../utils/types/palette';


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
`

const ComparisonSlider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img.attrs({
  className: generateClassNames(baseClassName, 'Image'),
})<With<WithTheme, { isLoading: boolean }>>(
  ({ isLoading, theme }) => css`
  width: 100%;
  height: auto;
  vertical-align: middle;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;

  ${isLoading && css`
    background-color: ${theme?.palette[PaletteColor.ButtonPrimaryText]};
    animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
    width: 100%;
    height: 100%;
  `}
`);

const LeftImageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'RightImageWrapper'),
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
  className: generateClassNames(baseClassName, 'LeftImageWrapper'),
})`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const Handle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Thumb'),
})<{ color?: string | undefined, thumbIconPadding?: number | undefined, thumbIconSize?: number | undefined }>(
  ({ color, thumbIconPadding = 10, thumbIconSize = 10 }) => css`
  position: absolute;
  width: 3px;
  height: 100%;
  background: ${color};
  z-index: 3;
  cursor: col-resize;
  top: 0;

  svg {
    display: block;
    position: absolute;
    top: ${`calc(50% - ${thumbIconPadding + thumbIconSize / 2}px)`};
    right: ${`calc(50% - ${thumbIconPadding + thumbIconSize / 2}px)`};
    background: ${color};
    width: ${`${thumbIconSize}px`};
    height: ${`${thumbIconSize}px`};
    border-radius: 8px;
    padding: ${`${thumbIconPadding}px`};
  }
`);

const FallbackPreviewWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'FallbackPreviewWrapper'),
})<{ backgroundColor?: string | undefined, gap?: number, }>(
  ({ backgroundColor, gap }) => css`
  display: flex;
  flex-direction: column;
  gap: ${`${gap}px`};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${backgroundColor};
`)

const FallbackPreviewMsg = styled.span.attrs({
  className: generateClassNames(baseClassName, 'FallbackPreviewMsg'),
})<With<WithTheme, { fontVariant?: string, color?: string }>>(
  ({ theme: { typography }, color = lightPalette[Color.TextSecondary] }) => css`
    ${typography.font[FontVariant.TextMedium]};
    user-select: none;
    color: ${color};
  `
);

const Styled = applyDisplayNames({
  Image, LeftImageWrapper, RightImageWrapper, FallbackPreviewMsg,
  Handle, ComparisonSlider, FallbackPreviewWrapper,
});

export default Styled;
