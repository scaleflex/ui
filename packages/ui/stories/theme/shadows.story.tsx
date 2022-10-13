import React from 'react';
import type { Story } from '@storybook/react';
import { Shadows as ShadowsNames } from '../../src/utils/types/shadows';
import { defaultShadows } from '../../src/theme/roots/shadows';
import type { Values } from '../../src/utils/types';
import { objectKeys } from '../../src/utils/functions';

export default {
  title: 'Theme/Shadows',
};

type ShadowsProps = Record<Values<typeof ShadowsNames>, string>;

export const Shadows: Story<ShadowsProps> = () => (
  <div>
    {objectKeys(ShadowsNames).map((shadowName) => (
      <div key={shadowName} style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ boxShadow: defaultShadows[ShadowsNames[shadowName]], width: 60, height: 40 }} />

        <div
          style={{
            fontSize: 12,
            color: 'grey',
            fontWeight: 500,
            marginLeft: 8,
          }}
        >
          {shadowName} ({ShadowsNames[shadowName]})
        </div>
      </div>
    ))}
  </div>
);
