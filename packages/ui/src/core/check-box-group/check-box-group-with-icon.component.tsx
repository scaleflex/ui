import React from 'react';
import PT from 'prop-types';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

import { intrinsicComponent } from '../../utils/functions';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Tooltip from '../tooltip';

const CheckBoxGroupWithIcon = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  ({ title, icon }: CheckBoxGroupProps, ref): JSX.Element => {
    return (
      <Tooltip ref={ref} title={title} position="top">
        {typeof icon === 'function' ? icon({ size: 12, color: lightPalette[Color.LinkHover] }) : icon}
      </Tooltip>
    );
  }
);

CheckBoxGroupWithIcon.propTypes = {
  title: PT.string,
  icon: PT.oneOfType([PT.node, PT.func]),
};

export default CheckBoxGroupWithIcon;
