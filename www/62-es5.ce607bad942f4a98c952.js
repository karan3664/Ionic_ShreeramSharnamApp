function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,i,t){return i&&_defineProperties(n.prototype,i),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{GCqc:function(n,i,t){"use strict";t.r(i);var e=t("ofXK"),o=t("3Pt+"),a=t("c7TG"),c=t("tyNb"),r=t("lGQG"),s=t("2g2N"),l=t("HlzF"),b=t("5dVO"),u=t("n90K"),h=t("fXoL"),g=["range"];function p(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-fab",7),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().start(e)})),h.Zb(1,"ion-fab-button",0),h.Xb(2,"ion-icon",8),h.Yb(),h.Yb()}}function f(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-list"),h.Zb(1,"ion-item-sliding"),h.Zb(2,"ion-item",9),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().start(e)})),h.Zb(3,"ion-card"),h.Zb(4,"div",10),h.Xb(5,"img",11),h.Yb(),h.Zb(6,"ion-label",12),h.uc(7),h.Yb(),h.Yb(),h.Yb(),h.Zb(8,"ion-item-options",13),h.Zb(9,"button",14),h.hc("click",(function(n){h.qc(t);var e=i.$implicit;return h.jc().removeplaylistdhuns(e)})),h.Xb(10,"ion-icon",15),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=i.$implicit;h.Mb(5),h.nc("src",e.image,h.rc),h.Mb(2),h.wc(" ",e.title," ")}}function d(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-button",21),h.hc("click",(function(n){return h.qc(t),h.jc(2).togglePlayer(!1)})),h.Xb(1,"ion-icon",25),h.Yb()}}function y(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-button",21),h.hc("click",(function(n){return h.qc(t),h.jc(2).togglePlayer(!0)})),h.Xb(1,"ion-icon",26),h.Yb()}}function m(n,i){if(1&n){var t=h.ac();h.Zb(0,"ion-footer"),h.Zb(1,"ion-toolbar",16),h.Zb(2,"ion-row"),h.Zb(3,"ion-col",17),h.uc(4),h.Yb(),h.Zb(5,"ion-col",18),h.Zb(6,"ion-range",19,20),h.hc("ngModelChange",(function(n){return h.qc(t),h.jc().progress=n}))("touchend",(function(n){return h.qc(t),h.jc().seek()}))("mouseup",(function(n){return h.qc(t),h.jc().seek()})),h.Yb(),h.Yb(),h.Zb(8,"ion-col",17),h.Zb(9,"ion-button",21),h.hc("click",(function(n){return h.qc(t),h.jc().prev()})),h.Xb(10,"ion-icon",22),h.Yb(),h.tc(11,d,2,0,"ion-button",23),h.tc(12,y,2,0,"ion-button",23),h.Zb(13,"ion-button",21),h.hc("click",(function(n){return h.qc(t),h.jc().next()})),h.Xb(14,"ion-icon",24),h.Yb(),h.Yb(),h.Yb(),h.Yb(),h.Yb()}if(2&n){var e=h.jc();h.Mb(4),h.wc(" ",e.activeTrack.title," "),h.Mb(2),h.mc("ngModel",e.progress),h.Mb(5),h.mc("ngIf",!e.isPlaying),h.Mb(1),h.mc("ngIf",e.isPlaying)}}var v,k,P=[{path:"",component:(v=function(){function n(i,t,e,o){var a=this;_classCallCheck(this,n),this.authService=i,this.toastService=t,this.loader=e,this.storageService=o,this.activeTrack=null,this.player=null,this.isPlaying=!1,this.duration=-1,this.progress=0,this.storageService.getIMEI().then((function(n){console.log("IMEIBHAJAN => "+n),a.imei=n,a.getAudioDhuns()}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"getAudioDhuns",value:function(){var n=this;this.loader.loadingPresent();var i={imei_number:this.imei,type:"Bhajans"};console.log("DATA => "+i),this.authService.GetPlayList(i).subscribe((function(i){console.log(i),n.loader.loadingDismiss(),n.Bhajans=i}),(function(i){n.loader.loadingDismiss(),console.log("error")}))}},{key:"removeplaylistdhuns",value:function(n){var i=this;this.authService.DeletePlayList({id:n.id}).subscribe((function(n){console.log(n),i.player&&i.player.stop(),i.getAudioDhuns()}),(function(n){console.log("error")}))}},{key:"start",value:function(n){var i=this;this.loader.loadingPresent(),this.player&&(this.player.unload(),this.player.stop()),this.player=new l.Howl({src:[n.url],html5:!0,onplay:function(){i.loader.loadingDismiss(),i.isPlaying=!0,i.activeTrack=n,i.updateProgess()},onload:function(){},onend:function(){var n=i.Bhajans.indexOf(i.activeTrack);i.start(n!==i.Bhajans.length-1?i.Bhajans[n+1]:i.Bhajans[0])}}),this.player.play()}},{key:"togglePlayer",value:function(n){this.isPlaying=!n,n?this.player.pause():this.player.play()}},{key:"next",value:function(){var n=this.Bhajans.indexOf(this.activeTrack);this.start(n!==this.Bhajans.length-1?this.Bhajans[n+1]:this.Bhajans[0])}},{key:"prev",value:function(){var n=this.Bhajans.indexOf(this.activeTrack);this.start(n>0?this.Bhajans[n-1]:this.Bhajans[this.Bhajans.length-1])}},{key:"seek",value:function(){var n=+this.range.value,i=this.player.duration();this.player.seek(i*(n/100))}},{key:"updateProgess",value:function(){var n=this.player.seek();this.progress=n/this.player.duration()*100||0}},{key:"ionViewDidLeave",value:function(){this.player&&this.player.stop()}},{key:"ngOnDestroy",value:function(){this.player&&this.player.stop()}}]),n}(),v.\u0275fac=function(n){return new(n||v)(h.Wb(r.a),h.Wb(s.a),h.Wb(b.a),h.Wb(u.a))},v.\u0275cmp=h.Qb({type:v,selectors:[["app-bhajans-playlist"]],viewQuery:function(n,i){var t;1&n&&h.yc(g,!0),2&n&&h.pc(t=h.ic())&&(i.range=t.first)},decls:11,vars:3,consts:[["color","primary"],["slot","start"],["autoHide","false"],["slot","end","src","assets/images/toolbar.png",1,"img1"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click"],["name","play"],["lines","none",3,"click"],[1,"div_20"],[3,"src"],[1,"label"],["side","end"],["ion-button","",3,"click"],["slot","icon-only","name","trash",1,"icon-inner"],["color","dark"],["size","12",1,"ion-text-center"],["size","12"],["max","100","color","primary",3,"ngModel","ngModelChange","touchend","mouseup"],["range",""],["fill","clear","color","primary",3,"click"],["slot","icon-only","name","skip-backward"],["fill","clear","color","primary",3,"click",4,"ngIf"],["slot","icon-only","name","skip-forward"],["slot","icon-only","name","play"],["slot","icon-only","name","pause"]],template:function(n,i){1&n&&(h.Zb(0,"ion-header"),h.Zb(1,"ion-toolbar",0),h.Zb(2,"ion-buttons",1),h.Xb(3,"ion-menu-button",2),h.Yb(),h.Zb(4,"ion-label"),h.uc(5," Bhajans Playlist "),h.Yb(),h.Xb(6,"img",3),h.Yb(),h.Yb(),h.tc(7,p,3,0,"ion-fab",4),h.Zb(8,"ion-content"),h.tc(9,f,11,2,"ion-list",5),h.Yb(),h.tc(10,m,15,4,"ion-footer",6)),2&n&&(h.Mb(7),h.mc("ngForOf",i.Bhajans),h.Mb(2),h.mc("ngForOf",i.Bhajans),h.Mb(1),h.mc("ngIf",i.activeTrack))},directives:[a.q,a.N,a.f,a.z,a.w,e.h,a.l,e.i,a.m,a.n,a.r,a.x,a.v,a.t,a.g,a.u,a.o,a.D,a.k,a.B,a.Y,o.c,o.d,a.e],styles:[".div_20[_ngcontent-%COMP%]{width:20%;display:inline-block;margin:0;padding:5px;float:left}.label[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-all;white-space:normal}.icon-inner[_ngcontent-%COMP%]{font-size:25px;display:block}.icon-inner[_ngcontent-%COMP%], .ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.ion-icon[_ngcontent-%COMP%]{font-size:40px}.rangePlaytime[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.rangePlaytime[_ngcontent-%COMP%]   .startTime[_ngcontent-%COMP%]{padding-left:9px}.rangePlaytime[_ngcontent-%COMP%]   .endTime[_ngcontent-%COMP%]{padding-right:15px}.img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}ion-card[_ngcontent-%COMP%]{width:100%;margin-top:11px;margin-bottom:6px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}ion-list[_ngcontent-%COMP%]{padding:0}"]}),v)}],j=((k=function n(){_classCallCheck(this,n)}).\u0275mod=h.Ub({type:k}),k.\u0275inj=h.Tb({factory:function(n){return new(n||k)},imports:[[c.i.forChild(P)],c.i]}),k);t.d(i,"BhajansPlaylistPageModule",(function(){return M}));var w,M=((w=function n(){_classCallCheck(this,n)}).\u0275mod=h.Ub({type:w}),w.\u0275inj=h.Tb({factory:function(n){return new(n||w)},imports:[[e.b,o.a,a.O,j]]}),w)}}]);