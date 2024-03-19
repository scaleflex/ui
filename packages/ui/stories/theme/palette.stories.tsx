import React from 'react';

import { Color } from '../../src/utils/types/palette';
import { defaultPalette } from '../../src/theme/roots/palette';
import { objectKeys } from '../../src/utils/functions';

const meta = {
  title: 'Theme/Palette',
};

export default meta;

export const Colors = (): JSX.Element => (
  <div>
    {objectKeys(Color).map((colorName) => (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ background: defaultPalette[Color[colorName]], width: 60, height: 40 }} />

        <div
          style={{
            fontSize: 12,
            color: 'grey',
            fontWeight: 500,
            marginLeft: 8,
          }}
        >
          {colorName} ({Color[colorName]})
        </div>
      </div>
    ))}
  </div>
);
