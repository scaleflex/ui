interface GetHorizontalPositionProps {
  cursorHorizontalPosition: number;
  width: number;
  left: number;
  handleWidth: number;
  containerWidth: number;
}

interface GetHorizontalPosition {
  containerHorizontalPosition: number;
  imgHorizontalPosition: number;
}

export const getHorizontalPosition = (props: GetHorizontalPositionProps): GetHorizontalPosition | undefined => {
  const { cursorHorizontalPosition, width, left, handleWidth, containerWidth } = props;

  const offset = containerWidth ? (containerWidth - width) / 2 : 0;
  const rightBoundary = left + width;
  const leftBoundary = left - handleWidth;
  const isHandleOutsideRightBoundary = cursorHorizontalPosition > rightBoundary;
  const isHandleOutsideLeftBoundary = cursorHorizontalPosition < leftBoundary;
  const isHandleInBoundaries = cursorHorizontalPosition <= rightBoundary && cursorHorizontalPosition >= leftBoundary;

  if (isHandleInBoundaries) {
    return {
      containerHorizontalPosition: (cursorHorizontalPosition + offset - left) / containerWidth,
      imgHorizontalPosition: (cursorHorizontalPosition - left) / width,
    };
  }

  if (isHandleOutsideRightBoundary) {
    return { containerHorizontalPosition: offset ? (offset + width) / containerWidth : 1, imgHorizontalPosition: 1 };
  }

  if (isHandleOutsideLeftBoundary) {
    const minPosition = (handleWidth * -1) / containerWidth;

    return {
      containerHorizontalPosition: offset ? (offset - handleWidth) / containerWidth : minPosition,
      imgHorizontalPosition: minPosition,
    };
  }
};

interface GetRightImageSizeprops {
  containerElement: HTMLDivElement;
  ratio: number;
}
interface GetWrappersWidth {
  width: number;
  height: number;
}

export const getRightImageSize = ({ containerElement, ratio }: GetRightImageSizeprops): GetWrappersWidth => {
  const { width: containerWidth, height: containerHeight } = containerElement.getBoundingClientRect();

  let width = containerWidth;
  let height = containerWidth / ratio;

  if (height > containerHeight) {
    height = containerHeight;
    width = height * ratio;
  }

  return { width, height };
};

interface GetWrappersWidthProps {
  containerElement: HTMLDivElement | null;
  leftImageRatio: number;
  rightImageRatio: number;
}

export const getWrappersWidth = (props: GetWrappersWidthProps): number => {
  const { containerElement, leftImageRatio, rightImageRatio } = props;

  if (!containerElement) return 0;

  return Math.max(
    getRightImageSize({ containerElement, ratio: leftImageRatio })?.width || 0,
    getRightImageSize({ containerElement, ratio: rightImageRatio })?.width || 0
  );
};
