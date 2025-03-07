import React, { SyntheticEvent, useState } from 'react';
import ErrorBroke from '@scaleflex/icons/error-broke';

import { ImagePreviewProps } from './image-comparison-slider.props';
import { lightPalette } from '../../theme/roots/palette';
import Styled from './image-comparison-slider.styles';
import { Color } from '../../utils/types/palette';

const ImagePreviewComponent = ({
  fallbackPreviewProps,
  onError,
  onLoad,
  ref,
  ...rest
}: ImagePreviewProps): JSX.Element => {
  const {
    msgProps,
    icon: Icon = ErrorBroke,
    iconSize = 150,
    iconColor = lightPalette[Color.IconsSecondary],
    gap = 10,
    backgroundColor = lightPalette[Color.BackgroundPrimaryHover],
  } = fallbackPreviewProps || {};

  const [isImgLoading, setIsImgLoading] = useState(true);
  const [isImgFailedToLoad, setIsImgFailedToLoad] = useState(false);

  const onLoadError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (typeof onError === 'function') {
      onError(e);
    }

    setIsImgFailedToLoad(true);
    setIsImgLoading(false);
  };

  const onImgLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (typeof onLoad === 'function') {
      onLoad(e);
    }

    setIsImgLoading(false);
  };

  const { text = 'Failed to load img', ...restMsgProps } = msgProps || {};

  if (isImgFailedToLoad) {
    return (
      <Styled.FallbackPreviewWrapper ref={ref} backgroundColor={backgroundColor} gap={gap}>
        <Icon size={iconSize} color={iconColor} />
        <Styled.FallbackPreviewMsg {...restMsgProps}>{text}</Styled.FallbackPreviewMsg>
      </Styled.FallbackPreviewWrapper>
    );
  }

  return (
    <Styled.Image draggable="false" onError={onLoadError} onLoad={onImgLoad} $isLoading={isImgLoading} {...rest} />
  );
};

export default ImagePreviewComponent;
