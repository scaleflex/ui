import React from 'react';
import PT from 'prop-types';
import { Success, About, Error, Warning } from '@scaleflex/icons';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { PopupStatusProps, PopupStatusType } from './popup-status.props';
import { Status } from './types';
import Styled from './popup-status.styles';

const getPopupStatusIcon = (status?: PopupStatusType): JSX.Element => {
  switch (status) {
    case Status.Warning:
      return <Warning color={lightPalette[Color.WarningIcon]} size={20} />;

    case Status.Error:
      return <Error color={lightPalette[Color.ErrorIcon]} size={20} />;

    case Status.Info:
      return <About color={lightPalette[Color.InfoIcon]} size={20} />;

    case Status.Success:
    default:
      return <Success color={lightPalette[Color.SuccessIcon]} />;
  }
};

const PopupStatus = intrinsicComponent<PopupStatusProps, HTMLSpanElement>(
  ({ status, ...rest }, ref): JSX.Element => (
    <Styled.PopupStatus status={status} {...rest} ref={ref}>
      {getPopupStatusIcon(status)}
    </Styled.PopupStatus>
  )
);

export const defaultProps = {
  status: Status.Success,
};

PopupStatus.defaultProps = defaultProps;

export const propTypes = {
  status: PT.oneOf(objectValues(Status)),
};

PopupStatus.propTypes = propTypes;

export default PopupStatus;
