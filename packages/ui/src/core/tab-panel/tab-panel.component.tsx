import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '../../utils/functions';
import type { TabPanelProps } from './tab-panel.props';
import Styled from './tab-panel.styles';

const TabPanel = intrinsicComponent<TabPanelProps, HTMLDivElement>(
  ({ value, index, ...rest }: TabPanelProps, ref): JSX.Element | null => {
    if (value !== index) {
      return null;
    }

    return <Styled.TabPanel ref={ref} {...rest} />;
  }
);

TabPanel.propTypes = {
  value: PT.oneOfType([PT.string, PT.number]).isRequired,
  index: PT.oneOfType([PT.string, PT.number]).isRequired,
  children: PT.node,
};

TabPanel.displayName = 'TabPanel';

export default TabPanel;
