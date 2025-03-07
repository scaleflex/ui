import React from 'react';
import StarIcon from '@scaleflex/icons/star';

import type { RatingProps, RatingItemProps, RatingItemReadOnlyProps } from './rating.props';
import Styled from './rating.styles';

const RatingIcon = ({ active }: { active: boolean }): JSX.Element => (
  <Styled.Icon active={active}>
    <StarIcon />
  </Styled.Icon>
);

const RatingItem = ({ name, active, mark, onChange }: RatingItemProps): JSX.Element => (
  <Styled.Item>
    <RatingIcon active={active} />

    <input type="radio" name={name} value={mark} onChange={onChange} />
  </Styled.Item>
);

const RatingItemReadOnly = ({ active }: RatingItemReadOnlyProps): JSX.Element => (
  <Styled.Item readOnly>
    <RatingIcon active={active} />
  </Styled.Item>
);

const Rating = ({ value = 0, readOnly = false, name, onChange, ref, ...rest }: RatingProps): JSX.Element => {
  const valueRounded = Math.min(value || 0, 5);

  return (
    <Styled.Rating ref={ref}>
      {[1, 2, 3, 4, 5].map((mark) => {
        const itemProps = {
          key: mark,
          mark,
          active: mark <= valueRounded,
          value: valueRounded,
          ...rest,
        };

        return readOnly ? (
          <RatingItemReadOnly {...itemProps} />
        ) : (
          <RatingItem {...itemProps} name={name || 'raiting-field'} onChange={onChange} />
        );
      })}
    </Styled.Rating>
  );
};

export default Rating;
