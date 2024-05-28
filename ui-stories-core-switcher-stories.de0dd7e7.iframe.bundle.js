"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[1369],{"./packages/ui/src/core/switcher/switcher-size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>SwitcherSize});var SwitcherSize={Sm:"sm",Md:"md",Lg:"lg"}},"./packages/ui/src/core/switcher/switcher.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>switcher_component});var objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),switcher_size=__webpack_require__("./packages/ui/src/core/switcher/switcher-size.ts"),switcher_mixin=__webpack_require__("./packages/ui/src/core/switcher/switcher.mixin.ts"),getSwitcherSize=function getSwitcherSize(sizeName){switch(sizeName){case switcher_size.J.Lg:return 30;case switcher_size.J.Md:return 20;case switcher_size.J.Sm:default:return 16}},getSwitcherIconSize=function getSwitcherIconSize(sizeName){switch(sizeName){case switcher_size.J.Lg:return 24;case switcher_size.J.Md:return 16;case switcher_size.J.Sm:default:return 12}},SwitcherWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Switcher","root")}).withConfig({componentId:"sc-16vo7ts-0"})((function(_ref){var disabled=_ref.disabled;return(0,styled_components_browser_esm.AH)(["position:relative;display:inline-flex;cursor:",";"],disabled?"default":"pointer")})),Switcher=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Switcher","switcher")}).withConfig({componentId:"sc-16vo7ts-1"})((function(_ref2){var disabled=_ref2.disabled,_ref2$size=_ref2.size,size=void 0===_ref2$size?switcher_size.J.Sm:_ref2$size,palette=_ref2.theme.palette;return(0,styled_components_browser_esm.AH)(["position:relative;width:","px;height:","px;background:",";border-radius:20px;&:before{content:'';position:absolute;width:","px;height:","px;border-radius:35px;top:50%;left:","px;transition:transform 0.3s ease 0s,opacity 0.5s ease 0s;background:",";transform:translate(0,-50%);}&:after{content:'';position:absolute;"," border-radius:20px;top:50%;left:","px;background:",";transform:translate(50%,-50%);transition:transform 0.3s ease 0s,opacity 0.3s ease 0s;opacity:0;}"],2*getSwitcherSize(size),getSwitcherSize(size),disabled?palette[color.Q.BackgroundActive]:palette[color.Q.BackgroundGrey],getSwitcherIconSize(size),getSwitcherIconSize(size),size===switcher_size.J.Lg?"3":"2",disabled?palette[color.Q.BackgroundGrey]:palette[color.Q.IconsMuted],switcher_mixin._e[size],size===switcher_size.J.Lg?"6.9":"3.9",palette[color.Q.IconsInvert])})),Input=styled_components_browser_esm.Ay.input.attrs({className:(0,generate_class_names.e)("Switcher","Input"),type:"checkbox"}).withConfig({componentId:"sc-16vo7ts-2"})((function(_ref3){var $disabled=_ref3.$disabled,_ref3$size=_ref3.size,size=void 0===_ref3$size?switcher_size.J.Sm:_ref3$size,palette=_ref3.theme.palette;return(0,styled_components_browser_esm.AH)(["opacity:0;position:absolute;z-index:99;width:","px;height:","px;cursor:",";&:hover + ",":after{opacity:",";}&:checked{&:hover + ","{background:",";}}&:checked + ","{background:",";&:before{",";background:",";}&:after{"," background:",";}}"],2*getSwitcherSize(size),getSwitcherSize(size),$disabled?"default":"pointer",Switcher,$disabled?0:1,Switcher,!$disabled&&palette[color.Q.AccentPrimaryHover],Switcher,$disabled?palette[color.Q.Accent_2_8_Opacity]:palette[color.Q.AccentStateless],switcher_mixin.Tg[size],palette[color.Q.IconsInvert],switcher_mixin.rr[size],palette[color.Q.AccentStateless_0_4_Opacity])})),SwitcherContentWrapper=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("Switcher","content-Wrapper")}).withConfig({componentId:"sc-16vo7ts-3"})((function(_ref4){var checked=_ref4.checked,size=_ref4.size;return(0,styled_components_browser_esm.AH)(["display:inline-flex;position:absolute;top:50%;left:",";transform:translate(-50%,-50%);transition:0.1s;font-size:","px;overflow:hidden;max-width:","px;"],checked?"30%":"65%",function getSwitcherFont(sizeName){switch(sizeName){case switcher_size.J.Lg:return 14;case switcher_size.J.Md:return 10;case switcher_size.J.Sm:return 8;default:return 14}}(size),.75*getSwitcherSize(size))}));const switcher_styles=(0,apply_display_names.v)({Switcher,Input,SwitcherWrapper,SwitcherContentWrapper});var _excluded=["size","checked","onChange","SwitcherPropsData","switcherProps","readOnly","disabled","children"],switcher_component_Switcher=(0,intrinsic_component.n)((function(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?switcher_size.J.Sm:_ref$size,_ref$checked=_ref.checked,checked=void 0!==_ref$checked&&_ref$checked,onChange=_ref.onChange,SwitcherPropsData=_ref.SwitcherPropsData,switcherProps=_ref.switcherProps,readOnly=_ref.readOnly,disabled=_ref.disabled,children=_ref.children,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return react.createElement(switcher_styles.SwitcherWrapper,Object.assign({disabled,ref},SwitcherPropsData,rest),react.createElement(switcher_styles.Input,Object.assign({checked,onChange:readOnly||disabled?void 0:onChange,readOnly,$disabled:disabled,size},switcherProps)),react.createElement(switcher_styles.Switcher,{disabled,size},children&&react.createElement(switcher_styles.SwitcherContentWrapper,{checked,size},children)))}));const switcher_component=switcher_component_Switcher;switcher_component_Switcher.__docgenInfo={description:"",methods:[],displayName:"Switcher",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},switcherProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"literal",value:"'size'"}],raw:"Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>"},description:""},SwitcherPropsData:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},$disabled:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"Values",elements:[{name:"SwitcherSize"}],raw:"Values<typeof SwitcherSize>"},description:"",defaultValue:{value:"'sm'",computed:!1}}}}},"./packages/ui/src/core/switcher/switcher.mixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tg:()=>translateSwitcherMixin,_e:()=>sizeInnerSwitcherMixin,rr:()=>translateInnerSwitcherMixin,td:()=>fontSizeSwitcherMixin});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),_switcher_size__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/switcher/switcher-size.ts"),fontSizeSwitcherMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Sm,(function(_ref){return _ref.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.LabelMedium]})),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Md,(function(_ref2){return _ref2.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.InputLg]})),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Lg,(function(_ref3){return _ref3.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.InputLg]})),translateSwitcherMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Sm,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(16px,-50%);"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Md,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(19.5px,-50%);"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Lg,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(30.5px,-50%);"])),translateInnerSwitcherMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Sm,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(18.2px,-50%);"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Md,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(22.5px,-50%);"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Lg,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["transform:translate(34.7px,-50%);"])),sizeInnerSwitcherMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Sm,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["width:4px;height:4px;"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Md,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["width:6px;height:6px;"])),_switcher_size__WEBPACK_IMPORTED_MODULE_1__.J.Lg,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["width:8px;height:8px;"]))},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/core/switcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithChildren:()=>WithChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_ui_core_switcher_switcher_size__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/core/switcher/switcher-size.ts"),_src_core_switcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/switcher/switcher.component.tsx"),_excluded=["checked"],_excluded2=["checked"];const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Switcher",component:_src_core_switcher__WEBPACK_IMPORTED_MODULE_1__.A,excludeStories:["Switcher"]};var defaultArgs={checked:!1,readOnly:!1,disabled:!1,size:_scaleflex_ui_core_switcher_switcher_size__WEBPACK_IMPORTED_MODULE_2__.J.Sm},BasicTemplate=function BasicTemplate(_ref){var checked=_ref.checked,args=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),checkedState=_useState2[0],setCheckedState=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setCheckedState(checked||!1)}),[checked]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_core_switcher__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},args,{checked:checkedState,onChange:function onChange(event){setCheckedState(event.target.checked)}}))},WithChildrenTemplate=function WithChildrenTemplate(_ref2){var checked=_ref2.checked,args=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(_ref2,_excluded2),_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState4=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState3,2),checkedState=_useState4[0],setCheckedState=_useState4[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setCheckedState(checked||!1)}),[checked]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_core_switcher__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},args,{checked:checkedState,onChange:function onChange(event){setCheckedState(event.target.checked)}}),checkedState?"on":"off")},Primary={args:(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__.A)({},defaultArgs),render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicTemplate,args)}},WithChildren={args:(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__.A)({},defaultArgs),render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithChildrenTemplate,args)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <WithChildrenTemplate {...args} />\n}",...WithChildren.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","WithChildren"]},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}}}]);