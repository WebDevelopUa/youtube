(this["webpackJsonpyoutube-player"]=this["webpackJsonpyoutube-player"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),l=a(7),s=a.n(l),m=a(15),o=a(2),u=a(3),d=a(5),v=a(4),p=a(16),h=a.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:20,key:"AIzaSyAYsFmRIiqqtfZ6INIfnafcVpH7iZE6nAk"}}),b=(a(41),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value.toUpperCase()})},e.onInputSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui blue inverted search-bar segment clearing full-width"},r.a.createElement("form",{className:"ui form",onSubmit:this.onInputSubmit},r.a.createElement("div",{className:"ui field"},r.a.createElement("label",{className:"ui huge header white"},r.a.createElement("i",{className:"search icon"}),"Search Video"),r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.term,onChange:this.onInputChange}),r.a.createElement("i",{className:"search icon"})))))}}]),a}(r.a.Component)),E=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},r.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))},N=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(E,{key:e.id.videoId,video:e,onVideoSelect:a})}));return r.a.createElement("div",{className:"seven wide tablet    six wide computer  column"},r.a.createElement("div",{className:"ui raised segment"},r.a.createElement("div",{className:"ui celled list"},n)))},f=function(e){var t=e.video,a="https://youtube.com/embed/".concat(t.id.videoId,"?&modestbranding=1&autoplay=1&controls=1&fs=1&loop=0&rel=1&showinfo=0&disablekb=1");return t?r.a.createElement("div",{className:"nine wide tablet    ten wide computer  column"},r.a.createElement("div",{className:"ui raised segments"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"YouTube Browser Player",src:a,frameBorder:"0",allowFullScreen:!0}))),r.a.createElement("div",{className:"ui secondary segment"},r.a.createElement("p",{className:"ui header big blue"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))):null},g=function(){return r.a.createElement("div",{className:"ui inverted blue vertical footer segment padded clearing basic center aligned"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui labeled icon center"},r.a.createElement("a",{className:"item white",href:"https://github.com/WebDevelopUa/youtube",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"github white icon"}),"Source Code")))))},w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null,error:null},e.getSearchBarState=function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:a}}).then((function(t){return e.setState({videos:t.data.items,selectedVideo:t.data.items[0]})})).catch((function(t){return e.setState({error:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.renderMenu=function(){return r.a.createElement("div",{className:"ui segment clearing basic blue inverted"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui grid   three column   center aligned"},r.a.createElement("div",{className:"three wide column    mobile hidden"},r.a.createElement("div",{className:"ui labeled icon menu compact blue inverted"},r.a.createElement("a",{className:"item",href:"/"},r.a.createElement("i",{className:"youtube icon"}),"YouTube Player"))),r.a.createElement("div",{className:"sixteen wide mobile   ten wide tablet    ten wide computer   column"},r.a.createElement("span",{className:"fitted item"},r.a.createElement(b,{onFormSubmit:e.getSearchBarState}))),r.a.createElement("div",{className:"three wide column    mobile hidden"},r.a.createElement("div",{className:"ui labeled icon menu compact blue inverted"},r.a.createElement("a",{className:"item",href:"https://github.com/WebDevelopUa/youtube",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"github icon"}),"Source Code")))))))},e.renderMain=function(){return null===e.state.selectedVideo&&null===e.state.error?r.a.createElement("div",{className:"ui clearing segment full-height"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui text loader"},r.a.createElement("p",{className:"ui header blue"},"Loading ...")))):e.state.error?r.a.createElement("div",{className:"ui clearing segment full-height"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui indeterminate text loader"},r.a.createElement("p",{className:"ui header red"},"Something went wrong!")))):r.a.createElement("div",{className:"ui main container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui stackable grid two column"},r.a.createElement(f,{video:e.state.selectedVideo}),r.a.createElement(N,{videos:e.state.videos,onVideoSelect:e.onVideoSelect}))))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getSearchBarState("deep space house")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderMenu(),this.renderMain(),r.a.createElement(g,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b1eeaae6.chunk.js.map