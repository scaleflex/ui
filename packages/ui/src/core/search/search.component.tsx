import React from 'react';
import { intrinsicComponent } from '../../utils/functions';
import SearchIcon from '@scaleflex/icons/search';
import type { SearchProps } from './search.props';
import Input from '../input';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

const Search = intrinsicComponent<SearchProps, HTMLInputElement>(
  (props: SearchProps, ref): JSX.Element => (
    <Input
      ref={ref}
      {...props}
      iconStart={(iconProps: { size?: number }): JSX.Element => <SearchIcon {...iconProps} />}
    />
  )
);

Search.defaultProps = {
  ...inputDefaultProps,
};

const { iconStart, ...restInputPropTypes } = inputPropTypes;

Search.propTypes = restInputPropTypes;

export default Search;
