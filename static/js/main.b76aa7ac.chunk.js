(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),c=a.n(s),i=a(1),o=a(2),d=a(5),p=a(4),u=a(3),m=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={style:{},name:""},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"playSound",value:function(e){var t=this;document.getElementById(this.props.keyTrigger).play(),this.setState({style:{backgroundColor:"grey"},name:this.props.id}),setTimeout((function(){return t.setState({style:{}})}),50),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){return n.a.createElement("div",{className:"drum-pad",id:this.props.clipId,style:this.state.style,onClick:this.playSound},n.a.createElement("audio",{id:this.props.keyTrigger,class:"clip",src:this.props.src}),this.props.keyTrigger)}}]),a}(r.Component),l=(a(13),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;return e=[{keyTrigger:"Q",keyCode:81,id:"heater1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyTrigger:"W",keyCode:87,id:"heater2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyTrigger:"E",keyCode:69,id:"heater3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyTrigger:"A",keyCode:65,id:"heater4",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyTrigger:"S",keyCode:83,id:"clap",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyTrigger:"D",keyCode:68,id:"pad6",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyTrigger:"Z",keyCode:90,id:"pad7",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyTrigger:"X",keyCode:88,id:"pad8",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyTrigger:"C",keyCode:67,id:"pad9",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}].map((function(e){return n.a.createElement(m,{clipId:e.id,keyTrigger:e.keyTrigger,keyCode:e.keyCode,src:e.src,updateDisplay:t.props.updateDisplay})})),n.a.createElement("div",{id:"padbanks"},e)}}]),a}(r.Component)),y=(a(14),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"logo"},n.a.createElement("p",null,"Vincent DrumPads"))}}]),a}(r.Component)),h=(a(15),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"control"},n.a.createElement("p",{id:"display"},this.props.display))}}]),a}(r.Component)),k=(a(16),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={display:"drumpad"},r.updateDisplay=r.updateDisplay.bind(Object(d.a)(r)),r}return Object(o.a)(a,[{key:"updateDisplay",value:function(e){this.setState({display:e})}},{key:"render",value:function(){return n.a.createElement("div",{id:"drum-machine"},n.a.createElement(l,{updateDisplay:this.updateDisplay}),n.a.createElement(y,null),n.a.createElement(h,{display:this.state.display}))}}]),a}(r.Component));a(17);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b76aa7ac.chunk.js.map