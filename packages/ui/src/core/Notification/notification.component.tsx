import React from 'react';
import PT from 'prop-types';
import Cross from '@scaleflex/icons/cross';
import { Color } from '../../utils/types/palette';
import { lightPalette } from '../../theme/roots/palette';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Styled from './notification.styles';
import PopupStatus from '../popup-status';
import { NotificationStatus } from './types';
import { NotificationProps } from './notification.props';

const Notification = intrinsicComponent<NotificationProps, HTMLDivElement>(
  (
    {
      status,
      removeBackground,
      hideIcon,
      title,
      message,
      onClose,
      ...rest
    }: NotificationProps,
    ref
  ): JSX.Element => {

    return (
      <Styled.NotificationWrapper
        ref={ref}
        status={status}
        removeBackground={removeBackground}
        hideIcon={hideIcon}
        title={title}
        {...rest}
      >
        <Styled.Notification>
            {!hideIcon && (
                <Styled.Icon removeBackground={removeBackground}>
                    <PopupStatus status={status} notificationBackground={!removeBackground} />
                </Styled.Icon>
            )}
            <Styled.MessageWrapper>
                {title && (
                    <Styled.Title>
                     {title}
                    </Styled.Title>
                )}
                <Styled.Message>
                    {message}
                </Styled.Message>
            </Styled.MessageWrapper>

        </Styled.Notification>
        
        <Styled.Close onClick={onClose}>
          <Cross size={removeBackground ? 0 : 10.56 } color={lightPalette[Color.IconsPrimary]} />
        </Styled.Close>
      </Styled.NotificationWrapper>
    );
  }
);

Notification.defaultProps = {
  status: NotificationStatus.Info,
  removeBackground: false,
  hideIcon: false,
};

Notification.propTypes = {
  status: PT.oneOf(objectValues(NotificationStatus)),
  removeBackground: PT.bool,
  hideIcon: PT.bool,
  title: PT.node,
  message: PT.node,
  onClose: PT.func,
};

export default Notification;
