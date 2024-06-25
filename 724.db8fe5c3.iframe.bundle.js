"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[724],{"./packages/ui/src/core/form-hint/form-hint.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_form_hint_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/form-hint/form-hint.styles.ts"),_excluded=["error"],FormHint=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_hint_styles__WEBPACK_IMPORTED_MODULE_3__.A.FormHint,Object.assign({ref,$error:error},rest))}));const __WEBPACK_DEFAULT_EXPORT__=FormHint;FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint",props:{error:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/ui/src/core/form-hint/form-hint.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>form_hint_styles});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),input_size=__webpack_require__("./packages/ui/src/utils/types/size/input-size.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),font_variant=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),sizeHintMixin=(0,defineProperty.A)((0,defineProperty.A)({},input_size.Y.Sm,(function(_ref){var font=_ref.theme.typography.font;return(0,styled_components_browser_esm.AH)(font[font_variant.B.LabelExtraSmallUp])})),input_size.Y.Md,(function(_ref2){var font=_ref2.theme.typography.font;return(0,styled_components_browser_esm.AH)(font[font_variant.B.LabelSmall])})),FormHint=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("FormHint","root")}).withConfig({componentId:"sc-1vu99sv-0"})((function(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?input_size.Y.Md:_ref$size,_ref$$error=_ref.$error,$error=void 0!==_ref$$error&&_ref$$error,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["display:flex;align-items:center;color:",";"," ",""],$error?theme.palette[color.Q.Error]:theme.palette[color.Q.TextSecondary],disabled&&(0,styled_components_browser_esm.AH)(["color:",";"],theme.palette[color.Q.ButtonDisabledText]),sizeHintMixin[size])}));const form_hint_styles=(0,apply_display_names.v)({FormHint})},"./packages/ui/src/core/input-group/input-group.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_icons_success__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/icons/src/success.tsx"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_label__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/ui/src/core/label/label.component.tsx"),_input__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/ui/src/core/input/input.component.tsx"),_textarea__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/ui/src/core/textarea/textarea.component.tsx"),_form_hint__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/ui/src/core/form-hint/form-hint.component.tsx"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/core/input-group/types/type.ts"),_input_group_styles__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/ui/src/core/input-group/input-group.styles.ts"),_excluded=["type","error","label","hint","LabelProps","InputProps","inputProps","inputRef","TextareaProps","readOnly","disabled","size","value","hideCopyIcon","copyTextMessage","copySuccessIcon","placeholder","fullWidth","onChange"],InputGroup=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$type=_ref.type,type=void 0===_ref$type?_types__WEBPACK_IMPORTED_MODULE_2__.Z.Input:_ref$type,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,label=_ref.label,hint=_ref.hint,LabelPropsData=_ref.LabelProps,InputProps=_ref.InputProps,inputProps=_ref.inputProps,inputRef=_ref.inputRef,TextareaPropsData=_ref.TextareaProps,_ref$readOnly=_ref.readOnly,readOnly=void 0!==_ref$readOnly&&_ref$readOnly,disabled=_ref.disabled,size=_ref.size,value=_ref.value,hideCopyIcon=_ref.hideCopyIcon,_ref$copyTextMessage=_ref.copyTextMessage,copyTextMessage=void 0===_ref$copyTextMessage?"Copied!":_ref$copyTextMessage,_ref$copySuccessIcon=_ref.copySuccessIcon,copySuccessIcon=void 0===_ref$copySuccessIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_success__WEBPACK_IMPORTED_MODULE_3__.A,{size:16}):_ref$copySuccessIcon,placeholder=_ref.placeholder,fullWidth=_ref.fullWidth,_onChange=_ref.onChange,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_group_styles__WEBPACK_IMPORTED_MODULE_10__.A.InputGroup,{ref},function renderLabel(){return label?"function"==typeof label?label({error}):"object"===(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__.A)(label)?label:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label__WEBPACK_IMPORTED_MODULE_6__.A,Object.assign({size,error,disabled},LabelPropsData||{}),label):null}(),function renderField(){var fieldProps={value,readOnly,disabled,size,error,placeholder,hideCopyIcon,copyTextMessage,copySuccessIcon,fullWidth};return type===_types__WEBPACK_IMPORTED_MODULE_2__.Z.Input?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input__WEBPACK_IMPORTED_MODULE_7__.A,Object.assign({},fieldProps,rest,inputProps,{InputProps,ref:inputRef,readOnly,disabled,onChange:_onChange})):type===_types__WEBPACK_IMPORTED_MODULE_2__.Z.Textarea?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_textarea__WEBPACK_IMPORTED_MODULE_8__.A,Object.assign({},fieldProps,TextareaPropsData||{},{onChange:function onChange(event){return _onChange(event)}})):null}(),function renderHint(){return hint?"function"==typeof hint?hint({error}):"object"===(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__.A)(hint)?hint:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_hint__WEBPACK_IMPORTED_MODULE_9__.A,{size,error,disabled},hint):null}())}));const __WEBPACK_DEFAULT_EXPORT__=InputGroup;InputGroup.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{size:{required:!1,tsType:{name:"Values",elements:[{name:"InputSize"}],raw:"Values<typeof InputSize>"},description:""},label:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: LabelAndHintType) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},hint:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: LabelAndHintType) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},type:{required:!1,tsType:{name:"Values",elements:[{name:"Type"}],raw:"Values<typeof Type>"},description:"",defaultValue:{value:"'input'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},hideCopyIcon:{required:!1,tsType:{name:"boolean"},description:""},copyTextMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copied!'",computed:!1}},copySuccessIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<Success size={16} />",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"any"},description:""},LabelProps:{required:!1,tsType:{name:"LabelProps"},description:""},InputProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},inputProps:{required:!1,tsType:{name:"InputProps"},description:""},inputRef:{required:!1,tsType:{name:"union",raw:"| ((instance: HTMLInputElement | null | undefined) => void)\r\n| React.MutableRefObject<HTMLInputElement | null>\r\n| null",elements:[{name:"unknown"},{name:"ReactMutableRefObject",raw:"React.MutableRefObject<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},{name:"null"}]},description:""},TextareaProps:{required:!1,tsType:{name:"TextareaProps"},description:""}},composes:["Omit"]}},"./packages/ui/src/core/input-group/input-group.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),_utils_functions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),_label_label_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/label/label.styles.ts"),_form_hint_form_hint_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/core/form-hint/form-hint.styles.ts"),InputGroup=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("InputGroup","root")}).withConfig({componentId:"sc-zhtjwh-0"})(["","{margin-top:4px;}","{margin-bottom:4px;}"],_form_hint_form_hint_styles__WEBPACK_IMPORTED_MODULE_2__.A.FormHint,_label_label_styles__WEBPACK_IMPORTED_MODULE_3__.A.Label);const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.v)({InputGroup})},"./packages/ui/src/core/input-group/types/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Type});var Type={Input:"input",Textarea:"textarea"}},"./packages/ui/src/core/label/label.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/core/label/types/type.ts"),_label_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/ui/src/core/label/label.styles.ts"),_excluded=["children","iconStart","iconEnd","error","disabled","size","type"],Label=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var children=_ref.children,iconStart=_ref.iconStart,iconEnd=_ref.iconEnd,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,disabled=_ref.disabled,size=_ref.size,_ref$type=_ref.type,type=void 0===_ref$type?_types__WEBPACK_IMPORTED_MODULE_2__.Z.Default:_ref$type,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded),textRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useState,2),isEllipsisActive=_useState2[0],setIsEllipsisActive=_useState2[1],renderIcon=function renderIcon(icon,end){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label_styles__WEBPACK_IMPORTED_MODULE_5__.A.Icon,{$end:end},"function"==typeof icon?icon({size:"md"===size?14:12}):icon)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label_styles__WEBPACK_IMPORTED_MODULE_5__.A.Label,Object.assign({ref,$error:error,disabled,size,type},rest),iconStart&&renderIcon(iconStart,!1),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label_styles__WEBPACK_IMPORTED_MODULE_5__.A.Text,{title:function getTextTooltip(){if("string"==typeof children&&isEllipsisActive)return children}(),onMouseOver:function handleTextTooltip(){var _textRef$current,_textRef$current2;null!==textRef.current&&textRef.current&&setIsEllipsisActive((null==textRef||null===(_textRef$current=textRef.current)||void 0===_textRef$current?void 0:_textRef$current.offsetWidth)<(null==textRef||null===(_textRef$current2=textRef.current)||void 0===_textRef$current2?void 0:_textRef$current2.scrollWidth))},ref:textRef},children),iconEnd&&renderIcon(iconEnd,!0))}));const __WEBPACK_DEFAULT_EXPORT__=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{type:{required:!1,tsType:{name:"Values",elements:[{name:"Type"}],raw:"Values<typeof Type>"},description:"",defaultValue:{value:"'default'",computed:!1}},iconStart:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: IconProps) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},iconEnd:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: IconProps) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"Values",elements:[{name:"InputSize"}],raw:"Values<typeof InputSize>"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]}},"./packages/ui/src/core/label/label.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),_utils_functions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),_utils_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/utils/types/size/input-size.ts"),_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),_input_input_mixin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/core/input/input.mixin.ts"),Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("Label","root")}).withConfig({componentId:"sc-16k2ql4-0"})((function(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?_utils_types__WEBPACK_IMPORTED_MODULE_2__.Y.Md:_ref$size,_ref$$error=_ref.$error,$error=void 0!==_ref$$error&&_ref$$error,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,htmlFor=_ref.htmlFor,theme=_ref.theme;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["display:flex;align-items:center;color:",";font-style:normal;font-weight:normal;"," "," cursor:",";",";"],theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.TextSecondary],disabled&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["color:",";","{color:",";}"],theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.ButtonDisabledText],Icon,theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.IconsMuted]),_input_input_mixin__WEBPACK_IMPORTED_MODULE_4__.v4[size],htmlFor&&"pointer",$error&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["color:"," !important;"],theme.palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.Error]))})),Text=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("Label","text")}).withConfig({componentId:"sc-16k2ql4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),Icon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.span.attrs({className:(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.e)("Label","Icon")}).withConfig({componentId:"sc-16k2ql4-2"})((function(_ref2){var palette=_ref2.theme.palette,_ref2$$end=_ref2.$end,$end=void 0!==_ref2$$end&&_ref2$$end;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["display:flex;",";color:",";"],$end?"margin-left: 4px":"margin-right: 4px",palette[_utils_types_palette__WEBPACK_IMPORTED_MODULE_3__.Q.IconsSecondary])}));const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.v)({Label,Icon,Text})},"./packages/ui/src/core/label/types/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Type});var Type={Default:"default",Localization:"localization"}},"./packages/ui/src/core/menu-item/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Size});var Size={Sm:"sm",Md:"md"}},"./packages/ui/src/core/textarea/textarea.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>textarea_component});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),copy_outline=__webpack_require__("./packages/icons/src/copy-outline.tsx"),success=__webpack_require__("./packages/icons/src/success.tsx"),on_click_by_mouse_down=__webpack_require__("./packages/ui/src/utils/functions/on-click-by-mouse-down.ts"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),use_fork_ref=__webpack_require__("./packages/ui/src/utils/functions/use-fork-ref.ts"),input_size=__webpack_require__("./packages/ui/src/utils/types/size/input-size.ts"),input_utils=__webpack_require__("./packages/ui/src/core/input/input.utils.ts"),button_utils=__webpack_require__("./packages/ui/src/core/button/button.utils.ts"),input_styles=__webpack_require__("./packages/ui/src/core/input/input.styles.ts"),types_size=__webpack_require__("./packages/ui/src/core/menu-item/types/size.ts"),button_component=__webpack_require__("./packages/ui/src/core/button/button.component.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),font_variant=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),errorMixin=function errorMixin(_ref){var palette=_ref.theme.palette;return(0,styled_components_browser_esm.AH)(["background:"," !important;border:1px solid "," !important;"],palette[color.Q.BackgroundSecondary],palette[color.Q.Error])},heightTextAreaMixin=(0,defineProperty.A)((0,defineProperty.A)({},input_size.Y.Sm,(function(){return(0,styled_components_browser_esm.AH)(["height:136px;"])})),input_size.Y.Md,(function(){return(0,styled_components_browser_esm.AH)(["height:152px;"])})),sizeTextAreaMixin=(0,defineProperty.A)((0,defineProperty.A)({},input_size.Y.Sm,(function(_ref2){var font=_ref2.theme.typography.font;return(0,styled_components_browser_esm.AH)(["padding:8px 12px;",""],font[font_variant.B.InputMd])})),input_size.Y.Md,(function(_ref3){var font=_ref3.theme.typography.font;return(0,styled_components_browser_esm.AH)(["padding:8px 16px;",""],font[font_variant.B.InputLg])})),Textarea=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Textarea","root")}).withConfig({componentId:"sc-1usif6k-0"})((function(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?input_size.Y.Md:_ref$size,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,_ref$readOnly=_ref.readOnly,readOnly=void 0!==_ref$readOnly&&_ref$readOnly,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$autoSize=_ref.autoSize,autoSize=void 0!==_ref$autoSize&&_ref$autoSize,theme=_ref.theme;return(0,styled_components_browser_esm.AH)(["position:relative;display:inline-flex;flex-direction:column;align-items:flex-end;justify-content:space-between;cursor:text;box-sizing:border-box;transition:all 100ms ease-out;width:",";pointer-events:",";background-color:",";border-radius:",";border:1px solid ",";color:",";"," "," &:hover{color:",";}"," ",""],fullWidth?"100%":"300px",disabled?"none":"auto",(0,input_utils.Y9)(readOnly,disabled),theme.shape.borderRadius[border_radius_size.M.Md],(0,input_utils.Op)(readOnly,disabled),disabled?theme.palette[color.Q.TextPlaceholder]:theme.palette[color.Q.TextPrimary],heightTextAreaMixin[size],!readOnly&&!disabled&&(0,styled_components_browser_esm.AH)(["&:focus-within{background-color:","!important;border:1px solid ",";&:hover{border:1px solid ",";}}&:hover{background-color:",";border:1px solid ",";}"],theme.palette[color.Q.BackgroundSecondary],theme.palette[color.Q.AccentStateless],theme.palette[color.Q.AccentStateless],theme.palette[color.Q.BackgroundStateless],theme.palette[color.Q.BordersPrimaryHover]),(0,input_utils.VM)(readOnly,disabled),error&&errorMixin,autoSize&&(0,styled_components_browser_esm.AH)(["width:auto;height:auto;"]))})),Base=styled_components_browser_esm.Ay.textarea.attrs({className:(0,generate_class_names.e)("Textarea","Base")}).withConfig({componentId:"sc-1usif6k-1"})((function(_ref2){var palette=_ref2.theme.palette,_ref2$readOnly=_ref2.readOnly,readOnly=void 0!==_ref2$readOnly&&_ref2$readOnly,_ref2$size=_ref2.size,size=void 0===_ref2$size?input_size.Y.Md:_ref2$size;return(0,styled_components_browser_esm.AH)(["display:block;width:100%;height:100%;color:inherit;outline:none;resize:none;min-width:0;margin:0;padding:0;border:0;background-color:transparent;outline:none;font-size:inherit;line-height:inherit;color:inherit;font-weight:inherit;font-family:inherit;box-sizing:border-box;flex:1;"," ",";&::placeholder{color:",";}::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{width:8px;}::-webkit-scrollbar-thumb{background:",";border-radius:8px;border:4px solid ",";}"],readOnly&&"padding-bottom: 0px;",sizeTextAreaMixin[size],palette[color.Q.TextPlaceholder],palette[color.Q.BorderPrimaryStateless],palette[color.Q.BackgroundStateless])})),ActionsButtonsWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Textarea","ActionsButtonsWrapper")}).withConfig({componentId:"sc-1usif6k-2"})((function(_ref3){var _ref3$size=_ref3.size,size=void 0===_ref3$size?input_size.Y.Md:_ref3$size;return(0,styled_components_browser_esm.AH)(["display:flex;align-items:center;width:100%;column-gap:12px;box-sizing:border-box;",";.SfxButton-Label{font-weight:500;}"],sizeTextAreaMixin[size])})),CopyIcon=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("Textarea","CopyIcon")}).withConfig({componentId:"sc-1usif6k-3"})((function(_ref4){var palette=_ref4.theme.palette;return(0,styled_components_browser_esm.AH)(["cursor:pointer;color:",";margin-left:auto;"],palette[color.Q.IconsPrimary])}));const textarea_styles=(0,apply_display_names.v)({Textarea,CopyIcon,Base,ActionsButtonsWrapper});var _excluded=["fullWidth","size","value","readOnly","disabled","error","cols","rows","copyTextMessage","copySuccessIcon","showActionButton","showClearButton","hideCopyIcon","disableActionButton","isActionButtonLoading","actionButtonLabel","clearAllButtonLabel","onClickActionButton","onClear","onChange"],textarea_component_Textarea=(0,intrinsic_component.n)((function(_ref,ref){var _inputRef$current,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,_ref$size=_ref.size,size=void 0===_ref$size?input_size.Y.Md:_ref$size,value=_ref.value,_ref$readOnly=_ref.readOnly,readOnly=void 0!==_ref$readOnly&&_ref$readOnly,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$error=_ref.error,error=void 0!==_ref$error&&_ref$error,cols=_ref.cols,rows=_ref.rows,_ref$copyTextMessage=_ref.copyTextMessage,copyTextMessage=void 0===_ref$copyTextMessage?"Copied!":_ref$copyTextMessage,_ref$copySuccessIcon=_ref.copySuccessIcon,copySuccessIcon=void 0===_ref$copySuccessIcon?react.createElement(success.A,{size:16}):_ref$copySuccessIcon,_ref$showActionButton=_ref.showActionButton,showActionButton=void 0!==_ref$showActionButton&&_ref$showActionButton,_ref$showClearButton=_ref.showClearButton,showClearButton=void 0!==_ref$showClearButton&&_ref$showClearButton,_ref$hideCopyIcon=_ref.hideCopyIcon,hideCopyIcon=void 0===_ref$hideCopyIcon||_ref$hideCopyIcon,_ref$disableActionBut=_ref.disableActionButton,disableActionButton=void 0!==_ref$disableActionBut&&_ref$disableActionBut,_ref$isActionButtonLo=_ref.isActionButtonLoading,isActionButtonLoading=void 0!==_ref$isActionButtonLo&&_ref$isActionButtonLo,_ref$actionButtonLabe=_ref.actionButtonLabel,actionButtonLabel=void 0===_ref$actionButtonLabe?"Action":_ref$actionButtonLabe,_ref$clearAllButtonLa=_ref.clearAllButtonLabel,clearAllButtonLabel=void 0===_ref$clearAllButtonLa?"Clear all":_ref$clearAllButtonLa,onClickActionButton=_ref.onClickActionButton,onClear=_ref.onClear,onChange=_ref.onChange,rest=(0,objectWithoutProperties.A)(_ref,_excluded),inputRef=(0,react.useRef)(null),textareaRef=(0,use_fork_ref.N)(inputRef,ref),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.A)(_useState,2),isHovering=_useState2[0],setIsHovering=_useState2[1],_useState3=(0,react.useState)({}),_useState4=(0,slicedToArray.A)(_useState3,2),overflowStyles=_useState4[0],setOverflowStyles=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.A)(_useState5,2),showCopyMessage=_useState6[0],setShowCopyMessage=_useState6[1],_useState7=(0,react.useState)(value),_useState8=(0,slicedToArray.A)(_useState7,2),inputValue=_useState8[0],setInputValue=_useState8[1],showCopyIcon=!(!isHovering||!(null==inputValue?void 0:inputValue.length)||hideCopyIcon),actionButtonHandler=function actionButtonHandler(event){onClickActionButton&&onClickActionButton(event)},clearAllHandler=function clearAllHandler(event){setInputValue(""),onClear&&onClear(event)},copyIconHandler=function copyIconHandler(){showCopyIcon&&(0,input_utils.PA)(inputValue,setShowCopyMessage)};(0,react.useEffect)((function(){var current=inputRef.current;current&&current.scrollHeight>current.clientHeight&&setOverflowStyles({paddingRight:size===types_size.o.Md?"4px":"0px"})}),[null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.scrollHeight,size]),(0,react.useEffect)((function(){setTimeout((function(){return setShowCopyMessage(!1)}),2e3)}),[showCopyMessage]),(0,react.useEffect)((function(){setInputValue(value)}),[value]);return react.createElement(textarea_styles.Textarea,{size,value:inputValue,onMouseEnter:function handleEntering(){setTimeout((function(){setIsHovering(!0)}),150)},onMouseLeave:function handleLeaving(){setTimeout((function(){setIsHovering(!1)}),200)},readOnly,disabled,fullWidth:Boolean(fullWidth),error,autoSize:Boolean(cols)||Boolean(rows)},react.createElement(textarea_styles.Base,Object.assign({},rest,{value:inputValue,ref:textareaRef,size,onChange:function onChangeHandler(event){setInputValue(event.target.value),onChange&&onChange(event)},readOnly,disabled,style:(0,objectSpread2.A)({},overflowStyles)})),(showActionButton||showClearButton||showCopyIcon)&&react.createElement(textarea_styles.ActionsButtonsWrapper,{size},showActionButton&&react.createElement(button_component.A,{color:"link-primary",size:"sm",disabled:disableActionButton,loading:isActionButtonLoading,onMouseDown:function onMouseDown(event){return(0,on_click_by_mouse_down.I)(event,actionButtonHandler)}},actionButtonLabel),showClearButton&&react.createElement(button_component.A,{color:"link-secondary",size:"sm",onMouseDown:function onMouseDown(event){return(0,on_click_by_mouse_down.I)(event,clearAllHandler)}},clearAllButtonLabel),showCopyIcon&&react.createElement(textarea_styles.CopyIcon,{size,onMouseDown:function onMouseDown(event){return(0,on_click_by_mouse_down.I)(event,copyIconHandler)}},react.createElement(copy_outline.A,{size:(0,button_utils.J)(size)}),showCopyMessage&&function renderCopyText(){return react.createElement(input_styles.A.NotificationBox,{size,isTextarea:!0},react.createElement(input_styles.A.NotificationIcon,null,copySuccessIcon),react.createElement(input_styles.A.NotificationText,null,copyTextMessage))}())))}));const textarea_component=textarea_component_Textarea;textarea_component_Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"any"},description:""},size:{required:!1,tsType:{name:"Values",elements:[{name:"InputSize"}],raw:"Values<typeof InputSize>"},description:"",defaultValue:{value:"'md'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActionButtonLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},copyTextMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Copied!'",computed:!1}},copySuccessIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<Success size={16} />",computed:!1}},cols:{required:!1,tsType:{name:"number"},description:""},rows:{required:!1,tsType:{name:"number"},description:""},showActionButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showClearButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideCopyIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actionButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Action'",computed:!1}},clearAllButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clear all'",computed:!1}},onClickActionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""}}}},"./packages/ui/src/utils/functions/on-click-by-mouse-down.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>onClickByMouseDown});var onClickByMouseDown=function onClickByMouseDown(event,callback){event.preventDefault(),0===event.button&&callback&&callback(event)}},"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{A:()=>_typeof})}}]);