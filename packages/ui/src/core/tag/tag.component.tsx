import React from 'react';

import CrossIcon from '@scaleflex/icons/cross';
import type { TagProps } from './tag.props';
import { Size, Type } from './types';
import Styled from './tag.styles';

const Tag = ({
  children,
  type = Type.Default,
  crossIcon = true,
  startIcon,
  size = Size.Md,
  tagIndex,
  onRemove,
  contentEditable,
  suppressContentEditableWarning,
  ref,
  ...rest
}: TagProps): JSX.Element => (
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
    {startIcon && <Styled.StartIcon>{startIcon}</Styled.StartIcon>}

    <Styled.Label contentEditable={contentEditable} suppressContentEditableWarning={suppressContentEditableWarning}>
      {children}
    </Styled.Label>
    {crossIcon && (
      <Styled.Cross>
        <CrossIcon
          size={8}
          onClick={(event) => {
            if (typeof onRemove === 'function') {
              onRemove(tagIndex!, event);
            }
          }}
        />
      </Styled.Cross>
    )}
  </Styled.Tag>
);

export default Tag;
