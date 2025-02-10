/*! For license information please see ui-stories-core-dots-navigation-stories.357c5828.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui=self.webpackChunkui||[]).push([[8111],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/icons/src/dot.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,c:()=>Dot});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/src/utils/functions/intrinsic-component.ts"),_excluded=["color","size"],Dot=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?6:_ref$size,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({"data-icon-name":"Dot",ref,width:size,height:size,viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"3",cy:"3",r:"3",fill:color}))}));const __WEBPACK_DEFAULT_EXPORT__=Dot;Dot.__docgenInfo={description:"",methods:[],displayName:"Dot",props:{color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},size:{defaultValue:{value:"6",computed:!1},required:!1}}}},"./packages/icons/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/src/core/dot/dot.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_icons_dot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icons/src/dot.tsx"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_dot_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/dot/dot.styles.ts"),_excluded=["active"],Dot=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$active=_ref.active,active=void 0!==_ref$active&&_ref$active,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dot_styles__WEBPACK_IMPORTED_MODULE_3__.A.Dot,Object.assign({ref,$active:active},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dot_styles__WEBPACK_IMPORTED_MODULE_3__.A.Icon,{$visible:Boolean(active),$on:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_dot__WEBPACK_IMPORTED_MODULE_4__.A,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dot_styles__WEBPACK_IMPORTED_MODULE_3__.A.Icon,{$visible:!active},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_dot__WEBPACK_IMPORTED_MODULE_4__.A,null)))}));const __WEBPACK_DEFAULT_EXPORT__=Dot;Dot.__docgenInfo={description:"",methods:[],displayName:"Dot",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./packages/ui/src/core/dot/dot.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),_utils_functions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),_utils_types_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),Icon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("Dot","Icon")}).withConfig({componentId:"sc-1d7d4t3-0"})((function(_ref){var _ref$$visible=_ref.$visible,$visible=void 0!==_ref$$visible&&_ref$$visible,_ref$$on=_ref.$on,$on=void 0!==_ref$$on&&_ref$$on,palette=_ref.theme.palette;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["position:absolute;top:0;left:0;display:inline-flex;align-items:center;justify-content:center;transition:opacity ","ms ease-out;opacity:",";color:",";"],100,$visible?1:0,palette[$on?_utils_types_palette__WEBPACK_IMPORTED_MODULE_2__.Q.AccentPrimary:_utils_types_palette__WEBPACK_IMPORTED_MODULE_2__.Q.BordersStrong])})),Dot=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("Dot","root")}).withConfig({componentId:"sc-1d7d4t3-1"})((function(_ref2){var _ref2$$active=_ref2.$active,$active=void 0!==_ref2$$active&&_ref2$$active,theme=_ref2.theme;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["position:relative;display:inline-flex;align-items:center;justify-content:center;width:6px;height:6px;transition:background-color ","ms ease-out;border:1px solid transparent;border-radius:50%;",";"],100,$active&&"background-color: ".concat(theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_2__.Q.AccentPrimary]))}));const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.v)({Dot,Icon})},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/shared/ForwardRefNote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div.withConfig({componentId:"sc-9y7ked-0"})(["display:flex;gap:4px;padding:16px;margin:16px 0;border:1px solid;color:#303741;border-color:#e8eaee;border-radius:12px;box-shadow:rgba(0,0,0,0.1) 0 1px 3px 0;"]),Code=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.code.withConfig({componentId:"sc-9y7ked-1"})(["height:fit-content;background-color:#f7fafc;color:#2e3438e6;border:1px solid #ecf4f9;border-radius:3px;padding:2px 5px;margin-bottom:4px;"]),ForwardRefNote=function ForwardRefNote(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,"The ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(Code,null,"ref")," is forwarded to the root element.")};const __WEBPACK_DEFAULT_EXPORT__=ForwardRefNote;ForwardRefNote.__docgenInfo={description:"",methods:[],displayName:"ForwardRefNote"}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/ui/stories/core/dots-navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dots_navigation_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),dot_component=__webpack_require__("./packages/ui/src/core/dot/dot.component.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),dot_styles=__webpack_require__("./packages/ui/src/core/dot/dot.styles.ts"),DotsNavigation=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("DotsNavigation","root")}).withConfig({componentId:"sc-1clh5a5-0"})((function(){return(0,styled_components_browser_esm.AH)(["","{margin-left:12px;&:first-child{margin-left:0;}}"],dot_styles.A.Dot)}));const dots_navigation_styles=(0,apply_display_names.v)({DotsNavigation});var _excluded=["activeItem","size"],dots_navigation_component_DotsNavigation=(0,intrinsic_component.n)((function(_ref,ref){var _ref$activeItem=_ref.activeItem,activeItem=void 0===_ref$activeItem?0:_ref$activeItem,size=_ref.size,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return react.createElement(dots_navigation_styles.DotsNavigation,Object.assign({ref},rest),(0,toConsumableArray.A)(new Array(size)).map((function(_item,index){return index})).map((function(index){return react.createElement(dot_component.A,{key:index,active:activeItem>-1&&index<=activeItem})})))}));const dots_navigation_component=dots_navigation_component_DotsNavigation;dots_navigation_component_DotsNavigation.__docgenInfo={description:"",methods:[],displayName:"DotsNavigation",props:{activeItem:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},size:{required:!0,tsType:{name:"number"},description:""}}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ForwardRefNote=__webpack_require__("./packages/ui/stories/shared/ForwardRefNote.tsx");function _createMdxContent(props){const _components={h2:"h2",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Pd,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic-dots-navigation",children:"Basic dots navigation"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Primary,withToolbar:!0,layout:"centered"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{sort:"alpha"}),"\n",(0,jsx_runtime.jsx)(ForwardRefNote.A,{})]})}const dots_navigation_stories={title:"Navigation/DotsNavigation",component:dots_navigation_component,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)},subtitle:"The DotsNavigation component displays a list of dots that represent the steps of a process."}},argTypes:{activeItem:{description:"Set the active item (zero based index). Set to -1 to disable all the steps."},size:{description:"The count of how many dots to display "}}};var Primary={args:(0,objectSpread2.A)({},{size:5,activeItem:1}),render:function render(args){return react.createElement(dots_navigation_component,args)}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <DotsNavigation {...args} />\n}",...Primary.parameters?.docs?.source}}}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);