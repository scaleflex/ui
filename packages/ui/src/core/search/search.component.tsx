import React from 'react';
import SearchIcon from '@scaleflex/icons/search';
import { IconProps } from '@scaleflex/icons/icon.props';

import { intrinsicComponent } from '../../utils/functions';
import type { SearchProps } from './search.props';
import type { InputSizeType } from '../input/input.props';
import { InputSize } from '../../utils/types';
import CrossButton from '../cross-button/cross-button.component';
import Input from '../input';
import Styled from './search.styles';
import { propTypes as inputPropTypes } from '../input/input.component';

const Search = intrinsicComponent<SearchProps, HTMLInputElement>(
  ({ onChange, value = '', size, ...rest }: SearchProps, ref): JSX.Element => {
    const handleClearIconClick = (event: any): void => {
      if (onChange) {
        onChange(event);
      }
    };

    const getSearchIconSize = (sizeName: InputSizeType | undefined): number => {
      switch (sizeName) {
        case InputSize.Sm:
          return 16;

        case InputSize.Md:
        default:
          return 18;
      }
    };

    return (
      <Styled.Search size={size}>
        <Input
          ref={ref}
          value={value}
          size={size}
          {...rest}
          onChange={onChange}
          iconStart={(iconProps: IconProps) => <SearchIcon {...iconProps} size={getSearchIconSize(size)} />}
          clearIcon={value?.length !== 0 ? <CrossButton size={size} /> : undefined}
          clearIconClick={handleClearIconClick}
        />
      </Styled.Search>
    );
  }
);

const { iconStart, ...restInputPropTypes } = inputPropTypes;

Search.propTypes = restInputPropTypes;

export default Search;
