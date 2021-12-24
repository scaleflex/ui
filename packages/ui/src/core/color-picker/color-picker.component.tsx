/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */
import React, { useState, useMemo, useEffect, KeyboardEvent } from 'react';
import PT from 'prop-types';
import { PinOutline, DeleteOutline } from '@scaleflex/icons';

import Select from '../select';
import MenuItem from '../menu-item';
import Input from '../input';
import useDrag from '../../hooks/use-drag';
import {
  intrinsicComponent,
  colorToHsl,
  hexToRgb,
  hslToHex,
  hslToHsv,
  hsvToHsl,
  restrictNumber,
  mapNumber,
  colorToHex,
} from '../../utils/functions';
import type { ColorPickerProps } from './color-picker.props';
import Styled from './color-picker.styles';
import ColorItem from './color-item.component';

const colorsHuesCount = 360;
const ColorPicker = intrinsicComponent<ColorPickerProps, HTMLDivElement>(
  (
    { defaultColor = '#000000', onChange, setPinnedColors, pinnedColors = [], ...rest }: ColorPickerProps,
    ref
  ): JSX.Element => {
    const [bar, setBar] = useState({
      color: '#ff0000',
      pointerLeft: 0,
    });
    const [rangePicker, setRangePicker] = useState({
      color: defaultColor,
      pointer: { left: 0, top: 0 },
    });
    const [localPinnedColors, setLocalPinnedColors] = useState(pinnedColors);

    const [inputType, setInputType] = useState('hex');
    const [rgbColorValue] = useState<number[]>([]);
    const [hexInputValue, setHexInputValue] = useState(colorToHex(rangePicker.color));
    const [barRef, setBarRef] = useState<HTMLTableElement | null>(null);
    const [rangePickerRef, setRangePickerRef] = useState<HTMLDivElement | null>(null);

    const isColorChecked = (checkedColor: string): boolean => checkedColor === rangePicker.color;

    const handlePinnedColors = (hexColor: string, type: string): void => {
      if (type === 'add') {
        setLocalPinnedColors([...localPinnedColors, hexColor]);
        if (setPinnedColors) {
          setPinnedColors([...localPinnedColors, hexColor]);
        }
      } else {
        setLocalPinnedColors(localPinnedColors.filter((item) => item !== rangePicker.color));
        if (setPinnedColors) {
          setPinnedColors(localPinnedColors.filter((item) => item !== rangePicker.color));
        }
      }
    };

    const changeBarAndRangeColors = (color: string): void => {
      if (barRef !== null) {
        const { left } = barRef.getBoundingClientRect();
        const [h] = colorToHsl(color || rangePicker.color);
        const targetColorElem = barRef.querySelector(`[data-hue='${h}']`) as HTMLElement;
        if (targetColorElem !== null) {
          const targetColorRgb = targetColorElem.style.backgroundColor || bar.color;
          setBar({
            color: targetColorRgb,
            pointerLeft: targetColorElem.getBoundingClientRect().left - left || bar.pointerLeft,
          });
        }
      }
    };

    // const handleRgbInput = (value, index) => {
    //   const rgbArr = rgbColorValue;
    //   rgbArr[index] = value;
    //   console.log('rgbArrrrrr', rgbArr);

    //   console.log('handle', `rgb(${rgbArr.join(', ')})`);

    //   setRangePicker({
    //     ...rangePicker,
    //     color: colorToHex(`rgb(${rgbArr.join(', ')})`),
    //   });
    //   // setRgbColorValue([...rgbArr]);
    //   changeBarAndRangeColors(colorToHex(`rgb(${rgbArr.join(', ')})`));
    // };

    // const updateRgb = (color: string): void => {
    //   if (color.includes('rgb')) {
    //     console.log('firstUpdateRgb', colorToHex(color));
    //     setRgbColorValue(colorToHex(color));
    //   } else {
    //     console.log('secondUpdateRgb', hexToRgb(color));
    //     setRgbColorValue(hexToRgb(color));
    //   }
    // };

    const changeRangePickerPointerPosByColor = (color: string): void => {
      if (rangePickerRef !== null) {
        const { width, height } = rangePickerRef.getBoundingClientRect();
        const colorHsl = colorToHsl(color);
        const colorHsv = hslToHsv(colorHsl[0], colorHsl[1] / 100, colorHsl[2] / 100);
        const left = mapNumber(colorHsv[1], 0, 100, 0, width);
        const top = height - mapNumber(colorHsv[2], 0, 100, 0, height);

        setRangePicker({
          color,
          pointer: { left, top },
        });
        changeBarAndRangeColors(color);
        // updateRgb(color);
      }
    };

    const changeRangePickerColorByPosition = (left: number, top: number): void => {
      if (rangePickerRef !== null) {
        const { width, height } = rangePickerRef.getBoundingClientRect();

        const [barColorHue] = colorToHsl(bar.color);

        const restrictedLeft = restrictNumber(left, 0, width) || 0;
        const restrictedTop = restrictNumber(top, 0, height) || 0;

        const hsl = hsvToHsl(barColorHue, restrictedLeft / width, (height - restrictedTop) / height);

        const hexColor = hslToHex(hsl[0], hsl[1], hsl[2]);

        setRangePicker({
          color: hexColor,
          pointer: {
            left: restrictedLeft,
            top: restrictedTop,
          },
        });

        if (typeof onChange === 'function') {
          onChange(hexColor, `rgb(${hexToRgb(hexColor).join(', ')})`);
        }
      }
    };

    const changeBarColorByPosition = (pointerLeft: number): void => {
      const barElem = barRef;
      if (barElem !== null) {
        const { width } = barElem.getBoundingClientRect();
        const mappedPointerLeft = restrictNumber(
          Math.round(mapNumber(pointerLeft, 0, width, 0, colorsHuesCount)),
          0,
          colorsHuesCount
        );
        const targetColorElem = barElem.querySelector(`[data-hue='${mappedPointerLeft}']`) as HTMLElement;

        const targetColorRgb = targetColorElem.style.backgroundColor;

        setBar({
          color: targetColorRgb,
          pointerLeft: restrictNumber(pointerLeft, 0, width),
        });
      }
    };

    const updateBarColor = (e: any): void => {
      const barElem = barRef;

      if (barElem !== null) {
        const { left } = barElem.getBoundingClientRect();
        const pointerEvent = e.touches?.[0] || e;
        changeBarColorByPosition(pointerEvent.pageX - left);
      }
    };

    const updateRangePickerColor = (e: any): void => {
      const rangePickerElem = rangePickerRef;
      if (rangePickerElem !== null) {
        const { left, top, height, width } = rangePickerElem.getBoundingClientRect();
        const pointerLeft = e ? restrictNumber(e.pageX - left, 0, width) : rangePicker.pointer.left || 0;
        const pointerTop = e ? restrictNumber(e.pageY - top, 0, height) : rangePicker.pointer.left || 0;
        changeRangePickerColorByPosition(pointerLeft, pointerTop);
      }
    };

    const moveBarPointerByArrows = (e: any): void => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
      }

      changeBarColorByPosition(bar.pointerLeft + (e.key === 'ArrowLeft' ? -1 : 1));
    };

    const moveRangePickerPointerByArrows = (e: KeyboardEvent<HTMLSpanElement>): void => {
      let currentDirection = 0;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        currentDirection = -1;
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        currentDirection = 1;
      }

      if (currentDirection) {
        changeRangePickerColorByPosition(
          (rangePicker.pointer.left || 0) + (['ArrowLeft', 'ArrowRight'].includes(e.key) ? currentDirection : 0),
          (rangePicker.pointer.top || 0) + (['ArrowUp', 'ArrowDown'].includes(e.key) ? currentDirection : 0)
        );
      }
    };

    const validateHex = (color: string) => {
      // TODO: validating 3 color code for Hex
      // /^#([\da-f]{3}){1,2}$/i.test(color)
      const testHex = /^#[\da-f]{6}$/i.test(color);

      if (testHex) {
        changeRangePickerPointerPosByColor(color);
      }
      setHexInputValue(color);
    };

    useEffect(() => {
      changeRangePickerColorByPosition(rangePicker.pointer.left, rangePicker.pointer.top);
    }, [bar.color]);

    useEffect(() => {
      changeBarAndRangeColors(rangePicker.color);
      changeRangePickerPointerPosByColor(rangePicker.color);
    }, [barRef]);

    useEffect(() => {
      setHexInputValue(rangePicker.color);
      // updateRgb(rangePicker.color);
    }, [rangePicker.color]);

    const barColors = useMemo(
      () =>
        [...new Array(colorsHuesCount + 1)].map((_, h) => (
          <Styled.BarColorStop
            key={h}
            color={`hsl(${h}, 100%, 50%)`}
            data-hue={h}
            style={{
              backgroundColor: `hsl(${h}, 100%, 50%)`,
            }}
          />
        )),
      []
    );

    const barPointSliding = useDrag(updateBarColor, updateBarColor, null);
    const rangePickerPointSliding = useDrag(updateRangePickerColor, updateRangePickerColor, null);
    return (
      <Styled.ColorPickerWrapper ref={ref} {...rest}>
        <Styled.RangePickerWrapper ref={setRangePickerRef} color={bar.color} {...rangePickerPointSliding}>
          <Styled.WhiteGradient />
          <Styled.BlackGradient />
          <Styled.ColorPointer
            tabIndex={-1}
            left={rangePicker.pointer.left || 0}
            top={rangePicker.pointer.top || 0}
            onKeyDown={moveRangePickerPointerByArrows}
            considerTopWidth
          />
        </Styled.RangePickerWrapper>

        <Styled.BarWrapper {...barPointSliding}>
          <Styled.Bar ref={setBarRef}>
            <tbody>
              <tr>{barColors}</tr>
            </tbody>
          </Styled.Bar>
          <Styled.ColorPointer
            tabIndex={-1}
            left={bar.pointerLeft}
            top={0}
            onKeyDown={moveBarPointerByArrows}
            considerTopWidth={false}
            style={{ top: -3 }}
          />
        </Styled.BarWrapper>

        <Styled.ColorItemsContainer>
          {localPinnedColors.map((color) => (
            <div className="item" key={color}>
              <ColorItem
                value={color}
                checked={color === rangePicker.color}
                onChange={(ev) => changeRangePickerPointerPosByColor(ev.target.value)}
              />
            </div>
          ))}
        </Styled.ColorItemsContainer>

        <Styled.ColorPickerAction>
          <Styled.Select value={inputType}>
            <Select size="sm" value={inputType} onChange={(ev: any) => setInputType(ev)} fullWidth>
              <MenuItem value="hex">Hex</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
            </Select>
          </Styled.Select>

          {inputType === 'hex' ? (
            <Input
              size="sm"
              error={!/^#([\da-f]{3}){1,2}$/i.test(rangePicker.color)}
              value={hexInputValue}
              onChange={(e: any) => validateHex(e.target.value)}
              style={{ width: '45%' }}
            />
          ) : (
            rgbColorValue.map((rgb, index) => (
              <Input
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                size="sm"
                value={rgb}
                // onChange={(e: any) => handleRgbInput(Number(e.target?.value), index)}
                style={{ width: '20%' }}
              />
            ))
          )}
          <Styled.ColorPickerIcon
            onClick={() =>
              localPinnedColors.some((checkedColor) => isColorChecked(checkedColor))
                ? handlePinnedColors(rangePicker.color, 'delete')
                : handlePinnedColors(rangePicker.color, 'add')
            }
          >
            {localPinnedColors.some((checkedColor) => isColorChecked(checkedColor)) ? (
              <DeleteOutline />
            ) : (
              <PinOutline />
            )}
          </Styled.ColorPickerIcon>
        </Styled.ColorPickerAction>
      </Styled.ColorPickerWrapper>
    );
  }
);

ColorPicker.defaultProps = {};

ColorPicker.propTypes = {
  defaultColor: PT.string,
  onChange: PT.func,
  setPinnedColors: PT.func,
  // eslint-disable-next-line react/forbid-prop-types
  pinnedColors: PT.array,
};

export default ColorPicker;
