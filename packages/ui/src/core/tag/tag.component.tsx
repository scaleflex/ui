import React from 'react';
import PT from 'prop-types';

import CrossIcon from '@scaleflex/icons/cross';
import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { TagProps } from './tag.props';
import { Size, Type } from './types';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(
  (
    {
      children,
      type,
      crossIcon,
      size,
      tagIndex,
      onRemove,
      contentEditable,
      suppressContentEditableWarning,
      ...rest
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
                rest.onSelect(event);
              }

              if (typeof rest.onClick === 'function') {
                rest.onClick(event);
              }
            }
          : rest.onClick
      }
    >
      <Styled.Label contentEditable={contentEditable} suppressContentEditableWarning={suppressContentEditableWarning}>
        {children}
      </Styled.Label>
      {crossIcon && typeof onRemove === 'function' && (
        <Styled.Cross>
          <CrossIcon size={8} onClick={(event) => onRemove(tagIndex!, event)} />
        </Styled.Cross>
      )}
    </Styled.Tag>
  )
);

Tag.defaultProps = {
  size: Size.Md,
  type: Type.Default,
  crossIcon: false,
};

Tag.propTypes = {
  size: PT.oneOf(objectValues(Size)),
  type: PT.oneOf(objectValues(Type)),
  crossIcon: PT.bool,
  onRemove: PT.func,
  onSelect: PT.func,
  tagIndex: PT.number,
};

export default Tag;
