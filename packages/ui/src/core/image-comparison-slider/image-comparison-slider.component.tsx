import React, { useCallback, useEffect, useRef, useState } from 'react';
import { intrinsicComponent } from '@scaleflex/ui/utils/functions';
import { Color } from '@scaleflex/ui/utils/types/palette';
import ArrowChange from '@scaleflex/icons/arrow-change';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';

import { ImageComparisonSliderProps } from './image-comparison-slider.props';
import Styled from './image-comparison-slider.styles';
import { getHorizontalPosition } from './image-comparison-slider.utils';
import ImagePreviewComponent from './image-preview.components.tsx/image-preview.component';

const ImageComparisonSlider = intrinsicComponent<ImageComparisonSliderProps, HTMLDivElement>(
  (
    {
      leftImgProps,
      rightImgProps,
      width = 400,
      height = 400,
      handleProps = { color: lightPalette[Color.BackgroundStateless], iconSize: 10, padding: 10 },
      thumbIcon = <ArrowChange color={lightPalette[Color.IconsPrimary]} />,
      ...rest
    }: ImageComparisonSliderProps,
    ref
  ): JSX.Element => {
    const [isResizing, setIsResizing] = useState(false);
    const topImageRef = useRef<HTMLImageElement | null>(null);
    const handleRef = useRef<HTMLDivElement | null>(null);

    const setPositioning = useCallback((cursorHorizontalPosition: number) => {
      if (topImageRef.current && handleRef.current) {
        const { left, width: topImgWidth } = topImageRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;
        const { horizontalPosition = 0 } = getHorizontalPosition({
          cursorHorizontalPosition,
          handleWidth: handleWidth,
          left,
          width: topImgWidth,
        })!;

        if (handleRef.current) {
          handleRef.current.style.left = `${horizontalPosition * 100}%`;
          topImageRef.current.style.clipPath = `inset(0 ${100 - horizontalPosition * 100 - 0.1}% 0 0)`;
        }
      }
    }, []);

    const handleResize = useCallback((e: any) => setPositioning(e.clientX), [setPositioning]);

    const handleResizeEnd = useCallback(() => {
      setIsResizing(false);
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleResizeEnd);
    }, [handleResize]);

    useEffect(() => {
      if (isResizing) {
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleResizeEnd);
      }

      return () => {
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleResizeEnd);
      };
    }, [isResizing, handleResize, handleResizeEnd]);

    useEffect(() => {
      if (topImageRef.current && handleRef.current) {
        const { left, width: topImgWidth } = topImageRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;

        setPositioning(topImgWidth / 2 + left - handleWidth / 2);
      }
    }, [setPositioning]);

    return (
      <Styled.ComparisonSlider width={width} height={height} {...rest} ref={ref}>
        <Styled.Handle
          ref={handleRef}
          onMouseDown={() => setIsResizing(true)}
          {...handleProps}
        >
          {thumbIcon}
        </Styled.Handle>
        <Styled.LeftImageWrapper ref={topImageRef}>
          <ImagePreviewComponent {...rightImgProps} />
        </Styled.LeftImageWrapper>

        <Styled.RightImageWrapper>
          <ImagePreviewComponent {...leftImgProps} />
        </Styled.RightImageWrapper>
      </Styled.ComparisonSlider>
    );
  }
);

export default ImageComparisonSlider;
