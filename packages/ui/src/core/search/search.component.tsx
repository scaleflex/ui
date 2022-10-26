import React from 'react';
import SearchIcon from '@scaleflex/icons/search';
import CrossOutline from '@scaleflex/icons/cross-outline';

import { intrinsicComponent } from '../../utils/functions';
import type { SearchProps } from './search.props';
import Input from '../input';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

const Search = intrinsicComponent<SearchProps, HTMLInputElement>(
  (props: SearchProps, ref): JSX.Element => {

    const { onChange, value } = props;

    const handleClearIconClick = (event: any): void => {
        if (onChange) {
          onChange(event);
        }
    };

    return (
      <Input
        ref={ref}
        {...props}
        isSearchInput={true}
        iconStart={(iconProps: { size?: number }): JSX.Element => <SearchIcon {...iconProps} />}
        clearIcon={value.length ? ((iconProps: { size?: number }): JSX.Element => <CrossOutline {...iconProps} />) : undefined}
        clearIconClick={handleClearIconClick}
      />
    )
  }
);

Search.defaultProps = {
  ...inputDefaultProps,
};

const { iconStart, ...restInputPropTypes } = inputPropTypes;

Search.propTypes = restInputPropTypes;

export default Search;
