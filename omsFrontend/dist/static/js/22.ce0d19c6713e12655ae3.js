webpackJsonp([22],{CbMs:function(e,t,r){var l=r("TQqN");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r("rjj0")("b595a47c",l,!0)},GGwe:function(e,t,r){"use strict";function l(e){r("CbMs")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("BO1k"),s=r.n(o),a=r("mvHQ"),n=r.n(a),i=r("Dd8w"),u=r.n(i),c=r("ZTLr"),m=r("EMXe"),d=r("nSkA"),p=r("vMJZ"),f=r("QmSG"),g=r("NYxO"),h={components:{ElButton:m.a},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:this.username,level:2,action_user:"",follower:"",create_group:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],action_user:[{required:!0,message:"请选择指派者",trigger:"change"}],follower:[{required:!0,type:"array",message:"请选择工单跟踪者",trigger:"change"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:null,enclosureForm:{ticket:"",create_user:this.username,file:"",create_group:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],ws_stream:"/salt/sendmail/",ws:"",to_list:[],cc_list:[],uploadurl:f.uploadurl}},computed:u()({},Object(g.b)(["username"])),created:function(){this.getTicketUsers(),this.wsInit()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(c.k)(t.ruleForm).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.enclosureFile&&(t.enclosureForm.file=t.enclosureFile,t.enclosureForm.ticket=e.data.id,Object(c.i)(t.enclosureForm)),t.getEmail(t.ruleForm.action_user,t.ruleForm.follower);var r={to_list:t.to_list,cc_list:t.cc_list,sub:t.ruleForm.title,context:t.ruleForm.content};console.log(r),t.ws.send(n()(r)),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(p.f)().then(function(t){e.users=t.data})},handleSuccess:function(e,t){var r=this,l=this.afterFileUpload(t);Object(d.c)(l).then(function(e){r.enclosureFile=e.data.filepath,"ok"===e.statusText&&(r.count+=1,r.$message({type:"success",message:"恭喜你，上传成功"}))}).catch(function(e){r.$message.error("上传失败"),r.$refs.upload.clearFiles(),console.log(e)})},imgAdd:function(e,t){var r=this.$refs.md,l=new FormData;l.append("username",this.enclosureForm.create_user),l.append("file",t),l.append("create_time",this.afterFileUpload(t)),l.append("type",t.type),l.append("archive",this.route_path[1]),Object(d.c)(l).then(function(t){r.$imglst2Url([[e,t.data.file]])})},afterFileUpload:function(e){var t=new Date(e.lastModified);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()},getEmail:function(e,t){var r=this,l={username:e};Object(p.f)(l).then(function(e){var t=e.data[0];r.to_list.push(t.email)});var o=!0,a=!1,n=void 0;try{for(var i,u=s()(t);!(o=(i=u.next()).done);o=!0){var c=i.value,m={username:c};Object(p.f)(m).then(function(e){var t=e.data[0];r.cc_list.push(t.email)})}}catch(e){a=!0,n=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw n}}},wsInit:function(){var e=this,t=this;t.ws=new WebSocket(f.ws_url+t.ws_stream),t.ws.readyState===WebSocket.OPEN&&t.ws.onopen(),t.ws.onmessage=function(t){e.$message({type:t.code,message:t.msg})}}}},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"跟踪者",prop:"follower"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择跟踪者"},model:{value:e.ruleForm.follower,callback:function(t){e.$set(e.ruleForm,"follower",t)},expression:"ruleForm.follower"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{default_open:"edit",code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("div",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"file-list":e.fileList,disabled:e.count>0}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>0},slot:"trigger"},[e._v("\n              上传文件\n            ")]),e._v("\n            (可以不用上传)\n            "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过500kb，"),r("a",{staticStyle:{color:"red"}},[e._v("添加工单页面只能上传1个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},_=[],F={render:v,staticRenderFns:_},b=F,w=r("VU/8"),k=l,y=w(h,b,!1,k,null,null);t.default=y.exports},TQqN:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".heng{margin:20px 0;height:1px;border:0;background-color:rgba(174,127,255,.38);color:#29e11c}.addticket{margin:50px;width:80%}",""])}});