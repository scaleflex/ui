import { useEffect, useState } from 'react';

export function useMediaQuery(queryInput: string): boolean {
  const query = queryInput.replace(/^@media( ?)/m, '');
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    let active = true;

    const queryList = window.matchMedia(query);
    const updateMatch = (): void => {
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();

    queryList.addEventListener('change', updateMatch);
    return () => {
      active = false;
      queryList.removeEventListener('change', updateMatch);
    };
  }, [query, matchMedia]);

  return match;
}
