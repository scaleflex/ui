import React from 'react';
import PT from 'prop-types';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import CrossIcon from '@scaleflex/icons/cross';
import type { TagProps } from './tag.props';
import { Size, Type } from './types';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>((
  {
    children, type, size, onRemove, ...rest
  }: TagProps,
  ref
): JSX.Element => (
  <Styled.Tag
    ref={ref}
    size={size}
    type={type}
    {...rest}
    hasRemoveHandler={typeof onRemove === 'function'}
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
      <CrossIcon
        size={6}
        onClick={() => {
          if (typeof onRemove === 'function') {
            onRemove();
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
