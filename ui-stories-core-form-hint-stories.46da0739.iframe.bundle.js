"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[7768],{"./packages/ui/src/core/form-hint/form-hint.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_form_hint_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/form-hint/form-hint.styles.ts"),_excluded=["error"],FormHint=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_hint_styles__WEBPACK_IMPORTED_MODULE_3__.A.FormHint,Object.assign({ref,$error:error},rest))}));const __WEBPACK_DEFAULT_EXPORT__=FormHint;FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint",props:{error:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/ui/src/core/form-hint/form-hint.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>form_hint_styles});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),input_size=__webpack_require__("./packages/ui/src/utils/types/size/input-size.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),font_variant=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),sizeHintMixin=(0,defineProperty.A)((0,defineProperty.A)({},input_size.Y.Sm,(function(_ref){var font=_ref.theme.typography.font;return(0,styled_components_browser_esm.AH)(font[font_variant.B.LabelExtraSmallUp])})),input_size.Y.Md,(function(_ref2){var font=_ref2.theme.typography.font;return(0,styled_components_browser_esm.AH)(font[font_variant.B.LabelSmall])})),FormHint=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("FormHint","root")}).withConfig({componentId:"sc-1vu99sv-0"})((function(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?input_size.Y.Md:_ref$size,_ref$$error=_ref.$error,$error=void 0!==_ref$$error&&_ref$$error,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["display:flex;align-items:center;color:",";"," ",""],$error?theme.palette[color.Q.Error]:theme.palette[color.Q.TextSecondary],disabled&&(0,styled_components_browser_esm.AH)(["color:",";"],theme.palette[color.Q.ButtonDisabledText]),sizeHintMixin[size])}));const form_hint_styles=(0,apply_display_names.v)({FormHint})},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/src/utils/types/size/input-size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>InputSize});var InputSize={Sm:"sm",Md:"md"}},"./packages/ui/stories/core/form-hint.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_core_form_hint__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/form-hint/form-hint.component.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/FormHint",component:_src_core_form_hint__WEBPACK_IMPORTED_MODULE_1__.A,excludeStories:["FormHint"]};var Primary={args:(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.A)({},{children:"Some hint goes here"}),render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_core_form_hint__WEBPACK_IMPORTED_MODULE_1__.A,args)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <FormHint {...args} />\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}}}]);