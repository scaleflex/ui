import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { SelectSimpleValueType } from '../select/select.props';
import type { WithTheme } from '../../theme/entity';
import type { With } from '../../utils/types';
import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'ColorPicker';

const colorItemClassName = 'ColorItem';

// const ColorPicker = styled.div.attrs({
//   className: generateClassNames(baseClassName, 'root'),
// })`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const ColorPickerWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  background-color: ${({ theme }) => theme.palette[PColor.BackgroundSecondary]};
  box-shadow: 0px 1px 2px rgba(78, 77, 77, 0.15);
  border-radius: 2px;
  padding: 12px;
  max-width: 200px;
`;

const ColorPickerIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'icon'),
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const RangePickerWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'range-picker'),
})(
  ({ color }: { color: string }) => css`
    position: relative;
    border-radius: 2px;
    width: 186px;
    height: 180px;
    user-select: none;
    cursor: crosshair;
    background-color: ${color};
  `
);

const WhiteGradient = styled.div.attrs({
  className: generateClassNames(baseClassName, 'white-gradient'),
})`
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  user-select: none;
  pointer-events: none;
  top: -1px;
`;

const BlackGradient = styled.div.attrs({
  className: generateClassNames(baseClassName, 'black-gradient'),
})`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  user-select: none;
  pointer-events: none;
`;

const ColorPointer = styled.span.attrs<{ left: number; top?: number; considerTopWidth: boolean }>(
  ({ left = 0, top = 0, considerTopWidth = false, style }) => ({
    className: generateClassNames(baseClassName, 'pointer'),
    style: {
      left: left - 7, // 7
      top: top - (considerTopWidth ? 7 : 0), // 7 = 5  (half width) + 2 (border width)
      ...style,
    },
  })
)(
  ({ theme }: With<WithTheme, { left: number; top?: number; considerTopWidth: boolean }>) => css`
    display: inline-block;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    box-shadow: 0px 1px 2px rgba(78, 77, 77, 0.15);
    border: 2px solid ${theme.palette[PColor.BackgroundSecondary]};
    background-color: ${theme.palette[PColor.AccentPrimary]};
    position: absolute;
    cursor: pointer;
    z-index: 11;
    user-select: none;
    outline: none;
  `
);

const BarWrapper = styled.div.attrs({
  className: generateClassNames(baseClassName, 'bar-wrapper'),
})`
  margin-top: 8px;
  position: relative;
  width: 186px;
  height: 12px;
`;

const Bar = styled.table.attrs({
  className: generateClassNames(baseClassName, 'bar'),
})`
  border-radius: 4px;
  width: 100%;
  height: 8px;
  border-collapse: collapse;
`;

const BarColorStop = styled.td.attrs<{ $color: string }>(({ $color }) => ({
  className: generateClassNames(baseClassName, 'stop'),
  style: {
    backgroundColor: $color,
  },
}))<{ $color: string }>`
  padding: 0;
  user-select: none;
  pointer-events: none;
  &:first-child {
    width: 4px; // for having the border radius shown clearly
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    width: 4px; // for having the border radius shown clearly
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const ColorPickerAction = styled.div.attrs({
  className: generateClassNames(baseClassName, 'action'),
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ColorItemWrapper = styled.label.attrs({
  className: generateClassNames(colorItemClassName, 'label'),
})(
  ({
    theme,
    size,
    color,
    stroke,
    value,
  }: With<WithTheme, { size: number; color: string; stroke: string; value: string }>) => css`
    border-radius: 2px;
    border: ${`1px solid ${stroke}`};
    box-sizing: border-box;
    width: ${size}px;
    height: ${size}px;
    background-color: ${color};
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 300ms;
    margin-bottom: 8px;
    background: ${value === 'rgba(0,0,0,0)' &&
    `repeating-conic-gradient(${theme.palette[PColor.LinkPrimary]} 0% 25%, transparent 0% 50%) 50% / 8px 8px`};
    input {
      display: none;
    }
  `
);

const ColorItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin-top: 14px;
  margin-left: 12px;
  & > .item {
    margin-right: 8px;
    display: flex;
    justify-content: center;
  }
`;

const Select = styled.div.attrs({
  className: generateClassNames(baseClassName, 'select'),
})(
  ({ value }: { value: SelectSimpleValueType | SelectSimpleValueType[] }) => css`
    width: ${value === 'rgb' ? '25%' : '35%'};
  `
);

const Styled = applyDisplayNames({
  ColorPickerWrapper,
  RangePickerWrapper,
  WhiteGradient,
  BlackGradient,
  ColorPointer,
  BarWrapper,
  Bar,
  BarColorStop,
  ColorPickerAction,
  ColorPickerIcon,
  ColorItemsContainer,
  ColorItemWrapper,
  Select,
});

export default Styled;
