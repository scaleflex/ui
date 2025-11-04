import React, { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { Extends } from '@scaleflex/icons';

import { ImageComparisonSliderProps } from './image-comparison-slider.props';
import { getHorizontalPosition } from './image-comparison-slider.utils';
import ImagePreviewComponent from './image-preview.component';
import { lightPalette } from '../../theme/roots/palette';
import Styled from './image-comparison-slider.styles';
import { Color } from '../../utils/types/palette';

const ImageComparisonSlider = ({
  leftImgProps,
  rightImgProps,
  imgWrapperProps,
  handleProps,
  fallbackPreviewProps,
  footerProps,
  ref,
  ...rest
}: ImageComparisonSliderProps): JSX.Element => {
  const {
    color = lightPalette[Color.WHITE_0_7_8_Overlay],
    thumbColor = lightPalette[Color.BackgroundStateless],
    thumbIconSize = 16,
    thumbIconPadding = 8,
    thumbIcon = <Extends color={lightPalette[Color.IconsPrimaryHover]} />,
    ...restHandleProps
  } = handleProps || {};

  const { leftText = 'Before', rightText = 'After', hideFooter = false, ...restFooterProps } = footerProps || {};

  const [, startTransition] = useTransition();
  const leftImageWrapperRef = useRef<HTMLDivElement | null>(null);
  const rightImageWrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const [isResizing, setIsResizing] = useState(false);
  const [leftImageWidth, setLeftImageWidth] = useState<number>(0);
  const [rightImageWidth, setRightImageWidth] = useState<number>(0);

  const setPositioning = useCallback(
    (cursorHorizontalPosition: number) => {
      startTransition(() => {
        if (leftImageWrapperRef.current && handleRef.current) {
          if (leftImageWidth && rightImageWidth) {
            const width = Math.max(leftImageWidth, rightImageWidth);
            leftImageWrapperRef.current.style.width = `${width}px`;
            if (rightImageWrapperRef.current) rightImageWrapperRef.current.style.width = `${width}px`;
          }

          const { left, width: leftImgWrapWidth } = leftImageWrapperRef.current.getBoundingClientRect();
          const handleWidth = handleRef.current.offsetWidth;
          const containerWidth = sliderWrapperRef.current?.getBoundingClientRect().width || 0;

          const position = getHorizontalPosition({
            cursorHorizontalPosition,
            handleWidth,
            left,
            width: leftImgWrapWidth,
            containerWidth,
          });

          const containerHorizontalPosition = position?.containerHorizontalPosition || 0;
          const imgHorizontalPosition = position?.imgHorizontalPosition || 0;

          if (handleRef.current) {
            handleRef.current.style.left = `${containerHorizontalPosition * 100}%`;
            leftImageWrapperRef.current.style.clipPath = `inset(0 ${100 - imgHorizontalPosition * 100 - 0.1}% 0 0)`;
          }
        }
      });
    },
    [leftImageWidth, rightImageWidth]
  );

  const handleResize = useCallback((e: any) => setPositioning(e?.touches?.[0]?.clientX || e.clientX), [setPositioning]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    window.removeEventListener('touchmove', handleResize);
    window.removeEventListener('touchend', handleResizeEnd);
    window.removeEventListener('mousemove', handleResize);
    window.removeEventListener('mouseup', handleResizeEnd);
  }, [handleResize]);

  const handleLeftImageLoad = (e: any) => {
    setLeftImageWidth((e.target as HTMLImageElement).getBoundingClientRect()?.width || 0);

    if (typeof leftImgProps?.onLoad === 'function') {
      leftImgProps.onLoad(e);
    }
  };

  const handleRightImageLoad = (e: any) => {
    setRightImageWidth((e.target as HTMLImageElement).getBoundingClientRect()?.width || 0);

    if (typeof rightImgProps?.onLoad === 'function') {
      rightImgProps.onLoad(e);
    }
  };

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
    if (leftImageWrapperRef.current && handleRef.current) {
      const { left, width: leftImgWidth } = leftImageWrapperRef.current.getBoundingClientRect();
      const handleWidth = handleRef.current.offsetWidth;

      setPositioning(leftImgWidth / 2 + left - handleWidth / 2);
    }
  }, [setPositioning]);

  return (
    <Styled.ComparisonSlider {...rest} ref={ref}>
      <Styled.SliderWrapper ref={sliderWrapperRef}>
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
          <Styled.LeftImageWrapper ref={leftImageWrapperRef} {...imgWrapperProps}>
            <ImagePreviewComponent
              {...leftImgProps}
              fallbackPreviewProps={fallbackPreviewProps}
              onLoad={handleLeftImageLoad}
            />
          </Styled.LeftImageWrapper>

          <Styled.RightImageWrapper ref={rightImageWrapperRef} {...imgWrapperProps}>
            <ImagePreviewComponent
              {...rightImgProps}
              fallbackPreviewProps={fallbackPreviewProps}
              onLoad={handleRightImageLoad}
            />
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
};

export default ImageComparisonSlider;
