import React, { useContext } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '../../utils/functions';
import type { DrawerItemTextProps } from './drawer.props';
import { FontVariant } from '../../utils/types/typography/font-variant';
import Styled from './drawer.styles';
import DrawerContext from './drawer.context';

const DrawerItemText = intrinsicComponent<DrawerItemTextProps, HTMLDivElement>(
  ({ children, font, ...rest }, ref): JSX.Element => {
    const { isCollapsed } = useContext(DrawerContext);
    return (
      <Styled.ItemText font={font} isCollapsed={isCollapsed} {...rest} ref={ref}>
        {children}
      </Styled.ItemText>
    );
  }
);

DrawerItemText.defaultProps = {};

DrawerItemText.propTypes = {
  font: PT.oneOf(objectValues(FontVariant)),
};

export default DrawerItemText;
