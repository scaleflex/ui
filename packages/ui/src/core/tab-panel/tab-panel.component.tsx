import React from 'react';

import type { TabPanelProps } from './tab-panel.props';
import Styled from './tab-panel.styles';

const TabPanel = ({ value, index, ref, ...rest }: TabPanelProps): JSX.Element | null => {
  if (value !== index) {
    return null;
  }

  return <Styled.TabPanel ref={ref} {...rest} />;
};

export default TabPanel;
