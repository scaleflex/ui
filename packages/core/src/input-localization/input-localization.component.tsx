import React, { useState } from 'react';
import PT, { Validator } from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import Arrow from '../arrow';
import Menu from '../menu';
import type { AnchorElType } from '../menu/menu.props';
import type { SelectPropsSimpleValueType } from '../select';
import { renderValue, renderOption } from '../select/select.utils';
import { propTypes as selectPropTypes, simpleValuePropTypes } from '../select/select.component';
import type { InputLocalizationProps } from './input-localization.props';
import Styled from './input-localization.styles';
import { Size } from '../select/types';

const InputLocalization = intrinsicComponent<InputLocalizationProps, HTMLDivElement>((
  {
    children, onChange, value, icon, ...rest
  },
  ref
): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<AnchorElType>(undefined);
  const open = Boolean(anchorEl);
  const handleClick = (event: any): void => setAnchorEl(event.currentTarget);
  const handleClose = (): void => setAnchorEl(undefined);

  return (
    <Styled.Container {...rest}>
      <Styled.InputLocalization
        ref={ref}
        onClick={handleClick}
      >
        {icon && (
          <Styled.Icon>
            {icon}
          </Styled.Icon>
        )}

        <Styled.Label>
          {renderValue({ value, children })}
        </Styled.Label>

        <Styled.Icon>
          <Arrow type={open ? 'top' : 'bottom'} IconProps={{ size: 6 }} />
        </Styled.Icon>
      </Styled.InputLocalization>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        {React.Children.map(children, (child) => renderOption(
          child,
          {
            value, size: Size.Sm, onClose: handleClose, onChange
          }
        ))}
      </Menu>
    </Styled.Container>
  );
});

InputLocalization.defaultProps = {};

const {
  error, multiple, size, value, onChange, ...restSelectPropTypes
} = selectPropTypes;

InputLocalization.propTypes = {
  ...restSelectPropTypes,
  value: simpleValuePropTypes as Validator<SelectPropsSimpleValueType>,
  onChange: PT.func,
  icon: PT.node,
};

export default InputLocalization;
