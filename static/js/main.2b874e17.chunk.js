(this.webpackJsonpsilhouette=this.webpackJsonpsilhouette||[]).push([[0],{113:function(e,t,a){e.exports=a(147)},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(78),a(208)),l=a(199),s=a(102),m=a(207),u=a(213),d=a(209),p=a(46),g=a(190),E=a(104),f=a(13),h=a(24),b=a.n(h),v=function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/user-detail")).then((function(t){e({type:"SET_USER_DETAIL",payload:t.data})})).catch((function(e){console.log(e)}))}},y=Object(g.a)((function(e){return{heroImage:{minHeight:"100vh",backgroundImage:"",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"},heroText:{textAlign:"center",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white"},firstFont:Object(p.a)({fontWeight:"lighter",marginRight:e.spacing(1)},e.breakpoints.down("sm"),{fontSize:25}),secondFont:Object(p.a)({fontWeight:"bolder"},e.breakpoints.down("xs"),{fontSize:35})}})),O={getBackgroundPicture:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/background-image")).then((function(t){e({type:"SET_BACKGROUND_PICTURE",payload:t.data})})).catch((function(e){console.log(e)}))}},getUserDetails:v},_=Object(f.b)((function(e){return{user_detail:e.data.user_detail,background_picture:e.data.bacground_picture}}),O)((function(e){var t=y(),a=e.getUserDetails,c=e.getBackgroundPicture,i=e.user_detail,o=e.background_picture;return Object(n.useEffect)((function(){a(),c()}),[a,c]),r.a.createElement("div",{id:"home",className:t.heroImage,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(".concat(o.image,")")}},r.a.createElement("div",{className:t.heroText},r.a.createElement(E.a,{variant:"h3",className:t.firstFont},"Hello, I'm"),r.a.createElement(E.a,{variant:"h2",className:t.secondFont},i.name)))})),j=a(193),N=Object(g.a)((function(e){return{section:{marginTop:e.spacing(15)},mainTitle:{marginBottom:e.spacing(3),display:"flex"},firstFont:{fontWeight:"lighter",marginRight:e.spacing(1)},secondFont:{fontWeight:"bolder"},am:{"& .image-wrapper":{textAlign:"center",position:"relative"},"& .image":{width:380,height:380,objectFit:"cover",maxWidth:"100%",borderRadius:"10%"}}}})),T={getUserDetails:v},k=Object(f.b)((function(e){return{user_detail:e.data.user_detail}}),T)((function(e){var t=N(),a=e.getUserDetails,c=e.user_detail;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",{className:t.section,id:"about"},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,sm:6},r.a.createElement("div",{className:t.am},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:c.image,alt:"profile_pic",className:"image"})))),r.a.createElement(j.a,{item:!0,sm:6},r.a.createElement("div",{className:t.mainTitle},r.a.createElement(E.a,{variant:"h4",className:t.firstFont},"About"),r.a.createElement(E.a,{variant:"h4",className:t.secondFont},"Me")),r.a.createElement(E.a,null,c.description))))})),S=a(29),A=a(210),D=a(195),R=a(211),F=a(197),x=Object(g.a)((function(e){return{element:{marginBottom:e.spacing(2)},title:{marginBottom:e.spacing(2),fontWeight:"lighter"},section:{marginTop:e.spacing(15)},mainTitle:{justifyContent:"center",display:"flex",marginBottom:e.spacing(6)},firstFont:{fontWeight:"lighter",marginRight:e.spacing(1)},secondFont:{fontWeight:"bolder"}}})),w={getUserDetails:v,postResponses:function(e){return function(t){t({type:"LOADING_DATA"}),b.a.post("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/get-in-touch/"),e).then((function(e){t({type:"CLEAR_ERRORS",payload:null}),t({type:"FORM_SUBMITTED",payload:!0})})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}},closeForm:function(){return function(e){e({type:"LOADING_DATA"}),e({type:"FORM_SUBMITTED",payload:!1})}}},I=Object(f.b)((function(e){return{user_detail:e.data.user_detail,errors:e.data.errors,form_submitted:e.data.form_submitted}}),w)((function(e){var t=x(),a=e.getUserDetails,c=e.user_detail,i=e.postResponses,o=e.errors,l=e.form_submitted,s=e.closeForm,m=r.a.useState(""),u=Object(S.a)(m,2),d=u[0],p=u[1],g=r.a.useState(""),f=Object(S.a)(g,2),h=f[0],b=f[1],v=r.a.useState(""),y=Object(S.a)(v,2),O=y[0],_=y[1];return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",{className:t.section,id:"contact"},r.a.createElement("div",{className:t.mainTitle},r.a.createElement(E.a,{variant:"h4",className:t.firstFont},"Get"),r.a.createElement(E.a,{variant:"h4",className:t.secondFont},"In Touch")),r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,sm:8},r.a.createElement(E.a,{variant:"h6",className:t.title},"Get In Touch"),!1===l?r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({name:d,email:h,message:O})},noValidate:!0},r.a.createElement(A.a,{id:"name",label:"Name",variant:"filled",fullWidth:!0,size:"small",className:t.element,onChange:function(e){return p(e.target.value)},helperText:!!o&&o.name,error:!!o&&!!o.name,value:d}),r.a.createElement(A.a,{label:"email",variant:"filled",fullWidth:!0,size:"small",className:t.element,onChange:function(e){return b(e.target.value)},helperText:!!o&&o.email,error:!!o&&!!o.email,value:h}),r.a.createElement(A.a,{helperText:!!o&&o.message,error:!!o&&!!o.message,label:"Write a Message",variant:"filled",fullWidth:!0,multiline:!0,rows:5,size:"small",className:t.element,onChange:function(e){return _(e.target.value)},value:O}),r.a.createElement(D.a,{variant:"contained",color:"primary",className:t.element,type:"submit"},"Submit")):r.a.createElement(R.a,{severity:"success",onClose:function(){s(),p(""),b(""),_("")}},r.a.createElement(F.a,null,"Success"),"Thank You, I'll Get back to you soon!!")),r.a.createElement(j.a,{item:!0,sm:4},r.a.createElement(E.a,{variant:"h6",className:t.title},"My Contact Details"),r.a.createElement(E.a,{variant:"caption",color:"secondary"},"EMAIL"),r.a.createElement(E.a,{variant:"body1",className:t.element},c.email),r.a.createElement(E.a,{variant:"caption",color:"secondary"},"ADDRESS"),r.a.createElement(E.a,{variant:"body1",className:t.element},c.address))))})),C=a(196),L=a(198),B=a(62),W=a.n(B),z=a(97),U=a.n(z),G=a(61),M=a.n(G),P=a(98),H=a.n(P),K=a(99),X=a.n(K);function V(){return r.a.createElement(E.a,{variant:"body2"},"Copyright \xa9 ",(new Date).getFullYear()," All rights reserved | ",r.a.createElement(L.a,{color:"inherit",href:"https://namedsaikrishna.github.io/silhouette"},"Sai Krishna Konda."))}var J=Object(g.a)((function(e){return{section:{marginTop:e.spacing(8),marginBottom:e.spacing(4),textAlign:"center"},element:{marginBottom:e.spacing(2)}}}));var Y={getHandles:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/handles")).then((function(t){e({type:"SET_HANDLES",payload:t.data})})).catch((function(e){console.log(e)}))}}},$=Object(f.b)((function(e){return{handles:e.data.handles}}),Y)((function(e){var t=e.getHandles,a=e.handles;Object(n.useEffect)((function(){t()}),[t]);var c=J();return r.a.createElement("div",{className:c.section},r.a.createElement("div",{className:c.element},r.a.createElement(V,null)),a.map((function(e,t){return r.a.createElement(C.a,{href:e.site_link,target:"_blank",key:t},function(e){switch(e.name){case"twitter":return r.a.createElement(U.a,{fontSize:"large",color:"primary"});case"github":return r.a.createElement(M.a,{fontSize:"large",color:"primary"});case"instagram":return r.a.createElement(H.a,{fontSize:"large",color:"primary"});case"linkedin":return r.a.createElement(X.a,{fontSize:"large",color:"primary"});default:return r.a.createElement(W.a,{fontSize:"large",color:"primary"})}}(e))})))})),q=a(200),Q=a(201),Z=a(23),ee=Object(g.a)((function(e){return{appbar:{alignItems:"center",background:"transparent"},appbarActive:{alignItems:"center",background:e.palette.primary},btn:{marginRight:e.spacing(2)}}}));var te=function(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),a=t[0],c=t[1];window.addEventListener("scroll",(function(){window.scrollY>=80?c(!0):c(!1)}));var i=ee();return r.a.createElement("div",null,r.a.createElement(u.a,{smDown:!0},r.a.createElement(q.a,{position:"fixed",className:a?i.appbarActive:i.appbar,elevation:0},r.a.createElement(Q.a,null,r.a.createElement(Z.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit",className:i.btn},"Home")),r.a.createElement(Z.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit",className:i.btn},"Projects")),r.a.createElement(Z.Link,{activeClass:"active",to:"resume",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit",className:i.btn},"Resume")),r.a.createElement(Z.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit",className:i.btn},"About")),r.a.createElement(Z.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit",className:i.btn},"Skills")),r.a.createElement(Z.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-100,duration:500},r.a.createElement(D.a,{color:"inherit"},"Contact"))))))},ae=a(202),ne=a(203),re=a(204),ce=Object(g.a)((function(e){return{bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12,position:"relative"}}})),ie=function(e){var t=ce(),a=e.project;return r.a.createElement("div",null,r.a.createElement(ae.a,{className:t.root},r.a.createElement(ne.a,null,r.a.createElement(E.a,{variant:"h5",component:"h2"},a.title),r.a.createElement(E.a,{className:t.pos,color:"textSecondary"},a.used_languages),r.a.createElement(E.a,{variant:"body2",component:"p"},a.description)),r.a.createElement(re.a,{disableSpacing:!0},""!==a.github_repo?r.a.createElement(C.a,{"aria-label":"Visit GitHub Repo",color:"primary",href:a.github_repo,target:"_blank"},r.a.createElement(M.a,null)):"",""!==a.site_link?r.a.createElement(C.a,{"aria-label":"Visit GitHub Repo",color:"primary",href:a.site_link,target:"_blank"},r.a.createElement(W.a,null)):"")))},oe=Object(g.a)((function(e){return{section:{marginTop:e.spacing(15)},mainTitle:{marginBottom:e.spacing(6),justifyContent:"center",display:"flex"},firstFont:{fontWeight:"lighter",marginRight:e.spacing(1)},secondFont:{fontWeight:"bolder"}}})),le={getProjects:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/projects")).then((function(t){e({type:"SET_PROJECTS",payload:t.data})})).catch((function(e){console.log(e)}))}}},se=Object(f.b)((function(e){return{projects:e.data.projects}}),le)((function(e){var t=oe(),a=e.getProjects,c=e.projects;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",{className:t.section,id:"projects"},r.a.createElement("div",{className:t.mainTitle},r.a.createElement(E.a,{variant:"h4",className:t.firstFont},"Featured"),r.a.createElement(E.a,{variant:"h4",className:t.secondFont},"Projects")),r.a.createElement(j.a,{container:!0,spacing:3},c.map((function(e,t){return r.a.createElement(j.a,{item:!0,xs:12,md:4,key:t},r.a.createElement(ie,{project:e}))}))))})),me=a(105),ue=Object(g.a)((function(e){return{title:{marginBottom:e.spacing(2),fontWeight:"lighter"},section:{marginTop:e.spacing(15)},mainTitle:{marginBottom:e.spacing(6),justifyContent:"center",display:"flex"},firstFont:{fontWeight:"lighter",marginRight:e.spacing(1)},secondFont:{fontWeight:"bolder"},di:{padding:e.spacing(3)},sectionDivider:{marginBottom:e.spacing(2)},list:{marginTop:e.spacing(2),marginButtom:e.spacing(2)}}})),de={getEducation:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/education")).then((function(t){e({type:"SET_EDUCATION",payload:t.data})})).catch((function(e){console.log(e)}))}},getExperience:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/experience")).then((function(t){e({type:"SET_EXPERIENCE",payload:t.data})})).catch((function(e){console.log(e)}))}}},pe=Object(f.b)((function(e){return{education:e.data.education,experience:e.data.experience}}),de)((function(e){var t=ue(),a=e.getEducation,c=e.getExperience,i=e.education,o=e.experience;return Object(n.useEffect)((function(){c(),a()}),[a,c]),r.a.createElement("div",{className:t.section,id:"resume"},r.a.createElement("div",{className:t.mainTitle},r.a.createElement(E.a,{variant:"h4",className:t.firstFont},"My"),r.a.createElement(E.a,{variant:"h4",className:t.secondFont},"Resume")),r.a.createElement("div",{className:t.sectionDivider},r.a.createElement(E.a,{variant:"h6",className:t.title},"Education"),r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,spacing:3},i.map((function(e,a){return r.a.createElement(j.a,{item:!0,xs:12,md:6,key:a},r.a.createElement(me.a,{className:t.di},r.a.createElement(E.a,{variant:"body1",color:"textSecondary",gutterBottom:!0},e.location),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0,color:"inherit"},e.degree.name),r.a.createElement("div",{className:t.list},r.a.createElement(E.a,{component:L.a,variant:"subtitle1",target:"_blank",style:{textDecoration:"none"},href:e.college_link},e.college_name))))}))))),r.a.createElement("div",null,r.a.createElement(E.a,{variant:"h6",className:t.title},"Experience"),r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,spacing:3},o.map((function(e,a){return r.a.createElement(j.a,{item:!0,xs:12,md:6,key:a},r.a.createElement(me.a,{className:t.di},r.a.createElement(E.a,{variant:"body1",color:"textSecondary",gutterBottom:!0},e.location),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0,color:"inherit"},e.designation.name),r.a.createElement("div",{className:t.list},r.a.createElement(E.a,{component:L.a,variant:"body1",target:"_blank",style:{textDecoration:"none"},href:e.company_link},e.company_name))))}))))))})),ge=Object(g.a)((function(e){return{section:{marginTop:e.spacing(15)},mainTitle:{justifyContent:"center",display:"flex",marginBottom:e.spacing(6)},firstFont:{fontWeight:"lighter",marginRight:e.spacing(1)},secondFont:{fontWeight:"bolder"},heading:{alignItems:"center"},skill:{padding:e.spacing(4),"& .image-wrapper":{textAlign:"center",position:"relative"},"& .image":{width:110,height:110,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"}}}})),Ee={getSkills:function(){return function(e){e({type:"LOADING_DATA"}),b.a.get("".concat("https://ec2-13-235-115-247.ap-south-1.compute.amazonaws.com","/skills")).then((function(t){e({type:"SET_SKILLS",payload:t.data})})).catch((function(e){console.log(e)}))}}},fe=Object(f.b)((function(e){return{skills:e.data.skills}}),Ee)((function(e){var t=ge(),a=e.getSkills,c=e.skills;return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement("div",{className:t.section,id:"skills"},r.a.createElement("div",{className:t.mainTitle},r.a.createElement(E.a,{variant:"h4",className:t.firstFont},"My"),r.a.createElement(E.a,{variant:"h4",className:t.secondFont},"Skills")),r.a.createElement(me.a,{className:t.paper},r.a.createElement("div",{className:t.skill},r.a.createElement(j.a,{container:!0,justify:"center",spacing:3},c.map((function(e,t){return r.a.createElement(j.a,{item:!0,sm:2,key:t},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:e.image,alt:"pic",className:"image"}),r.a.createElement(E.a,null,e.name)))}))))))})),he=a(214),be=a(194),ve=a(206),ye=a(149),Oe=a(205),_e=a(100),je=a.n(_e),Ne=[{name:"Home",section:"home"},{name:"Projects",section:"projects"},{name:"Resume",section:"resume"},{name:"About",section:"about"},{name:"Skills",section:"skills"},{name:"Contact",section:"contact"}],Te=Object(ye.a)((function(e){return{button:{padding:"10px 8px",justifyContent:"center",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},mBtn:{color:"white"},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),ke=function(){var e=r.a.useState(!1),t=Object(S.a)(e,2),a=t[0],n=t[1],c=function(){n(!1)},i=Te();return r.a.createElement("div",null,r.a.createElement(Oe.a,{className:i.fab,color:"primary",onClick:function(){n(!0)}},r.a.createElement(je.a,{className:i.mBtn})),r.a.createElement(he.a,{anchor:"bottom",onClose:c,open:a},r.a.createElement(be.a,null,Ne.map((function(e,t){return r.a.createElement(Z.Link,{to:e.section,smooth:!0,offset:-100,duration:500,key:t},r.a.createElement(ve.a,{disableGutters:!0},r.a.createElement(D.a,{onClick:c,className:i.button},e.name)))})))))},Se=a(35),Ae=a(101),De=a(10),Re={loading:!1,bacground_picture:{},projects:[],education:[],experience:[],user_detail:{},skills:[],handles:[],errors:null,form_submitted:!1},Fe=[Ae.a],xe=Object(Se.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_DATA":return Object(De.a)(Object(De.a)({},e),{},{loading:!0});case"SET_BACKGROUND_PICTURE":return Object(De.a)(Object(De.a)({},e),{},{bacground_picture:t.payload,loading:!1});case"SET_PROJECTS":return Object(De.a)(Object(De.a)({},e),{},{projects:t.payload,loading:!1});case"SET_EDUCATION":return Object(De.a)(Object(De.a)({},e),{},{education:t.payload,loading:!1});case"SET_EXPERIENCE":return Object(De.a)(Object(De.a)({},e),{},{experience:t.payload,loading:!1});case"SET_USER_DETAIL":return Object(De.a)(Object(De.a)({},e),{},{user_detail:t.payload,loading:!1});case"SET_SKILLS":return Object(De.a)(Object(De.a)({},e),{},{skills:t.payload,loading:!1});case"SET_HANDLES":return Object(De.a)(Object(De.a)({},e),{},{handles:t.payload,loading:!1});case"SET_ERRORS":return Object(De.a)(Object(De.a)({},e),{},{errors:t.payload});case"CLEAR_ERRORS":return Object(De.a)(Object(De.a)({},e),{},{errors:t.payload,loading:!1});case"FORM_SUBMITTED":return Object(De.a)(Object(De.a)({},e),{},{form_submitted:t.payload});default:return e}}}),we=Object(Se.e)(xe,{},Object(Se.d)(Se.a.apply(void 0,Fe),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Ie=function(){var e=Object(l.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(s.a)({palette:{type:e?"dark":"light",black:"#000000",white:"#FFFFFF",primary:{contrastText:"#FFFFFF",main:e?"#5f85db":"#2196f3"},secondary:{contrastText:"#000000",main:e?"#febf63":"#b22a00"}}})}),[e]);return r.a.createElement(m.a,{theme:t},r.a.createElement(f.a,{store:we},r.a.createElement(o.a,null),r.a.createElement(te,null),r.a.createElement(_,null),r.a.createElement(d.a,{maxWidth:"md"},r.a.createElement(se,null),r.a.createElement(pe,null),r.a.createElement(k,null),r.a.createElement(fe,null),r.a.createElement(I,null),r.a.createElement($,null),r.a.createElement(u.a,{mdUp:!0},r.a.createElement(ke,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.2b874e17.chunk.js.map