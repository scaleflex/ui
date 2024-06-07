import styled, { css, keyframes } from 'styled-components';
import { With } from '@scaleflex/ui/utils/types';
import { WithTheme } from '@scaleflex/ui/theme/entity';

import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { Color as PaletteColor } from '../../utils/types/palette';
import { FontVariant } from '@scaleflex/ui/utils/types/typography';

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
})<{ width: number | undefined, height: number | undefined }>(
  ({ width, height }) => css`
  position: relative;
  overflow: hidden;
  width: ${`${width}px`};
  height: ${`${height}px`};
`);

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
})<{ color?: string | undefined, padding?: number | undefined, iconSize?: number | undefined }>(
  ({ color, padding = 10, iconSize = 10 }) => css`
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
    top: ${`calc(50% - ${padding + iconSize / 2}px)`};
    right: ${`calc(50% - ${padding + iconSize / 2}px)`};
    background: ${color};
    width: ${`${iconSize}px`};
    height: ${`${iconSize}px`};
    border-radius: 8px;
    padding: ${`${padding}px`};
  }
`);

const BrokenPreviewWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'BrokenPreviewWrapper'),
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

const BrokenPreviewMsg = styled.span.attrs({
  className: generateClassNames(baseClassName, 'BrokenPreviewMsg'),
})<With<WithTheme, { fontVariant?: string, color: string }>>(
  ({ theme: { typography }, color }) => css`
    ${typography.font[FontVariant.TextMedium]};
    user-select: none;
    color: ${color};
  `
);

const Styled = applyDisplayNames({ Image, LeftImageWrapper, RightImageWrapper, Handle, ComparisonSlider, BrokenPreviewWrapper, BrokenPreviewMsg });

export default Styled;
