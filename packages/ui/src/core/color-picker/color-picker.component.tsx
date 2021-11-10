/* eslint-disable id-length */
import React, { useState, useCallback } from 'react';
import PT, { Validator } from 'prop-types';
import { PinOutline, DeleteOutline } from '@scaleflex/icons';

import Select from '../select';
import MenuItem from '../menu-item';
import Input from '../input';
import { intrinsicComponent, HexToRGB, RGBToHex, RGBToHSL } from '../../utils/functions';
import type { ColorPickerProps, ColorType } from './color-picker.props';
import Styled from './color-picker.styles';
import HueBar from './hue-bar.component';
import ColorItem from './color-item.component';
import SquareColor from './square-color.component';

const CROSS_OFFSET = 12;
const ColorPicker = intrinsicComponent<ColorPickerProps, HTMLDivElement>(
  ({ color, setColor, setPinnedColors, pinnedColors = [], squareSize = 225 }: ColorPickerProps, ref): JSX.Element => {
    const [reviewRef, setReviewRef] = useState<HTMLDivElement | null>(null);
    const [hexColor, setHexColor] = useState<string>(color.hexValue);

    const isColorChecked = (checkedColor: string): boolean =>
      checkedColor === color.hexValue && RGBToHSL(HexToRGB(checkedColor))[0] * 360 === color.hue;

    const getHslAndPos = useCallback(
      (rgb: number[]) => {
        const hsl = RGBToHSL(rgb);
        const x = Math.min(hsl[1] * squareSize, squareSize - CROSS_OFFSET);
        const y = Math.min(hsl[2] * ((squareSize * 75) / 100), (squareSize * 75) / 100 - CROSS_OFFSET);
        return {
          hsl,
          x,
          y,
        };
      },
      [squareSize]
    );

    const handleChange = (hex: string, rgb: Array<number>, pos: Array<number>): void => {
      setHexColor(hex);
      setColor({
        ...color,
        hexValue: hex,
        rgbValue: rgb,
        circleSquarePos: pos,
      });
    };

    // eslint-disable-next-line no-shadow
    const handlePinnedColors = (hexColor: string, type: string): void => {
      if (type === 'add') {
        setPinnedColors([...pinnedColors, hexColor]);
      } else {
        setPinnedColors(pinnedColors.filter((item) => item !== hexColor));
      }
    };

    const updateColor = useCallback(
      (value) => {
        const rgb = HexToRGB(value);
        const tmp = getHslAndPos(rgb);
        setHexColor(value);
        setColor({
          ...color,
          hue: tmp.hsl[0] * 360,
          hexValue: value,
          rgbValue: rgb,
          circleBarPos: tmp.hsl[0] * squareSize,
          circleSquarePos: [tmp.x, tmp.y],
        });
      },
      [getHslAndPos, setColor, color, squareSize]
    );

    const updateRGB = useCallback(
      (value: number, index: number) => {
        if (value >= 0 && value <= 255) {
          const newRgbValue = color.rgbValue;
          newRgbValue[index] = value;
          const hex = RGBToHex(newRgbValue);
          const tmp = getHslAndPos(newRgbValue);
          setColor({
            ...color,
            hue: tmp.hsl[0] * 360,
            hexValue: hex,
            rgbValue: newRgbValue,
            circleBarPos: tmp.hsl[0] * squareSize,
            circleSquarePos: [tmp.x, tmp.y],
          });
        }
      },
      [color, squareSize, getHslAndPos, setColor]
    );

    return (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      <Styled.ColorPicker ref={setReviewRef || ref}>
        <SquareColor color={color} reviewRef={reviewRef} squareSize={squareSize} onChange={handleChange} />

        <HueBar
          onChange={(hue, pos) => setColor({ ...color, hue, circleBarPos: pos })}
          reviewRef={reviewRef}
          hueWidth={squareSize}
          sliderPos={color.circleBarPos}
        />

        <Styled.ColorItemsContainer>
          {pinnedColors.map((defaultColor) => (
            <div className="item" key={defaultColor}>
              <ColorItem
                value={defaultColor}
                checked={defaultColor === color.hexValue && RGBToHSL(HexToRGB(defaultColor))[0] * 360 === color.hue}
                onChange={(ev) => updateColor(ev.target.value)}
              />
            </div>
          ))}
        </Styled.ColorItemsContainer>
        <Styled.ColorPickerAction>
          <Styled.Select value={color.inputType}>
            <Select
              size="sm"
              value={color.inputType}
              onChange={(ev) => setColor({ ...color, inputType: ev })}
              fullWidth
            >
              <MenuItem value="hex">Hex</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
            </Select>
          </Styled.Select>

          {color.inputType === 'hex' ? (
            <Input
              size="sm"
              error={!/^#([\da-f]{3}){1,2}$/i.test(color.hexValue)}
              value={color.hexValue}
              onChange={(e: any) => updateColor(e.target.value)}
              style={{ width: '45%' }}
            />
          ) : (
            color.rgbValue.map((rgb, index) => (
              <Input
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                size="sm"
                value={rgb}
                onChange={(e: any) => updateRGB(Number(e.target?.value), index)}
                style={{ maxWidth: '20%' }}
              />
            ))
          )}
          <Styled.ColorPickerIcon
            onClick={() =>
              pinnedColors.some((checkedColor) => isColorChecked(checkedColor))
                ? handlePinnedColors(hexColor, 'delete')
                : handlePinnedColors(hexColor, 'add')
            }
          >
            {pinnedColors.some((checkedColor) => isColorChecked(checkedColor)) ? <DeleteOutline /> : <PinOutline />}
          </Styled.ColorPickerIcon>
        </Styled.ColorPickerAction>
      </Styled.ColorPicker>
    );
  }
);

ColorPicker.defaultProps = {};

ColorPicker.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  color: PT.object.isRequired as Validator<ColorType>,
  setColor: PT.func.isRequired,
  setPinnedColors: PT.func.isRequired,
  squareSize: PT.number,
  // eslint-disable-next-line react/forbid-prop-types
  pinnedColors: PT.array.isRequired,
};

export default ColorPicker;
