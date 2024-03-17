import { addons } from "@storybook/manager-api";
import ScaleflexTheme from './ScaleflexTheme';
import {camelCase, startCase} from 'lodash';


addons.setConfig({
  theme: ScaleflexTheme,
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(camelCase(name)).replace(/ /g, '')),
  },
});