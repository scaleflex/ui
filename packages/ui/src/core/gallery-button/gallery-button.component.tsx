import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { IconButtonProps } from '../icon-button/icon-button.props';
import Styled from './gallery-button.styles';

const GalleryButton = intrinsicComponent<IconButtonProps, HTMLButtonElement>(
  ({ ...rest }: IconButtonProps, ref): JSX.Element => {
    console.log(rest);
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
