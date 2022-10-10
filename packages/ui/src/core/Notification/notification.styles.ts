import styled, { css } from 'styled-components';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { NotificationProps } from './notification.props';
import { NotificationStatus } from './types';
import {
    backgroundColorMixin,
    messageColorMixin,
    messageWithIconMixin,
    messageFontMixin,
} from './notification.mixin';
import { FontVariant } from '../../utils/types/typography/font-variant';

const baseClassName = 'Notification';


const NotificationWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    status = NotificationStatus.Info,
    background,
    icon,
    theme,
  }: With<WithTheme, NotificationProps>) => css`
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: 0px;
    gap: 32px;
    width: fit-content;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};

    ${messageColorMixin[status]}
    ${theme.typography.font[FontVariant.TextExtraSmall]}

    ${background && css`
        ${backgroundColorMixin[status]}
        ${messageFontMixin[status]}
    `}

    ${icon && background && css`
        ${messageWithIconMixin[status]}
    `}
  `
);

const Notification = styled.div.attrs({
    className: generateClassNames(baseClassName, 'Notification'),
})(
({ theme }: With<WithTheme, NotificationProps>) => css`
    display: flex;
    padding: 12px 16px;
    gap: 12px;
    border-radius: ${theme.shape.borderRadius[BRSize.Md]};
`);

const Icon = styled.span.attrs({
    className: generateClassNames(baseClassName, 'Icon'),
}) <NotificationProps>(
    ({ background = true }) => css`
    margin-right: ${background ? '12' : '6' }px;
`);

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
})(
({ theme }: With<WithTheme, NotificationProps>) => css`
    margin-bottom: 4px;
    ${theme.typography.font[FontVariant.LabelSmUpEmphasis]};
`);

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
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

const Styled = applyDisplayNames({
  NotificationWrapper,
  Notification,
  Icon,
  MessageWrapper,
  Title,
  Message,
  Close
});

export default Styled;
