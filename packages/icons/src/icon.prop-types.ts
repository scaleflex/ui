import PT from 'prop-types';

export const iconPropTypes = {
  size: PT.number,
  width: PT.oneOfType([PT.string, PT.number]),
  height: PT.oneOfType([PT.string, PT.number]),
  color: PT.string,
  color2: PT.string,
  stroke: PT.string,
  stroke2: PT.string,
};
