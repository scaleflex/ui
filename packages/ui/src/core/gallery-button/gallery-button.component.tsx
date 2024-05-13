import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import { GalleryButtonProps } from './gallery-button.props';
import Styled from './gallery-button.styles';

const GalleryButton = intrinsicComponent<GalleryButtonProps, HTMLButtonElement>(
  ({ active = false, disabled = false, ...rest }: GalleryButtonProps, ref): JSX.Element => {
    return (
      <Styled.GalleryButton {...rest} $active={active} disabled={disabled} ref={ref}>
        <Styled.Wrapper>
          <Styled.SideRectangle />
          <Styled.MainRectangle />
          <Styled.SideRectangle />
        </Styled.Wrapper>
      </Styled.GalleryButton>
    );
  }
);

GalleryButton.propTypes = {
  disabled: PT.bool,
  active: PT.bool,
};

export default GalleryButton;
