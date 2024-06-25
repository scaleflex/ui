"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4044],{"./packages/icons/src/cross.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,F:()=>Cross});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/src/utils/functions/intrinsic-component.ts"),_excluded=["color","size"],Cross=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,_ref$size=_ref.size,size=void 0===_ref$size?14:_ref$size,rest=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({ref,width:size,height:size,viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29.9081 25.0577L45.8451 9.12074C46.5381 8.42782 46.8845 7.61942 46.8845 6.58005C46.8845 5.54068 46.5381 4.73228 45.8451 4.03937C44.4593 2.65354 42.1496 2.65354 40.8793 4.03937L24.9423 20.0919L9.00525 4.15486C7.61942 2.76903 5.4252 2.76903 4.03937 4.15486C3.34646 4.84777 3 5.65617 3 6.58005C3 7.50394 3.34646 8.42782 4.03937 9.12074L19.9764 25.0577L4.03937 40.9948C3.34646 41.6877 3 42.4961 3 43.42C3 44.3438 3.34646 45.2677 4.03937 45.9606C5.4252 47.3465 7.73491 47.3465 9.00525 45.9606L24.9423 30.0236L40.8793 45.9606C41.5722 46.6535 42.3806 47 43.42 47C44.4593 47 45.2677 46.6535 45.9606 45.9606C46.6535 45.2677 47 44.4593 47 43.42C47 42.3806 46.6535 41.5722 45.9606 40.8793L29.9081 25.0577Z",fill:color}))}));const __WEBPACK_DEFAULT_EXPORT__=Cross;Cross.__docgenInfo={description:"",methods:[],displayName:"Cross",props:{color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},size:{defaultValue:{value:"14",computed:!1},required:!1}}}},"./packages/icons/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/src/core/tag/tag.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_icons_cross__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icons/src/cross.tsx"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/core/tag/types/type.ts"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/tag/types/size.ts"),_tag_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/ui/src/core/tag/tag.styles.ts"),_excluded=["children","type","crossIcon","startIcon","size","tagIndex","onRemove","contentEditable","suppressContentEditableWarning"],Tag=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?_types__WEBPACK_IMPORTED_MODULE_2__.Z.Default:_ref$type,_ref$crossIcon=_ref.crossIcon,crossIcon=void 0===_ref$crossIcon||_ref$crossIcon,startIcon=_ref.startIcon,_ref$size=_ref.size,size=void 0===_ref$size?_types__WEBPACK_IMPORTED_MODULE_3__.o.Md:_ref$size,tagIndex=_ref.tagIndex,onRemove=_ref.onRemove,contentEditable=_ref.contentEditable,suppressContentEditableWarning=_ref.suppressContentEditableWarning,rest=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tag_styles__WEBPACK_IMPORTED_MODULE_5__.A.Tag,Object.assign({ref,size,type},rest,{onClick:type===_types__WEBPACK_IMPORTED_MODULE_2__.Z.Suggested?function(event){"function"==typeof rest.onSelect&&rest.onSelect(event),"function"==typeof rest.onClick&&rest.onClick(event)}:rest.onClick}),startIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tag_styles__WEBPACK_IMPORTED_MODULE_5__.A.StartIcon,null,startIcon),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tag_styles__WEBPACK_IMPORTED_MODULE_5__.A.Label,{contentEditable,suppressContentEditableWarning},children),crossIcon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tag_styles__WEBPACK_IMPORTED_MODULE_5__.A.Cross,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_cross__WEBPACK_IMPORTED_MODULE_6__.A,{size:8,onClick:function onClick(event){"function"==typeof onRemove&&onRemove(tagIndex,event)}})))}));const __WEBPACK_DEFAULT_EXPORT__=Tag;Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{size:{required:!1,tsType:{name:"Values",elements:[{name:"Size"}],raw:"Values<typeof Size>"},description:"",defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"Values",elements:[{name:"Type"}],raw:"Values<typeof Type>"},description:"",defaultValue:{value:"'default'",computed:!1}},crossIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, event: MouseEvent<SVGSVGElement>) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"MouseEvent",elements:[{name:"SVGSVGElement"}],raw:"MouseEvent<SVGSVGElement>"},name:"event"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"event"}],return:{name:"void"}}},description:""},tagIndex:{required:!1,tsType:{name:"number"},description:""}}}},"./packages/ui/src/core/tag/tag.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>tag_styles});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),types_size=__webpack_require__("./packages/ui/src/core/tag/types/size.ts"),sizeTagLabelMixin=(0,defineProperty.A)((0,defineProperty.A)({},types_size.o.Sm,(0,styled_components_browser_esm.AH)(["font-weight:normal;font-size:12px;line-height:14px;padding:3px 8px;"])),types_size.o.Md,(0,styled_components_browser_esm.AH)(["font-weight:normal;font-size:14px;line-height:16px;padding:4px 12px;"])),sizeTagCrossMixin=(0,defineProperty.A)((0,defineProperty.A)({},types_size.o.Sm,(0,styled_components_browser_esm.AH)(["width:8px;height:8px;margin-left:6px;"])),types_size.o.Md,(0,styled_components_browser_esm.AH)(["width:8px;height:8px;margin-left:8px;"])),types_type=__webpack_require__("./packages/ui/src/core/tag/types/type.ts"),Cross=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("Tag","Icon")}).withConfig({componentId:"sc-d1zfus-0"})((function(_ref){var theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["display:inline-flex;color:",";cursor:pointer;"],theme.palette[color.Q.IconsSecondary])})),StartIcon=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("Tag","StartIcon")}).withConfig({componentId:"sc-d1zfus-1"})((function(){return(0,styled_components_browser_esm.AH)(["display:flex;justify-content:center;align-items:center;margin-right:6px;"])})),Label=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("Tag","Label")}).withConfig({componentId:"sc-d1zfus-2"})((function(_ref2){var theme=_ref2.theme;return(0,styled_components_browser_esm.AH)(["outline:none;color:",";display:block;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"],theme.palette[color.Q.TextPrimary])})),Tag=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Tag","root")}).withConfig({componentId:"sc-d1zfus-3"})((function(_ref3){var _ref3$size=_ref3.size,size=void 0===_ref3$size?types_size.o.Md:_ref3$size,_ref3$type=_ref3.type,type=void 0===_ref3$type?types_type.Z.Default:_ref3$type,onSelect=_ref3.onSelect,theme=_ref3.theme;return(0,styled_components_browser_esm.AH)(["position:relative;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;transition:all 100ms ease-out;background-color:",";border:1px solid ",";border-radius:",";max-width:100%;"," &:hover{background-color:",";border:1px solid ",";","{color:",";}","{color:",";}"," ","}&:not(:hover){","}","{","}"],theme.palette[color.Q.BordersSecondary],theme.palette[color.Q.BorderPrimaryStateless],theme.shape.borderRadius[border_radius_size.M.Md],sizeTagLabelMixin[size],theme.palette[color.Q.BackgroundActive],theme.palette[color.Q.IconsSecondaryHover],Label,theme.palette[color.Q.TextPrimary],Cross,theme.palette[color.Q.IconsSecondaryHover],type===types_type.Z.Suggested&&onSelect&&(0,styled_components_browser_esm.AH)(["cursor:pointer;"]),type===types_type.Z.Suggested&&(0,styled_components_browser_esm.AH)(["border:1px dashed ",";background-color:",";","{color:",";}","{color:",";}"],theme.palette[color.Q.IconsSecondaryHover],theme.palette[color.Q.BackgroundActive],Label,theme.palette[color.Q.LinkHover],Cross,theme.palette[color.Q.IconsSecondaryHover]),type===types_type.Z.Suggested&&(0,styled_components_browser_esm.AH)(["border:1px dashed ",";background:transparent;","{color:",";}","{color:",";}"],theme.palette[color.Q.BorderPrimaryStateless],Label,theme.palette[color.Q.LinkStateless],Cross,theme.palette[color.Q.IconsSecondary]),Cross,sizeTagCrossMixin[size])}));const tag_styles=(0,apply_display_names.v)({Tag,StartIcon,Label,Cross})},"./packages/ui/src/core/tag/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Size});var Size={Sm:"sm",Md:"md"}},"./packages/ui/src/core/tag/types/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Type});var Type={Default:"default",Suggested:"suggested"}},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/core/tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_core_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/tag/tag.component.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Tag",component:_src_core_tag__WEBPACK_IMPORTED_MODULE_1__.A,excludeStories:["Tag"],argTypes:{onSelect:{description:'Actual only for "suggested" type.'},onRemove:{description:"On remove icon click."}}};var BasicTemplate=function BasicTemplate(_ref){var args=Object.assign({},((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__.A)(_ref),_ref));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_core_tag__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},args,{onSelect:function onSelect(){return alert("onSelect handler")},onRemove:function onRemove(){return alert("onRemove handler")}}))},Primary={args:(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__.A)({},{children:"Cheerful woman",crossIcon:!1}),render:function render(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(BasicTemplate,args)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure undefined")}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}}}]);