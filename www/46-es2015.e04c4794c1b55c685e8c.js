(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"/2Y2":function(n,t,i){"use strict";i.r(t);var o=i("ofXK"),e=i("3Pt+"),s=i("c7TG"),a=i("tyNb"),l=i("mrSG"),c=i("lGQG"),r=i("2g2N"),h=i("FAH8"),b=i("B7Rs"),d=i("HlzF"),g=i("te5A"),u=i("5dVO"),p=i("n90K"),m=i("fXoL");const f=["range"];function y(n,t){if(1&n){const n=m.ac();m.Zb(0,"ion-fab",7),m.hc("click",(function(t){return m.qc(n),m.jc().downloadAllBhajans()})),m.Zb(1,"ion-fab-button",0),m.Xb(2,"ion-icon",8),m.Yb(),m.Yb()}}function w(n,t){if(1&n){const n=m.ac();m.Zb(0,"ion-list"),m.Zb(1,"ion-item-sliding"),m.Zb(2,"ion-item",9),m.Zb(3,"ion-card"),m.Zb(4,"div",10),m.Xb(5,"img",11),m.Yb(),m.Zb(6,"ion-label",12),m.uc(7),m.Yb(),m.Yb(),m.Yb(),m.Zb(8,"ion-item-options",13),m.Zb(9,"button",14),m.hc("click",(function(i){m.qc(n);const o=t.$implicit;return m.jc().removeplaylistdhuns(o)})),m.Xb(10,"ion-icon",15),m.Yb(),m.Zb(11,"button",14),m.hc("click",(function(i){m.qc(n);const o=t.$implicit;return m.jc().downloadplaylistdhuns(o)})),m.Xb(12,"ion-icon",16),m.Yb(),m.Yb(),m.Yb(),m.Yb()}if(2&n){const n=t.$implicit;m.Mb(5),m.nc("src",n.image,m.rc),m.Mb(2),m.wc(" ",n.title," ")}}function k(n,t){if(1&n){const n=m.ac();m.Zb(0,"ion-button",22),m.hc("click",(function(t){return m.qc(n),m.jc(2).togglePlayer(!1)})),m.Xb(1,"ion-icon",26),m.Yb()}}function j(n,t){if(1&n){const n=m.ac();m.Zb(0,"ion-button",22),m.hc("click",(function(t){return m.qc(n),m.jc(2).togglePlayer(!0)})),m.Xb(1,"ion-icon",27),m.Yb()}}function P(n,t){if(1&n){const n=m.ac();m.Zb(0,"ion-footer"),m.Zb(1,"ion-toolbar",17),m.Zb(2,"ion-row"),m.Zb(3,"ion-col",18),m.uc(4),m.Yb(),m.Zb(5,"ion-col",19),m.Zb(6,"ion-range",20,21),m.hc("ngModelChange",(function(t){return m.qc(n),m.jc().progress=t}))("touchend",(function(t){return m.qc(n),m.jc().seek()}))("mouseup",(function(t){return m.qc(n),m.jc().seek()})),m.Yb(),m.Yb(),m.Zb(8,"ion-col",18),m.Zb(9,"ion-button",22),m.hc("click",(function(t){return m.qc(n),m.jc().prev()})),m.Xb(10,"ion-icon",23),m.Yb(),m.tc(11,k,2,0,"ion-button",24),m.tc(12,j,2,0,"ion-button",24),m.Zb(13,"ion-button",22),m.hc("click",(function(t){return m.qc(n),m.jc().next()})),m.Xb(14,"ion-icon",25),m.Yb(),m.Yb(),m.Yb(),m.Yb(),m.Yb()}if(2&n){const n=m.jc();m.Mb(4),m.wc(" ",n.activeTrack.title," "),m.Mb(2),m.mc("ngModel",n.progress),m.Mb(5),m.mc("ngIf",!n.isPlaying),m.Mb(1),m.mc("ngIf",n.isPlaying)}}const v=[{path:"",component:(()=>{class n{constructor(n,t,i,o,e,s,a,l,c){this.authService=n,this.toastService=t,this.file=i,this.platform=o,this.transfer=e,this.alertController=s,this.fileOpener=a,this.loader=l,this.storageService=c,this.activeTrack=null,this.player=null,this.isPlaying=!1,this.duration=-1,this.display_position="00:00",this.display_duration="00:00",this.progress=0,this.storageService.getIMEI().then(n=>{console.log("IMEIBHAJAN => "+n),this.imei=n,this.getAudioDhuns()})}ngOnInit(){}getAudioDhuns(){this.loader.loadingPresent(),this.authService.GetDownloadList({imei_number:this.imei,type:"Bhajans"}).subscribe(n=>{this.loader.loadingDismiss(),console.log(n),this.Bhajans=n},n=>{this.loader.loadingDismiss(),console.log("error")})}removeplaylistdhuns(n){this.authService.DeleteDownloadList({id:n.id}).subscribe(n=>{console.log(n),this.getAudioDhuns()},n=>{console.log("error")})}downloadplaylistdhuns(n){return Object(l.b)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:n.title,message:"Download Audio",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:n=>{console.log("Confirm Cancel: blah")}},{text:"Download",handler:()=>{let t=null;t=this.platform.is("ios")?this.file.documentsDirectory:this.file.externalRootDirectory+"/ShreeRamSharnam/";const i=this.transfer.create();console.log(n.url),this.loader.loadingPresent("Downloading....Please wait it will take time to download!"),i.download(n.url,t+n.title+".mp3").then(n=>{const t=n.toURL();console.log(t),this.loader.loadingDismiss(),this.toastService.presentToast("Download Completed...!")}),console.log("Confirm Okay")}}]});yield t.present()}))}downloadAllBhajans(){let n=null;n=this.platform.is("ios")?this.file.documentsDirectory:this.file.externalRootDirectory+"/ShreeRamSharnam/";const t=this.transfer.create();this.loader.loadingPresent("Downloading....Please wait it will take time to download!");for(let i=0;i<this.Bhajans.length;i++)t.download(this.Bhajans[i].url,n+this.Bhajans[i].title+".mp3").then(n=>{const t=n.toURL();console.log(t),this.loader.loadingDismiss(),this.toastService.presentToast(this.Bhajans[i].title+"  Download Completed...!")})}start(n){this.player&&this.player.stop(),this.player=new d.Howl({src:[n.url],html5:!0,onplay:()=>{this.isPlaying=!0,this.activeTrack=n,this.updateProgess()},onend:()=>{}}),this.player.play()}togglePlayer(n){this.isPlaying=!n,n?this.player.pause():this.player.play()}next(){const n=this.Bhajans.indexOf(this.activeTrack);this.start(n!==this.Bhajans.length-1?this.Bhajans[n+1]:this.Bhajans[0])}prev(){const n=this.Bhajans.indexOf(this.activeTrack);this.start(n>0?this.Bhajans[n-1]:this.Bhajans[this.Bhajans.length-1])}seek(){const n=+this.range.value,t=this.player.duration();this.player.seek(t*(n/100))}updateProgess(){const n=this.player.seek();this.progress=n/this.player.duration()*100||0,setTimeout(()=>{this.updateProgess()},1e3)}}return n.\u0275fac=function(t){return new(t||n)(m.Wb(c.a),m.Wb(r.a),m.Wb(h.a),m.Wb(s.V),m.Wb(b.a),m.Wb(s.b),m.Wb(g.a),m.Wb(u.a),m.Wb(p.a))},n.\u0275cmp=m.Qb({type:n,selectors:[["app-bhajans-downloadlist"]],viewQuery:function(n,t){var i;1&n&&m.yc(f,!0),2&n&&m.pc(i=m.ic())&&(t.range=i.first)},decls:11,vars:3,consts:[["color","primary"],["slot","start"],["autoHide","false"],["slot","end","src","assets/images/toolbar.png",1,"img1"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[4,"ngIf"],["vertical","center","horizontal","end","edge","","slot","fixed",3,"click"],["name","download"],["lines","none"],[1,"div_20"],[3,"src"],[1,"label"],["side","end"],["ion-button","",3,"click"],["slot","icon-only","name","trash",1,"icon-inner"],["slot","icon-only","name","download",1,"icon-inner"],["color","dark"],["size","12",1,"ion-text-center"],["size","12"],["max","100","color","primary",3,"ngModel","ngModelChange","touchend","mouseup"],["range",""],["fill","clear","color","primary",3,"click"],["slot","icon-only","name","skip-backward"],["fill","clear","color","primary",3,"click",4,"ngIf"],["slot","icon-only","name","skip-forward"],["slot","icon-only","name","play"],["slot","icon-only","name","pause"]],template:function(n,t){1&n&&(m.Zb(0,"ion-header"),m.Zb(1,"ion-toolbar",0),m.Zb(2,"ion-buttons",1),m.Xb(3,"ion-menu-button",2),m.Yb(),m.Zb(4,"ion-label"),m.uc(5," Bhajans Downloadlist "),m.Yb(),m.Xb(6,"img",3),m.Yb(),m.Yb(),m.Zb(7,"ion-content"),m.tc(8,y,3,0,"ion-fab",4),m.tc(9,w,13,2,"ion-list",5),m.Yb(),m.tc(10,P,15,4,"ion-footer",6)),2&n&&(m.Mb(8),m.mc("ngForOf",t.Bhajans),m.Mb(1),m.mc("ngForOf",t.Bhajans),m.Mb(1),m.mc("ngIf",t.activeTrack))},directives:[s.q,s.N,s.f,s.z,s.w,s.l,o.h,o.i,s.m,s.n,s.r,s.x,s.v,s.t,s.g,s.u,s.o,s.D,s.k,s.B,s.Y,e.c,e.d,s.e],styles:[".div_20[_ngcontent-%COMP%]{width:20%;display:inline-block;margin:0;padding:5px;float:left}.label[_ngcontent-%COMP%]{height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;word-break:break-all;white-space:normal}.icon-inner[_ngcontent-%COMP%]{font-size:25px;display:block}.icon-inner[_ngcontent-%COMP%], .ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.ion-icon[_ngcontent-%COMP%]{font-size:40px}.rangePlaytime[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.rangePlaytime[_ngcontent-%COMP%]   .startTime[_ngcontent-%COMP%]{padding-left:9px}.rangePlaytime[_ngcontent-%COMP%]   .endTime[_ngcontent-%COMP%]{padding-right:15px}.img1[_ngcontent-%COMP%]{height:30px;width:100px;max-width:100%;border:0}ion-card[_ngcontent-%COMP%]{width:100%;margin-top:11px;margin-bottom:6px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.list-ios[_ngcontent-%COMP%]{margin-bottom:0!important}ion-list[_ngcontent-%COMP%]{padding:0}"]}),n})()}];let x=(()=>{class n{}return n.\u0275mod=m.Ub({type:n}),n.\u0275inj=m.Tb({factory:function(t){return new(t||n)},imports:[[a.i.forChild(v)],a.i]}),n})();i.d(t,"BhajansDownloadlistPageModule",(function(){return M}));let M=(()=>{class n{}return n.\u0275mod=m.Ub({type:n}),n.\u0275inj=m.Tb({factory:function(t){return new(t||n)},imports:[[o.b,e.a,s.O,x]]}),n})()}}]);