function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"5dVO":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t("mrSG"),o=t("c7TG"),r=t("fXoL"),a=function(){var e=function(){function e(n){_classCallCheck(this,e),this.loadingController=n}return _createClass(e,[{key:"loadingPresent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:e,duration:n});case 2:return i=t.sent,t.next=5,i.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"loadingDismiss",value:function(){return Object(i.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return n.loadingController.dismiss()}),1e3);case 1:case"end":return e.stop()}}),e)})))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.dc(o.Q))},e.\u0275prov=r.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},E7C9:function(e,n,t){"use strict";t.r(n);var i=t("ofXK"),o=t("3Pt+"),r=t("c7TG"),a=t("tyNb"),c=t("mrSG"),l=t("lGQG"),s=t("n90K"),d=t("2g2N"),u=t("5dVO"),f=t("te5A"),h=t("FAH8"),b=t("B7Rs"),g=t("fXoL");function p(e,n){if(1&e){var t=g.ac();g.Zb(0,"ion-list"),g.Zb(1,"ion-item-sliding"),g.Zb(2,"ion-item",2),g.hc("click",(function(e){g.qc(t);var i=n.$implicit;return g.jc().PlayVideo(i.url,i.title)})),g.Zb(3,"ion-card"),g.Zb(4,"div",3),g.Xb(5,"img",4),g.Yb(),g.Zb(6,"ion-label",5),g.uc(7),g.Yb(),g.Yb(),g.Yb(),g.Zb(8,"ion-item-options",6),g.Zb(9,"button",7),g.hc("click",(function(e){g.qc(t);var i=n.$implicit;return g.jc().removeplaylistpravachanvideo(i)})),g.Xb(10,"ion-icon",8),g.Yb(),g.Zb(11,"button",7),g.hc("click",(function(e){g.qc(t);var i=n.$implicit;return g.jc().downloadplaylistpravachanvideo(i)})),g.Xb(12,"ion-icon",9),g.Yb(),g.Yb(),g.Yb(),g.Yb()}if(2&e){var i=n.$implicit;g.Mb(5),g.nc("src",i.image,g.rc),g.Mb(2),g.wc(" ",i.title,"")}}function v(e,n){if(1&e){var t=g.ac();g.Zb(0,"ion-fab",10),g.hc("click",(function(e){return g.qc(t),g.jc().downloadAllPravachanVideo()})),g.Zb(1,"ion-fab-button",11),g.Xb(2,"ion-icon",12),g.Yb(),g.Yb()}}var m,w,y=[{path:"",component:(m=function(){function e(n,t,i,o,r,a,c,l,s){var d=this;_classCallCheck(this,e),this.authService=n,this.storageService=t,this.toastService=i,this.file=o,this.platform=r,this.transfer=a,this.alertController=c,this.fileOpener=l,this.loader=s,this.storageService.getIMEI().then((function(e){console.log("IMEIBHAJAN => "+e),d.imei=e})),setTimeout((function(){d.getPravachanVideo()}),500)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getPravachanVideo",value:function(){var e=this;this.loader.loadingPresent(),this.authService.GetDownloadList({imei_number:this.imei,type:"Pravachan_Video"}).subscribe((function(n){console.log(n),e.loader.loadingDismiss(),e.PravachanVideo=n}),(function(n){e.loader.loadingDismiss(),console.log("error")}))}},{key:"PlayVideo",value:function(e,n){var t,i=this;console.log(e),t=this.platform.is("ios")?this.file.documentsDirectory:this.file.dataDirectory;var o=this.transfer.create();this.loader.loadingPresent("Downloading....Please wait it will take time to download!"),o.download(e,t+n+".flv").then((function(e){var o=e.toURL();console.log(o),i.loader.loadingDismiss(),i.fileOpener.showOpenWithDialog(t+n+".flv","video/flv").then((function(){return console.log("File is opened")})).catch((function(e){return console.log("Error opening file",e)}))}))}},{key:"removeplaylistpravachanvideo",value:function(e){var n=this;this.authService.DeleteDownloadList({id:e.id}).subscribe((function(e){console.log(e),n.getPravachanVideo()}),(function(e){console.log("error")}))}},{key:"downloadplaylistpravachanvideo",value:function(e){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:e.title,message:"Download Audio",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(e){console.log("Confirm Cancel: blah")}},{text:"Download",handler:function(){var n;n=i.platform.is("ios")?i.file.documentsDirectory:i.file.externalRootDirectory+"/ShreeRamSharnam/";var t=i.transfer.create();console.log(e.url),i.loader.loadingPresent("Downloading....Please wait it will take time to download!"),t.download(e.url,n+e.title+".mp3").then((function(e){var n=e.toURL();console.log(n),i.loader.loadingDismiss(),i.toastService.presentToast("Download Completed...!")})),console.log("Confirm Okay")}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"downloadAllPravachanVideo",value:function(){var e,n=this;e=this.platform.is("ios")?this.file.documentsDirectory:this.file.externalRootDirectory+"/ShreeRamSharnam/";var t=this.transfer.create();this.loader.loadingPresent("Downloading....Please wait it will take time to download!");for(var i=function(i){t.download(n.PravachanAudio[i].url,e+n.PravachanAudio[i].title+".mp3").then((function(e){var t=e.toURL();console.log(t),n.loader.loadingDismiss(),n.toastService.presentToast(n.PravachanAudio[i].title+"  Download Completed...!")}))},o=0;o<this.PravachanAudio.length;o++)i(o)}}]),e}(),m.\u0275fac=function(e){return new(e||m)(g.Wb(l.a),g.Wb(s.a),g.Wb(d.a),g.Wb(h.a),g.Wb(r.V),g.Wb(b.a),g.Wb(r.b),g.Wb(f.a),g.Wb(u.a))},m.\u0275cmp=g.Qb({type:m,selectors:[["app-tab4"]],decls:3,vars:2,consts:[[4,"ngFor","ngForOf"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click",4,"ngFor","ngForOf"],["lines","none",3,"click"],[1,"div_20"],[3,"src"],[1,"label"],["side","end"],["ion-button","",3,"click"],["slot","icon-only","name","trash",1,"icon-inner"],["slot","icon-only","name","download",1,"icon-inner"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click"],["color","primary"],["name","download"]],template:function(e,n){1&e&&(g.Zb(0,"ion-content"),g.tc(1,p,13,2,"ion-list",0),g.tc(2,v,3,0,"ion-fab",1),g.Yb()),2&e&&(g.Mb(1),g.mc("ngForOf",n.PravachanVideo),g.Mb(1),g.mc("ngForOf",n.PravachanVideo))},directives:[r.l,i.h,r.x,r.v,r.t,r.g,r.w,r.u,r.r,r.m,r.n],styles:[".div_20[_ngcontent-%COMP%]{width:20%;display:inline-block;margin:0;padding:5px;float:left}.label[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-all;white-space:normal}.icon-inner[_ngcontent-%COMP%]{font-size:25px;display:block}.icon-inner[_ngcontent-%COMP%], .ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.ion-icon[_ngcontent-%COMP%]{font-size:40px}.rangePlaytime[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.rangePlaytime[_ngcontent-%COMP%]   .startTime[_ngcontent-%COMP%]{padding-left:9px}.rangePlaytime[_ngcontent-%COMP%]   .endTime[_ngcontent-%COMP%]{padding-right:15px}.img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}.ppp[_ngcontent-%COMP%]{font-size:10px;text-align:center}ion-card[_ngcontent-%COMP%]{width:100%;margin-top:11px;margin-bottom:6px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}ion-list[_ngcontent-%COMP%]{padding:0}"]}),m)}],P=((w=function e(){_classCallCheck(this,e)}).\u0275mod=g.Ub({type:w}),w.\u0275inj=g.Tb({factory:function(e){return new(e||w)},imports:[[a.i.forChild(y)],a.i]}),w);t.d(n,"Tab4PageModule",(function(){return k}));var C,k=((C=function e(){_classCallCheck(this,e)}).\u0275mod=g.Ub({type:C}),C.\u0275inj=g.Tb({factory:function(e){return new(e||C)},imports:[[i.b,o.a,r.O,P]]}),C)}}]);