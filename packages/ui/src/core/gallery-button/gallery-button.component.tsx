import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import { GalleryButtonProps } from './gallery-button.props';
import Styled from './gallery-button.styles';

const GalleryButton = intrinsicComponent<GalleryButtonProps, HTMLButtonElement>(
  ({ active = false, disabled = false, ...rest }: GalleryButtonProps, ref): JSX.Element => {
    return (
      <Styled.GalleryButton type="button" {...rest} $active={active} disabled={disabled} ref={ref}>
        <Styled.Wrapper>
          <Styled.SideRectangle />
          <Styled.MainRectangle />
          <Styled.SideRectangle />
        </Styled.Wrapper>
      </Styled.GalleryButton>
    );
  }
);

export default GalleryButton;
