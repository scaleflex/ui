import { addons } from "@storybook/manager-api";
import scaleflexTheme from './ScaleflexTheme';
import {camelCase, startCase} from 'lodash';


addons.setConfig({
  theme: scaleflexTheme,
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(camelCase(name)).replace(/ /g, '')),
  },
});