import React from 'react';
import type { Story } from '@storybook/react';
import { Color } from '../../src/utils/types/palette';
import { defaultPalette } from '../../src/theme/roots/palette';
import type { Values } from '../../src/utils/types';
import { objectKeys } from '../../src/utils/functions';

export default {
  title: 'Theme/Palette',
};

type PaletteProps = Record<Values<typeof Color>, string>;

export const Colors: Story<PaletteProps> = () => (
  <div>
    {objectKeys(Color).map((colorName) => (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ backgroundColor: defaultPalette[Color[colorName]], width: 60, height: 40 }} />

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
