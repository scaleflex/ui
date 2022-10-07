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

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette }, disabled = false, size = Size.Md }: With<WithTheme, TabProps>) => css`
    margin-right: 8px;
    color: ${disabled ? palette[PColor.IconsMuted] : palette[PColor.LinkHover]};

    svg {
      ${iconSizeMixin[size]}
    }
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})``;

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

    ${StyledBadge.Badge} {
      color: ${palette[PColor.TextPrimary]};
      background-color: transparent;
      ${tabSizeMixin[size]}
    }

    ${!disabled &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledBadge.Badge} {
          color: ${palette[PColor.TabHover]};
        }

        ${Icon} {
          color: ${palette[PColor.TabHover]};
        }

        ${Label} {
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

        ${Icon} {
          color: ${palette[PColor.TabActive]};
        }

        ${Label} {
          color: ${palette[PColor.TabActive]};
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

        ${Icon} {
          color: ${palette[PColor.TabPressed]};
        }

        ${Label} {
          color: ${palette[PColor.TabPressed]};
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
