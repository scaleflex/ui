import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { StatusLabelProps } from './status-label.props';
import { Size, Type } from './types';
import Styled from './status-label.styles';

const StatusLabel = intrinsicComponent<StatusLabelProps, HTMLDivElement>(
  ({ label, type, size, gridView, listView, ...rest }: StatusLabelProps, ref): JSX.Element => (
    <Styled.StatusLabelWrapper
      ref={ref}
      size={size}
      label={label}
      gridView={gridView}
      listView={listView}
      {...rest}
    >
      {(gridView || listView) && (
        <Styled.StatusIcon type={type} />
      )}

      <Styled.StatusLabel>{label}</Styled.StatusLabel>
    </Styled.StatusLabelWrapper>
  )
);

StatusLabel.defaultProps = {
  label: '',
  type: Type.Received,
  size: Size.Md,
  gridView: false,
  listView: false,
};

StatusLabel.propTypes = {
  label: PT.node.isRequired,
  type: PT.oneOf(objectValues(Type)),
  size: PT.oneOf(objectValues(Size)),
  gridView: PT.bool,
  listView: PT.bool,
};

export default StatusLabel;
