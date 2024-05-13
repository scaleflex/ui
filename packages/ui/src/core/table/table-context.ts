import * as React from 'react';

const TableContext = React.createContext({
  padding: 'default',
  size: 'medium',
});

if (process.env.NODE_ENV !== 'production') {
  TableContext.displayName = 'TableContext';
}

export default TableContext;
