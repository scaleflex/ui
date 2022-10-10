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
      background,
      icon,
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
        background={background}
        icon={icon}
        {...rest}
      >
        <Styled.Notification>
            {icon && (
                <Styled.Icon background={background}>
                    <PopupStatus status={status} notificationBackground={background} />
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
          <Cross size={background ? 12.32 : 10} color={lightPalette[Color.IconsPrimary]} />
        </Styled.Close>
      </Styled.NotificationWrapper>
    );
  }
);

Notification.defaultProps = {
  status: NotificationStatus.Info,
  background: true,
  icon: true,
};

Notification.propTypes = {
  status: PT.oneOf(objectValues(NotificationStatus)),
  background: PT.bool,
  icon: PT.bool,
  title: PT.node,
  message: PT.node,
  onClose: PT.func,
};

export default Notification;
