(function(t){function e(e){for(var n,o,h=e[0],r=e[1],c=e[2],d=0,u=[];d<h.length;d++)o=h[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,h=1;h<i.length;h++){var r=i[h];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],r=h.push.bind(h);h.push=e,h=h.slice();for(var c=0;c<h.length;c++)e(h[c]);var l=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"1c97":function(t,e,i){t.exports=i.p+"img/gancao.bc9e4ef0.png"},3804:function(t,e,i){t.exports=i.p+"img/shengjiang.ae3fb0f4.png"},"3cae":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("coinPage")],1)},a=[],o=(i("ac1f"),i("466d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"hiloEle",staticClass:"hilo-page"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.startGame,expression:"startGame"}],staticClass:"gameInfo"},[i("div",{staticClass:"score"},[t._v("分数："+t._s(t.score))]),i("div",{staticClass:"time"},[t._v("剩余时间："+t._s(t.gameTime)+"s")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showEnd,expression:"showEnd"}],staticClass:"dialog-end",on:{click:t.closeDialog}},[i("p",[t._v("恭喜你获得："+t._s(t.score)+"分")]),i("a",{staticClass:"coupon-link",attrs:{href:"http://www.shtzhifa.com/?360&A_so_PC-PP&P-0241#/",target:"_blank"}},[t._v("点击领取优惠券")])])])}),h=[],r=i("d4ec"),c=i("bee2"),l=(i("1276"),i("d3b7"),i("159b"),i("bfc5")),d=i.n(l),u=d.a.Class.create({Mixes:d.a.EventMixin,queue:null,bg:null,bigCoin:null,smallCoin:null,smallCoin2:null,loseCoin:null,bomb:null,hand:null,beginBtn:null,logo:null,load:function(){var t=[{id:"bg",crossOrigin:!0,src:i("9970")},{id:"bigCoin",crossOrigin:!0,src:i("83bc")},{id:"smallCoin",crossOrigin:!0,src:i("3804")},{id:"smallCoin2",crossOrigin:!0,src:i("1c97")},{id:"loseCoin",crossOrigin:!0,src:i("9c58")},{id:"bomb",crossOrigin:!0,src:i("cd78")},{id:"hand",crossOrigin:!0,src:i("c7dc")},{id:"beginBtn",crossOrigin:!0,src:i("e2a5")},{id:"logo",crossOrigin:!0,src:i("9d64")}];this.queue=new d.a.LoadQueue,this.queue.add(t),this.queue.on("complete",this.onComplete.bind(this)),this.queue.start()},onComplete:function(){this.bg=this.queue.get("bg").content,this.bigCoin=this.queue.get("bigCoin").content,this.smallCoin=this.queue.get("smallCoin").content,this.smallCoin2=this.queue.get("smallCoin2").content,this.loseCoin=this.queue.get("loseCoin").content,this.bomb=this.queue.get("bomb").content,this.hand=this.queue.get("hand").content,this.beginBtn=this.queue.get("beginBtn").content,this.logo=this.queue.get("logo").content,this.queue.off("complete"),this.fire("complete")}}),g=d.a.Class.create({Extends:d.a.Bitmap,constructor:function(t){g.superclass.constructor.call(this,t),this.onUpdate=this.onUpdate.bind(this)},over:function(){this.removeFromParent()},onUpdate:function(){this.parent.height<this.y&&this.removeFromParent()}}),p=g,m=d.a.Class.create({Extends:d.a.Container,timer:null,dropEleArr:[],goldIdList:[],idIndex:0,dropSpeed:0,createSpeed:0,score:[2,1,1,-1,0],tween:null,constructor:function(t){m.superclass.constructor.call(this,t),this.tween=d.a.Tween,this.createGold(),this.beginCreateGold()},random:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},beginCreateGold:function(){var t=this;this.timer=setInterval((function(){t.createGold()}),this.createSpeed)},createGold:function(){var t=null;switch(this.goldIdList[this.idIndex]){case"2":t=0;break;case"a":t=1;break;case"b":t=2;break;case"0":t=4;break;default:t=3;break}10===this.idIndex?this.dropSpeed=1e3:30===this.idIndex?this.dropSpeed=1200:60===this.idIndex&&(this.dropSpeed=1500);var e=this.dropEleArr[t],i=new p({image:e,rect:[0,0,e.width,e.height],id:this.goldIdList[this.idIndex]}).addTo(this);i.x=this.random(100,this.width-100),i.y=60,i.index=this.idIndex,i.score=this.score[t],this.tween.to(i,{y:this.height+200},{duration:1400/this.dropSpeed*1e3,loop:!1,onComplete:function(){i.removeFromParent()}}),this.idIndex++},stopCreateGold:function(){clearInterval(this.timer),this.removeAllChildren()},checkCollision:function(t){for(var e=0,i=this.children.length;e<i;e++)if(t.hitTestObject(this.children[e],!0))return!0;return!1}}),b=m,f=d.a.Class.create({Extends:d.a.Container,img:null,catchEle:null,score:null,constructor:function(t){f.superclass.constructor.call(this,t),this.initHand(),this.initCatch()},initHand:function(){new d.a.Bitmap({id:"hand",image:this.img,rect:[0,0,this.img.width,this.img.height]}).addTo(this)},initCatch:function(){this.catchEle=new d.a.Bitmap({id:"catch",background:"rgb(0,0,0)",rect:[0,0,80,10],x:45,y:20}).addTo(this)},checkCollision:function(t){return!!t.hitTestObject(this.catchEle,!0)}}),w=f,v=function(){function t(e){Object(r["a"])(this,t),this.vueInstance=e,this.pageEle=null,this.width=2*innerWidth,this.height=2*innerHeight,this.scale=.5,this.stage=null,this.asset=new u,this.ticker=null,this.golds=null,this.goldIdList=[],this.dropSpeed=600,this.createSpeed=500,this.handEle=null,this.btnBegin=null,this.btnText=null,this.btnText2=null,this.score=0,this.initGameTime=30,this.gameTime=0,this.gameStatus="ready"}return Object(c["a"])(t,[{key:"init",value:function(){this.asset.on("complete",function(){this.asset.off("complete"),this.initStage()}.bind(this)),this.asset.load()}},{key:"initStage",value:function(){this.stage=new d.a.Stage({renderType:"canvas",width:this.width,height:this.height,scaleX:this.scale,scaleY:this.scale,container:this.pageEle}),this.stage.enableDOMEvent([d.a.event.POINTER_START,d.a.event.POINTER_MOVE,d.a.event.POINTER_END]),this.ticker=new d.a.Ticker(60),this.ticker.addTick(this.stage),this.ticker.addTick(d.a.Tween),this.ticker.start(!0),this.initBg(),this.initBeginBtn()}},{key:"initBg",value:function(){var t=this.asset.bg;new d.a.Bitmap({id:"bg",image:t,scaleX:this.width/t.width,scaleY:this.height/t.height}).addTo(this.stage);var e=this.asset.logo;new d.a.Bitmap({id:"logo",image:e,x:this.width-e.width-20,y:20,pointerEnabled:!1}).addTo(this.stage,1)}},{key:"initBeginBtn",value:function(){console.log("initBeginBtn");var t=this.asset.beginBtn;this.btnBegin=new d.a.Bitmap({id:"btnBegin",image:t,x:(this.width-t.width)/2,y:(this.height-t.height)/2,rect:[0,0,t.width,t.height]}).addTo(this.stage,2),this.btnText=new d.a.Text({id:"btnText",text:"完成游戏得优惠券",color:"black",font:"35px Arial",textAlign:"center",height:-150,width:180,maxWidth:this.width,lineHeight:2,x:this.width/2,y:(this.height-t.height)/2+t.height/4}).addTo(this.stage,2),this.btnText.pivotX=this.btnText.width/2,this.btnText.pivotY=this.btnText.height/2,this.btnText2=new d.a.Text({id:"btnText2",text:"游戏规则：头发+2分，干草和生姜+1分，蛋糕扣1分 零分以及碰到炸弹结束。",color:"black",font:"35px Arial",textAlign:"center",height:-250,width:180,maxWidth:this.width,lineHeight:2,x:this.width/2,y:(this.height-t.height)/2+t.height/4}).addTo(this.stage,2),this.btnText2.pivotX=this.btnText2.width/2,this.btnText2.pivotY=this.btnText2.height/2,this.btnBegin.on(d.a.event.POINTER_START,this.startGame.bind(this))}},{key:"startGame",value:function(){this.initGold(),this.initHand(),this.stage.removeChild(this.btnBegin),this.stage.removeChild(this.btnText),this.stage.removeChild(this.btnText2),this.stage.onUpdate=this.onUpdate.bind(this),this.gameTime=this.initGameTime,this.score=0,this.gameStatus="play",this.calcTime(),this.vueInstance.startGame=!0}},{key:"gameOver",value:function(){this.gameTime=0,this.golds.stopCreateGold(),this.stage.removeChild(this.handEle),this.stage.removeChild(this.golds),this.initBeginBtn()}},{key:"calcTime",value:function(){var t=this;setTimeout((function(){t.gameTime>0?(t.gameTime--,t.calcTime()):"bomb"!==t.gameStatus&&(t.gameStatus="end",t.gameOver())}),1e3)}},{key:"initGold",value:function(){var t="2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r2ab0r";this.goldIdList=t.split(""),this.golds=new b({id:"golds",height:this.height,width:this.width,dropSpeed:this.dropSpeed,createSpeed:this.createSpeed,pointerEnabled:!1,dropEleArr:[this.asset.bigCoin,this.asset.smallCoin,this.asset.smallCoin2,this.asset.loseCoin,this.asset.bomb],goldIdList:this.goldIdList}).addTo(this.stage,2)}},{key:"initHand",value:function(){var t=this.asset.hand;this.handEle=new w({id:"handEle",img:t,height:t.height,width:t.width,x:(this.width-t.width)/2,y:this.height-t.height-80}).addTo(this.stage,1),d.a.util.copy(this.handEle,d.a.drag),this.handEle.startDrag([-t.width/4,this.height-t.height-80,this.width-t.width/2,0])}},{key:"onUpdate",value:function(){var t=this;if("ready"===this.gameStatus)return!1;this.golds.children.forEach((function(e){t.handEle.checkCollision(e)&&(e.over(),-1===e.score&&0===t.score||0===e.score?(t.gameStatus="bomb",t.gameOver()):t.score+=e.score)}))}}]),t}(),x={name:"",data:function(){return{showEnd:!1,startGame:!1,showCount:!1,game:new v}},mounted:function(){this.initGame()},methods:{initGame:function(){this.game=new v(this),this.game.pageEle=this.$refs.hiloEle,this.game.init()},closeDialog:function(){this.showEnd=!1,this.startGame=!1}},watch:{gameStatus:function(t){console.log(t),"play"===t?(this.showCount=!0,this.showEnd=!1):"end"===t||"bomb"===t?(this.showCount=!1,this.showEnd=!0):(this.showCount=!1,this.showEnd=!1)}},computed:{score:function(){return this.game.score},gameTime:function(){return this.game.gameTime},gameStatus:function(){return this.game.gameStatus}}},T=x,C=(i("e4f9"),i("2877")),y=Object(C["a"])(T,o,h,!1,null,"09e6b8c5",null),E=y.exports,O={name:"App",components:{coinPage:E},created:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);console.log(Boolean(t)),t||alert("请切换到移动端模式体验")}},k=O,S=(i("034f"),Object(C["a"])(k,s,a,!1,null,null,null)),B=S.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"83bc":function(t,e,i){t.exports=i.p+"img/hair.810cc157.png"},"85ec":function(t,e,i){},9970:function(t,e,i){t.exports=i.p+"img/bg1.ce3b2849.jpg"},"9c58":function(t,e,i){t.exports=i.p+"img/sweet.4604cd03.png"},"9d64":function(t,e,i){t.exports=i.p+"img/logo.5cb7802a.png"},c7dc:function(t,e,i){t.exports=i.p+"img/hand.ed67663b.png"},cd78:function(t,e,i){t.exports=i.p+"img/bomb.a001210c.png"},e2a5:function(t,e,i){t.exports=i.p+"img/beginBtn.50dedc0a.png"},e4f9:function(t,e,i){"use strict";i("3cae")}});