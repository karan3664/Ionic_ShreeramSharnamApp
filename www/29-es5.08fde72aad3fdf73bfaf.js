function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"5dVO":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("mrSG"),o=t("c7TG"),r=t("fXoL"),a=function(){var e=function(){function e(n){_classCallCheck(this,e),this.loadingController=n}return _createClass(e,[{key:"loadingPresent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:e,duration:n});case 2:return i=t.sent,t.next=5,i.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"loadingDismiss",value:function(){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return n.loadingController.dismiss()}),1e3);case 1:case"end":return e.stop()}}),e)})))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.dc(o.Q))},e.\u0275prov=r.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"s+HC":function(e,n,t){"use strict";t.r(n);var i=t("ofXK"),o=t("3Pt+"),r=t("c7TG"),a=t("tyNb"),s=t("lGQG"),c=t("/oAM"),l=t("2g2N"),u=t("5dVO"),d=t("n90K"),f=t("RU0F"),b=t("te5A"),g=t("FAH8"),h=t("B7Rs"),p=t("fXoL");function m(e,n){if(1&e){var t=p.ac();p.Zb(0,"ion-list"),p.Zb(1,"ion-item-sliding"),p.Zb(2,"ion-item",1),p.hc("click",(function(e){p.qc(t);var i=n.$implicit;return p.jc().PlayVideo(i.url,i.title)})),p.Zb(3,"ion-card"),p.Zb(4,"div",2),p.Xb(5,"img",3),p.Yb(),p.Zb(6,"ion-label",4),p.uc(7),p.Yb(),p.Yb(),p.Yb(),p.Zb(8,"ion-item-options",5),p.Zb(9,"button",6),p.hc("click",(function(e){p.qc(t);var i=n.$implicit;return p.jc().removeplaylistvideo(i)})),p.Xb(10,"ion-icon",7),p.Yb(),p.Yb(),p.Yb(),p.Yb()}if(2&e){var i=n.$implicit;p.Mb(5),p.nc("src",i.image,p.rc),p.Mb(2),p.wc(" ",i.title,"")}}var v,y,w=[{path:"",component:(v=function(){function e(n,t,i,o,r,a,s,c,l,u,d){var f=this;_classCallCheck(this,e),this.authService=n,this.videoPlayer=t,this.toastService=i,this.loader=o,this.storageService=r,this.streamingMedia=a,this.route=s,this.file=c,this.platform=l,this.transfer=u,this.fileOpener=d,this.storageService.getIMEI().then((function(e){console.log("IMEI => "+e),f.imei=e})),setTimeout((function(){f.getVideoDhuns()}),500)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getVideoDhuns",value:function(){var e=this;this.loader.loadingPresent(),this.authService.GetPlayList({imei_number:this.imei,type:"Dhuns_Video"}).subscribe((function(n){console.log(n),e.loader.loadingDismiss(),e.VideoDhuns=n}),(function(n){e.loader.loadingDismiss(),console.log("error")}))}},{key:"PlayVideo",value:function(e,n){var t,i=this;console.log(e),t=this.platform.is("ios")?this.file.documentsDirectory:this.file.dataDirectory;var o=this.transfer.create();this.loader.loadingPresent("Downloading....Please wait it will take time to download!"),o.download(e,t+n+".flv").then((function(e){var o=e.toURL();console.log(o),i.loader.loadingDismiss(),i.fileOpener.showOpenWithDialog(t+n+".flv","video/flv").then((function(){return console.log("File is opened")})).catch((function(e){return console.log("Error opening file",e)}))}))}},{key:"removeplaylistvideo",value:function(e){var n=this;this.authService.DeletePlayList({id:e.id}).subscribe((function(e){console.log(e),n.getVideoDhuns()}),(function(e){console.log("error")}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(p.Wb(s.a),p.Wb(c.a),p.Wb(l.a),p.Wb(u.a),p.Wb(d.a),p.Wb(f.a),p.Wb(a.g),p.Wb(g.a),p.Wb(r.V),p.Wb(h.a),p.Wb(b.a))},v.\u0275cmp=p.Qb({type:v,selectors:[["app-dhuns-video"]],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["lines","none",3,"click"],[1,"div_20"],[3,"src"],[1,"label"],["side","end"],["ion-button","",3,"click"],["slot","icon-only","name","trash",1,"icon-inner"]],template:function(e,n){1&e&&(p.Zb(0,"ion-content"),p.tc(1,m,11,2,"ion-list",0),p.Yb()),2&e&&(p.Mb(1),p.mc("ngForOf",n.VideoDhuns))},directives:[r.l,i.h,r.x,r.v,r.t,r.g,r.w,r.u,r.r],styles:[".div_20[_ngcontent-%COMP%]{width:20%;display:inline-block;margin:0;padding:5px;float:left}.label[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-all;white-space:normal}.icon-inner[_ngcontent-%COMP%]{font-size:25px;display:block}.icon-inner[_ngcontent-%COMP%], .ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.ion-icon[_ngcontent-%COMP%]{font-size:40px}.rangePlaytime[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.rangePlaytime[_ngcontent-%COMP%]   .startTime[_ngcontent-%COMP%]{padding-left:9px}.rangePlaytime[_ngcontent-%COMP%]   .endTime[_ngcontent-%COMP%]{padding-right:15px}.img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}ion-card[_ngcontent-%COMP%]{width:100%;margin-top:11px;margin-bottom:6px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}ion-list[_ngcontent-%COMP%]{padding:0}"]}),v)}],C=((y=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ub({type:y}),y.\u0275inj=p.Tb({factory:function(e){return new(e||y)},imports:[[a.i.forChild(w)],a.i]}),y);t.d(n,"DhunsVideoPageModule",(function(){return P}));var k,P=((k=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ub({type:k}),k.\u0275inj=p.Tb({factory:function(e){return new(e||k)},imports:[[i.b,o.a,r.O,C]]}),k)}}]);