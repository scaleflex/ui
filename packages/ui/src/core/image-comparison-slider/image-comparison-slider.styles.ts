import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';

const baseClassName = 'image-comparison-slider';

const Image = styled.img.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  width: 100%;
  height: auto;
  vertical-align: middle;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const ComparisonSlider = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<{ width: string | undefined, height: string | undefined }>(
  ({ width, height }) => css`
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`);

const RightImageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
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

const LeftImageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  overflow: hidden;
`;

const handle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<{ color: string | undefined, iconPadding: number | undefined, iconSize: number | undefined }>(
  ({ color, iconPadding = 10, iconSize = 200 }) => css`
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
    top: ${`calc(50% - ${iconPadding + iconSize / 2}px)`};
    right: ${`calc(50% - ${iconPadding + iconSize / 2}px)`};
    background: ${color};
    width: ${`${iconSize}px`};
    height: ${`${iconSize}px`};
    border-radius: 8px;
    padding: ${`${iconPadding}px`};
  }
`);

const Styled = applyDisplayNames({ Image, LeftImageWrapper, RightImageWrapper, handle, ComparisonSlider });

export default Styled;
