import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent } from '@sfx-ui/utils/functions';
import type { FieldInfoProps } from './field-info.props';
import Styled from './field-info.styles';

const FieldInfo = intrinsicComponent<FieldInfoProps, HTMLSpanElement>((
  props: FieldInfoProps,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => (
  <Styled.FieldInfo
    ref={ref}
    {...props}
  />
));

FieldInfo.defaultProps = {
  error: false,
};

FieldInfo.propTypes = {
  error: PT.bool,
};

export default FieldInfo;
