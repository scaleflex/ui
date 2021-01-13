import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '../../utils/functions';
import Robot from '../robot';
import { defaultProps as robotDefaultProps, propTypes as robotPropTypes } from '../robot/robot.component';
import type { PopupContentProps } from './popup-content.props';
import Styled from './popup-content.styles';

const PopupContent = intrinsicComponent<PopupContentProps, HTMLDivElement>((
  {
    message, status, ...rest
  },
  ref
): JSX.Element => (
  <Styled.PopupContent {...rest} ref={ref}>
    <Styled.Robot>
      <Robot status={status} />
    </Styled.Robot>

    <Styled.LabelWrapper>
      <Styled.Label>
        {message}
      </Styled.Label>
    </Styled.LabelWrapper>

  </Styled.PopupContent>
));

export const defaultProps = {
  ...robotDefaultProps,
};

PopupContent.defaultProps = defaultProps;

export const propTypes = {
  ...robotPropTypes,
  message: PT.node.isRequired,
};

PopupContent.propTypes = propTypes;

export default PopupContent;
