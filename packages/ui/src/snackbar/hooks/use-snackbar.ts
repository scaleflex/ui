import { useContext } from 'react';
import SnackbarContext from '../snackbar-context';

// Custom hook to simplify context usage.
function useSnackbar() {
  return useContext(SnackbarContext);
}

export default useSnackbar;
