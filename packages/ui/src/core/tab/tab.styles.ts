import styled, { css } from 'styled-components';
import { generateClassNames } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'Tab';

const Tab = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme: { palette, typography: { font } } }: WithTheme) => css`
    ${font['label-normal']}
    position: relative;
    display: inline-flex;
    align-items: center;
    text-align: center;
    color: ${palette[PColor.TextPrimary]};
    padding: 8px 0px;
    cursor: pointer;

    &:hover, &:focus, &.active {
      /* background: ${palette[PColor.BackgroundPrimaryHover]}; */
      color: ${palette[PColor.AccentPrimary]};
    }

    &.active {
      color: ${palette[PColor.AccentPrimary]};

      &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background: ${palette[PColor.AccentPrimary]};
      }
    }
  `
);

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  () => css`
    margin-right: 8px;
  `
);

const Label = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Label'),
})(
  () => css``
);

const Styled = {
  Tab,
  Icon,
  Label,
};

export default Styled;
