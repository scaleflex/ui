import React from 'react';
import PT from 'prop-types';
import { Success, About, Error, Warning, InfoOutline, WarningOutline, ErrorOutline } from '@scaleflex/icons';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { PopupStatusProps, PopupStatusType } from './popup-status.props';
import { Status } from './types';
import Styled from './popup-status.styles';

const getPopupStatusIcon = (status?: PopupStatusType, notificationBackground?: boolean): JSX.Element => {
  switch (status) {
    case Status.Warning:
      return notificationBackground ? (
        <Warning color={lightPalette[Color.Warning]} size={20} />
      ) : (
        <WarningOutline color={lightPalette[Color.Warning]} size={12} />
      );

    case Status.Error:
      return notificationBackground ? (
        <Error color={lightPalette[Color.Error]} size={20} />
      ) : (
        <ErrorOutline color={lightPalette[Color.Error]} size={12} />
      );

    case Status.Info:
      return notificationBackground ? (
        <About color={lightPalette[Color.Info]} size={20} />
      ) : (
        <InfoOutline color={lightPalette[Color.Info]} size={12} />
      );

    case Status.Success:
    default:
      return <Success color={lightPalette[Color.Success]} size={20} />;
  }
};

const PopupStatus = intrinsicComponent<PopupStatusProps, HTMLSpanElement>(
  ({ status, notificationBackground = true, ...rest }, ref): JSX.Element => (
    <Styled.PopupStatus status={status} {...rest} ref={ref}>
      {getPopupStatusIcon(status, notificationBackground)}
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
