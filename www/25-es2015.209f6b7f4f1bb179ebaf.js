(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5dVO":function(t,o,n){"use strict";n.d(o,"a",(function(){return s}));var e=n("mrSG"),i=n("c7TG"),r=n("fXoL");let s=(()=>{class t{constructor(t){this.loadingController=t}loadingPresent(t=null,o=null){return Object(e.b)(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:t,duration:o});return yield n.present()}))}loadingDismiss(){return Object(e.b)(this,void 0,void 0,(function*(){setTimeout(()=>this.loadingController.dismiss(),1e3)}))}}return t.\u0275fac=function(o){return new(o||t)(r.dc(i.Q))},t.\u0275prov=r.Sb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"68nU":function(t,o,n){"use strict";n.r(o);var e=n("ofXK"),i=n("3Pt+"),r=n("c7TG"),s=n("tyNb"),c=n("lGQG"),l=n("U3FU"),a=n("5dVO"),b=n("fXoL");function u(t,o){if(1&t){const t=b.ac();b.Zb(0,"ion-col",5),b.hc("click",(function(n){b.qc(t);const e=o.$implicit;return b.jc().OpenImage(e.image)})),b.Xb(1,"img",6),b.Yb()}if(2&t){const t=o.$implicit;b.Mb(1),b.nc("src",t.image,b.rc)}}const d=[{path:"",component:(()=>{class t{constructor(t,o,n){this.authService=t,this.photoViewer=o,this.loader=n}ngOnInit(){this.getWallpaper()}getWallpaper(){this.loader.loadingPresent(),this.authService.GetJsonData({json_name:"wallpaper.json"}).subscribe(t=>{console.log(t),this.loader.loadingDismiss(),this.Wallpaper=t},t=>{this.loader.loadingDismiss(),console.log("error")})}OpenImage(t){this.photoViewer.show(t)}}return t.\u0275fac=function(o){return new(o||t)(b.Wb(c.a),b.Wb(l.a),b.Wb(a.a))},t.\u0275cmp=b.Qb({type:t,selectors:[["app-gallery"]],decls:11,vars:1,consts:[["color","primary"],["slot","start"],["autoHide","false"],["slot","end","src","assets/images/toolbar.png",1,"img1"],["sizeXs","4",3,"click",4,"ngFor","ngForOf"],["sizeXs","4",3,"click"],[3,"src"]],template:function(t,o){1&t&&(b.Zb(0,"ion-header"),b.Zb(1,"ion-toolbar",0),b.Zb(2,"ion-buttons",1),b.Xb(3,"ion-menu-button",2),b.Yb(),b.Zb(4,"ion-label"),b.uc(5," Gallery "),b.Yb(),b.Xb(6,"img",3),b.Yb(),b.Yb(),b.Zb(7,"ion-content"),b.Zb(8,"ion-grid"),b.Zb(9,"ion-row"),b.tc(10,u,2,1,"ion-col",4),b.Yb(),b.Yb(),b.Yb()),2&t&&(b.Mb(10),b.mc("ngForOf",o.Wallpaper))},directives:[r.q,r.N,r.f,r.z,r.w,r.l,r.p,r.D,e.h,r.k],styles:[".img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=b.Ub({type:t}),t.\u0275inj=b.Tb({factory:function(o){return new(o||t)},imports:[[s.i.forChild(d)],s.i]}),t})();n.d(o,"GalleryPageModule",(function(){return g}));let g=(()=>{class t{}return t.\u0275mod=b.Ub({type:t}),t.\u0275inj=b.Tb({factory:function(o){return new(o||t)},imports:[[e.b,i.a,r.O,p]]}),t})()}}]);