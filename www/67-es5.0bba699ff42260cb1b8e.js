function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,i,t){return i&&_defineProperties(n.prototype,i),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{xgYn:function(n,i,t){"use strict";t.r(i);var e=t("ofXK"),a=t("3Pt+"),o=t("c7TG"),c=t("tyNb"),r=t("lGQG"),l=t("n90K"),s=t("2g2N"),u=t("HlzF"),b=t("5dVO"),h=t("fXoL"),p=["range"];function g(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-fab",3),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().start(e)})),h.Zb(1,"ion-fab-button",4),h.Xb(2,"ion-icon",5),h.Yb(),h.Yb()}}function f(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-list"),h.Zb(1,"ion-item-sliding"),h.Zb(2,"ion-item",6),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().start(e)})),h.Zb(3,"ion-card"),h.Zb(4,"div",7),h.Xb(5,"img",8),h.Yb(),h.Zb(6,"ion-label",9),h.uc(7),h.Yb(),h.Yb(),h.Yb(),h.Zb(8,"ion-item-options",10),h.Zb(9,"button",11),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().removeplaylistpravachanRam(e)})),h.Xb(10,"ion-icon",12),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=i.$implicit;h.Mb(5),h.nc("src",e.image,h.rc),h.Mb(2),h.wc(" ",e.title," ")}}function d(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-button",18),h.hc("click",(function(n){return h.qc(t),h.jc(2).togglePlayer(!1)})),h.Xb(1,"ion-icon",22),h.Yb()}}function m(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-button",18),h.hc("click",(function(n){return h.qc(t),h.jc(2).togglePlayer(!0)})),h.Xb(1,"ion-icon",23),h.Yb()}}function v(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-footer"),h.Zb(1,"ion-toolbar",13),h.Zb(2,"ion-row"),h.Zb(3,"ion-col",14),h.uc(4),h.Yb(),h.Zb(5,"ion-col",15),h.Zb(6,"ion-range",16,17),h.hc("ngModelChange",(function(n){return h.qc(t),h.jc().progress=n}))("touchend",(function(n){return h.qc(t),h.jc().seek()}))("mouseup",(function(n){return h.qc(t),h.jc().seek()})),h.Yb(),h.Yb(),h.Zb(8,"ion-col",14),h.Zb(9,"ion-button",18),h.hc("click",(function(n){return h.qc(t),h.jc().prev()})),h.Xb(10,"ion-icon",19),h.Yb(),h.tc(11,d,2,0,"ion-button",20),h.tc(12,m,2,0,"ion-button",20),h.Zb(13,"ion-button",18),h.hc("click",(function(n){return h.qc(t),h.jc().next()})),h.Xb(14,"ion-icon",21),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=h.jc();h.Mb(4),h.wc(" ",e.activeTrack.title," "),h.Mb(2),h.mc("ngModel",e.progress),h.Mb(5),h.mc("ngIf",!e.isPlaying),h.Mb(1),h.mc("ngIf",e.isPlaying)}}var y,k,P=[{path:"",component:(y=function(){function n(i,t,e,a){var o=this;_classCallCheck(this,n),this.authService=i,this.storageService=t,this.toastService=e,this.loader=a,this.activeTrack=null,this.player=null,this.isPlaying=!1,this.duration=-1,this.display_position="00:00",this.display_duration="00:00",this.progress=0,this.storageService.getIMEI().then((function(n){console.log("IMEIBHAJAN => "+n),o.imei=n,o.getPravachanRam()}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getPravachanRam",value:function(){var n=this;this.loader.loadingPresent(),this.authService.GetPlayList({imei_number:this.imei,type:"Pravachan_Ramayanji"}).subscribe((function(i){console.log(i),n.loader.loadingDismiss(),n.PravachanRam=i}),(function(i){n.loader.loadingDismiss(),console.log("error")}))}},{key:"removeplaylistpravachanRam",value:function(n){var i=this;this.authService.DeletePlayList({id:n.id}).subscribe((function(n){console.log(n),i.player&&i.player.stop(),i.getPravachanRam()}),(function(n){console.log("error")}))}},{key:"start",value:function(n){var i=this;this.loader.loadingPresent(),this.player&&(this.player.unload(),this.player.stop()),this.player=new u.Howl({src:[n.url],html5:!0,onplay:function(){i.loader.loadingDismiss(),i.isPlaying=!0,i.activeTrack=n,i.updateProgess()},onload:function(){},onend:function(){var n=i.PravachanRam.indexOf(i.activeTrack);i.start(n!==i.PravachanRam.length-1?i.PravachanRam[n+1]:i.PravachanRam[0])}}),this.player.play()}},{key:"togglePlayer",value:function(n){this.isPlaying=!n,n?this.player.pause():this.player.play()}},{key:"next",value:function(){var n=this.PravachanRam.indexOf(this.activeTrack);this.start(n!==this.PravachanRam.length-1?this.PravachanRam[n+1]:this.PravachanRam[0])}},{key:"prev",value:function(){var n=this.PravachanRam.indexOf(this.activeTrack);this.start(n>0?this.PravachanRam[n-1]:this.PravachanRam[this.PravachanRam.length-1])}},{key:"seek",value:function(){var n=+this.range.value,i=this.player.duration();this.player.seek(i*(n/100))}},{key:"updateProgess",value:function(){var n=this.player.seek();this.progress=n/this.player.duration()*100||0}},{key:"ionViewDidLeave",value:function(){this.player&&this.player.stop()}},{key:"ngOnDestroy",value:function(){this.player&&this.player.stop()}}]),n}(),y.\u0275fac=function(n){return new(n||y)(h.Wb(r.a),h.Wb(l.a),h.Wb(s.a),h.Wb(b.a))},y.\u0275cmp=h.Qb({type:y,selectors:[["app-tab2"]],viewQuery:function(n,i){var t;1&n&&h.yc(p,!0),2&n&&h.pc(t=h.ic())&&(i.range=t.first)},decls:4,vars:3,consts:[["vertical","center","horizontal","end","edge","","slot","fixed",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click"],["color","primary"],["name","play"],["lines","none",3,"click"],[1,"div_20"],[3,"src"],[1,"label"],["side","end"],["ion-button","",3,"click"],["slot","icon-only","name","trash",1,"icon-inner"],["color","dark"],["size","12",1,"ion-text-center"],["size","12"],["max","100","color","primary",3,"ngModel","ngModelChange","touchend","mouseup"],["range",""],["fill","clear","color","primary",3,"click"],["slot","icon-only","name","skip-backward"],["fill","clear","color","primary",3,"click",4,"ngIf"],["slot","icon-only","name","skip-forward"],["slot","icon-only","name","play"],["slot","icon-only","name","pause"]],template:function(n,i){1&n&&(h.tc(0,g,3,0,"ion-fab",0),h.Zb(1,"ion-content"),h.tc(2,f,11,2,"ion-list",1),h.Yb(),h.tc(3,v,15,4,"ion-footer",2)),2&n&&(h.mc("ngForOf",i.PravachanRam),h.Mb(2),h.mc("ngForOf",i.PravachanRam),h.Mb(1),h.mc("ngIf",i.activeTrack))},directives:[e.h,o.l,e.i,o.m,o.n,o.r,o.x,o.v,o.t,o.g,o.w,o.u,o.o,o.N,o.D,o.k,o.B,o.Y,a.c,a.d,o.e],styles:[".div_20[_ngcontent-%COMP%]{width:20%;display:inline-block;margin:0;padding:5px;float:left}.label[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-all;white-space:normal}.icon-inner[_ngcontent-%COMP%]{font-size:25px;display:block}.icon-inner[_ngcontent-%COMP%], .ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.ion-icon[_ngcontent-%COMP%]{font-size:40px}.rangePlaytime[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.rangePlaytime[_ngcontent-%COMP%]   .startTime[_ngcontent-%COMP%]{padding-left:9px}.rangePlaytime[_ngcontent-%COMP%]   .endTime[_ngcontent-%COMP%]{padding-right:15px}.img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}.ppp[_ngcontent-%COMP%]{font-size:10px;text-align:center}ion-card[_ngcontent-%COMP%]{width:100%;margin-top:11px;margin-bottom:6px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}ion-list[_ngcontent-%COMP%]{padding:0}"]}),y)}],w=((k=function n(){_classCallCheck(this,n)}).\u0275mod=h.Ub({type:k}),k.\u0275inj=h.Tb({factory:function(n){return new(n||k)},imports:[[c.i.forChild(P)],c.i]}),k);t.d(i,"Tab2PageModule",(function(){return M}));var x,M=((x=function n(){_classCallCheck(this,n)}).\u0275mod=h.Ub({type:x}),x.\u0275inj=h.Tb({factory:function(n){return new(n||x)},imports:[[e.b,a.a,o.O,w]]}),x)}}]);