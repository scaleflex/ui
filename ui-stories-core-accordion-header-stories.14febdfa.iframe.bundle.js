"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[2484],{"./packages/icons/src/arrow-bottom.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,z:()=>ArrowBottom});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/src/utils/functions/intrinsic-component.ts"),_excluded=["color","size"],ArrowBottom=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?14:_ref$size,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({ref,width:size,height:size,viewBox:"0 0 11 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8468 3.13984C11.0457 3.33138 11.0517 3.64791 10.8602 3.84682L6.04534 8.84682C5.95332 8.94238 5.82709 8.99746 5.69445 8.99991C5.5618 9.00237 5.43362 8.95201 5.33812 8.85992L0.152931 3.85992C-0.0458479 3.66824 -0.0516033 3.35171 0.140078 3.15293C0.331758 2.95415 0.648288 2.9484 0.847067 3.14008L5.67208 7.79277L10.1398 3.15318C10.3314 2.95427 10.6479 2.9483 10.8468 3.13984Z",fill:color}))}));const __WEBPACK_DEFAULT_EXPORT__=ArrowBottom;ArrowBottom.__docgenInfo={description:"",methods:[],displayName:"ArrowBottom",props:{color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},size:{defaultValue:{value:"14",computed:!1},required:!1}}}},"./packages/icons/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/src/core/accordion-header/accordion-header.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_arrow_tick__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/core/arrow-tick/arrow-tick.component.tsx"),_utils_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/ui/src/utils/types/position/position.ts"),_accordion_header_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/accordion-header/accordion-header.styles.ts"),_excluded=["expanded","label","onChange","onClick","onContextMenu","hideIcon","fullWidth","iconProps"],AccordionHeader=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$expanded=_ref.expanded,expanded=void 0!==_ref$expanded&&_ref$expanded,label=_ref.label,onChange=_ref.onChange,_onClick=_ref.onClick,onContextMenu=_ref.onContextMenu,_ref$hideIcon=_ref.hideIcon,hideIcon=void 0!==_ref$hideIcon&&_ref$hideIcon,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,iconPropsData=_ref.iconProps,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_accordion_header_styles__WEBPACK_IMPORTED_MODULE_3__.A.Header,Object.assign({ref,onClick:function onClick(event){"function"==typeof onChange&&onChange(!expanded),"function"==typeof _onClick&&_onClick(event)},$fullWidth:fullWidth},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_accordion_header_styles__WEBPACK_IMPORTED_MODULE_3__.A.Label,{onContextMenu},label),!hideIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_accordion_header_styles__WEBPACK_IMPORTED_MODULE_3__.A.Icon,{onContextMenu},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_arrow_tick__WEBPACK_IMPORTED_MODULE_4__.A,{type:expanded?_utils_types__WEBPACK_IMPORTED_MODULE_5__.y.Top:_utils_types__WEBPACK_IMPORTED_MODULE_5__.y.Bottom,IconProps:(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__.A)({size:11},iconPropsData)})))}));const __WEBPACK_DEFAULT_EXPORT__=AccordionHeader;AccordionHeader.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},expanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},iconProps:{required:!1,tsType:{name:"IconProps"},description:""}},composes:["Omit"]}},"./packages/ui/src/core/accordion-header/accordion-header.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),_utils_functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),Icon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("AccordionHeader","icon")}).withConfig({componentId:"sc-1dtjsgt-0"})((function(){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["display:inline-flex;padding-left:8px;"])})),Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("AccordionHeader","label")}).withConfig({componentId:"sc-1dtjsgt-1"})((function(_ref){var theme=_ref.theme;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["",""],theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.ButtonSm])})),Header=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("AccordionHeader","root")}).withConfig({componentId:"sc-1dtjsgt-2"})((function(_ref2){var theme=_ref2.theme,$fullWidth=_ref2.$fullWidth;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["display:inline-flex;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:pointer;width:",";color:",";user-select:none;"],$fullWidth?"100%":"auto",theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.LinkPrimary])})),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("AccordionHeader","wrapper")}).withConfig({componentId:"sc-1dtjsgt-3"})((function(_ref3){var theme=_ref3.theme;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["color:",";"],theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.LinkPrimary])}));const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.v)({Header,Wrapper,Icon,Label})},"./packages/ui/src/core/arrow-tick/arrow-tick.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_icons_arrow_bottom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/src/arrow-bottom.tsx"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_utils_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/position/position.ts"),_arrow_tick_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/core/arrow-tick/arrow-tick.styles.ts"),_excluded=["type","IconProps"],ArrowTick=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$type=_ref.type,type=void 0===_ref$type?_utils_types__WEBPACK_IMPORTED_MODULE_2__.y.Right:_ref$type,IconPropsData=_ref.IconProps,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_arrow_tick_styles__WEBPACK_IMPORTED_MODULE_4__.A.ArrowTick,Object.assign({},rest,{type,ref}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_arrow_bottom__WEBPACK_IMPORTED_MODULE_5__.A,IconPropsData))}));const __WEBPACK_DEFAULT_EXPORT__=ArrowTick;ArrowTick.__docgenInfo={description:"",methods:[],displayName:"ArrowTick",props:{type:{required:!1,tsType:{name:"Values",elements:[{name:"Type"}],raw:"Values<typeof Type>"},description:"",defaultValue:{value:"'right'",computed:!1}},IconProps:{required:!1,tsType:{name:"IconProps"},description:""}}}},"./packages/ui/src/core/arrow-tick/arrow-tick.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>arrow_tick_styles});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),Type_Left="left",Type_Right="right",Type_Top="top",Type_Bottom="bottom",typeArrowTickMixin=(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({},Type_Right,(0,styled_components_browser_esm.AH)(["svg{transform:rotate(-90deg);transition:transform 150ms ease-out;}"])),Type_Left,(0,styled_components_browser_esm.AH)(["svg{transform:rotate(90deg);transition:transform 150ms ease-out;}"])),Type_Top,(0,styled_components_browser_esm.AH)(["svg{transform:rotate(180deg);transition:transform 150ms ease-out;}"])),Type_Bottom,(0,styled_components_browser_esm.AH)(["svg{transform:rotate(0);transition:transform 150ms ease-out;}"])),position=__webpack_require__("./packages/ui/src/utils/types/position/position.ts"),ArrowTick=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("ArrowTick","root")}).withConfig({componentId:"sc-tlypde-0"})((function(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?position.y.Right:_ref$type;return(0,styled_components_browser_esm.AH)(["display:inline-flex;",""],typeArrowTickMixin[type])}));const arrow_tick_styles=(0,apply_display_names.v)({ArrowTick})},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/src/utils/types/position/position.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Position});var Position={Left:"left",Right:"right",Top:"top",Bottom:"bottom"}},"./packages/ui/stories/core/accordion-header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_core_accordion_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/accordion-header/accordion-header.component.tsx"),_excluded=["expanded"];const __WEBPACK_DEFAULT_EXPORT__={title:"Surfaces/Accordion/AccordionHeader",component:_src_core_accordion_header__WEBPACK_IMPORTED_MODULE_1__.A,excludeStories:["AccordionHeader"]};var BasicTemplate=function BasicTemplate(_ref){var expanded=_ref.expanded,args=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(expanded||!1),_useState2=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.A)(_useState,2),openState=_useState2[0],setOpenState=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setOpenState(expanded||!1)}),[expanded]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_core_accordion_header__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},args,{expanded:openState,onChange:function onChange(value){return setOpenState(value)}}))},Primary={args:(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__.A)({},{label:"Folders (5)",expanded:!1}),render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicTemplate,Object.assign({expanded:args.expanded},args))}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate expanded={args.expanded} {...args} />\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}}}]);