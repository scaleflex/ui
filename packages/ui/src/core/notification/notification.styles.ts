import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { NotificationProps } from './notification.props';
import { NotificationStatus } from './types';
import { backgroundColorMixin, messageColorMixin, messageWithIconMixin, messageFontMixin } from './notification.mixin';
import { FontVariant } from '../../utils/types/typography/font-variant';

const baseClassName = 'Notification';

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})<NotificationProps>(
  ({ removeBackground = true }) => css`
    margin-right: ${removeBackground ? '6' : '12'}px;
  `
);

const NotificationWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, With<NotificationProps, { isTitle?: boolean }>>>(
  ({ status = NotificationStatus.Info, removeBackground, hideIcon, isTitle, theme }) => css`
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: 0px;
    gap: 32px;
    width: fit-content;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    ${messageColorMixin[status]}
    ${theme.typography.font[FontVariant.TextExtraSmall]}

    ${!removeBackground &&
    css`
      ${backgroundColorMixin[status]}
      ${messageFontMixin[status]}
    `}

    ${!hideIcon &&
    !removeBackground &&
    css`
      ${messageWithIconMixin[status]}
    `}

    ${removeBackground &&
    isTitle &&
    css`
      ${Icon} {
        margin-top: 1px;
      }
    `}
  `
);

const Notification = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Notification'),
})<With<WithTheme, NotificationProps>>(
  ({ theme }) => css`
    display: flex;
    padding: 12px 16px;
    margin-right: 64px;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
  `
);

const MessageWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'MessageWrapper'),
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const Title = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Title'),
})<With<WithTheme, NotificationProps>>(
  ({ theme }) => css`
    margin-bottom: 4px;
    ${theme.typography.font[FontVariant.LabelSmallUpEmphasis]};
  `
);

const Message = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Message'),
})`
  margin-right: 32px;
`;

const Close = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Close'),
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 2px;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
`;

const Styled = applyDisplayNames({
  NotificationWrapper,
  Notification,
  Icon,
  MessageWrapper,
  Title,
  Message,
  Close,
});

export default Styled;
