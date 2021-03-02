webpackJsonp([28],{19:function(e,t,a){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=[{value:"Integer",label:"整数字段"},{value:"Number",label:"数值字段"},{value:"Text",label:"文本框单行"},{value:"TextArea",label:"文本框多行"},{value:"RichTextEditor",label:"富文本"},{value:"Select",label:"选择列表(单行)"},{value:"MultiSelect",label:"选择列表(多行)"},{value:"CheckboxGroup",label:"复选按钮"},{value:"RadioGroup",label:"单选按钮"},{value:"DatePicker",label:"日期选择控件"},{value:"DateTimePicker",label:"日期时间选择控件"},{value:"TimeTracking",label:"时间跟踪"},{value:"File",label:"文件"},{value:"SingleVersion",label:"单一版本选择"},{value:"MultiVersion",label:"多版本选择"},{value:"SingleUser",label:"单一用户选择"},{value:"MultiUser",label:"多用户选择"},{value:"Url",label:"URL"}];t.FieldTypes=e;var a=[{id:"new",name:"新建"},{id:"inprogress",name:"进行中"},{id:"completed",name:"完成"}];t.StateCategories=a;var n={project:[{id:"view_project",name:"查看项目"},{id:"manage_project",name:"管理项目"}],issue:[{id:"create_issue",name:"创建问题"},{id:"edit_issue",name:"编辑问题"},{id:"delete_issue",name:"删除问题"},{id:"assign_issue",name:"分配问题"},{id:"assigned_issue",name:"被分配问题"},{id:"resolve_issue",name:"解决问题"},{id:"close_issue",name:"关闭问题"},{id:"reset_issue",name:"重置问题"},{id:"link_issue",name:"链接问题"},{id:"move_issue",name:"移动问题"},{id:"exec_workflow",name:"执行流程"}],comments:[{id:"add_comments",name:"添加评论"},{id:"edit_comments",name:"编辑评论"},{id:"edit_self_comments",name:"编辑自己的评论"},{id:"delete_comments",name:"删除评论"},{id:"delete_self_comments",name:"删除自己的评论"}],worklogs:[{id:"add_worklog",name:"添加工作日志"},{id:"edit_worklog",name:"编辑工作日志"},{id:"edit_self_worklog",name:"编辑自己的工作日志"},{id:"delete_worklog",name:"删除工作日志"},{id:"delete_self_worklog",name:"删除自己的工作日志"}],files:[{id:"upload_file",name:"上传附件"},{id:"download_file",name:"下载附件"},{id:"remove_file",name:"删除附件"},{id:"remove_self_file",name:"删除自己上传附件"}]};t.Permissions=n;var r=[{id:"create_issue",name:"创建问题"},{id:"edit_issue",name:"编辑问题"},{id:"del_issue",name:"删除问题"},{id:"resolve_issue",name:"解决问题"},{id:"close_issue",name:"关闭问题"},{id:"reopen_issue",name:"重新打开问题"},{id:"create_version",name:"创建版本"},{id:"edit_version",name:"编辑版本"},{id:"release_version",name:"发布版本"},{id:"merge_version",name:"合并版本"},{id:"del_version",name:"删除版本"},{id:"add_worklog",name:"添加工作日志"},{id:"edit_worklog",name:"编辑工作日志"}];t.webhookEvents=r;var o={CARD:"card",KANBAN_COLUMN:"kanban_column",KANBAN_FILTER:"kanban_filter"};t.CardTypes=o;var l=["#CCCCCC","#B3B3B3","#999999","#A4DD00","#68BC00","#006600","#73D8FF","#009CE0","#0062B1","#FCDC00","#FCC400","#FB9E00","#FE9200","#E27300","#C45100","#F44E3B","#D33115","#9F0500"];t.PriorityRGBs=l;var i=["#CCCCCC","#B3B3B3","#999999","#808080","#666666","#FDA1FF","#FA28FF","#AB149E","#AEA1FF","#7B64FF","#653294","#73D8FF","#009CE0","#0062B1","#68CCCA","#16A5A5","#0C797D","#A4DD00","#68BC00","#006600","#DBDF00","#B0BC00","#808900","#FCDC00","#FCC400","#FB9E00","#FE9200","#E27300","#C45100","#F44E3B","#D33115","#9F0500","#4D4D4D","#333333","#000000"];t.LabelRGBs=i;var s=600;t.DetailMinWidth=s;var u=1e3;t.DetailMaxWdith=u}).call(this)}finally{}},1901:function(e,t,a){try{(function(){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{actions:(0,m.bindActionCreators)(b,e)}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=function(e,t,a){for(var n=!0;n;){var r=e,o=t,l=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,o);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,a=l,n=!0,i=u=void 0}},d=a(1),p=r(d),f=a(21),m=a(22),h=a(2075),b=n(h),y=a(3),v=r(y),g=a(65),E=a(1905),C=function(e){function t(e){o(this,a),c(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,e),this.pid=""}l(t,e),u(t,[{key:"refresh",value:function(e){var t="/project/"+this.pid+"/labels";this.context.router.push({pathname:t,query:e})}},{key:"index",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return e=e||{},e.page||(e.page=1),t.next=4,regeneratorRuntime.awrap(this.props.actions.index(this.pid,g.stringify(e)));case 4:return t.abrupt("return",this.props.labels.ecode);case 5:case"end":return t.stop()}},null,this)}},{key:"create",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.props.actions.create(this.pid,e));case 2:return t.abrupt("return",this.props.labels.ecode);case 3:case"end":return t.stop()}},null,this)}},{key:"update",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.props.actions.update(this.pid,e));case 2:return t.abrupt("return",this.props.labels.ecode);case 3:case"end":return t.stop()}},null,this)}},{key:"del",value:function(e){var t;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.props.actions,a.next=3,regeneratorRuntime.awrap(t.del(this.pid,e));case 3:return a.abrupt("return",this.props.labels.ecode);case 4:case"end":return a.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props.params.key;this.pid=e}},{key:"render",value:function(){var e=this.props.location.query,t=void 0===e?{}:e;return this.props.project.options&&v.default.assign(this.props.labels.options,this.props.project.options),p.default.createElement("div",null,p.default.createElement(E,s({query:t,index:this.index.bind(this),refresh:this.refresh.bind(this),select:this.props.actions.select,create:this.create.bind(this),update:this.update.bind(this),del:this.del.bind(this),i18n:this.props.i18n},this.props.labels)))}}],[{key:"contextTypes",value:{router:d.PropTypes.object.isRequired},enumerable:!0},{key:"propTypes",value:{location:d.PropTypes.object.isRequired,project:d.PropTypes.object.isRequired,actions:d.PropTypes.object.isRequired,params:d.PropTypes.object.isRequired,i18n:d.PropTypes.object.isRequired,labels:d.PropTypes.object.isRequired},enumerable:!0}]);var a=t;return t=(0,f.connect)(function(e){var t=e.i18n,a=e.project,n=e.labels;return{i18n:t,project:a,labels:n}},i)(t)||t}(d.Component);t.default=C,e.exports=t.default}).call(this)}finally{}},1902:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e,t,a){for(var n=!0;n;){var r=e,o=t,l=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,o);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,a=l,n=!0,i=u=void 0}},u=a(1),c=n(u),d=a(8),p=a(2),f=a(7),m=n(f),h=a(19),b=a(3),y=n(b),v=a(5),g=a(4),E=function(e,t){var a={};if(e.name?y.default.findIndex(t.collection||[],{name:e.name})!==-1&&(a.name="该名称已存在"):a.name="必填",e.bgColor){var n=new RegExp(/^#[0-9a-fA-F]{6}$/);n.test(e.bgColor)||(a.bgColor="格式错误")}return a},C=function(e){function t(e){r(this,a),s(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,e),this.state={ecode:0},this.handleSubmit=this.handleSubmit.bind(this),this.handleCancel=this.handleCancel.bind(this)}o(t,e),i(t,[{key:"handleSubmit",value:function(){var e,t,a,n,r;return regeneratorRuntime.async(function(o){for(;;)switch(o.prev=o.next){case 0:return e=this.props,t=e.values,a=e.create,n=e.close,o.next=6,regeneratorRuntime.awrap(a(t));case 6:r=o.sent,0===r?(this.setState({ecode:0}),n(),v.notify.show("新建完成。","success",2e3)):this.setState({ecode:r});case 8:case"end":return o.stop()}},null,this)}},{key:"handleCancel",value:function(){var e=this.props,t=e.close,a=e.submitting;a||(this.setState({ecode:0}),t())}},{key:"render",value:function(){var e=this.props,t=e.i18n.errMsg,a=e.fields,n=a.name,r=a.bgColor,o=e.handleSubmit,i=e.invalid,s=e.submitting,u=h.LabelRGBs,d=y.default.map(u,function(e){return{value:e,label:c.default.createElement("span",{className:"select-color",style:{marginTop:"7px",backgroundColor:e}})}});return c.default.createElement(p.Modal,{show:!0,onHide:this.handleCancel,backdrop:"static","aria-labelledby":"contained-modal-title-sm"},c.default.createElement(p.Modal.Header,{closeButton:!0,style:{background:"#f0f0f0",height:"50px"}},c.default.createElement(p.Modal.Title,{id:"contained-modal-title-la"},"创建标签")),c.default.createElement("form",{onSubmit:o(this.handleSubmit),onKeyDown:function(e){13==e.keyCode&&e.preventDefault()}},c.default.createElement(p.Modal.Body,null,c.default.createElement(p.FormGroup,{validationState:n.touched&&n.error?"error":null},c.default.createElement(p.ControlLabel,null,c.default.createElement("span",{className:"txt-impt"},"*"),"名称"),c.default.createElement(p.FormControl,l({disabled:s,type:"text"},n,{placeholder:"标签名称"})),n.touched&&n.error&&c.default.createElement(p.HelpBlock,{style:{"float":"right"}},n.error)),c.default.createElement(p.FormGroup,{validationState:r.touched&&r.error?"error":null},c.default.createElement(p.ControlLabel,null,"背景色"),c.default.createElement(m.default,{simpleValue:!0,disabled:s,options:d,clearable:!0,searchable:!1,value:r.value,onChange:function(e){r.onChange(e)},placeholder:"请选择背景色"}))),c.default.createElement(p.Modal.Footer,null,c.default.createElement("span",{className:"ralign"},0!==this.state.ecode&&!s&&t[this.state.ecode]),c.default.createElement("img",{src:g,className:s?"loading":"hide"}),c.default.createElement(p.Button,{disabled:s||i,type:"submit"},"确定"),c.default.createElement(p.Button,{bsStyle:"link",disabled:s,onClick:this.handleCancel},"取消"))))}}],[{key:"propTypes",value:{i18n:u.PropTypes.object.isRequired,submitting:u.PropTypes.bool,invalid:u.PropTypes.bool,values:u.PropTypes.object,fields:u.PropTypes.object,handleSubmit:u.PropTypes.func.isRequired,close:u.PropTypes.func.isRequired,create:u.PropTypes.func.isRequired},enumerable:!0}]);var a=t;return t=(0,d.reduxForm)({form:"labels",fields:["name","bgColor"],validate:E})(t)||t}(u.Component);t.default=C,e.exports=t.default}).call(this)}finally{}},1903:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,o=t,l=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,o);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,a=l,n=!0,i=u=void 0}},s=a(1),u=n(s),c=a(2),d=a(7),p=n(d),f=a(5),m=a(3),h=n(m),b=a(4),y=function(e){function t(e){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={ecode:0,operate_flg:"0",swapLabel:""},this.confirm=this.confirm.bind(this),this.cancel=this.cancel.bind(this)}return o(t,e),l(t,[{key:"confirm",value:function(){var e,t,a,n,r,o;return regeneratorRuntime.async(function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.props,t=e.close,a=e.del,n=e.index,r=e.data,l.next=7,regeneratorRuntime.awrap(a(h.default.extend({},{id:r.id},{operate_flg:this.state.operate_flg,swap_label:this.state.swapLabel})));case 7:o=l.sent,0===o&&(t(),f.notify.show("删除完成。","success",2e3),n()),this.setState({ecode:o});case 10:case"end":return l.stop()}},null,this)}},{key:"cancel",value:function(){var e=this.props,t=e.close,a=e.loading;a||t()}},{key:"render",value:function(){var e=this,t=this.props,a=t.i18n.errMsg,n=t.data,r=t.labels,o=t.loading;return u.default.createElement(c.Modal,{show:!0,onHide:this.cancel,backdrop:"static","aria-labelledby":"contained-modal-title-sm"},u.default.createElement(c.Modal.Header,{closeButton:!0,style:{background:"#f0f0f0",height:"50px"}},u.default.createElement(c.Modal.Title,{id:"contained-modal-title-la"},"删除标签 - ",n.name)),u.default.createElement(c.Modal.Body,null,n.is_used?u.default.createElement("div",{className:"info-col",style:{marginTop:"5px"}},u.default.createElement("div",{className:"info-icon"},u.default.createElement("i",{className:"fa fa-info-circle"})),u.default.createElement("div",{className:"info-content"},"有问题和此标签关联，请选择以下操作。")):u.default.createElement("div",{className:"info-col",style:{marginTop:"5px"}},u.default.createElement("div",{className:"info-icon"},u.default.createElement("i",{className:"fa fa-info-circle"})),u.default.createElement("div",{className:"info-content"},"没有问题和此标签关联，可放心删除。")),n.is_used&&u.default.createElement("div",{style:{margin:"20px 10px 10px 10px"}},u.default.createElement("div",{style:{display:"inline-block",verticalAlign:"top"}},"修复问题"),u.default.createElement("div",{style:{display:"inline-block",marginLeft:"20px"}},u.default.createElement(c.FormGroup,null,u.default.createElement(c.Radio,{inline:!0,name:"swap",onClick:function(){e.setState({operate_flg:"1"})},checked:"1"===this.state.operate_flg},"移动至标签"),u.default.createElement("div",{style:{width:"300px",margin:"5px 5px 10px 18px"}},u.default.createElement(p.default,{simpleValue:!0,clearable:!1,disabled:"1"!==this.state.operate_flg,options:h.default.map(h.default.reject(r,{id:n.id}),function(e){return{value:e.id,label:e.name}}),value:this.state.swapLabel,onChange:function(t){e.setState({swapLabel:t})},placeholder:"选择标签"})),u.default.createElement(c.Radio,{inline:!0,name:"remove",onClick:function(){e.setState({operate_flg:"2"})},checked:"2"===this.state.operate_flg},"移除标签"))))),u.default.createElement(c.Modal.Footer,null,u.default.createElement("span",{className:"ralign"},0!==this.state.ecode&&!o&&a[this.state.ecode]),u.default.createElement("img",{src:b,className:o?"loading":"hide"}),u.default.createElement(c.Button,{onClick:this.confirm,disabled:o||n.is_used&&"0"===this.state.operate_flg||"1"===this.state.operate_flg&&!this.state.swapLabel},"确定"),u.default.createElement(c.Button,{bsStyle:"link",onClick:this.cancel},"取消")))}}],[{key:"propTypes",value:{i18n:s.PropTypes.object.isRequired,close:s.PropTypes.func.isRequired,index:s.PropTypes.func.isRequired,del:s.PropTypes.func.isRequired,labels:s.PropTypes.array.isRequired,loading:s.PropTypes.bool.isRequired,data:s.PropTypes.object.isRequired},enumerable:!0}]),t}(s.Component);t.default=y,e.exports=t.default}).call(this)}finally{}},1904:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e,t,a){for(var n=!0;n;){var r=e,o=t,l=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,o);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,a=l,n=!0,i=u=void 0}},u=a(1),c=n(u),d=a(8),p=a(2),f=a(7),m=n(f),h=a(19),b=a(3),y=n(b),v=a(5),g=a(4),E=function(e,t){var a={};if(e.name?t.data.name!==e.name&&y.default.findIndex(t.collection||[],{name:e.name})!==-1&&(a.name="该名称已存在"):a.name="必填",e.bgColor){var n=new RegExp(/^#[0-9a-fA-F]{6}$/);n.test(e.bgColor)||(a.bgColor="格式错误")}return a},C=function(e){function t(e){r(this,a),s(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,e),this.state={ecode:0},this.handleSubmit=this.handleSubmit.bind(this),this.handleCancel=this.handleCancel.bind(this)}o(t,e),i(t,[{key:"handleSubmit",value:function(){var e,t,a,n,r;return regeneratorRuntime.async(function(o){for(;;)switch(o.prev=o.next){case 0:return e=this.props,t=e.values,a=e.update,n=e.close,o.next=6,regeneratorRuntime.awrap(a(t));case 6:r=o.sent,0===r?(this.setState({ecode:0}),n(),v.notify.show("更新完成。","success",2e3)):this.setState({ecode:r});case 8:case"end":return o.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props,t=e.initializeForm,a=e.data;t(a)}},{key:"handleCancel",value:function(){var e=this.props,t=e.close,a=e.submitting;a||(this.setState({ecode:0}),t())}},{key:"render",value:function(){var e=this.props,t=e.i18n.errMsg,a=e.fields,n=a.id,r=a.name,o=a.bgColor,i=e.dirty,s=e.handleSubmit,u=e.invalid,d=e.submitting,f=h.LabelRGBs,b=y.default.map(f,function(e){return{value:e,label:c.default.createElement("span",{className:"select-color",style:{marginTop:"7px",backgroundColor:e}})}});return c.default.createElement(p.Modal,{show:!0,onHide:this.handleCancel,backdrop:"static","aria-labelledby":"contained-modal-title-sm"},c.default.createElement(p.Modal.Header,{closeButton:!0,style:{background:"#f0f0f0",height:"50px"}},c.default.createElement(p.Modal.Title,{id:"contained-modal-title-la"},"编辑标签")),c.default.createElement("form",{onSubmit:s(this.handleSubmit),onKeyDown:function(e){13==e.keyCode&&e.preventDefault()}},c.default.createElement(p.Modal.Body,null,c.default.createElement(p.FormGroup,{validationState:r.touched&&r.error?"error":null},c.default.createElement(p.ControlLabel,null,c.default.createElement("span",{className:"txt-impt"},"*"),"名称"),c.default.createElement(p.FormControl,l({type:"hidden"},n)),c.default.createElement(p.FormControl,l({disabled:d,type:"text"},r,{placeholder:"标签名称"})),r.touched&&r.error&&c.default.createElement(p.HelpBlock,{style:{"float":"right"}},r.error)),c.default.createElement(p.FormGroup,{validationState:o.touched&&o.error?"error":null},c.default.createElement(p.ControlLabel,null,"背景色"),c.default.createElement(m.default,{simpleValue:!0,disabled:d,options:b,clearable:!0,searchable:!1,value:o.value,onChange:function(e){o.onChange(e)},placeholder:"请选择背景色"}))),c.default.createElement(p.Modal.Footer,null,c.default.createElement("span",{className:"ralign"},0!==this.state.ecode&&!d&&t[this.state.ecode]),c.default.createElement("img",{src:g,className:d?"loading":"hide"}),c.default.createElement(p.Button,{disabled:!i||d||u,type:"submit"},"确定"),c.default.createElement(p.Button,{bsStyle:"link",disabled:d,onClick:this.handleCancel},"取消"))))}}],[{key:"propTypes",value:{i18n:u.PropTypes.object.isRequired,submitting:u.PropTypes.bool,invalid:u.PropTypes.bool,dirty:u.PropTypes.bool,values:u.PropTypes.object,fields:u.PropTypes.object,handleSubmit:u.PropTypes.func.isRequired,close:u.PropTypes.func.isRequired,initializeForm:u.PropTypes.func.isRequired,data:u.PropTypes.object.isRequired,update:u.PropTypes.func.isRequired},enumerable:!0}]);var a=t;return t=(0,d.reduxForm)({form:"labels",fields:["id","name","bgColor"],validate:E})(t)||t}(u.Component);t.default=C,e.exports=t.default}).call(this)}finally{}},1905:function(e,t,a){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e,t,a){for(var n=!0;n;){var r=e,o=t,l=a;n=!1,null===r&&(r=Function.prototype);var i=Object.getOwnPropertyDescriptor(r,o);if(void 0!==i){if("value"in i)return i.value;var s=i.get;if(void 0===s)return;return s.call(l)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,a=l,n=!0,i=u=void 0}},s=a(1),u=n(s),c=a(20),d=a(29),p=a(2),f=a(3),m=(n(f),a(1902)),h=a(1904),b=a(1903),y=a(4),v=function(e){function t(e){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={createModalShow:!1,editModalShow:!1,delNotifyShow:!1,operateShow:!1,hoverRowId:""},this.createModalClose=this.createModalClose.bind(this),this.editModalClose=this.editModalClose.bind(this),this.delNotifyClose=this.delNotifyClose.bind(this)}return o(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this.props.index;e()}},{key:"createModalClose",value:function(){this.setState({createModalShow:!1})}},{key:"editModalClose",value:function(){this.setState({editModalShow:!1})}},{key:"edit",value:function(e){var t;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:this.setState({editModalShow:!0}),t=this.props.select,t(e);case 3:case"end":return a.stop()}},null,this)}},{key:"delNotifyClose",value:function(){this.setState({delNotifyShow:!1})}},{key:"delNotify",value:function(e){this.setState({delNotifyShow:!0});var t=this.props.select;t(e)}},{key:"operateSelect",value:function(e){var t=this.state.hoverRowId;"1"===e?this.edit(t):"2"===e&&this.delNotify(t)}},{key:"onRowMouseOver",value:function(e){e.id!==this.state.hoverRowId&&this.setState({operateShow:!0,hoverRowId:e.id})}},{key:"onMouseLeave",value:function(){this.setState({operateShow:!1,hoverRowId:""})}},{key:"render",value:function(){for(var e=this,t=this.props,a=t.i18n,n=t.options,r=t.collection,o=t.selectedItem,l=t.indexLoading,i=t.loading,s=t.del,f=t.update,v=t.create,g=t.index,E=this.state,C=E.hoverRowId,_=E.operateShow,w=u.default.createElement("span",null,u.default.createElement("i",{className:"fa fa-cog"})),k=(n.completed_states||[],n.incompleted_states||[],[]),P=r.length,T=0;T<P;T++){var j={};r[T].bgColor&&(j={backgroundColor:r[T].bgColor,borderColor:r[T].bgColor,border:"1px solid "+r[T].bgColor,color:"#fff"}),k.push({id:r[T].id,name:u.default.createElement("span",{className:"issue-label",title:r[T].name,style:j},r[T].name),bgColor:u.default.createElement("div",{className:"label-label",style:{backgroundColor:r[T].bgColor||"#ccc"}}),issues:u.default.createElement("ul",{style:{marginBottom:"0px",paddingLeft:"0px",listStyle:"none"}},u.default.createElement("li",null,"所有问题 - ",u.default.createElement(c.Link,{to:"/project/"+r[T].project_key+"/issue?labels="+r[T].name},r[T].all_cnt||0)),u.default.createElement("li",null,"未解决的 - ",u.default.createElement(c.Link,{to:"/project/"+r[T].project_key+"/issue?resolution=Unresolved&labels="+r[T].name},u.default.createElement("span",{style:{color:"red"}},r[T].unresolved_cnt||0)))),operation:u.default.createElement("div",null,_&&C===r[T].id&&u.default.createElement(p.DropdownButton,{pullRight:!0,bsStyle:"link",style:{textDecoration:"blink",color:"#000"},key:T,title:w,id:"dropdown-basic-"+T,onSelect:this.operateSelect.bind(this)},u.default.createElement(p.MenuItem,{eventKey:"1"},"编辑"),u.default.createElement(p.MenuItem,{eventKey:"2"},"删除")))})}var x={};return l?x.noDataText=u.default.createElement("div",null,u.default.createElement("img",{src:y,className:"loading"})):x.noDataText="暂无数据显示。",x.onRowMouseOver=this.onRowMouseOver.bind(this),u.default.createElement("div",{style:{marginBottom:"30px"}},u.default.createElement("div",{style:{marginTop:"15px"}},u.default.createElement(p.Button,{onClick:function(){e.setState({createModalShow:!0})}},u.default.createElement("i",{className:"fa fa-plus"})," 新建标签")),u.default.createElement(d.BootstrapTable,{hover:!0,data:k,bordered:!1,options:x,trClassName:"tr-middle"},u.default.createElement(d.TableHeaderColumn,{dataField:"id",isKey:!0,hidden:!0},"ID"),u.default.createElement(d.TableHeaderColumn,{dataField:"name"},"名称"),u.default.createElement(d.TableHeaderColumn,{dataField:"issues"},"问题完成情况"),u.default.createElement(d.TableHeaderColumn,{width:"60",dataField:"operation"})),this.state.editModalShow&&u.default.createElement(h,{show:!0,close:this.editModalClose,update:f,data:o,collection:r,i18n:a}),this.state.createModalShow&&u.default.createElement(m,{show:!0,close:this.createModalClose,create:v,collection:r,i18n:a}),this.state.delNotifyShow&&u.default.createElement(b,{show:!0,loading:i,close:this.delNotifyClose,index:g,labels:r,data:o,del:s,i18n:a}))}}],[{key:"propTypes",value:{i18n:s.PropTypes.object.isRequired,options:s.PropTypes.object.isRequired,collection:s.PropTypes.array.isRequired,selectedItem:s.PropTypes.object.isRequired,indexLoading:s.PropTypes.bool.isRequired,loading:s.PropTypes.bool.isRequired,index:s.PropTypes.func.isRequired,select:s.PropTypes.func.isRequired,create:s.PropTypes.func.isRequired,update:s.PropTypes.func.isRequired,del:s.PropTypes.func.isRequired},enumerable:!0}]),t}(s.Component);t.default=v,e.exports=t.default}).call(this)}finally{}},2075:function(e,t,a){try{(function(){"use strict";function e(e,t){return(0,i.asyncFuncCreator)({constant:"LABELS_INDEX",promise:function(a){return a.request({url:"/project/"+e+"/labels"+(t?"?"+t:"")})}})}function n(e,t){return(0,i.asyncFuncCreator)({constant:"LABELS_CREATE",promise:function(a){return a.request({url:"/project/"+e+"/labels",method:"post",data:t})}})}function r(e,t){return(0,i.asyncFuncCreator)({constant:"LABELS_UPDATE",promise:function(a){return a.request({url:"/project/"+e+"/labels/"+t.id,method:"put",data:t})}})}function o(e){return{type:"LABELS_SELECT",id:e}}function l(e,t){return(0,i.asyncFuncCreator)({constant:"LABELS_DELETE",id:t.id,promise:function(a){return a.request({url:"/project/"+e+"/labels/"+t.id+"/delete",data:t,method:"post"})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.index=e,t.create=n,t.update=r,t.select=o,t.del=l;var i=a(26)}).call(this)}finally{}}});
//# sourceMappingURL=labels-27e8543b5189f04003f0.js.map