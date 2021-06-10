/* eslint-disable unicorn/no-nested-ternary */

/**
 * Borrows heavily from and inspired by material-ui https://github.com/mui-org/material-ui
 * basically a stripped-down version of it. Uing only the core functionalities and using what we need from it
 */

import useControlled from './use-controlled';

// eslint-disable-next-line sonarjs/cognitive-complexity
function usePagination({
  boundaryCount = 1,
  count = 1,
  defaultPage = 1,
  disabled = false,
  onChange: handleChange,
  page: pageProp,
  siblingCount = 1,
  ...other
}: any): any {
  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
  });

  const handleClick = (event: any, value: any) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const range = (start: number, end: number): any => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));

  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList = [
    ...['first'],
    ...['previous'],
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),

    ...endPages,
    ...['next'],
    ...['last'],
  ];

  const buttonPage = (type: string) => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: (event: any) => {
            handleClick(event, item);
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled,
          'aria-current': item === page ? 'true' : undefined,
        }
      : {
          onClick: (event: any) => {
            handleClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (!item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)),
        };
  });

  return {
    items,
    ...other,
  };
}

export default usePagination;

export { usePagination };
