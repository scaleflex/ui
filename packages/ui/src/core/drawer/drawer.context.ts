import { createContext } from 'react';

const DrawerContext = createContext({
  isCollapsed: false,
  size: 20,
});

// if (process.env.NODE_ENV !== 'production') {
//   DrawerContext.displayName = 'DrawerContext';
// }

export default DrawerContext;
