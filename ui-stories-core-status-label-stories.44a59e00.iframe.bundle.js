"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[6303],{"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/core/status-label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>status_label_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),Variant_Text="text",Variant_Filled="filled",Type_Default="default",Type_Inactive="inactive",Type_Received="received",Type_Selected="selected",Type_Modified="modified",Type_Validated="validated",Size_Sm="sm",Size_Md="md",objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),font_variant=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),statusLabelMixin=(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({},Type_Default,(function(){return(0,styled_components_browser_esm.AH)(["border:none;"])})),Type_Inactive,(function(){return(0,styled_components_browser_esm.AH)(["border:none;"])})),Type_Received,(function(_ref){var palette=_ref.theme.palette;return(0,styled_components_browser_esm.AH)(["border:1px solid ",";"],palette[color.Q.ButtonDisabledText])})),Type_Selected,(function(_ref2){var palette=_ref2.theme.palette;return(0,styled_components_browser_esm.AH)(["border:1px solid ",";"],palette[color.Q.AccentStateless])})),Type_Modified,(function(_ref3){var palette=_ref3.theme.palette;return(0,styled_components_browser_esm.AH)(["background-color:",";"],palette[color.Q.Modified])})),Type_Validated,(function(_ref4){var palette=_ref4.theme.palette;return(0,styled_components_browser_esm.AH)(["background-color:",";"],palette[color.Q.Success])})),fontLabelMixin=(0,defineProperty.A)((0,defineProperty.A)({},Size_Sm,(function(_ref5){return _ref5.theme.typography.font[font_variant.B.LabelSmall]})),Size_Md,(function(_ref6){return _ref6.theme.typography.font[font_variant.B.LabelMedium]})),StatusLabel=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("StatusLabel","Label")}).withConfig({componentId:"sc-2nnq4u-0"})(["display:flex;align-items:center;border-radius:inherit;"]),StatusIcon=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("StatusLabel","Icon")}).withConfig({componentId:"sc-2nnq4u-1"})((function(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?Type_Received:_ref$type,iconSize=_ref.iconSize;return(0,styled_components_browser_esm.AH)(["width:","px;height:","px;border-radius:50%;display:inline-flex;margin-right:4px;margin-bottom:2px;box-sizing:border-box;",""],iconSize,iconSize,statusLabelMixin[type])})),StatusLabelWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("StatusLabel","root")}).withConfig({componentId:"sc-2nnq4u-2"})((function(_ref2){var _ref2$size=_ref2.size,size=void 0===_ref2$size?Size_Md:_ref2$size,_ref2$type=_ref2.type,type=void 0===_ref2$type?Type_Default:_ref2$type,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?Variant_Filled:_ref2$variant,theme=_ref2.theme;return(0,styled_components_browser_esm.AH)(["position:relative;display:inline-flex;justify-content:center;align-items:center;padding:2px 8px;background-color:",";color:",";border-radius:",";box-sizing:border-box;"," ",""],type===Type_Inactive?theme.palette[color.Q.IconsSecondary]:theme.palette[color.Q.Success],theme.palette[color.Q.BackgroundSecondary],theme.shape.borderRadius[border_radius_size.M.Md],variant===Variant_Text&&(0,styled_components_browser_esm.AH)(["background:transparent;color:",";","{","}"],theme.palette[color.Q.TextPrimary],StatusLabel,fontLabelMixin[size]),variant===Variant_Filled&&type!==Type_Default&&type!==Type_Inactive&&(0,styled_components_browser_esm.AH)(["background-color:",";color:",";padding:2px 4px;box-shadow:0px 1px 3px rgba(77,78,78,0.15);"],theme.palette[color.Q.BackgroundStateless],theme.palette[color.Q.TextSecondary]))}));const status_label_styles=(0,apply_display_names.v)({StatusLabel,StatusIcon,StatusLabelWrapper});var _excluded=["label","variant","type","size","iconSize"],status_label_component_StatusLabel=(0,intrinsic_component.n)((function(_ref,ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$variant=_ref.variant,variant=void 0===_ref$variant?Variant_Filled:_ref$variant,_ref$type=_ref.type,type=void 0===_ref$type?Type_Default:_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?Size_Md:_ref$size,_ref$iconSize=_ref.iconSize,iconSize=void 0===_ref$iconSize?8:_ref$iconSize,rest=(0,objectWithoutProperties.A)(_ref,_excluded),showStatusIcon=Boolean(type!==Type_Default&&type!==Type_Inactive);return react.createElement(status_label_styles.StatusLabelWrapper,Object.assign({ref,size,label,type,variant},rest),showStatusIcon&&react.createElement(status_label_styles.StatusIcon,{type,iconSize}),react.createElement(status_label_styles.StatusLabel,null,label))}));const status_label_component=status_label_component_StatusLabel;status_label_component_StatusLabel.__docgenInfo={description:"",methods:[],displayName:"StatusLabel",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"Values",elements:[{name:"Size"}],raw:"Values<typeof Size>"},description:"",defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"Values",elements:[{name:"Type"}],raw:"Values<typeof Type>"},description:"",defaultValue:{value:"'default'",computed:!1}},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},variant:{required:!1,tsType:{name:"Values",elements:[{name:"Variant"}],raw:"Values<typeof Variant>"},description:"",defaultValue:{value:"'filled'",computed:!1}}}};const status_label_stories={title:"DataDisplay/StatusLabel",component:status_label_component,excludeStories:["StatusLabel"]};var defaultArgs={label:"Label",variant:Variant_Filled,type:Type_Default,size:Size_Md,iconSize:8},BasicTemplate=function BasicTemplate(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.A)(_ref),_ref));return react.createElement(status_label_component,args)},Primary={args:(0,objectSpread2.A)({},defaultArgs),render:function render(args){return react.createElement(BasicTemplate,args)}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure undefined")}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}}}]);