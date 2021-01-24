import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { TabSizeType, TabProps } from './tab.props';
import { Size } from './types';
import { tabSizeMixin, iconSizeMixin } from './tab.mixin';

const baseClassName = 'Tab';

const Tab = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    theme: { palette }, size = Size.Md
  }: With<WithTheme, TabProps>) => css`
    ${tabSizeMixin[size]}
    position: relative;
    display: inline-flex;
    align-items: center;
    text-align: center;
    color: ${palette[PColor.TextPrimary]};
    cursor: pointer;

    &:hover, &:focus, &.active {
      /* background: ${palette[PColor.BackgroundPrimaryHover]}; */
      color: ${palette[PColor.AccentPrimary]};
    }

    &.active {
      color: ${palette[PColor.AccentPrimary]};
      box-shadow: inset 0px -1px 0px ${palette[PColor.BorderActiveBottom]};
    }
  `
);

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ size = Size.Md }: {size: TabSizeType}) => css`
    display: flex;
    margin-right: 8px;

    svg {
      ${iconSizeMixin[size]}
    }
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  () => css``
);

const Styled = applyDisplayNames({
  Tab,
  Icon,
  Label,
});

export default Styled;
