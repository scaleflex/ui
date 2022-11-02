import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import PopupStatus from '../popup-status';
import CrossButton from '../cross-button';
import { NotificationStatus } from './types';
import { NotificationProps } from './notification.props';
import Styled from './notification.styles';

const Notification = intrinsicComponent<NotificationProps, HTMLDivElement>(
  ({ status, removeBackground, hideIcon, title, message, onClose, ...rest }: NotificationProps, ref): JSX.Element => {
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
            {title && <Styled.Title>{title}</Styled.Title>}
            <Styled.Message>{message}</Styled.Message>
          </Styled.MessageWrapper>
        </Styled.Notification>

        {!removeBackground && (
          <Styled.Close>
            <CrossButton size='sm' onClose={onClose}/>
          </Styled.Close>
        )}
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
