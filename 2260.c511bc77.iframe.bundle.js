"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[2260],{"./packages/icons/src/arrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>Arrow});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/icons/src/utils/functions/intrinsic-component.ts"),_excluded=["stroke","size"],Arrow=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(_ref,ref){var _ref$stroke=_ref.stroke,stroke=void 0===_ref$stroke?"currentColor":_ref$stroke,_ref$size=_ref.size,size=void 0===_ref$size?10:_ref$size,rest=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({ref,width:size*(51/56),height:size,viewBox:"0 0 51 56",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.2754 3L37.2754 27.0741L12.2754 53",stroke,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"}))}));const __WEBPACK_DEFAULT_EXPORT__=Arrow;Arrow.__docgenInfo={description:"",methods:[],displayName:"Arrow",props:{stroke:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},size:{defaultValue:{value:"10",computed:!1},required:!1}}}},"./packages/ui/src/core/menu-item/menu-item.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_scaleflex_icons_arrow__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icons/src/arrow.tsx"),_utils_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),_menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/src/core/menu/menu.component.tsx"),_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/core/menu-item/menu-item.styles.ts"),MenuItem=(0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.n)((function(props,ref){var list=props.list,children=props.children,disableHover=props.disableHover,disabled=props.disabled,enableScrollIntoView=props.enableScrollIntoView,_props$isFocused=props.isFocused,isFocused=void 0!==_props$isFocused&&_props$isFocused,active=props.active,value=props.value,dividerStyle=props.dividerStyle,menuItemRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),_React$useState2=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.A)(_React$useState,2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),_React$useState4=(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.A)(_React$useState3,2),selectedIds=_React$useState4[0],setSelectedIds=_React$useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){(active||isFocused)&&enableScrollIntoView&&function handleScroll(){var _menuItemRef$current;null===(_menuItemRef$current=menuItemRef.current)||void 0===_menuItemRef$current||_menuItemRef$current.scrollIntoView({behavior:"auto",block:"nearest"})}()}),[active,isFocused]);var handleSelectedId=function handleSelectedId(ev,selected,depthLevel){var updatedArray=selectedIds.slice(0);updatedArray[depthLevel]=selected,setSelectedIds(updatedArray),function handleOpenMenu(event){setAnchorEl(event.currentTarget)}(ev)};return list?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,function renderItems(options){var depthLevel=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return options.map((function(option){var subMenu,hasOptions=option.subList&&option.subList.length>0;if(selectedIds[depthLevel]===option.key&&hasOptions){var newDepthLevel=depthLevel+1;subMenu=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu__WEBPACK_IMPORTED_MODULE_3__.A,Object.assign({key:option.key,position:"right",open:Boolean(anchorEl),anchorEl,enableOverlay:!1},option.subMenuProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem,Object.assign({list:option.subList,depth:newDepthLevel},props)))}return"divider"===option.content?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItemWrapper,{divider:!0,key:option.key,style:option.dividerStyle}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItemWrapper,Object.assign({disabled:!1,key:option.key,onMouseLeave:function onMouseLeave(){return function handleCloseSubMenu(depthLevel){var updatedArray=selectedIds.slice(0);updatedArray[depthLevel]="",setSelectedIds(updatedArray),setAnchorEl(null)}(depthLevel)}},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItem,Object.assign({},props,{className:option.className,ref,$isFocused:isFocused,$active:Boolean(option.active),onClick:function onClick(event){var _option$onClick;return null===(_option$onClick=option.onClick)||void 0===_option$onClick?void 0:_option$onClick.call(option,(0,D_projects_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__.A)({event},props))},onMouseEnter:function onMouseEnter(ev){return handleSelectedId(ev,option.key,depthLevel)},disableHover:disableHover||option.disableHover}),option.prefix&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuPrefix,null,"function"==typeof option.prefix?option.prefix(props):option.prefix),option.content&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuContent,null,"function"==typeof option.content?option.content(props):option.content),(option.suffix||option.subList)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuSuffix,null,"function"==typeof option.suffix?option.suffix(props):option.suffix,option.subList&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scaleflex_icons_arrow__WEBPACK_IMPORTED_MODULE_6__.A,{size:10,color:"#768A9F"}))),subMenu)}))}(list,0)):"divider"===value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItemWrapper,{divider:!0,key:value,style:dividerStyle}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItemWrapper,{disabled:Boolean(disabled)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_menu_item_styles__WEBPACK_IMPORTED_MODULE_4__.A.MenuItem,Object.assign({},props,{ref:menuItemRef,disableHover,disabled,$isFocused:isFocused,$active:active}),children))}));MenuItem.displayName="MenuItem";const __WEBPACK_DEFAULT_EXPORT__=MenuItem;MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{size:{required:!1,tsType:{name:"Values",elements:[{name:"Size"}],raw:"Values<typeof Size>"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | boolean | null",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"null"}]},description:""},list:{required:!1,tsType:{name:"union",raw:"MenuItemListType[] | null | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  key: string;\r\n  content: string | React.ReactNode | ((props: object) => React.ReactNode);\r\n  prefix?: string | React.ReactNode | ((props: object) => React.ReactNode);\r\n  subList?: MenuItemListType[];\r\n  suffix?: string | React.ReactNode | ((props: object) => React.ReactNode);\r\n  onClick?: (props: object) => void;\r\n  disabled?: boolean;\r\n  active?: boolean;\r\n  subMenuProps?: MenuProps;\r\n  className?: string;\r\n  dividerStyle?: React.CSSProperties;\r\n  disableHover?: boolean;\r\n}",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"content",value:{name:"union",raw:"string | React.ReactNode | ((props: object) => React.ReactNode)",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}],required:!0}},{key:"prefix",value:{name:"union",raw:"string | React.ReactNode | ((props: object) => React.ReactNode)",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}],required:!1}},{key:"subList",value:{name:"Array",elements:[{name:"MenuItemListType"}],raw:"MenuItemListType[]",required:!1}},{key:"suffix",value:{name:"union",raw:"string | React.ReactNode | ((props: object) => React.ReactNode)",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(props: object) => void",signature:{arguments:[{type:{name:"object"},name:"props"}],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}},{key:"subMenuProps",value:{name:"MenuProps",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"dividerStyle",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}},{key:"disableHover",value:{name:"boolean",required:!1}}]}}],raw:"MenuItemListType[]"},{name:"null"},{name:"undefined"}]},description:""},depth:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},disableHover:{required:!1,tsType:{name:"boolean"},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},dividerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},enableScrollIntoView:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]}},"./packages/ui/src/core/menu-item/menu-item.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>menu_item_styles});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),defineProperty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),font_variant=__webpack_require__("./packages/ui/src/utils/types/typography/font-variant.ts"),types_size=__webpack_require__("./packages/ui/src/core/menu-item/types/size.ts"),sizeMenuItemMixin=(0,defineProperty.A)((0,defineProperty.A)({},types_size.o.Sm,(function(_ref){var font=_ref.theme.typography.font;return(0,styled_components_browser_esm.AH)(["padding:8px 16px;min-height:32px;",""],font[font_variant.B.LabelMedium])})),types_size.o.Md,(function(_ref2){var font=_ref2.theme.typography.font;return(0,styled_components_browser_esm.AH)(["padding:11px 16px;min-height:40px;",""],font[font_variant.B.LabelLarge])})),Icon=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("MenuItem","Icon")}).withConfig({componentId:"sc-rrzye0-0"})((function(_ref){var palette=_ref.theme.palette,disabled=_ref.disabled;return(0,styled_components_browser_esm.AH)(["flex-shrink:0;margin-right:10px;color:",";"],disabled?palette[color.Q.TextPlaceholder]:palette[color.Q.IconsPrimary])})),Actions=(0,styled_components_browser_esm.Ay)(Icon).attrs({className:(0,generate_class_names.e)("MenuItem","Actions")}).withConfig({componentId:"sc-rrzye0-1"})((function(){return(0,styled_components_browser_esm.AH)(["margin-right:0px;margin-left:16px;"])})),Label=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("MenuItem","Label")}).withConfig({componentId:"sc-rrzye0-2"})(["align-items:center;column-gap:4px;flex-grow:1;"]),MenuItemWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("MenuItem","wrapper")}).withConfig({componentId:"sc-rrzye0-3"})((function(_ref2){var _ref2$divider=_ref2.divider,divider=void 0!==_ref2$divider&&_ref2$divider,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,theme=_ref2.theme;return(0,styled_components_browser_esm.AH)([""," ",""],divider&&(0,styled_components_browser_esm.AH)(["width:100%;height:1px;background:",";box-sizing:border-box;margin:4px 0;"],theme.palette[color.Q.BordersSecondary]),disabled&&(0,styled_components_browser_esm.AH)(["color:",";"],theme.palette[color.Q.ButtonDisabledText]))})),MenuItem=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("MenuItem","root")}).withConfig({componentId:"sc-rrzye0-4"})((function(_ref3){var _ref3$size=_ref3.size,size=void 0===_ref3$size?types_size.o.Sm:_ref3$size,$active=_ref3.$active,theme=_ref3.theme,_ref3$disableHover=_ref3.disableHover,disableHover=void 0!==_ref3$disableHover&&_ref3$disableHover,disabled=_ref3.disabled,$isFocused=_ref3.$isFocused;return(0,styled_components_browser_esm.AH)(["display:flex;justify-content:space-between;flex-direction:row;align-items:center;width:100%;background:",";color:",";cursor:pointer;box-sizing:border-box;transition:all 100ms ease-out;"," &:focus-within,&:focus,&:hover{",";","}"," ",""],theme.palette[$active?color.Q.BackgroundActive:color.Q.BackgroundSecondary],theme.palette[color.Q.TextPrimary],sizeMenuItemMixin[size],!disableHover&&(0,styled_components_browser_esm.AH)(["background-color:",";"],theme.palette[color.Q.BackgroundHover]),disabled&&(0,styled_components_browser_esm.AH)(["cursor:default;background-color:white;"]),disabled&&(0,styled_components_browser_esm.AH)(["& > svg{path{fill:",";}}color:",";"],theme.palette[color.Q.ButtonDisabledText],theme.palette[color.Q.ButtonDisabledText]),$isFocused&&!disableHover&&(0,styled_components_browser_esm.AH)(["background-color:",";"],theme.palette[color.Q.BackgroundHover]))})),MenuPrefix=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("MenuItem","prefix")}).withConfig({componentId:"sc-rrzye0-5"})((function(){return(0,styled_components_browser_esm.AH)(["display:flex;"])})),MenuContent=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("MenuItem","content")}).withConfig({componentId:"sc-rrzye0-6"})((function(){return(0,styled_components_browser_esm.AH)(["flex-grow:1;line-height:16px;"])})),MenuSuffix=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("MenuItem","suffix")}).withConfig({componentId:"sc-rrzye0-7"})((function(){return(0,styled_components_browser_esm.AH)(["display:flex;margin-left:8px;"])}));const menu_item_styles=(0,apply_display_names.v)({MenuItemWrapper,MenuItem,MenuPrefix,MenuContent,MenuSuffix,Label,Icon,Actions})},"./packages/ui/src/core/menu-item/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Size});var Size={Sm:"sm",Md:"md"}},"./packages/ui/src/core/menu/menu.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>menu_component});var slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),types_position=__webpack_require__("./packages/ui/src/core/popper/types/position.ts"),popper_component=__webpack_require__("./packages/ui/src/core/popper/popper.component.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),scrollbar=__webpack_require__("./packages/ui/src/utils/functions/scrollbar.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),border_radius_size=__webpack_require__("./packages/ui/src/utils/types/shape/border-radius-size.ts"),Overlay=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Menu","Overlay")}).withConfig({componentId:"sc-10okxhw-0"})((function(){return(0,styled_components_browser_esm.AH)(["position:fixed;right:0;bottom:0;top:0;left:0;background-color:transparent;z-index:-1;"])})),opacityKeyframes=(0,styled_components_browser_esm.i7)(["from{opacity:0;}to{opacity:1;}"]),transformKeyframes=(0,styled_components_browser_esm.i7)(["from{transform:scale(0.97);margin-top:0px;}to{transform:scale(1);margin-top:4px;}"]),fadeInAnimation=(0,styled_components_browser_esm.AH)(["animation:"," 250ms 0ms cubic-bezier(0.4,0,0.2,1),"," 250ms cubic-bezier(0.4,0,0.2,1);"],opacityKeyframes,transformKeyframes),Menu=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("Menu","root")}).withConfig({componentId:"sc-10okxhw-1"})((function(_ref){var theme=_ref.theme,_ref$$maxHeight=_ref.$maxHeight,$maxHeight=void 0===_ref$$maxHeight?"":_ref$$maxHeight,$rect=_ref.$rect;return(0,styled_components_browser_esm.AH)(["min-width:","px;width:195px;min-height:16px;overflow-x:hidden;overflow-y:auto;transition:opacity 250ms cubic-bezier(0.4,0,0,1),transform 250ms cubic-bezier(0.4,0,0,1),margin-top 250ms cubic-bezier(0.4,0,0,1);outline:0;box-shadow:0 2px 4px ",";border-radius:",";padding:4px 0;background-color:",";margin-top:4px;"," "," ",""],$rect.width,theme.palette[color.Q.MediumShadow],theme.shape.borderRadius[border_radius_size.M.Md],theme.palette[color.Q.BackgroundStateless],scrollbar.H,fadeInAnimation,$maxHeight&&(0,styled_components_browser_esm.AH)(["max-height:",";"],Number.isNaN(+$maxHeight)?$maxHeight:"".concat($maxHeight,"px")))}));const menu_styles=(0,apply_display_names.v)({Menu,Overlay});var _excluded=["children","anchorEl","maxHeight","position","zIndex","open","enableOverlay","hideScroll","enableUnderlayingEvent","containerProps","popperOptions","popperWrapperStyles","onClose"],menu_component_Menu=(0,intrinsic_component.n)((function(_ref,ref){var children=_ref.children,anchorEl=_ref.anchorEl,_ref$maxHeight=_ref.maxHeight,maxHeight=void 0===_ref$maxHeight?250:_ref$maxHeight,_ref$position=_ref.position,position=void 0===_ref$position?types_position.y.BottomStart:_ref$position,zIndex=_ref.zIndex,_ref$open=_ref.open,open=void 0!==_ref$open&&_ref$open,_ref$enableOverlay=_ref.enableOverlay,enableOverlay=void 0===_ref$enableOverlay||_ref$enableOverlay,_ref$hideScroll=_ref.hideScroll,hideScroll=void 0===_ref$hideScroll||_ref$hideScroll,_ref$enableUnderlayin=_ref.enableUnderlayingEvent,enableUnderlayingEvent=void 0!==_ref$enableUnderlayin&&_ref$enableUnderlayin,_ref$containerProps=_ref.containerProps,containerProps=void 0===_ref$containerProps?{}:_ref$containerProps,popperOptions=_ref.popperOptions,_ref$popperWrapperSty=_ref.popperWrapperStyles,popperWrapperStyles=void 0===_ref$popperWrapperSty?{}:_ref$popperWrapperSty,onClose=_ref.onClose,rest=(0,objectWithoutProperties.A)(_ref,_excluded),_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),timeout=_useState2[0],setTimeoutState=_useState2[1],_useState3=(0,react.useState)(new DOMRect),_useState4=(0,slicedToArray.A)(_useState3,2),rect=_useState4[0],setRect=_useState4[1],menuRef=(0,react.useRef)(null),updateRect=(0,react.useCallback)((function(){var _anchorEl$getBounding,defaultRect=new DOMRect(0,0,0,0);setRect(null!==(_anchorEl$getBounding=null==anchorEl?void 0:anchorEl.getBoundingClientRect())&&void 0!==_anchorEl$getBounding?_anchorEl$getBounding:defaultRect)}),[open,timeout,anchorEl]),handleWindowSizeChanged=(0,react.useCallback)((function(){open&&(timeout&&clearTimeout(timeout),setTimeoutState(setTimeout(updateRect,300)))}),[open,timeout]);(0,react.useEffect)((function(){return window.addEventListener("resize",handleWindowSizeChanged),function(){window.removeEventListener("resize",handleWindowSizeChanged)}}),[handleWindowSizeChanged]),(0,react.useEffect)((function(){updateRect()}),[updateRect]),(0,react.useEffect)((function(){if(hideScroll)return open?(document.body.classList.add("Menu-open"),updateRect()):document.body.classList.remove("Menu-open"),function(){document.body.classList.remove("Menu-open")}}),[open,updateRect]);return react.createElement(popper_component.A,{ref:menuRef,position,open,anchorEl,overlay:enableOverlay,popperOptions,zIndex,enableUnderlayingEvent,wrapperStyles:popperWrapperStyles,onClick:function handleClose(event){"function"==typeof onClose&&onClose(event)}},react.createElement(menu_styles.Menu,Object.assign({ref,$maxHeight:maxHeight,$rect:rect},containerProps,rest),children))}));const menu_component=menu_component_Menu;menu_component_Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},anchorEl:{required:!1,tsType:{name:"union",raw:"Element | null | undefined",elements:[{name:"Element"},{name:"null"},{name:"undefined"}]},description:""},containerProps:{required:!1,tsType:{name:"object"},description:"",defaultValue:{value:"{}",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"250",computed:!1}},position:{required:!1,tsType:{name:"Values",elements:[{name:"Position"}],raw:"Values<typeof Position>"},description:"",defaultValue:{value:"'bottom-start'",computed:!1}},popperOptions:{required:!1,tsType:{name:"signature",type:"object",raw:"{\r\n  modifiers?: Modifiers;\r\n  onFirstUpdate?: () => void;\r\n  placement?: PopperPositionType;\r\n  strategy?: PopperStrategyType;\r\n}",signature:{properties:[{key:"modifiers",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  data?: object;\r\n  effect?: () => void;\r\n  enabled?: boolean;\r\n  fn?: () => void;\r\n  name?: any;\r\n  options?: object;\r\n  phase?: PopperPhasesType;\r\n  requires?: string[];\r\n  requiresIfExists?: string[];\r\n}",signature:{properties:[{key:"data",value:{name:"object",required:!1}},{key:"effect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"enabled",value:{name:"boolean",required:!1}},{key:"fn",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"name",value:{name:"any",required:!1}},{key:"options",value:{name:"object",required:!1}},{key:"phase",value:{name:"Values",elements:[{name:"Phases"}],raw:"Values<typeof Phases>",required:!1}},{key:"requires",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"requiresIfExists",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:"{\r\n  data?: object;\r\n  effect?: () => void;\r\n  enabled?: boolean;\r\n  fn?: () => void;\r\n  name?: any;\r\n  options?: object;\r\n  phase?: PopperPhasesType;\r\n  requires?: string[];\r\n  requiresIfExists?: string[];\r\n}[]",required:!1}},{key:"onFirstUpdate",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"placement",value:{name:"Values",elements:[{name:"Position"}],raw:"Values<typeof Position>",required:!1}},{key:"strategy",value:{name:"Values",elements:[{name:"Strategy"}],raw:"Values<typeof Strategy>",required:!1}}]}},description:""},popperWrapperStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},enableOverlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},enableUnderlayingEvent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:""},hideScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["PropsWithChildren"]}},"./packages/ui/src/utils/functions/scrollbar.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>scrollBar});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_types_palette__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),scrollBar=function scrollBar(_ref){var palette=_ref.theme.palette;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["&::-webkit-scrollbar{width:12px;}&::-webkit-scrollbar-thumb{background:",";border:4px solid ",";border-radius:99px;height:92px;padding:4px 6px;}"],palette[_types_palette__WEBPACK_IMPORTED_MODULE_1__.Q.BorderPrimaryStateless],palette[_types_palette__WEBPACK_IMPORTED_MODULE_1__.Q.ActiveSecondary])}}}]);