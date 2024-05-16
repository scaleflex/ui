"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[372],{"./packages/ui/stories/core/rotation-slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>rotation_slider_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),intrinsic_component=__webpack_require__("./packages/ui/src/utils/functions/intrinsic-component.ts"),slider_component=__webpack_require__("./packages/ui/src/core/slider/slider.component.tsx"),label_tooltip=__webpack_require__("./packages/ui/src/core/slider/types/label-tooltip.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),generate_class_names=__webpack_require__("./packages/ui/src/utils/functions/generate-class-names.ts"),apply_display_names=__webpack_require__("./packages/ui/src/utils/functions/apply-display-names.ts"),color=__webpack_require__("./packages/ui/src/utils/types/palette/color.ts"),RotationSliderList=styled_components_browser_esm.Ay.ul.attrs({className:(0,generate_class_names.e)("RotationSlider","list")}).withConfig({componentId:"sc-1xuruq0-0"})(["display:flex;align-items:center;position:relative;padding:0;width:100%;list-style:none;"]),RotationSliderBigDot=styled_components_browser_esm.Ay.li.attrs({className:(0,generate_class_names.e)("RotationSlider","big-dot")}).withConfig({componentId:"sc-1xuruq0-1"})((function(_ref){var palette=_ref.theme.palette;return(0,styled_components_browser_esm.AH)(["width:8px;height:8px;border-radius:50%;background-color:",";cursor:pointer;"],palette[color.Q.LinkPrimary])})),RotationSliderSmallDotWrapper=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("RotationSlider","small-dot-wrapper")}).withConfig({componentId:"sc-1xuruq0-2"})(["padding:2px;"]),RotationSliderSmallDot=styled_components_browser_esm.Ay.li.attrs({className:(0,generate_class_names.e)("RotationSlider","small-dot")}).withConfig({componentId:"sc-1xuruq0-3"})((function(_ref2){var palette=_ref2.theme.palette;return(0,styled_components_browser_esm.AH)(["width:2px;height:2px;border-radius:50%;background-color:",";cursor:pointer;"],palette[color.Q.LinkPrimary])})),RotationSliderControl=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("RotationSlider","control")}).withConfig({componentId:"sc-1xuruq0-4"})((function(_ref3){var palette=_ref3.theme.palette;return(0,styled_components_browser_esm.AH)(["display:flex;justify-content:center;align-items:center;position:absolute;height:18px;width:2px;transform:translate(-50%,-50%);top:50%;background-color:",";& > input{border:0px;clip:rect(0px,0px,0px,0px);height:100%;margin:-1px;overflow:hidden;padding:0px;position:absolute;white-space:nowrap;width:100%;direction:ltr;}&::before{position:absolute;content:'';border-radius:inherit;width:100%;height:100%;box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);}&::after{position:absolute;content:'';border-radius:50%;width:42px;height:42px;top:50%;left:50%;transform:translate(-50%,-50%);}"],palette[color.Q.LinkActive])})),RotationSliderMark=styled_components_browser_esm.Ay.div.attrs({className:(0,generate_class_names.e)("RotationSlider","mark")}).withConfig({componentId:"sc-1xuruq0-5"})(["padding:4px;"]),RotationSliderMarkText=styled_components_browser_esm.Ay.span.attrs({className:(0,generate_class_names.e)("RotationSlider","mark-text")}).withConfig({componentId:"sc-1xuruq0-6"})((function(_ref4){var palette=_ref4.theme.palette;return(0,styled_components_browser_esm.AH)(["position:absolute;top:20px;font-size:14px;transform:translateX(-10%);color:",";"],palette[color.Q.TextPrimary])}));const rotation_slider_styles=(0,apply_display_names.v)({RotationSliderList,RotationSliderBigDot,RotationSliderSmallDotWrapper,RotationSliderSmallDot,RotationSliderControl,RotationSliderMark,RotationSliderMarkText});var _excluded=["min","max","angle","onChange","onMouseDown","onMouseUp","step","labelTooltipOptions","annotation","hideMarkText","showCurrentMarkText","value","railProps","trackProps","thumbProps","labelTooltipProps","markStyles","markTextStyles"],RotationSlider=(0,intrinsic_component.n)((function(_ref,ref){var _ref$min=_ref.min,min=void 0===_ref$min?0:_ref$min,_ref$max=_ref.max,max=void 0===_ref$max?100:_ref$max,_ref$angle=_ref.angle,angle=void 0===_ref$angle?10:_ref$angle,onChange=_ref.onChange,_ref$step=(_ref.onMouseDown,_ref.onMouseUp,_ref.step),step=void 0===_ref$step?1:_ref$step,_ref$labelTooltipOpti=_ref.labelTooltipOptions,labelTooltipOptions=void 0===_ref$labelTooltipOpti?label_tooltip.E.Off:_ref$labelTooltipOpti,_ref$annotation=_ref.annotation,annotation=void 0===_ref$annotation?"°":_ref$annotation,_ref$hideMarkText=_ref.hideMarkText,hideMarkText=void 0!==_ref$hideMarkText&&_ref$hideMarkText,_ref$showCurrentMarkT=_ref.showCurrentMarkText,showCurrentMarkText=void 0!==_ref$showCurrentMarkT&&_ref$showCurrentMarkT,value=_ref.value,_ref$railProps=_ref.railProps,railProps=void 0===_ref$railProps?{}:_ref$railProps,_ref$trackProps=_ref.trackProps,trackProps=void 0===_ref$trackProps?{}:_ref$trackProps,_ref$thumbProps=_ref.thumbProps,thumbProps=void 0===_ref$thumbProps?{}:_ref$thumbProps,_ref$labelTooltipProp=_ref.labelTooltipProps,labelTooltipProps=void 0===_ref$labelTooltipProp?{}:_ref$labelTooltipProp,_ref$markStyles=_ref.markStyles,markStyles=void 0===_ref$markStyles?{}:_ref$markStyles,_ref$markTextStyles=_ref.markTextStyles,markTextStyles=void 0===_ref$markTextStyles?{}:_ref$markTextStyles,rest=(0,objectWithoutProperties.A)(_ref,_excluded),handleChange=function handleChange(event,newValue){onChange&&onChange(event,newValue)},getValue=function getValue(){return value||0===value?value>max?max:value<min?min:value:min},showMarkText=function showMarkText(index){return!hideMarkText&&(!showCurrentMarkText||getValue()===index)};return react.createElement(slider_component.A,Object.assign({min,max,step,value:getValue(),hideTrack:!0,hideAnnotation:!0,annotation,onChange:function onChange(event,newValue){return handleChange(event,newValue)},labelTooltip:labelTooltipOptions,ref,components:{Rail:function Rail(props,style){return react.createElement(rotation_slider_styles.RotationSliderList,Object.assign({},props,{styles:(0,objectSpread2.A)({},style)}),function renderBar(){for(var barDiv,barDom=[],i=min;i<=max;i+=step)barDiv=[],i%angle==0||i===max?barDiv=react.createElement(rotation_slider_styles.RotationSliderMark,{key:i,style:(0,objectSpread2.A)({},markStyles)},showMarkText(i)&&react.createElement(rotation_slider_styles.RotationSliderMarkText,{style:(0,objectSpread2.A)({},markTextStyles)},i===min+1?max:i,react.createElement("sup",null,annotation)),react.createElement(rotation_slider_styles.RotationSliderBigDot,null)):i%10==0&&(barDiv=react.createElement(rotation_slider_styles.RotationSliderSmallDotWrapper,{key:i},react.createElement(rotation_slider_styles.RotationSliderSmallDot,null))),Array.isArray(barDiv)||barDom.push(barDiv);return barDom}())},Thumb:rotation_slider_styles.RotationSliderControl},componentsProps:{rail:(0,objectSpread2.A)((0,objectSpread2.A)({},railProps),{},{style:(0,objectSpread2.A)({},railProps.style)}),track:(0,objectSpread2.A)((0,objectSpread2.A)({},trackProps),{},{style:(0,objectSpread2.A)({},trackProps.style)}),thumb:(0,objectSpread2.A)((0,objectSpread2.A)({},thumbProps),{},{style:(0,objectSpread2.A)({top:"15%"},thumbProps.style)}),labelTooltip:(0,objectSpread2.A)((0,objectSpread2.A)({},labelTooltipProps),{},{style:(0,objectSpread2.A)({},labelTooltipProps.style)})}},rest,{defaultValue:Number(rest.defaultValue),style:(0,objectSpread2.A)({width:"auto",height:"auto"},rest.style)}))}));const rotation_slider_component=RotationSlider;RotationSlider.__docgenInfo={description:"",methods:[],displayName:"RotationSlider",props:{value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},angle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event, value: number) => void",signature:{arguments:[{type:{name:"Event"},name:"event"},{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},onMouseDown:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLSpanElement"}],raw:"MouseEventHandler<HTMLSpanElement>"},description:""},onMouseUp:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLSpanElement"}],raw:"MouseEventHandler<HTMLSpanElement>"},description:""},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},annotation:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'°'",computed:!1}},hideMarkText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCurrentMarkText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},railProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},trackProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},thumbProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},markStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},markTextStyles:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}},labelTooltipProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},labelTooltipOptions:{required:!1,tsType:{name:"Values",elements:[{name:"LabelTooltip"}],raw:"Values<typeof LabelTooltip>"},description:"",defaultValue:{value:"'off'",computed:!1}}},composes:["Omit"]};const rotation_slider_stories={title:"Inputs/Sliders/RotationSlider",component:rotation_slider_component,excludeStories:["RotationSlider"]};var defaultArgs={min:-180,max:180,step:1,value:0,angle:60,labelTooltipOptions:label_tooltip.E.Auto},BasicTemplate=function BasicTemplate(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.A)(_ref),_ref)),_useState=(0,react.useState)(args.value),_useState2=(0,slicedToArray.A)(_useState,2),value=_useState2[0],setValue=_useState2[1];return react.createElement(rotation_slider_component,Object.assign({},args,{onChange:function handleChange(_,newValue){setValue(newValue)},value,style:{marginTop:"50px"}}))},Primary={args:(0,objectSpread2.A)({},defaultArgs),render:function render(args){return react.createElement(BasicTemplate,args)}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);