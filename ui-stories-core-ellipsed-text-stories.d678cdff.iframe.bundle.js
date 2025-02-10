(self.webpackChunkui=self.webpackChunkui||[]).push([[2410],{"./packages/ui/src/core/ellipsed-text/ellipsed-text.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ellipsed_text_component});var slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),tooltip_v2_component=__webpack_require__("./packages/ui/src/core/tooltip-v2/tooltip-v2.component.tsx"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),ignore_event=__webpack_require__("./packages/ui/src/utils/functions/ignore-event.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),EllipsedTextContainer=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","root")}).withConfig({componentId:"sc-53xpj8-0"})(["display:flex;"]),EllipsedTextWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","ellipsed-text-wrapper")}).withConfig({componentId:"sc-53xpj8-1"})((function(_ref){var $maxLinesCount=_ref.$maxLinesCount;return(0,styled_components_browser_esm.AH)(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:",";overflow:hidden;width:100%;",""],$maxLinesCount,1===$maxLinesCount&&(0,styled_components_browser_esm.AH)(["word-break:break-all;"]))})),TooltipContent=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","tooltip-content")}).withConfig({componentId:"sc-53xpj8-2"})((function(_ref2){var $customMaxHeight=_ref2.$customMaxHeight;return(0,styled_components_browser_esm.AH)(["max-height:",";"],$customMaxHeight?"".concat($customMaxHeight,"px"):"100%")})),SuffixTextWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Ellipsed","suffix-text-wrapper")}).withConfig({componentId:"sc-53xpj8-3"})(["word-break:normal;display:flex;justify-content:flex-end;flex-direction:column;"]);const ellipsed_text_styles=(0,apply_display_names.v)({EllipsedTextContainer,EllipsedTextWrapper,TooltipContent,SuffixTextWrapper});var _excluded=["children","element","maxLinesCount","customMaxHeight","noTooltip","forceTooltip","tooltipProps","tooltipTitle","textSuffix","textWrapperProps"],EllipsedText=(0,intrinsic_component.n)((function(_ref,ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"div":_ref$element,_ref$maxLinesCount=_ref.maxLinesCount,maxLinesCount=void 0===_ref$maxLinesCount?2:_ref$maxLinesCount,customMaxHeight=_ref.customMaxHeight,_ref$noTooltip=_ref.noTooltip,noTooltip=void 0!==_ref$noTooltip&&_ref$noTooltip,_ref$forceTooltip=_ref.forceTooltip,forceTooltip=void 0!==_ref$forceTooltip&&_ref$forceTooltip,tooltipProps=_ref.tooltipProps,tooltipTitle=_ref.tooltipTitle,textSuffix=_ref.textSuffix,_ref$textWrapperProps=_ref.textWrapperProps,textWrapperProps=void 0===_ref$textWrapperProps?{}:_ref$textWrapperProps,rest=(0,objectWithoutProperties.A)(_ref,_excluded),textContentRef=(0,react.useRef)(null),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),shouldEllipse=_useState2[0],setShouldEllipse=_useState2[1],applyEllipsisIfNeeded=(0,react.useCallback)((function(elem){if(elem&&maxLinesCount){var elemScrollHeight=elem.scrollHeight,elemScrollWidth=elem.scrollWidth,elemHeight=elem.clientHeight+1||elemScrollHeight,elemWidth=elem.clientWidth+1||elemScrollWidth;setShouldEllipse(elemScrollHeight>elemHeight||elemScrollWidth>elemWidth)}}),[maxLinesCount,customMaxHeight]),renderTooltipTitle=function renderTooltipTitle(){return react.createElement("div",{onClick:ignore_event.V,onDoubleClick:ignore_event.V},tooltipTitle||children)};(0,react.useLayoutEffect)((function(){textContentRef.current&&applyEllipsisIfNeeded(textContentRef.current)}),[element,maxLinesCount,customMaxHeight]),(0,react.useLayoutEffect)((function(){var resizeObserver=new ResizeObserver((function applyOnElemResize(){textContentRef.current&&applyEllipsisIfNeeded(textContentRef.current)}));return textContentRef.current&&resizeObserver.observe(textContentRef.current),function(){resizeObserver.disconnect()}}),[]);var renderEllipsedText=function renderEllipsedText(){return react.createElement(ellipsed_text_styles.EllipsedTextWrapper,Object.assign({$maxLinesCount:maxLinesCount,ref:textContentRef},textWrapperProps,rest),shouldEllipse&&!noTooltip||forceTooltip?react.createElement(tooltip_v2_component.A,Object.assign({position:"top",size:"md",ref,arrow:!0},tooltipProps,{title:renderTooltipTitle()}),react.createElement(ellipsed_text_styles.TooltipContent,{as:element,$customMaxHeight:customMaxHeight},children)):children)};return textSuffix&&shouldEllipse?react.createElement(ellipsed_text_styles.EllipsedTextContainer,null,renderEllipsedText(),react.createElement(ellipsed_text_styles.SuffixTextWrapper,null,function getTextSuffix(textSuffix){return textSuffix.slice(0,3)}(textSuffix))):renderEllipsedText()}));const ellipsed_text_component=EllipsedText;EllipsedText.__docgenInfo={description:"",methods:[],displayName:"EllipsedText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},element:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'div'",computed:!1}},maxLinesCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},customMaxHeight:{required:!1,tsType:{name:"number"},description:""},noTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},forceTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltipProps:{required:!1,tsType:{name:"TooltipV2Props"},description:""},textWrapperProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLDivElement"}],raw:"HTMLAttributes<HTMLDivElement>"},description:"",defaultValue:{value:"{}",computed:!1}},tooltipTitle:{required:!1,tsType:{name:"string"},description:""},textSuffix:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]}},"./packages/ui/src/core/tooltip-v2/tooltip-v2.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>tooltip_v2_component});var objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),intrinsic_component=(__webpack_require__("./node_modules/tippy.js/dist/tippy.css"),__webpack_require__("./node_modules/tippy.js/animations/scale.css"),__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts")),types_position=__webpack_require__("./packages/ui/src/core/tooltip-v2/types/position.ts"),Size_Sm="sm",types_variant=__webpack_require__("./packages/ui/src/core/tooltip-v2/types/variant.ts"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),tippy_react_esm=__webpack_require__("./node_modules/@tippyjs/react/dist/tippy-react.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),tooltip_mixin=__webpack_require__("./packages/ui/src/core/tooltip/tooltip.mixin.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),variantMixin=(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({},types_variant.K.Default,(function(_ref){var palette=_ref.theme.palette;return(0,styled_components_browser_esm.AH)(["background:",";color:",";","{color:",";}.tippy-arrow{color:",";}"],palette[color.Q.IconsPlaceholder],palette[color.Q.LinkActive],tooltip_v2_styles.TooltipText,palette[color.Q.LinkActive],palette[color.Q.IconsPlaceholder])})),types_variant.K.Warning,(function(_ref2){var palette=_ref2.theme.palette;return(0,styled_components_browser_esm.AH)(["background:",";color:",";","{color:",";}.tippy-arrow{color:",";}"],palette[color.Q.BackgroundOrange],palette[color.Q.TextWarning],tooltip_v2_styles.TooltipText,palette[color.Q.TextWarning],palette[color.Q.BackgroundOrange])})),types_variant.K.Info,(function(_ref3){var palette=_ref3.theme.palette;return(0,styled_components_browser_esm.AH)(["background:",";color:",";","{color:",";}.tippy-arrow{color:",";}"],palette[color.Q.BackgroundBlue],palette[color.Q.TextInfo],tooltip_v2_styles.TooltipText,palette[color.Q.TextInfo],palette[color.Q.BackgroundBlue])})),types_variant.K.Error,(function(_ref4){var palette=_ref4.theme.palette;return(0,styled_components_browser_esm.AH)(["background:",";color:",";","{color:",";}.tippy-arrow{color:",";}"],palette[color.Q.BackgroundRedLight],palette[color.Q.TextError],tooltip_v2_styles.TooltipText,palette[color.Q.TextError],palette[color.Q.BackgroundRedLight])})),TooltipV2=(0,styled_components_browser_esm.Ay)(tippy_react_esm.Ay).attrs({className:(0,generate_class_names.e)("TooltipV2","root")}).withConfig({componentId:"sc-4j2dcr-0"})((function(_ref){var $variant=_ref.$variant,_ref$$size=_ref.$size,$size=void 0===_ref$$size?Size_Sm:_ref$$size,theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["display:inline-flex;align-items:center;justify-content:center;min-width:54px;min-height:20px;word-break:break-word;border-radius:",";",";",";.tippy-content{padding:0;","}"],theme.shape.borderRadius[border_radius_size.M.Md],variantMixin[$variant],tooltip_mixin.U[$size],tooltip_mixin.I[$size])})),TooltipText=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("TooltipV2","content")}).withConfig({componentId:"sc-4j2dcr-1"})(["display:flex;align-items:center;"]);const tooltip_v2_styles=(0,apply_display_names.v)({TooltipV2,TooltipText});var _excluded=["children","arrow","warning","enableHover","hide","enterDelay","leaveDelay","offsetX","offsetY","title","position","info","size","variant"],tooltip_v2_component_TooltipV2=(0,intrinsic_component.n)((function(_ref,ref){var children=_ref.children,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow||_ref$arrow,_ref$warning=_ref.warning,warning=void 0!==_ref$warning&&_ref$warning,_ref$enableHover=_ref.enableHover,enableHover=void 0===_ref$enableHover||_ref$enableHover,_ref$hide=_ref.hide,hide=void 0!==_ref$hide&&_ref$hide,_ref$enterDelay=_ref.enterDelay,enterDelay=void 0===_ref$enterDelay?0:_ref$enterDelay,_ref$leaveDelay=_ref.leaveDelay,leaveDelay=void 0===_ref$leaveDelay?0:_ref$leaveDelay,_ref$offsetX=_ref.offsetX,offsetX=void 0===_ref$offsetX?0:_ref$offsetX,_ref$offsetY=_ref.offsetY,offsetY=void 0===_ref$offsetY?10:_ref$offsetY,title=_ref.title,_ref$position=_ref.position,position=void 0===_ref$position?types_position.y.Top:_ref$position,_ref$info=_ref.info,info=void 0!==_ref$info&&_ref$info,_ref$size=_ref.size,size=void 0===_ref$size?Size_Sm:_ref$size,_ref$variant=_ref.variant,variant=void 0===_ref$variant?types_variant.K.Default:_ref$variant,rest=(0,objectWithoutProperties.A)(_ref,_excluded);if(hide)return children;var childrenArray=react.Children.toArray(children);return childrenArray.length>1?(console.error("TooltipV2 only supports a single child."),null):react.isValidElement(childrenArray[0])?react.createElement(tooltip_v2_styles.TooltipV2,Object.assign({ref,placement:position,content:react.createElement(tooltip_v2_styles.TooltipText,null,title),interactive:enableHover,arrow,delay:[enterDelay,leaveDelay],$variant:warning&&types_variant.K.Warning||info&&types_variant.K.Info||variant,$size:size||Size_Sm,animation:"scale",offset:[offsetX,offsetY],appendTo:document.body},rest),children):(console.error("TooltipV2 only supports valid React elements."),null)}));const tooltip_v2_component=tooltip_v2_component_TooltipV2;tooltip_v2_component_TooltipV2.__docgenInfo={description:"",methods:[],displayName:"TooltipV2",props:{position:{required:!1,tsType:{name:"Values",elements:[{name:"Position"}],raw:"Values<typeof Position>"},description:"",defaultValue:{value:"'top'",computed:!1}},size:{required:!1,tsType:{name:"Values",elements:[{name:"Size"}],raw:"Values<typeof Size>"},description:"",defaultValue:{value:"'sm'",computed:!1}},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},enableHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},warning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},info:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hide:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enterDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},leaveDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},variant:{required:!1,tsType:{name:"Values",elements:[{name:"Variant"}],raw:"Values<typeof Variant>"},description:"",defaultValue:{value:"'default'",computed:!1}}},composes:["Omit"]}},"./packages/ui/src/core/tooltip-v2/types/position.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>Position});var Position={TopStart:"top-start",Top:"top",TopEnd:"top-end",BottomStart:"bottom-start",Bottom:"bottom",BottomEnd:"bottom-end",LeftStart:"left-start",Left:"left",LeftEnd:"left-end",RightStart:"right-start",Right:"right",RightEnd:"right-end"}},"./packages/ui/src/core/tooltip-v2/types/variant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>Variant});var Variant={Default:"default",Warning:"warning",Info:"info",Error:"error"}},"./packages/ui/src/core/tooltip/tooltip.mixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>fontTooltipMixin,U:()=>sizeTooltipMixin});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/core/tooltip/types/size.ts"),fontTooltipMixin=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_types__WEBPACK_IMPORTED_MODULE_1__.o.Sm,(function(_ref){return _ref.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextExtraSmall]})),_types__WEBPACK_IMPORTED_MODULE_1__.o.Md,(function(_ref2){return _ref2.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextSmall]})),_types__WEBPACK_IMPORTED_MODULE_1__.o.Lg,(function(_ref3){return _ref3.theme.typography.font[_utils_types_typography__WEBPACK_IMPORTED_MODULE_2__.B.TextSmall]})),sizeTooltipMixin=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)((0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},_types__WEBPACK_IMPORTED_MODULE_1__.o.Sm,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:4px 8px;"])),_types__WEBPACK_IMPORTED_MODULE_1__.o.Md,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:6px 12px;"])),_types__WEBPACK_IMPORTED_MODULE_1__.o.Lg,(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding:12px 16px;"]))},"./packages/ui/src/core/tooltip/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>Size});var Size={Sm:"sm",Md:"md",Lg:"lg"}},"./packages/ui/src/utils/functions/apply-display-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>applyDisplayNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function applyDisplayNames(styledObject){return Object.keys(styledObject).reduce((function(newStyledObject,styledComponentName){var styledComponent=styledObject[styledComponentName];return styledComponent.displayName="".concat(styledComponentName),Object.assign(newStyledObject,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)({},styledComponentName,styledComponent))}),{})}},"./packages/ui/src/utils/functions/generate-class-names.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>generateClassNames});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function generateClassNames(componentName,subClassNames){var generateClassName=function generateClassName(subClassName){return"Sfx".concat(componentName).concat(subClassName?"-".concat(subClassName):"")},classNameArray=[];return subClassNames&&(Array.isArray(subClassNames)?classNameArray.push.apply(classNameArray,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.A)(subClassNames.filter((function(subClassName){return"string"==typeof subClassName})).map((function(subClassName){return generateClassName(subClassName)})))):"string"==typeof subClassNames&&classNameArray.push(generateClassName(subClassNames))),0===classNameArray.length&&classNameArray.push(generateClassName()),classNameArray.join(" ")}},"./packages/ui/src/utils/functions/ignore-event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>ignoreEvent});var ignoreEvent=function ignoreEvent(event){var tagName=event.target.tagName;"INPUT"!==tagName&&"TEXTAREA"!==tagName?(event.preventDefault(),event.stopPropagation()):event.stopPropagation()}},"./packages/ui/src/utils/functions/intrinsic-component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>intrinsicComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function intrinsicComponent(render,displayName){var component=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);return component.displayName=displayName||render.name,component}},"./packages/ui/stories/shared/ForwardRefNote.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div.withConfig({componentId:"sc-9y7ked-0"})(["display:flex;gap:4px;padding:16px;margin:16px 0;border:1px solid;color:#303741;border-color:#e8eaee;border-radius:12px;box-shadow:rgba(0,0,0,0.1) 0 1px 3px 0;"]),Code=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.code.withConfig({componentId:"sc-9y7ked-1"})(["height:fit-content;background-color:#f7fafc;color:#2e3438e6;border:1px solid #ecf4f9;border-radius:3px;padding:2px 5px;margin-bottom:4px;"]),ForwardRefNote=function ForwardRefNote(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,"The ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(Code,null,"ref")," is forwarded to the root element.")};const __WEBPACK_DEFAULT_EXPORT__=ForwardRefNote;ForwardRefNote.__docgenInfo={description:"",methods:[],displayName:"ForwardRefNote"}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/ui/stories/core/ellipsed-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ellipsed_text_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),ellipsed_text_component=__webpack_require__("./packages/ui/src/core/ellipsed-text/ellipsed-text.component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ForwardRefNote=__webpack_require__("./packages/ui/stories/shared/ForwardRefNote.tsx");function _createMdxContent(props){const _components={h2:"h2",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Pd,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic-ellipsed-text",children:"Basic ellipsed text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Primary,withToolbar:!0,layout:"centered"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{sort:"alpha"}),"\n",(0,jsx_runtime.jsx)(ForwardRefNote.A,{})]})}const ellipsed_text_stories={title:"DataDisplay/EllipsedText",component:ellipsed_text_component.A,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)},subtitle:"Display a text with ellipsis."}},argTypes:{textSuffix:{description:"The text suffix is displayed after the ellipsis only when the text is truncated, and it is limited to a maximum of 3 characters."},maxLinesCount:{description:"The maximum number of lines to display."},noTooltip:{description:"Whether to display the tooltip."},children:{description:"The text to display."},element:{description:"The html tag to pass to `as` attribute."},textWrapperProps:{description:"The props to pass to the text wrapper."},tooltipProps:{description:"The props to pass to the tooltip."},tooltipTitle:{description:"The title to display in the tooltip."},customMaxHeight:{description:"The custom maximum height to apply to ellipsed text."}}};var Primary={args:(0,objectSpread2.A)({},{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget ex nulla. Donec purus enim, elementum eu neque id, aliquet dapibus velit. Cras pulvinar accumsan risus nec convallis. Morbi luctus ut eros at auctor. Maecenas ornare aliquet risus a feugiat. Mauris ut pharetra purus, eget elementum sem. Aliquam erat volutpat. Duis ullamcorper blandit orci, id tincidunt massa fermentum ac. Pellentesque nisi orci, consectetur nec enim in, scelerisque pulvinar dui. Suspendisse potenti. Phasellus euismod tempus congue. Nullam sit amet maximus orci",maxLinesCount:2,noTooltip:!1}),render:function render(args){return react.createElement("div",{style:{maxWidth:200}},react.createElement(ellipsed_text_component.A,args,args.children))}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <div style={{\n    maxWidth: 200\n  }}>\r\n      <EllipsedText {...args}>{args.children}</EllipsedText>\r\n    </div>\n}",...Primary.parameters?.docs?.source}}}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);