/**
 * This adds data-icon-name to <svg > tags (as first props)
 *
 * == JSX Literals ==
 * <svg {props...}>...</svg>
 *
 * becomes:
 * <svg data-icon-name="ComponentVariableName" {props...}>...</svg>
 */

const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

const ICON_NAME_ATTRIBUTE = 'data-icon-name';

module.exports = declare((api) => {
  const isIconNameAttr = (attr) => t.isJSXAttribute(attr) && attr.name.name === ICON_NAME_ATTRIBUTE;

  const getIconName = (path) => {
    let parentPath = path.parentPath;
    while (parentPath) {
      if (parentPath?.node.type === 'VariableDeclarator' && !!parentPath?.node?.id?.name) {
        return parentPath?.node?.id?.name;
      }
      parentPath = parentPath.parentPath;
    }
    return null;
  };

  return {
    name: 'transform-react-jsx-add-icon-name',
    visitor: {
      JSXOpeningElement(path, state) {
        const { node } = path;
        if (
          // Make sure only process necessary files
          !state.filename ||
          !state.filename.match(/packages[/\\]icons[/\\]src[/\\][^/\\]+\.tsx$/) ||
          !state.file?.code ||
          !state.file.code.includes('IconProps') ||
          // Only process svg as first node of JSXElement (don't process deep <svg>)
          path.parentPath?.node?.type !== 'JSXElement' ||
          // Only process svg tags
          node.name.name !== 'svg' ||
          // the element was generated and doesn't have location information
          !node.loc ||
          // Already has data-svg-name
          path.node.attributes.some(isIconNameAttr)
        ) {
          return;
        }
        const iconName = getIconName(path);
        if (iconName) {
          // To prevent overriding existed data-svg-name in source code, add attribute as first item of array
          node.attributes.unshift(t.jsxAttribute(t.jsxIdentifier(ICON_NAME_ATTRIBUTE), t.stringLiteral(`${iconName}`)));
        }
      },
    },
  };
});
