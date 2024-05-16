import React from 'react';

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

TabPanel.displayName = 'TabPanel';

export default TabPanel;
