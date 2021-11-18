import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { SelectSimpleValueType } from '../select/select.props';
// import type { WithTheme } from '../../theme/entity';
// import type { With } from '../../utils/types';
// import { Color as PColor } from '../../utils/types/palette';

const baseClassName = 'ColorPicker';
const squareClassName = 'SquareColor';
const hueBarClassName = 'HueBar';
const colorItemClassName = 'ColorItem';

const ColorPicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorPickerAction = styled.div.attrs({
  className: generateClassNames(baseClassName, 'action'),
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ColorPickerIcon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'icon'),
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Select = styled.div.attrs({
  className: generateClassNames(baseClassName, 'select'),
})(
  ({ value }: { value: SelectSimpleValueType | SelectSimpleValueType[] }) => css`
    width: ${value === 'rgb' ? '25%' : '35%'};
  `
);
const HueBarContainer = styled.div.attrs({
  className: generateClassNames(hueBarClassName, 'root'),
})`
  position: relative;
  cursor: ew-resize;
`;

const HueBarCanvas = styled.canvas.attrs((props) => ({
  className: generateClassNames(hueBarClassName, 'canavs'),
  width: props.width,
  height: props.height,
}))`
  border-radius: 8px;
`;

const HueBarSlider = styled.div.attrs({
  className: generateClassNames(hueBarClassName, 'slider'),
})`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #6879eb;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 2px rgba(78, 77, 77, 0.15);
  border-radius: 20px;
  pointer-events: none;
`;

const SquareColorContainer = styled.div.attrs({
  className: generateClassNames(squareClassName, 'root'),
})`
  position: relative;
  cursor: crosshair;
`;

const SquareColorCanvas = styled.canvas.attrs((props) => ({
  className: generateClassNames(squareClassName, 'canavs'),
  width: props.width,
  height: props.height,
}))`
  border-radius: 2px;
`;

const SquareColorController = styled.div.attrs({
  className: generateClassNames(squareClassName, 'controller'),
})`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const ColorItemWrapper = styled.label.attrs({
  className: generateClassNames(colorItemClassName, 'Label'),
})(
  ({ size, color, stroke }: { size: number; color: string; stroke: string }) => css`
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
  margin-bottom: 12px;
  margin-left: 12px;
  & > .item {
    margin-right: 8px;
    display: flex;
    justify-content: center;
  }
`;

const Styled = applyDisplayNames({
  ColorPicker,
  ColorPickerAction,
  ColorPickerIcon,
  Select,
  SquareColorContainer,
  SquareColorCanvas,
  SquareColorController,
  HueBarContainer,
  HueBarCanvas,
  HueBarSlider,
  ColorItemsContainer,
  ColorItemWrapper,
});

export default Styled;
