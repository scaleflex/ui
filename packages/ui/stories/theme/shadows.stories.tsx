import React from 'react';

import { Shadows as ShadowsNames } from '../../src/utils/types/shadows';
import { defaultShadows } from '../../src/theme/roots/shadows';
import { objectKeys } from '../../src/utils/functions';

const meta = {
  title: 'Theme/Shadows',
};

export default meta;

export const Shadows = (): JSX.Element => (
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
