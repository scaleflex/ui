import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import { GalleryButtonProps } from './gallery-button.props';
import Styled from './gallery-button.styles';

const GalleryButton = intrinsicComponent<GalleryButtonProps, HTMLButtonElement>(
  ({ ...rest }: GalleryButtonProps, ref): JSX.Element => {
    return (
      <Styled.GalleryButton {...rest} ref={ref}>
        <Styled.Wrapper>
          <Styled.SideRectangle />
          <Styled.MainRectangle />
          <Styled.SideRectangle />
        </Styled.Wrapper>
      </Styled.GalleryButton>
    );
  }
);

GalleryButton.defaultProps = {
  disabled: false,
  active: false,
};

GalleryButton.propTypes = {
  disabled: PT.bool,
  active: PT.bool,
};

export default GalleryButton;
