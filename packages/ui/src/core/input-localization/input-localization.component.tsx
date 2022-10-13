import React, { useState } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import Arrow from '../arrow';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import { renderValue, renderOption } from '../select/select.utils';
import { propTypes as selectPropTypes } from '../select/select.component';
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
    },
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
              size: InputSize.Sm,
              onClose: handleClose,
              onChange: disabled || readOnly ? undefined : onChange,
            })
          )}
        </Menu>
      </Styled.Container>
    );
  }
);

InputLocalization.defaultProps = {};

const { error, size, ...restSelectPropTypes } = selectPropTypes;

InputLocalization.propTypes = {
  ...restSelectPropTypes,
  icon: PT.node,
  size: PT.oneOf(objectValues(InputSize)),
  readOnly: PT.bool,
  disabled: PT.bool,
};

export default InputLocalization;
