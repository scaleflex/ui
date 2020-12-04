import React from 'react';
// import PT from 'prop-types';
import { intrinsicComponent, /* objectValues */ } from '@sfx-ui/utils/functions';
import Robot from '../robot';
import { defaultProps as robotDefaultProps, propTypes as robotPropTypes } from '../robot/robot.component';
import type { PopupProps } from './popup.props';
import Styled from './popup.styles';

const Popup = intrinsicComponent<PopupProps, HTMLDivElement>((
  {
    children, status, ...rest
  },
  ref
): JSX.Element => (
  <Styled.Popup {...rest} ref={ref}>
    <Styled.Robot>
      <Robot status={status} />
    </Styled.Robot>

    <Styled.LabelWrapper>
      <Styled.Label>
        {children}
      </Styled.Label>
    </Styled.LabelWrapper>

  </Styled.Popup>
));

Popup.defaultProps = {
  ...robotDefaultProps,
};

Popup.propTypes = {
  ...robotPropTypes,
  // position TODO
};

export default Popup;
