import React, { useState } from 'react';

import { intrinsicComponent } from '../../utils/functions';
import Arrow from '../arrow';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import { renderValue, renderOption } from '../select/select.utils';
import type { InputLocalizationProps } from './input-localization.props';
import Styled from './input-localization.styles';
import { InputSize } from '../../utils/types';
import { getIconSize, getArrowSize } from './input-localization.utils';

const InputLocalization = intrinsicComponent<InputLocalizationProps, HTMLDivElement>(
  (
    {
      children,
      onChange,
      value,
      icon,
      size = InputSize.Sm,
      MenuProps,
      readOnly,
      disabled,
      renderLabel,
      multiple,
      ...rest
    }: InputLocalizationProps,
    ref
  ): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
    const open = Boolean(anchorEl);
    const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
    const handleClose = (): void => setAnchorEl(undefined);

    return (
      <Styled.Container {...rest} ref={ref}>
        <Styled.InputLocalization
          size={size}
          disabled={disabled}
          onClick={disabled || readOnly ? undefined : handleClick}
        >
          {icon && <Styled.Icon>{typeof icon === 'function' ? icon({ size: getIconSize(size) }) : icon}</Styled.Icon>}

          <Styled.Label>
            {typeof renderLabel === 'function' ? renderLabel(value) : renderValue({ value, children, multiple })}
          </Styled.Label>

          <Styled.Icon>
            <Arrow type={open ? 'top' : 'bottom'} IconProps={{ size: getArrowSize(size) }} />
          </Styled.Icon>
        </Styled.InputLocalization>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} {...MenuProps}>
          {React.Children.map(children, (child) =>
            renderOption(child, {
              value,
              multiple,
              size,
              onClose: handleClose,
              onChange: disabled || readOnly ? undefined : onChange,
            })
          )}
        </Menu>
      </Styled.Container>
    );
  }
);

export default InputLocalization;
