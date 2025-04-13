import styled, { css } from 'styled-components';
import IconButton from '../icon-button/icon-button.component';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import inputGroup from '../input-group';
import { InputProps } from '../input';

const baseClassName = 'Time-picker';

const TimePicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})<With<WithTheme, InputProps>>(
  ({ fullWidth }) => css`
    position: relative;
    width: ${fullWidth ? '100%' : '300px'};
  `
);

const TimePickerInput = styled(inputGroup).attrs({
  className: generateClassNames(baseClassName, 'input'),
})<With<WithTheme, InputProps>>(
  ({ isHovering = false, theme }) => css`
    input[type='time']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
    ${isHovering &&
    css`
      border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};
    `}
  `
);

const TimePickerDropdownContainer = styled.div.attrs({
  className: generateClassNames(baseClassName, 'dropdown-wrapper'),
})<WithTheme>(
  ({ theme }) => css`
    display: flex;
    gap: 12;
    max-height: 150px;
    max-width: 150px;
    overflow: auto;
    cursor: pointer;
    padding: 12px;
    border-radius: 2px;
    background: ${theme.palette[PColor.BackgroundStateless]};
    box-shadow: 0px 2px 6px ${theme.palette[PColor.MediumShadow]};
  `
);

const TimePickerDropdown = styled.div.attrs({
  className: generateClassNames(baseClassName, 'dropdown'),
})`
  display: flex;
  gap: 12;
  max-height: 150px;
  max-width: 150px;
  overflow-x: hidden;
  cursor: pointer;
`;

const TimePickerDropdownColumn = styled.div.attrs({
  className: generateClassNames(baseClassName, 'dropdown-column'),
})<WithTheme>(
  ({ theme }) => css`
    padding: 0 6px;
    max-height: 150px;
    max-width: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    cursor: pointer;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.palette[PColor.BorderPrimaryStateless]};
      border-radius: 8px;
    }
  `
);

const TimePickerHour = styled.div.attrs({
  className: generateClassNames(baseClassName, 'hour'),
})<With<{ selected: boolean }, WithTheme>>(
  ({ theme, selected = false }) => css`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    ${selected &&
    css`
      background-color: ${theme.palette[PColor.AccentStateless]};
      color: ${theme.palette[PColor.IconsInvert]};
    `}

    &:hover {
      border: 1px solid ${theme.palette[PColor.AccentPrimaryHover]};
      box-sizing: border-box;
    }
  `
);

const TimePickerMinute = styled.div.attrs({
  className: generateClassNames(baseClassName, 'minute'),
})<With<{ selected: boolean }, WithTheme>>(
  ({ theme, selected = false }) => css`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    ${selected &&
    css`
      background-color: ${theme.palette[PColor.AccentStateless]};
      color: ${theme.palette[PColor.IconsInvert]};
    `}

    &:hover {
      border: 1px solid ${theme.palette[PColor.AccentPrimaryHover]};
      box-sizing: border-box;
    }
  `
);

const TimePickerPeriod = styled.div.attrs({
  className: generateClassNames(baseClassName, 'period'),
})<With<{ selected: boolean }, WithTheme>>(
  ({ theme, selected = false }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 2px;

    ${selected &&
    css`
      background-color: ${theme.palette[PColor.AccentStateless]};
      color: ${theme.palette[PColor.IconsInvert]};
    `}

    &:hover {
      border: 1px solid ${theme.palette[PColor.AccentPrimaryHover]};
      box-sizing: border-box;
    }
  `
);

const TimePickerIconButton = styled(IconButton).attrs({
  className: generateClassNames(baseClassName, 'dropdown'),
})`
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
`;

const Styled = applyDisplayNames({
  TimePicker,
  TimePickerInput,
  TimePickerDropdownContainer,
  TimePickerDropdown,
  TimePickerDropdownColumn,
  TimePickerHour,
  TimePickerMinute,
  TimePickerPeriod,
  TimePickerIconButton,
});

export default Styled;
