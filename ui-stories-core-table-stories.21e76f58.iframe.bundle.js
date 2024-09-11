"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[6528],{"./packages/ui/stories/core/table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),table_component=__webpack_require__("./packages/ui/src/core/table/table.component.tsx"),table_container_component=__webpack_require__("./packages/ui/src/core/table-container/table-container.component.tsx"),table_head_component=__webpack_require__("./packages/ui/src/core/table-head/table-head.component.tsx"),table_cell_component=__webpack_require__("./packages/ui/src/core/table-cell/table-cell.component.tsx"),table_row_component=__webpack_require__("./packages/ui/src/core/table-row/table-row.component.tsx"),table_body_component=__webpack_require__("./packages/ui/src/core/table-body/table-body.component.tsx"),table_pagination_component=__webpack_require__("./packages/ui/src/core/table-pagination/table-pagination.component.tsx"),more=__webpack_require__("./packages/icons/src/more.tsx"),robot_happy=__webpack_require__("./packages/icons/src/robot-happy.tsx"),copy=__webpack_require__("./packages/icons/src/copy.tsx");const table_stories={title:"DataDisplay/Table",component:table_component.A,excludeStories:["Table","TableContainer","TableHead","TableCell","TableRow","TableBody","TablePagination"]};var defaultArgs={padding:"default",size:"medium"},BasicTemplate=function BasicTemplate(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.A)(_ref),_ref)),_React$useState=react.useState(1),_React$useState2=(0,slicedToArray.A)(_React$useState,2),page=_React$useState2[0],setPage=_React$useState2[1],_React$useState3=react.useState(5),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),rowsPerPage=_React$useState4[0],setRowsPerPage=_React$useState4[1],action=function action(){return react.createElement("span",null,react.createElement(copy.A,{size:10}),react.createElement("span",{style:{marginLeft:"4px"}},"Copy"))},createData=function createData(name,Permissions,CreatedAt,Active,Actions){return{name,Permissions,CreatedAt,Active,Actions}},rows=[createData("Global Key","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Autogenerated - Demo Sealing","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("WP new key with all permissions\t","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("UploaderWidget","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test1","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test2","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test3","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test4","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test5","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test6","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test7","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test8","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action()),createData("Test9","42f89117d2d944b4423c18cc340956","2020-06-15 14:21",react.createElement(robot_happy.A,{size:25}),action())];return react.createElement(react.Fragment,null,react.createElement(table_container_component.A,null,react.createElement(table_component.A,args,react.createElement(table_head_component.A,null,react.createElement(table_row_component.A,null,react.createElement(table_cell_component.A,null,"Description"),react.createElement(table_cell_component.A,null,"Permissions"),react.createElement(table_cell_component.A,null,"CreatedAt"),react.createElement(table_cell_component.A,null,"Active"),react.createElement(table_cell_component.A,null,"Actions"),react.createElement(table_cell_component.A,{padding:"options"}))),react.createElement(table_body_component.A,null,rows.slice((page-1)*rowsPerPage,(page-1)*rowsPerPage+rowsPerPage).map((function(row){return react.createElement(table_row_component.A,{key:row.name},react.createElement(table_cell_component.A,{scope:"row"},row.name),react.createElement(table_cell_component.A,null,row.Permissions),react.createElement(table_cell_component.A,null,row.CreatedAt),react.createElement(table_cell_component.A,null,row.Active),react.createElement(table_cell_component.A,null,row.Actions),react.createElement(table_cell_component.A,{padding:"options"},react.createElement(more.A,null)))}))))),react.createElement(table_pagination_component.A,{rowsPerPageOptions:[5,10,25],count:rows.length,page,rowsPerPage,onPageChange:function onPageChange(event,val){return function handleChangePage(_,newPage){setPage(newPage)}(0,val)},onRowsPerPageChange:function handleChangeRowsPerPage(event){setRowsPerPage(Number.parseInt(event,10)),setPage(1)}}))},Primary={args:(0,objectSpread2.A)({},defaultArgs),render:function render(args){return react.createElement(BasicTemplate,args)}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...defaultArgs\n  },\n  render: args => <BasicTemplate {...args} />\n}",...Primary.parameters?.docs?.source}}}}}]);