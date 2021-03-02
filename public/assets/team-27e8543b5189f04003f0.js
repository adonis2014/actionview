webpackJsonp([33],{593:function(e,t,r){try{(function(){"use strict";function e(e){return(0,f.asyncFuncCreator)({constant:"ROLE_INDEX",promise:function(t){return t.request({url:"/project/"+e+"/role"})}})}function n(e){return(0,f.asyncFuncCreator)({constant:"ROLE_TEAM_INDEX",promise:function(t){return t.request({url:"/project/"+e+"/team"})}})}function s(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_CREATE",promise:function(r){return r.request({url:"/project/"+e+"/role",method:"post",data:t})}})}function o(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_UPDATE",promise:function(r){return r.request({url:"/project/"+e+"/role/"+t.id,method:"put",data:t})}})}function a(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_SET_PERMISSIONS",promise:function(r){return r.request({url:"/project/"+e+"/role/"+t.id+"/permissions",method:"post",data:t})}})}function i(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_SET_ACTOR",promise:function(r){return r.request({url:"/project/"+e+"/role/"+t.id+"/actor",method:"post",data:t})}})}function l(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_SET_GROUP_ACTOR",promise:function(r){return r.request({url:"/project/"+e+"/role/"+t.id+"/groupactor",method:"post",data:t})}})}function u(e){return{type:"ROLE_SELECT",id:e}}function c(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_DELETE",id:t,promise:function(r){return r.request({url:"/project/"+e+"/role/"+t,method:"delete"})}})}function d(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_RESET",id:t,promise:function(r){return r.request({url:"/project/"+e+"/role/"+t+"/reset"})}})}function p(e,t){return(0,f.asyncFuncCreator)({constant:"ROLE_VIEW_USED",id:t,promise:function(r){return r.request({url:"/project/"+e+"/role/"+t+"/used"})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.index=e,t.teamIndex=n,t.create=s,t.update=o,t.setPermission=a,t.setActor=i,t.setGroupActor=l,t.select=u,t.del=c,t.reset=d,t.viewUsed=p;var f=r(26)}).call(this)}finally{}},1996:function(e,t,r){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var s=e,o=t,a=r;n=!1,null===s&&(s=Function.prototype);var i=Object.getOwnPropertyDescriptor(s,o);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(s);if(null===u)return;e=u,t=o,r=a,n=!0,i=u=void 0}},l=r(1),u=n(l),c=r(2),d=["#815b3a","#f79232","#d39c3f","#3b7fc4","#4a6785","#8eb021","#ac707a","#654982","#f15c75"],p=function(e){function t(e){s(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return o(t,e),a(t,[{key:"render",value:function(){var e=this.props.data,t=(e.email||"").split("@"),r=t[0].length%9;return u.default.createElement(c.Label,{style:{backgroundColor:d[r]}},e.name)}}],[{key:"propTypes",value:{data:l.PropTypes.object.isRequired},enumerable:!0}]),t}(l.Component);t.default=p,e.exports=t.default}).call(this)}finally{}},2006:function(e,t,r){try{(function(){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{actions:(0,h.bindActionCreators)(b,e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function(e,t,r){for(var n=!0;n;){var s=e,o=t,a=r;n=!1,null===s&&(s=Function.prototype);var i=Object.getOwnPropertyDescriptor(s,o);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(s);if(null===u)return;e=u,t=o,r=a,n=!0,i=u=void 0}},d=r(1),p=s(d),f=r(21),h=r(22),m=r(3),y=s(m),v=r(593),b=n(v),g=r(2007),R=function(e){function t(e){o(this,r),c(Object.getPrototypeOf(r.prototype),"constructor",this).call(this,e),this.pid=""}a(t,e),u(t,[{key:"index",value:function(){return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.props.actions.teamIndex(this.pid));case 2:return e.abrupt("return",this.props.role.ecode);case 3:case"end":return e.stop()}},null,this)}},{key:"setActor",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.props.actions.setActor(this.pid,e));case 2:return t.abrupt("return",this.props.role.ecode);case 3:case"end":return t.stop()}},null,this)}},{key:"setGroupActor",value:function(e){return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.props.actions.setGroupActor(this.pid,e));case 2:return t.abrupt("return",this.props.role.ecode);case 3:case"end":return t.stop()}},null,this)}},{key:"componentWillMount",value:function(){var e=this.props.params.key;this.pid=e}},{key:"render",value:function(){return this.props.project.options&&y.default.assign(this.props.role.options,this.props.project.options),p.default.createElement("div",null,p.default.createElement(g,l({index:this.index.bind(this),setActor:this.setActor.bind(this),setGroupActor:this.setGroupActor.bind(this)},this.props.role)))}}],[{key:"propTypes",value:{project:d.PropTypes.object.isRequired,actions:d.PropTypes.object.isRequired,params:d.PropTypes.object.isRequired,role:d.PropTypes.object.isRequired},enumerable:!0}]);var r=t;return t=(0,f.connect)(function(e){var t=e.project,r=e.role;return{project:t,role:r}},i)(t)||t}(d.Component);t.default=R,e.exports=t.default}).call(this)}finally{}},2007:function(e,t,r){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var s=e,o=t,a=r;n=!1,null===s&&(s=Function.prototype);var i=Object.getOwnPropertyDescriptor(s,o);if(void 0!==i){if("value"in i)return i.value;var l=i.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(s);if(null===u)return;e=u,t=o,r=a,n=!0,i=u=void 0}},l=r(1),u=n(l),c=r(29),d=r(2),p=r(7),f=n(p),h=r(3),m=n(h),y=r(38),v=n(y),b=r(1996),g=(n(b),r(5)),R=r(4),E=function(e){function t(e){s(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={willSetUserRoleIds:[],settingUserRoleIds:[],users:{},willSetGroupRoleIds:[],settingGroupRoleIds:[],groups:{}},this.searchUsers=this.searchUsers.bind(this),this.searchGroups=this.searchGroups.bind(this)}return o(t,e),a(t,[{key:"componentWillMount",value:function(){var e=this.props.index;e()}},{key:"onRowMouseOver",value:function(e){e.id!==this.state.hoverRowId&&this.setState({operateShow:!0,hoverRowId:e.id})}},{key:"onMouseLeave",value:function(){this.setState({operateShow:!1,hoverRowId:""})}},{key:"willSetUsers",value:function(e){this.state.willSetUserRoleIds.push(e),this.setState({willSetUserRoleIds:this.state.willSetUserRoleIds})}},{key:"cancelSetUsers",value:function(e){var t=m.default.indexOf(this.state.willSetUserRoleIds,e);this.state.willSetUserRoleIds.splice(t,1),this.state.users[e]=void 0,this.setState({willSetUserRoleIds:this.state.willSetUserRoleIds})}},{key:"setUsers",value:function(e){var t,r,n,s,o,a;return regeneratorRuntime.async(function(i){for(;;)switch(i.prev=i.next){case 0:return this.state.settingUserRoleIds.push(e),this.setState({settingUserRoleIds:this.state.settingUserRoleIds}),t=this.props,r=t.setActor,n=t.collection,i.next=7,regeneratorRuntime.awrap(r({users:m.default.map(this.state.users[e]||m.default.find(n,{id:e}).users,m.default.iteratee("id")),id:e}));case 7:s=i.sent,0===s?(o=this.state.willSetUserRoleIds.indexOf(e),this.state.willSetUserRoleIds.splice(o,1),a=m.default.indexOf(this.state.settingUserRoleIds,e),this.state.settingUserRoleIds.splice(a,1),this.setState({willSetUserRoleIds:this.state.willSetUserRoleIds,settingUserRoleIds:this.state.settingUserRoleIds}),g.notify.show("配置完成。","success",2e3)):(a=m.default.indexOf(this.state.settingUserRoleIds,e),this.state.settingUserRoleIds.splice(a,1),this.setState({settingUserRoleIds:this.state.settingUserRoleIds}),g.notify.show("配置失败。","error",2e3));case 9:case"end":return i.stop()}},null,this)}},{key:"handleUserSelectChange",value:function(e,t){this.state.users[e]=t,this.setState({users:this.state.users})}},{key:"searchUsers",value:function(e){var t,r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=e.toLowerCase()){n.next=3;break}return n.abrupt("return",{options:[]});case 3:return t=new v.default,n.next=6,regeneratorRuntime.awrap(t.request({url:"/user/search?s="+e}));case 6:return r=n.sent,n.abrupt("return",{options:m.default.map(r.data,function(e){return e.nameAndEmail=e.name+"("+e.email+")",e})});case 8:case"end":return n.stop()}},null,this)}},{key:"willSetGroups",value:function(e){this.state.willSetGroupRoleIds.push(e),this.setState({willSetGroupRoleIds:this.state.willSetGroupRoleIds})}},{key:"cancelSetGroups",value:function(e){var t=m.default.indexOf(this.state.willSetGroupRoleIds,e);this.state.willSetGroupRoleIds.splice(t,1),this.state.groups[e]=void 0,this.setState({willSetGroupRoleIds:this.state.willSetGroupRoleIds})}},{key:"setGroups",value:function(e){var t,r,n,s,o,a;return regeneratorRuntime.async(function(i){for(;;)switch(i.prev=i.next){case 0:return this.state.settingGroupRoleIds.push(e),this.setState({settingGroupRoleIds:this.state.settingGroupRoleIds}),t=this.props,r=t.setGroupActor,n=t.collection,i.next=7,regeneratorRuntime.awrap(r({groups:m.default.map(this.state.groups[e]||m.default.find(n,{id:e}).groups,m.default.iteratee("id")),id:e}));case 7:s=i.sent,0===s?(o=this.state.willSetGroupRoleIds.indexOf(e),this.state.willSetGroupRoleIds.splice(o,1),a=m.default.indexOf(this.state.settingGroupRoleIds,e),this.state.settingGroupRoleIds.splice(a,1),this.setState({willSetGroupRoleIds:this.state.willSetGroupRoleIds,settingGroupRoleIds:this.state.settingGroupRoleIds}),g.notify.show("配置完成。","success",2e3)):(a=m.default.indexOf(this.state.settingGroupRoleIds,e),this.state.settingGroupRoleIds.splice(a,1),this.setState({settingGroupRoleIds:this.state.settingGroupRoleIds}),g.notify.show("配置失败。","error",2e3));case 9:case"end":return i.stop()}},null,this)}},{key:"handleGroupSelectChange",value:function(e,t){this.state.groups[e]=t,this.setState({groups:this.state.groups})}},{key:"searchGroups",value:function(e){var t,r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=e.toLowerCase()){n.next=3;break}return n.abrupt("return",{options:[]});case 3:return t=new v.default,n.next=6,regeneratorRuntime.awrap(t.request({url:"/group/search?s="+e}));case 6:return r=n.sent,n.abrupt("return",{options:r.data||[]});case 8:case"end":return n.stop()}},null,this)}},{key:"render",value:function(){for(var e=this.props,t=e.options,r=e.collection,n=e.indexLoading,s=(e.setActor,this.state),o=s.willSetUserRoleIds,a=s.settingUserRoleIds,i=s.willSetGroupRoleIds,l=s.settingGroupRoleIds,p=(s.hoverRowId,[]),h=r.length,y=0;y<h;y++)p.push({id:r[y].id,name:u.default.createElement("div",null,u.default.createElement("span",{className:"table-td-title"},r[y].name,r[y].category&&u.default.createElement("span",{style:{fontWeight:"normal"}}," (全局)")),r[y].description&&u.default.createElement("span",{className:"table-td-desc"},r[y].description)),users:t.permissions&&t.permissions.indexOf("manage_project")===-1?u.default.createElement("div",null,u.default.createElement("span",null,m.default.map(r[y].users,function(e){return u.default.createElement("div",{style:{display:"inline-block","float":"left",margin:"3px"}},u.default.createElement(d.Label,{style:{color:"#007eff",border:"1px solid #c2e0ff",backgroundColor:"#ebf5ff",fontWeight:"normal"},key:e.id},e.name))}))):u.default.createElement("div",null,m.default.indexOf(o,r[y].id)===-1&&m.default.indexOf(a,r[y].id)===-1?u.default.createElement("div",{className:"editable-list-field"},u.default.createElement("div",{style:{display:"table",width:"100%"}},r[y].users&&r[y].users.length>0?u.default.createElement("span",null,m.default.map(r[y].users,function(e){return u.default.createElement("div",{style:{display:"inline-block","float":"left",margin:"3px 3px 6px 3px"}},u.default.createElement(d.Label,{style:{color:"#007eff",border:"1px solid #c2e0ff",backgroundColor:"#ebf5ff",fontWeight:"normal"},key:e.id},e.name))})):u.default.createElement("span",null,u.default.createElement("div",{style:{display:"inline-block",margin:"3px 3px 6px 3px"}},"-")),u.default.createElement("span",{className:"edit-icon-zone edit-icon",onClick:this.willSetUsers.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-pencil"})))):u.default.createElement("div",null,u.default.createElement(f.default.Async,{multi:!0,clearable:!1,disabled:m.default.indexOf(a,r[y].id)!==-1&&!0,options:[],value:this.state.users[r[y].id]||r[y].users,onChange:this.handleUserSelectChange.bind(this,r[y].id),valueKey:"id",labelKey:"nameAndEmail",loadOptions:this.searchUsers,placeholder:"请输入用户"}),u.default.createElement("div",{className:m.default.indexOf(a,r[y].id)!==-1?"hide":"edit-button-group"},u.default.createElement(d.Button,{className:"edit-ok-button",onClick:this.setUsers.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-check"})),u.default.createElement(d.Button,{className:"edit-cancel-button",onClick:this.cancelSetUsers.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-close"})))),u.default.createElement("img",{src:R,style:{"float":"right"},className:m.default.indexOf(a,r[y].id)!==-1?"loading":"hide"})),groups:t.permissions&&t.permissions.indexOf("manage_project")===-1?u.default.createElement("div",null,u.default.createElement("span",null,m.default.map(r[y].groups,function(e){return u.default.createElement("div",{style:{display:"inline-block","float":"left",margin:"3px"}},u.default.createElement(d.Label,{style:{color:"#007eff",border:"1px solid #c2e0ff",backgroundColor:"#ebf5ff",fontWeight:"normal"},key:e.id},e.name))}))):u.default.createElement("div",null,m.default.indexOf(i,r[y].id)===-1&&m.default.indexOf(l,r[y].id)===-1?u.default.createElement("div",{className:"editable-list-field"},u.default.createElement("div",{style:{display:"table",width:"100%"}},r[y].groups&&r[y].groups.length>0?u.default.createElement("span",null,m.default.map(r[y].groups,function(e){return u.default.createElement("div",{style:{display:"inline-block","float":"left",margin:"3px 3px 6px 3px"}},u.default.createElement(d.Label,{style:{color:"#007eff",border:"1px solid #c2e0ff",backgroundColor:"#ebf5ff",fontWeight:"normal"},key:e.id},e.name))})):u.default.createElement("span",null,u.default.createElement("div",{style:{display:"inline-block",margin:"3px 3px 6px 3px"}},"-")),u.default.createElement("span",{className:"edit-icon-zone edit-icon",onClick:this.willSetGroups.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-pencil"})))):u.default.createElement("div",null,u.default.createElement(f.default.Async,{multi:!0,clearable:!1,disabled:m.default.indexOf(l,r[y].id)!==-1&&!0,options:[],value:this.state.groups[r[y].id]||r[y].groups,onChange:this.handleGroupSelectChange.bind(this,r[y].id),valueKey:"id",labelKey:"name",loadOptions:this.searchGroups,placeholder:"请输入用户组"}),u.default.createElement("div",{className:m.default.indexOf(l,r[y].id)!==-1?"hide":"",style:{"float":"right"}},u.default.createElement(d.Button,{className:"edit-ok-button",onClick:this.setGroups.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-check"})),u.default.createElement(d.Button,{className:"edit-cancel-button",onClick:this.cancelSetGroups.bind(this,r[y].id)},u.default.createElement("i",{className:"fa fa-close"})))),u.default.createElement("img",{src:R,style:{"float":"right"},className:m.default.indexOf(l,r[y].id)!==-1?"loading":"hide"}))});var v={};return n?v.noDataText=u.default.createElement("div",null,u.default.createElement("img",{src:R,className:"loading"})):v.noDataText="暂无数据显示。",v.onRowMouseOver=this.onRowMouseOver.bind(this),u.default.createElement("div",{style:{marginBottom:"30px",marginTop:"15px"}},u.default.createElement("div",{className:"info-col"},u.default.createElement("div",{className:"info-icon"},u.default.createElement("i",{className:"fa fa-info-circle"})),u.default.createElement("div",{className:"info-content"},"若成员配置修改后，用户权限没有生效，请刷新页面。")),u.default.createElement(c.BootstrapTable,{data:p,bordered:!1,hover:!0,options:v,trClassName:"tr-top"},u.default.createElement(c.TableHeaderColumn,{dataField:"id",isKey:!0,hidden:!0},"ID"),u.default.createElement(c.TableHeaderColumn,{dataField:"name",width:"300"},"角色"),u.default.createElement(c.TableHeaderColumn,{dataField:"users"},"用户"),u.default.createElement(c.TableHeaderColumn,{dataField:"groups"},"用户组")))}}],[{key:"propTypes",value:{collection:l.PropTypes.array.isRequired,options:l.PropTypes.object.isRequired,selectedItem:l.PropTypes.object.isRequired,indexLoading:l.PropTypes.bool.isRequired,index:l.PropTypes.func.isRequired,setActor:l.PropTypes.func.isRequired,setGroupActor:l.PropTypes.func.isRequired},enumerable:!0}]),t}(l.Component);t.default=E,e.exports=t.default}).call(this)}finally{}}});
//# sourceMappingURL=team-27e8543b5189f04003f0.js.map