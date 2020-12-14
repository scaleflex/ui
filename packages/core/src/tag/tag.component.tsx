import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '@sfx-ui/utils/functions';
import RemoveIcon from '@sfx-ui/icons/remove';
import type { TagProps } from './tag.props';
import { Size, Type } from './types';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>((
  {
    children, type, size, ...rest
  }: TagProps,
  ref
): JSX.Element => (
  <Styled.Tag
    ref={ref}
    size={size}
    type={type}
    {...rest}
    onClick={
      type === Type.Suggested
        ? (event: any) => {
          if (typeof rest.onSelect === 'function') {
            rest.onSelect();
          }

          if (typeof rest.onClick === 'function') {
            rest.onClick(event);
          }
        }
        : rest.onClick
    }
  >
    <Styled.Label>{children}</Styled.Label>
    <Styled.Cross>
      <RemoveIcon
        size={6}
        onClick={() => {
          if (typeof rest.onRemove === 'function') {
            rest.onRemove();
          }
        }}
      />
    </Styled.Cross>
  </Styled.Tag>
));

Tag.defaultProps = {
  size: Size.Md,
  type: Type.Default,
};

Tag.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  type: PT.oneOf(objectValues(Type)),
  onRemove: PT.func,
  onSelect: PT.func,
};

export default Tag;
