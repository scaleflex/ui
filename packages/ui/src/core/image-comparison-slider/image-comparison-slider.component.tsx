import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Extends } from '@scaleflex/icons';

import { ImageComparisonSliderProps } from './image-comparison-slider.props';
import { getHorizontalPosition } from './image-comparison-slider.utils';
import ImagePreviewComponent from './image-preview.component';
import { intrinsicComponent } from '../../utils/functions';
import { lightPalette } from '../../theme/roots/palette';
import Styled from './image-comparison-slider.styles';
import { Color } from '../../utils/types/palette';

const ImageComparisonSlider = intrinsicComponent<ImageComparisonSliderProps, HTMLDivElement>(
  (
    {
      leftImgProps,
      rightImgProps,
      imgWrapperProps,
      handleProps,
      fallbackPreviewProps,
      footerProps,
      ...rest
    }: ImageComparisonSliderProps,
    ref
  ): JSX.Element => {
    const {
      color = lightPalette[Color.WHITE_0_7_8_Overlay],
      thumbColor = lightPalette[Color.BackgroundStateless],
      thumbIconSize = 16,
      thumbIconPadding = 8,
      thumbIcon = <Extends color={lightPalette[Color.IconsPrimaryHover]} />,
      ...restHandleProps
    } = handleProps || {};

    const { leftText = 'Before', rightText = 'After', hideFooter = false, ...restFooterProps } = footerProps || {};

    const [isResizing, setIsResizing] = useState(false);
    const topImageRef = useRef<HTMLImageElement | null>(null);
    const handleRef = useRef<HTMLDivElement | null>(null);

    const setPositioning = useCallback((cursorHorizontalPosition: number) => {
      if (topImageRef.current && handleRef.current) {
        const { left, width: topImgWidth } = topImageRef.current.getBoundingClientRect();
        const handleWidth = handleRef.current.offsetWidth;
        const position = getHorizontalPosition({
          cursorHorizontalPosition,
          handleWidth: handleWidth,
          left,
          width: topImgWidth,
        });

        const horizontalPosition = position?.horizontalPosition || 0;

        if (handleRef.current) {
          handleRef.current.style.left = `${horizontalPosition * 100}%`;
          topImageRef.current.style.clipPath = `inset(0 ${100 - horizontalPosition * 100 - 0.1}% 0 0)`;
        }
      }
    }, []);

    const handleResize = useCallback(
      (e: any) => setPositioning(e?.touches?.[0]?.clientX || e.clientX),
      [setPositioning]
    );

    const handleResizeEnd = useCallback(() => {
      setIsResizing(false);
      window.removeEventListener('touchmove', handleResize);
      window.removeEventListener('touchend', handleResizeEnd);
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleResizeEnd);
    }, [handleResize]);

    useEffect(() => {
      if (isResizing) {
        window.addEventListener('touchmove', handleResize);
        window.addEventListener('touchend', handleResizeEnd);
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleResizeEnd);
      }

      return () => {
        window.removeEventListener('touchmove', handleResize);
        window.removeEventListener('touchend', handleResizeEnd);
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
      <Styled.ComparisonSlider {...rest} ref={ref}>
        <Styled.SliderWrapper>
          <Styled.Handle
            ref={handleRef}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
            color={color}
            $thumbColor={thumbColor}
            $thumbIconPadding={thumbIconPadding}
            $thumbIconSize={thumbIconSize}
            {...restHandleProps}
          >
            {thumbIcon}
          </Styled.Handle>
          <Styled.ImagesWrapper>
            <Styled.LeftImageWrapper ref={topImageRef} {...imgWrapperProps}>
              <ImagePreviewComponent {...leftImgProps} fallbackPreviewProps={fallbackPreviewProps} />
            </Styled.LeftImageWrapper>

            <Styled.RightImageWrapper {...imgWrapperProps}>
              <ImagePreviewComponent {...rightImgProps} fallbackPreviewProps={fallbackPreviewProps} />
            </Styled.RightImageWrapper>
          </Styled.ImagesWrapper>
        </Styled.SliderWrapper>

        {!hideFooter && (
          <Styled.Footer {...restFooterProps}>
            <span>{leftText}</span>
            <span>{rightText}</span>
          </Styled.Footer>
        )}
      </Styled.ComparisonSlider>
    );
  }
);

export default ImageComparisonSlider;
