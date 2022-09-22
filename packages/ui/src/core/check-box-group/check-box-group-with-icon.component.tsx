import React from 'react';
import PT from 'prop-types';
import QuestionMarkOutline from '@scaleflex/icons/question-mark-outline';
import { lightPalette } from '@scaleflex/ui/theme/roots/palette';
import { Color } from '@scaleflex/ui/utils/types/palette';

import { intrinsicComponent } from '../../utils/functions';
import type { CheckBoxGroupProps } from './check-box-group.props';
import Tooltip from '../tooltip';

const CheckBoxGroupWithIcon = intrinsicComponent<CheckBoxGroupProps, HTMLLabelElement>(
  ({ title }: CheckBoxGroupProps, ref): JSX.Element => {
    return (
      <Tooltip ref={ref} title={title} position="top">
        <QuestionMarkOutline color={lightPalette[Color.LinkHover]} size={12} />
      </Tooltip>
    );
  }
);

CheckBoxGroupWithIcon.propTypes = {
  title: PT.string,
};

export default CheckBoxGroupWithIcon;
