function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5dVO":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("mrSG"),i=t("c7TG"),o=t("fXoL"),a=function(){var e=function(){function e(n){_classCallCheck(this,e),this.loadingController=n}return _createClass(e,[{key:"loadingPresent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:e,duration:n});case 2:return r=t.sent,t.next=5,r.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}},{key:"loadingDismiss",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return n.loadingController.dismiss()}),1e3);case 1:case"end":return e.stop()}}),e)})))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(o.dc(i.Q))},e.\u0275prov=o.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"68nU":function(e,n,t){"use strict";t.r(n);var r=t("ofXK"),i=t("3Pt+"),o=t("c7TG"),a=t("tyNb"),s=t("lGQG"),c=t("U3FU"),l=t("5dVO"),u=t("fXoL");function f(e,n){if(1&e){var t=u.ac();u.Zb(0,"ion-col",5),u.hc("click",(function(e){u.qc(t);var r=n.$implicit;return u.jc().OpenImage(r.image)})),u.Xb(1,"img",6),u.Yb()}if(2&e){var r=n.$implicit;u.Mb(1),u.nc("src",r.image,u.rc)}}var p,b,d=[{path:"",component:(p=function(){function e(n,t,r){_classCallCheck(this,e),this.authService=n,this.photoViewer=t,this.loader=r}return _createClass(e,[{key:"ngOnInit",value:function(){this.getWallpaper()}},{key:"getWallpaper",value:function(){var e=this;this.loader.loadingPresent(),this.authService.GetJsonData({json_name:"wallpaper.json"}).subscribe((function(n){console.log(n),e.loader.loadingDismiss(),e.Wallpaper=n}),(function(n){e.loader.loadingDismiss(),console.log("error")}))}},{key:"OpenImage",value:function(e){this.photoViewer.show(e)}}]),e}(),p.\u0275fac=function(e){return new(e||p)(u.Wb(s.a),u.Wb(c.a),u.Wb(l.a))},p.\u0275cmp=u.Qb({type:p,selectors:[["app-gallery"]],decls:11,vars:1,consts:[["color","primary"],["slot","start"],["autoHide","false"],["slot","end","src","assets/images/toolbar.png",1,"img1"],["sizeXs","4",3,"click",4,"ngFor","ngForOf"],["sizeXs","4",3,"click"],[3,"src"]],template:function(e,n){1&e&&(u.Zb(0,"ion-header"),u.Zb(1,"ion-toolbar",0),u.Zb(2,"ion-buttons",1),u.Xb(3,"ion-menu-button",2),u.Yb(),u.Zb(4,"ion-label"),u.uc(5," Gallery "),u.Yb(),u.Xb(6,"img",3),u.Yb(),u.Yb(),u.Zb(7,"ion-content"),u.Zb(8,"ion-grid"),u.Zb(9,"ion-row"),u.tc(10,f,2,1,"ion-col",4),u.Yb(),u.Yb(),u.Yb()),2&e&&(u.Mb(10),u.mc("ngForOf",n.Wallpaper))},directives:[o.q,o.N,o.f,o.z,o.w,o.l,o.p,o.D,r.h,o.k],styles:[".img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}"]}),p)}],h=((b=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ub({type:b}),b.\u0275inj=u.Tb({factory:function(e){return new(e||b)},imports:[[a.i.forChild(d)],a.i]}),b);t.d(n,"GalleryPageModule",(function(){return m}));var g,m=((g=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ub({type:g}),g.\u0275inj=u.Tb({factory:function(e){return new(e||g)},imports:[[r.b,i.a,o.O,h]]}),g)}}]);