import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { TabProps } from './tab.props';
import { Size } from './types';
import StyledBadge from '../badge/badge.styles';
import { tabSizeMixin, iconSizeMixin } from './tab.mixin';

const baseClassName = 'Tab';

const Dot = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Dot'),
})(
  () => css`
    position: absolute;
    display: flex;
    top: -5%;
    right: 15%;
    border: 1px solid white;
    border-radius: 50%;
  `
);

const Tab = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette }, icon = false, disabled = false, size = Size.Md }: With<WithTheme, TabProps>) => css`
    ${tabSizeMixin[size]}

    position: relative;
    display: inline-flex;
    align-items: center;
    text-align: center;
    color: ${disabled ? palette[PColor.ButtonDisabledText] : palette[PColor.TextPrimary]};
    cursor: pointer;

    ${StyledBadge.Badge} {
      color: ${palette[PColor.TextPrimary]};
      background-color: transparent;
      ${tabSizeMixin[size]}
    }

    ${!disabled &&
    css`
      &:hover {
        ${StyledBadge.Badge} {
          color: ${palette[PColor.TabHover]};
        }

        box-shadow: ${icon ? `inset 0px -2px 0px ${palette[PColor.BorderHoverBottom]}` : ''};
      }

      &:active {
        ${StyledBadge.Badge} {
          color: ${palette[PColor.TabActive]};
        }

        ${Dot} {
          display: none;
        }

        box-shadow: ${icon ? `inset 0px -2px 0px ${palette[PColor.BorderActiveBottom]}` : ''};
      }

      &.active {
        ${StyledBadge.Badge} {
          color: ${palette[PColor.TabPressed]};
        }

        ${Dot} {
          display: none;
        }

        box-shadow: inset 0px -2px 0px ${palette[PColor.TabPressed]};
      }
    `}
  `
);

const Icons = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icons'),
})(
  () => css`
    position: relative;
  `
);

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette }, disabled = false, size = Size.Md }: With<WithTheme, TabProps>) => css`
    margin-right: 8px;
    color: ${disabled ? palette[PColor.ButtonDisabledText] : palette[PColor.LinkHover]};

    svg {
      ${iconSizeMixin[size]}

      ${!disabled &&
      css`
        ${Tab}:hover & {
          color: ${palette[PColor.TabHover]};
        }

        ${Tab}:active & {
          color: ${palette[PColor.TabActive]};
        }

        ${Tab}.active & {
          color: ${palette[PColor.TabPressed]};
        }
      `}
    }
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  ({ theme: { palette }, disabled = false }: With<WithTheme, TabProps>) => css`
    ${!disabled &&
    css`
      ${Tab}:hover & {
        color: ${palette[PColor.TabHover]};
      }

      ${Tab}:active & {
        color: ${palette[PColor.TabActive]};
      }

      ${Tab}.active & {
        color: ${palette[PColor.TabPressed]};
      }
    `}
  `
);

const Badge = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Badge'),
})(
  () => css`
    display: flex;
    margin-left: 5px;
  `
);

const Styled = applyDisplayNames({
  Tab,
  Icons,
  Icon,
  Dot,
  Label,
  Badge,
});

export default Styled;
