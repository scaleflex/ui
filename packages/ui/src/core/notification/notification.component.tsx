import React from 'react';

import { intrinsicComponent } from '../../utils/functions';
import PopupStatus from '../popup-status';
import CrossButton from '../cross-button';
import { NotificationStatus } from './types';
import { NotificationProps } from './notification.props';
import Styled from './notification.styles';

const Notification = intrinsicComponent<NotificationProps, HTMLDivElement>(
  (
    {
      status = NotificationStatus.Info,
      removeBackground = false,
      hideIcon = false,
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
        isTitle={Boolean(title)}
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
          <Styled.Close onClick={onClose}>
            <CrossButton size="sm" />
          </Styled.Close>
        )}
      </Styled.NotificationWrapper>
    );
  }
);

export default Notification;
