import styled, { css } from 'styled-components';
import { FontVariant } from '../../utils/types/typography';

import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import InputGroup from '../input-group';
import { InputProps } from '../input';
import IconButton from '../icon-button/icon-button.component';

const baseClassName = 'Date-picker';

const DatePicker = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})`
  position: relative;
  width: '300px';
`;

const Placeholder = styled.div.attrs({
  className: generateClassNames(baseClassName, 'placeholder'),
})<With<WithTheme, InputProps>>(
  ({ fullWidth, theme, readOnly, disabled, size }) => css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${size === 'sm' ? '13px' : '14px'};
    width: ${fullWidth ? '95%' : '244px'};
    height: 19px;
    ${theme.typography.font[FontVariant.InputMd]}
    color: ${theme.palette[PColor.TextPlaceholder]};
    background: ${readOnly || disabled
      ? theme.palette[PColor.BackgroundHover]
      : theme.palette[PColor.BackgroundStateless]};
    pointer-events: ${readOnly || disabled ? 'none' : 'all'};
    display: flex;
    align-items: center;
  `
);

const DatePickerInput = styled(InputGroup).attrs({
  className: generateClassNames(baseClassName, 'input'),
})<With<WithTheme, { $isHovering: boolean }>>(
  ({ $isHovering = false, theme, size }) => css`
    input[type='date']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
    padding: 8px 12px;
    align-items: center;

    .SfxInput-ClearIcon {
      display: none;
    }

    &:hover .SfxInput-ClearIcon,
    &:focus-within .SfxInput-ClearIcon {
      display: block;
    }

    ${$isHovering &&
    css`
      border: 1px solid ${theme.palette[PColor.BordersPrimaryHover]};
    `}

    .SfxInput-Base,
    .SfxInput-inputContent {
      height: ${size === 'sm' ? '16px' : '18px'};
    }
  `
);

const DatePickerIconButton = styled(IconButton).attrs({
  className: generateClassNames(baseClassName, 'dropdown'),
})<With<WithTheme, InputProps>>(
  ({ theme }) => css`
    border: none;
    padding: 0;
    z-index: 1;

    svg {
      color: ${theme.palette[PColor.IconsSecondary]};
    }
  `
);

const Styled = applyDisplayNames({
  DatePicker,
  DatePickerInput,
  Placeholder,
  DatePickerIconButton,
});

export default Styled;
