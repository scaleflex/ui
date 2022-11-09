import React from 'react';
import SearchIcon from '@scaleflex/icons/search';
import CrossOutline from '@scaleflex/icons/cross-outline';
import { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent } from '../../utils/functions';
import type { SearchProps } from './search.props';
import Input from '../input';
import { defaultProps as inputDefaultProps, propTypes as inputPropTypes } from '../input/input.component';

const Search = intrinsicComponent<SearchProps, HTMLInputElement>(
  ({ onChange, value, ...rest }: SearchProps, ref): JSX.Element => {
    const handleClearIconClick = (event: any): void => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <Input
        ref={ref}
        {...rest}
        onChange={onChange}
        iconStart={(iconProps: IconProps): JSX.Element => <SearchIcon {...iconProps} />}
        iconEnd={
          value.length !== 0 ? (iconProps: IconProps): JSX.Element => <CrossOutline {...iconProps} /> : undefined
        }
        iconClickEnd={handleClearIconClick}
      />
    );
  }
);

Search.defaultProps = {
  ...inputDefaultProps,
};

const { iconStart, ...restInputPropTypes } = inputPropTypes;

Search.propTypes = restInputPropTypes;

export default Search;
