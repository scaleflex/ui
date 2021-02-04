import * as React from 'react';

const Tablelvl2Context = React.createContext({
  variant: 'head'
});

if (process.env.NODE_ENV !== 'production') {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}

export default Tablelvl2Context;
