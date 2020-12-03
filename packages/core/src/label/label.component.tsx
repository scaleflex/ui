import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import type { LabelProps } from './label.props';
import { Type } from './types';
import Styled from './label.styles';

const Label = intrinsicComponent<LabelProps, HTMLLabelElement>((
  {
    icon, error, type, ...rest
  }: LabelProps,
  ref: React.ForwardedRef<HTMLLabelElement>
): JSX.Element => (
  <Styled.Label
    ref={ref}
    error={error}
    type={type}
  >
    {icon && (
      <Styled.Icon error={Boolean(error)}>
        {
          typeof icon === 'function'
            ? icon()
            : icon
        }
      </Styled.Icon>
    )}

    <Styled.Base {...rest} />

    {/* TODO Select for type: localization */}
  </Styled.Label>
));

Label.defaultProps = {
  type: Type.Default,
  error: false,
};

Label.propTypes = {
  type: PT.oneOf(objectValues(Type)),
  icon: PT.oneOfType([PT.node, PT.func]),
  error: PT.bool,
};

export default Label;
