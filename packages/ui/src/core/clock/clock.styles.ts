import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames, scrollBar } from '../../utils/functions';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';
import { ClockProps } from './clock.props';

const baseClassName = 'Clock';

const ClockWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<ClockProps>(
  ({ theme: { palette } }: With<WithTheme, ClockProps>) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 12px;
    gap: 12px;
    width: 138px;
    height: 246px;
    background: ${palette[PColor.BackgroundStateless]};
    box-shadow: 0px 1px 4px ${palette[PColor.MediumShadow]};
    border-radius: 2px;
  `
);

const Scroll = styled.div.attrs({
  className: generateClassNames(baseClassName, 'scroll'),
})<ClockProps>(
  ({ theme: scroll }: With<WithTheme, ClockProps>) => css`
    display: flex;
    gap: 12px;
    width: 138px;
    height: 246px;
    overflow: hidden;
    &:hover {
      ${css`
        overflow: scroll;
        ${scroll && scrollBar}
      `}
    }
  `
);

const ClockBody = styled.div.attrs({
  className: generateClassNames(baseClassName, 'timePickerBody'),
})<ClockProps>(
  () => css`
    display: block;
    float: left;
    height: 180px;
  `
);

const ClockTimeContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'clockTimeContainer'),
})<ClockProps>(
  ({ theme: { palette }, active }: With<WithTheme, { active?: boolean }>) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    color: ${palette[PColor.TextPrimary]};
    &:hover {
      ${css`
        color: ${palette[PColor.IconsInvert]};
        background-color: ${palette[PColor.AccentStateless]};
      `}
    }

    ${active &&
    css`
      color: ${palette[PColor.IconsInvert]};
      background-color: ${palette[PColor.AccentStateless]};
    `}
  `
);

const ClockNumberContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'clockNumberContainer'),
})<ClockProps>(
  () => css`
    display: flex;
    font-style: normal;
    font-weight: 400;
    align-items: center;
    text-align: center;
    font-size: 13px;
    line-height: 14px;
  `
);

const Styled = applyDisplayNames({
  ClockWrapper,
  Scroll,
  ClockBody,
  ClockTimeContainer,
  ClockNumberContainer,
});

export default Styled;
