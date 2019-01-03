(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(68)},60:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(26),r=n.n(o),c=n(8),l=n(9),s=n(12),u=n(10),p=n(13),m=n(5),d=n(2),h=n(28),f=n.n(h).a.create({baseURL:"https://react-links-1df04.firebaseio.com/"}),v=n(6),b={links:[],groups:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LINK":var n=Object(d.a)({},e.groups);return n[t.link.topic].push(t.link),Object(d.a)({},e,{links:e.links.concat(t.link),groups:n});case"DATA_LOADED":return Object(d.a)({},e,{links:t.links});case"SET_TOPICS":return Object(d.a)({},e,{topics:t.topics});case"DATA_GROUPS_LOADED":return Object(d.a)({},e,{groups:t.groups});default:return e}},E=n(29),O=function(e){return function(e){return function(t){e(t)}}},g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,_=Object(v.d)(k,g(Object(v.a)(O,E.a))),j=(n(60),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoadData()}},{key:"render",value:function(){var e=[];for(var t in this.props.groups){var n=this.props.groups[t];e.push(i.a.createElement("li",{className:"main-group",key:t},i.a.createElement("h2",{className:"main-group__title"},t),i.a.createElement("ul",{className:"main-group__links"},n.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title?e.title:"...no found"))}))))}return i.a.createElement("ul",{className:"main-groups"},e)}}]),t}(a.Component)),S=Object(m.b)(function(e){return{links:e.links,groups:e.groups}},function(e){return{onLoadData:function(){return e(function(e){f.get("/links.json").then(function(t){var n=_.getState(),a=[];for(var i in n.topics)"0"!=i&&a.push(n.topics[i].value);var o=[];for(var r in a){var c=[];for(var l in t.data)t.data[l].topic==a[r]&&c.push(Object(d.a)({},t.data[l],{id:l}));o[a[r]]=c}var s=[];for(var u in t.data)s.push(Object(d.a)({},t.data[u],{id:u}));e({type:"DATA_LOADED",links:s}),e(function(e){return{type:"DATA_GROUPS_LOADED",groups:e}}(o))}).catch(function(e){console.log("Error:::::::::",e)})})}}})(j),D=n(11),y=n(3),N=n(30),w=n.n(N),A=(n(64),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={link:"",topicSelected:null,title:""},e.options=[],e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(y.a)(Object(y.a)(e))),e.form=i.a.createRef(),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitTopics()}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.link,a=t.topicSelected,i=t.title;null!==a&&(this.props.addLink({link:n,topic:a,title:i,id:w()()}),this.setState({link:"",topicSelected:"",title:""}))}},{key:"validate",value:function(){return this.form.current.reportValidity()}},{key:"render",value:function(){var e=this.state,t=e.link,n=e.topic,a=e.title,o=this.props.topics;return i.a.createElement("form",{className:"Form",ref:this.form,onSubmit:this.handleSubmit},i.a.createElement("div",{className:"Form__Row"},i.a.createElement("label",{htmlFor:"topicSelected"},"Topic: "),i.a.createElement("select",{id:"topicSelected",value:n,onChange:this.handleChange,required:!0},void 0!=o?o.map(function(e){return i.a.createElement("option",{key:e.value},e.label)}):null)),i.a.createElement("div",{className:"Form__Row"},i.a.createElement("label",{htmlFor:"link"},"Link: "),i.a.createElement("input",{className:"Input",type:"text",id:"link",value:t,onChange:this.handleChange,autoComplete:"off",required:!0})),i.a.createElement("div",{className:"Form__Row"},i.a.createElement("label",{htmlFor:"title"},"Title:"),i.a.createElement("input",{className:"Input",type:"text",id:"title",value:a,onChange:this.handleChange,autoComplete:"off",required:!0})),i.a.createElement("div",{className:"Form__Row"},i.a.createElement("button",{className:"Btn Btn__Save",type:"submit"},"SAVE")))}}]),t}(a.Component)),C=Object(m.b)(function(e){return{topics:e.topics}},function(e){return{addLink:function(t){return e((n=t,function(e){f.post("links.json",n).then(function(t){e(function(e){return{type:"ADD_LINK",link:e}}(n))}).catch(function(e){console.log("Error:::::::",e)})}));var n},onInitTopics:function(){return e(function(e){f.get("https://react-links-1df04.firebaseio.com/topics.json").then(function(t){var n=[{value:0,label:"..Seleccione uno..."}];for(var a in t.data)n.push({value:a,label:a});e({type:"SET_TOPICS",topics:n})}).catch(function(e){console.log("Errror: ",e)})})}}})(A),L=(n(66),function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"Links"},i.a.createElement("h2",{className:"main-title"},"Links"),i.a.createElement(S,null)),i.a.createElement("div",{className:"Form"},i.a.createElement("h2",{className:"main-title"},"Add Link"),i.a.createElement(C,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(m.a,{store:_},i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.e9a9517e.chunk.js.map