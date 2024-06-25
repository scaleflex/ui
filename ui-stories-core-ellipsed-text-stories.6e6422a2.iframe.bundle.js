"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[2410],{"./packages/ui/src/core/tooltip-v2/tooltip-v2.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>tooltip_v2_component});var objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),intrinsic_component=(__webpack_require__("./node_modules/tippy.js/dist/tippy.css"),__webpack_require__("./node_modules/tippy.js/animations/scale.css"),__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts")),types_position=__webpack_require__("./packages/ui/src/core/tooltip-v2/types/position.ts"),Size_Sm="sm",generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),tooltip_mixin=__webpack_require__("./packages/ui/src/core/tooltip/tooltip.mixin.ts"),TooltipV2=(0,styled_components_browser_esm.Ay)(tippy_react_esm.Ay).attrs({className:(0,generate_class_names.e)("TooltipV2","root")}).withConfig({componentId:"sc-4j2dcr-0"})((function(_ref){var $warning=_ref.$warning,$info=_ref.$info,_ref$$size=_ref.$size,$size=void 0===_ref$$size?Size_Sm:_ref$$size,theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["display:inline-flex;align-items:center;min-width:54px;min-height:20px;word-break:break-word;border-radius:",";background:",";color:",";",";.tippy-arrow{color:",";}.tippy-content{padding:0;","}"],theme.shape.borderRadius[border_radius_size.M.Md],theme.palette[$warning&&color.Q.BackgroundOrange||$info&&color.Q.BackgroundBlue||color.Q.IconsPlaceholder],theme.palette[$warning&&color.Q.TextWarning||$info&&color.Q.TextInfo||color.Q.LinkActive],tooltip_mixin.U[$size],theme.palette[$warning&&color.Q.BackgroundOrange||$info&&color.Q.BackgroundBlue||color.Q.IconsPlaceholder],tooltip_mixin.I[$size])})),TooltipText=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("TooltipV2","content")}).withConfig({componentId:"sc-4j2dcr-1"})((function(_ref2){var $warning=_ref2.$warning,$info=_ref2.$info,theme=_ref2.theme;return(0,styled_components_browser_esm.AH)(["display:flex;align-items:center;color:",";"],theme.palette[$warning&&color.Q.TextWarning||$info&&color.Q.TextInfo||color.Q.LinkActive])}));const tooltip_v2_styles=(0,apply_display_names.v)({TooltipV2,TooltipText});var _excluded=["children","arrow","warning","enableHover","enterDelay","leaveDelay","offsetX","offsetY","title","position","info","size"],tooltip_v2_component_TooltipV2=(0,intrinsic_component.n)((function(_ref,ref){var children=_ref.children,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow||_ref$arrow,_ref$warning=_ref.warning,warning=void 0!==_ref$warning&&_ref$warning,_ref$enableHover=_ref.enableHover,enableHover=void 0===_ref$enableHover||_ref$enableHover,_ref$enterDelay=_ref.enterDelay,enterDelay=void 0===_ref$enterDelay?0:_ref$enterDelay,_ref$leaveDelay=_ref.leaveDelay,leaveDelay=void 0===_ref$leaveDelay?0:_ref$leaveDelay,_ref$offsetX=_ref.offsetX,offsetX=void 0===_ref$offsetX?0:_ref$offsetX,_ref$offsetY=_ref.offsetY,offsetY=void 0===_ref$offsetY?10:_ref$offsetY,title=_ref.title,_ref$position=_ref.position,position=void 0===_ref$position?types_position.y.Top:_ref$position,_ref$info=_ref.info,info=void 0!==_ref$info&&_ref$info,_ref$size=_ref.size,size=void 0===_ref$size?Size_Sm:_ref$size,rest=(0,objectWithoutProperties.A)(_ref,_excluded);return react.createElement(tooltip_v2_styles.TooltipV2,Object.assign({ref,placement:position,content:function renderTooltipContent(){return react.createElement(tooltip_v2_styles.TooltipText,{$info:info,$warning:warning},title)}(),interactive:enableHover,arrow,delay:[enterDelay,leaveDelay],$info:info,$warning:warning,$size:size||Size_Sm,animation:"scale",offset:[offsetX,offsetY],appendTo:document.body},rest),children)}));const tooltip_v2_component=tooltip_v2_component_TooltipV2;tooltip_v2_component_TooltipV2.__docgenInfo={description:"",methods:[],displayName:"TooltipV2",props:{position:{required:!1,tsType:{name:"Values",elements:[{name:"Position"}],raw:"Values<typeof Position>"},description:"",defaultValue:{value:"'top'",computed:!1}},size:{required:!1,tsType:{name:"Values",elements:[{name:"Size"}],raw:"Values<typeof Size>"},description:"",defaultValue:{value:"'sm'",computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},tooltipProps:{required:!1,tsType:{name:"object"},description:""},enableHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},warning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},info:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enterDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},leaveDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}}},composes:["Omit"]}},"./packages/ui/src/core/tooltip-v2/types/position.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Position});var Position={TopStart:"top-start",Top:"top",TopEnd:"top-end",BottomStart:"bottom-start",Bottom:"bottom",BottomEnd:"bottom-end",LeftStart:"left-start",Left:"left",LeftEnd:"left-end",RightStart:"right-start",Right:"right",RightEnd:"right-end"}},"./packages/ui/src/core/tooltip/tooltip.mixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontTooltipMixin,U:()=>sizeTooltipMixin});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/tooltip/types/size.ts"),fontTooltipMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_types__WEBPACK_IMPORTED_MODULE_1__.o.Sm,(function(_ref){return _ref.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextExtraSmall]})),_types__WEBPACK_IMPORTED_MODULE_1__.o.Md,(function(_ref2){return _ref2.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextSmall]})),_types__WEBPACK_IMPORTED_MODULE_1__.o.Lg,(function(_ref3){return _ref3.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextSmall]})),sizeTooltipMixin=(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_types__WEBPACK_IMPORTED_MODULE_1__.o.Sm,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:4px 8px;"])),_types__WEBPACK_IMPORTED_MODULE_1__.o.Md,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:6px 12px;"])),_types__WEBPACK_IMPORTED_MODULE_1__.o.Lg,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:12px 16px;"]))},"./packages/ui/src/core/tooltip/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Size});var Size={Sm:"sm",Md:"md",Lg:"lg"}},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,C_scaleflex_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/ignore-event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>ignoreEvent});var ignoreEvent=function ignoreEvent(event){var tagName=event.target.tagName;"INPUT"!==tagName&&"TEXTAREA"!==tagName?(event.preventDefault(),event.stopPropagation()):event.stopPropagation()}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/core/ellipsed-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ellipsed_text_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),tooltip_v2_component=__webpack_require__("./packages/ui/src/core/tooltip-v2/tooltip-v2.component.tsx"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),ignore_event=__webpack_require__("./packages/ui/src/utils/functions/ignore-event.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),EllipsedTextWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","root")}).withConfig({componentId:"sc-53xpj8-0"})((function(_ref){var $maxLinesCount=_ref.$maxLinesCount;return(0,styled_components_browser_esm.AH)(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:",";overflow:hidden;width:100%;",""],$maxLinesCount,1===$maxLinesCount&&(0,styled_components_browser_esm.AH)(["word-break:break-all;"]))})),TooltipContent=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","tooltip-content")}).withConfig({componentId:"sc-53xpj8-1"})((function(_ref2){var $customMaxHeight=_ref2.$customMaxHeight;return(0,styled_components_browser_esm.AH)(["max-height:",";"],$customMaxHeight?"".concat($customMaxHeight,"px"):"100%")}));const ellipsed_text_styles=(0,apply_display_names.v)({EllipsedTextWrapper,TooltipContent});var _excluded=["children","element","maxLinesCount","customMaxHeight","noTooltip","tooltipProps","textWrapperProps"],EllipsedText=(0,intrinsic_component.n)((function(_ref,ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"div":_ref$element,_ref$maxLinesCount=_ref.maxLinesCount,maxLinesCount=void 0===_ref$maxLinesCount?2:_ref$maxLinesCount,customMaxHeight=_ref.customMaxHeight,_ref$noTooltip=_ref.noTooltip,noTooltip=void 0!==_ref$noTooltip&&_ref$noTooltip,tooltipProps=_ref.tooltipProps,_ref$textWrapperProps=_ref.textWrapperProps,textWrapperProps=void 0===_ref$textWrapperProps?{}:_ref$textWrapperProps,rest=(0,objectWithoutProperties.A)(_ref,_excluded),textContentRef=(0,react.useRef)(null),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),shouldEllipse=_useState2[0],setShouldEllipse=_useState2[1],applyEllipsisIfNeeded=(0,react.useCallback)((function(elem){if(elem&&maxLinesCount){var elemScrollHeight=elem.scrollHeight,elemScrollWidth=elem.scrollWidth,elemHeight=elem.clientHeight+1||elemScrollHeight,elemWidth=elem.clientWidth+1||elemScrollWidth;setShouldEllipse(elemScrollHeight>elemHeight||elemScrollWidth>elemWidth)}}),[maxLinesCount,customMaxHeight]);return(0,react.useLayoutEffect)((function(){textContentRef.current&&applyEllipsisIfNeeded(textContentRef.current)}),[element,maxLinesCount,customMaxHeight]),(0,react.useLayoutEffect)((function(){var resizeObserver=new ResizeObserver((function applyOnElemResize(){textContentRef.current&&applyEllipsisIfNeeded(textContentRef.current)}));return textContentRef.current&&resizeObserver.observe(textContentRef.current),function(){resizeObserver.disconnect()}}),[]),react.createElement(ellipsed_text_styles.EllipsedTextWrapper,Object.assign({$maxLinesCount:maxLinesCount,ref:textContentRef},textWrapperProps,rest),shouldEllipse&&!noTooltip?react.createElement(tooltip_v2_component.A,Object.assign({position:"top",size:"md",ref,arrow:!0},tooltipProps,{title:function renderTooltipTitle(){return react.createElement("div",{onClick:ignore_event.V,onDoubleClick:ignore_event.V},children)}()}),react.createElement(ellipsed_text_styles.TooltipContent,{as:element,$customMaxHeight:customMaxHeight},children)):children)}));const ellipsed_text_component=EllipsedText;EllipsedText.__docgenInfo={description:"",methods:[],displayName:"EllipsedText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},element:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'div'",computed:!1}},maxLinesCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},customMaxHeight:{required:!1,tsType:{name:"number"},description:""},noTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipProps:{required:!1,tsType:{name:"TooltipV2Props"},description:""},textWrapperProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"",defaultValue:{value:"{}",computed:!1}}},composes:["HTMLAttributes"]};const ellipsed_text_stories={title:"DataDisplay/EllipsedText",component:ellipsed_text_component,excludeStories:["EllipsedText"]};var BasicTemplate=function BasicTemplate(args){return react.createElement("div",{style:{maxWidth:200}},react.createElement(ellipsed_text_component,args,args.children))},Primary={args:(0,objectSpread2.A)({},{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex nulla. Donec purus enim, elementum eu neque id, aliquet dapibus velit. Cras pulvinar accumsan risus nec convallis. Morbi luctus ut eros at auctor. Maecenas ornare aliquet risus a feugiat. Mauris ut pharetra purus, eget elementum sem. Aliquam erat volutpat. Duis ullamcorper blandit orci, id tincidunt massa fermentum ac. Pellentesque nisi orci, consectetur nec enim in, scelerisque pulvinar dui. Suspendisse potenti. Phasellus euismod tempus congue. Nullam sit amet maximus orci",maxLinesCount:2,noTooltip:!1}),render:function render(args){return react.createElement(BasicTemplate,args)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);