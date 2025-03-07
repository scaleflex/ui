import React from 'react';

import { GalleryButtonProps } from './gallery-button.props';
import Styled from './gallery-button.styles';

const GalleryButton = ({ active = false, disabled = false, ref, ...rest }: GalleryButtonProps): JSX.Element => {
  return (
    <Styled.GalleryButton type="button" {...rest} $active={active} disabled={disabled} ref={ref}>
      <Styled.Wrapper>
        <Styled.SideRectangle />
        <Styled.MainRectangle />
        <Styled.SideRectangle />
      </Styled.Wrapper>
    </Styled.GalleryButton>
  );
};

export default GalleryButton;
