(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5dVO":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("mrSG"),r=n("c7TG"),i=n("fXoL");let a=(()=>{class e{constructor(e){this.loadingController=e}loadingPresent(e=null,t=null){return Object(o.b)(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:e,duration:t});return yield n.present()}))}loadingDismiss(){return Object(o.b)(this,void 0,void 0,(function*(){setTimeout(()=>this.loadingController.dismiss(),1e3)}))}}return e.\u0275fac=function(t){return new(t||e)(i.dc(r.Q))},e.\u0275prov=i.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},HlzF:function(e,t,n){var o;!function(){"use strict";var n=function(){this.init()};n.prototype={init:function(){var e=this||r;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||c(),void 0!==e&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var a=t._howls[n]._soundById(o[i]);a&&a._node&&(a._node.volume=a._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||c(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),i=0;i<o.length;i++){var a=t._howls[n]._soundById(o[i]);a&&a._node&&(a._node.muted=!!e||a._muted)}return t},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,c()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(e._canPlayEvent="canplay")}catch(t){e.noAudio=!0}else e.noAudio=!0;try{(new Audio).muted&&(e.noAudio=!0)}catch(t){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t="undefined"!=typeof Audio?new Audio:null}catch(a){return e}if(!t||"function"!=typeof t.canPlayType)return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),i=o&&parseInt(o[0].split("/")[1],10)<33;return e._codecs={mp3:!(i||!n&&!t.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||r;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(var o=0;o<e.html5PoolSize;o++)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch(n){e.noAudio=!0}for(o=0;o<e._howls.length;o++)if(!e._howls[o]._webAudio)for(var i=e._howls[o]._getSoundIds(),a=0;a<i.length;a++){var s=e._howls[o]._soundById(i[a]);s&&s._node&&!s._node._unlocked&&(s._node._unlocked=!0,s._node.load())}e._autoResume();var u=e.ctx.createBufferSource();u.buffer=e._scratchBuffer,u.connect(e.ctx.destination),void 0===u.start?u.noteOn(0):u.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),u.onended=function(){u.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),e}},_obtainHtml5Audio:function(){var e=this||r;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=(new Audio).play();return t&&"undefined"!=typeof Promise&&(t instanceof Promise||"function"==typeof t.then)&&t.catch((function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")})),new Audio},_releaseHtml5Audio:function(e){var t=this||r;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&r.usingWebAudio){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio)for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout((function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then((function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())})))}),3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&r.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then((function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")})),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var r=new n,i=function(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")};i.prototype={init:function(e){var t=this;return r.ctx||c(),t._autoplay=e.autoplay||!1,t._format="string"!=typeof e.format?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload="boolean"!=typeof e.preload||e.preload,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src="string"!=typeof e.src?e.src:[e.src],t._volume=void 0!==e.volume?e.volume:1,t._xhrWithCredentials=e.xhrWithCredentials||!1,t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,void 0!==r.ctx&&r.ctx&&r.autoUnlock&&r._unlockAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t.load(),t},load:function(){var e=null;if(r.noAudio)this._emit("loaderror",null,"No audio support.");else{"string"==typeof this._src&&(this._src=[this._src]);for(var t=0;t<this._src.length;t++){var n,o;if(this._format&&this._format[t])n=this._format[t];else{if("string"!=typeof(o=this._src[t])){this._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(n=/^data:audio\/([^;,]+);/i.exec(o))||(n=/\.([^.]+)$/.exec(o.split("?",1)[0])),n&&(n=n[1].toLowerCase())}if(n||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),n&&r.codecs(n)){e=this._src[t];break}}if(e)return this._src=e,this._state="loading","https:"===window.location.protocol&&"http:"===e.slice(0,5)&&(this._html5=!0,this._webAudio=!1),new a(this),this._webAudio&&u(this),this;this._emit("loaderror",null,"No codec support for selected audio sources.")}},play:function(e,t){var n=this,o=null;if("number"==typeof e)o=e,e=null;else{if("string"==typeof e&&"loaded"===n._state&&!n._sprite[e])return null;if(void 0===e&&(e="__default",!n._playLock)){for(var i=0,a=0;a<n._sounds.length;a++)n._sounds[a]._paused&&!n._sounds[a]._ended&&(i++,o=n._sounds[a]._id);1===i?e=null:o=null}}var s=o?n._soundById(o):n._inactiveSound();if(!s)return null;if(o&&!e&&(e=s._sprite||"__default"),"loaded"!==n._state){s._sprite=e,s._ended=!1;var u=s._id;return n._queue.push({event:"play",action:function(){n.play(u)}}),u}if(o&&!s._paused)return t||n._loadQueue("play"),s._id;n._webAudio&&r._autoResume();var d=Math.max(0,s._seek>0?s._seek:n._sprite[e][0]/1e3),_=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-d),l=1e3*_/Math.abs(s._rate),c=n._sprite[e][0]/1e3,p=(n._sprite[e][0]+n._sprite[e][1])/1e3;s._sprite=e,s._ended=!1;var f=function(){s._paused=!1,s._seek=d,s._start=c,s._stop=p,s._loop=!(!s._loop&&!n._sprite[e][2])};if(!(d>=p)){var h=s._node;if(n._webAudio){var m=function(){n._playLock=!1,f(),n._refreshBuffer(s),h.gain.setValueAtTime(s._muted||n._muted?0:s._volume,r.ctx.currentTime),s._playStart=r.ctx.currentTime,void 0===h.bufferSource.start?h.bufferSource.noteGrainOn(0,d,s._loop?86400:_):h.bufferSource.start(0,d,s._loop?86400:_),l!==1/0&&(n._endTimers[s._id]=setTimeout(n._ended.bind(n,s),l)),t||setTimeout((function(){n._emit("play",s._id),n._loadQueue()}),0)};"running"===r.state?m():(n._playLock=!0,n.once("resume",m),n._clearTimer(s._id))}else{var v=function(){h.currentTime=d,h.muted=s._muted||n._muted||r._muted||h.muted,h.volume=s._volume*r.volume(),h.playbackRate=s._rate;try{var o=h.play();if(o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)?(n._playLock=!0,f(),o.then((function(){n._playLock=!1,h._unlocked=!0,t||(n._emit("play",s._id),n._loadQueue())})).catch((function(){n._playLock=!1,n._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),s._ended=!0,s._paused=!0}))):t||(n._playLock=!1,f(),n._emit("play",s._id),n._loadQueue()),h.playbackRate=s._rate,h.paused)return void n._emit("playerror",s._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||s._loop?n._endTimers[s._id]=setTimeout(n._ended.bind(n,s),l):(n._endTimers[s._id]=function(){n._ended(s),h.removeEventListener("ended",n._endTimers[s._id],!1)},h.addEventListener("ended",n._endTimers[s._id],!1))}catch(i){n._emit("playerror",s._id,i)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===h.src&&(h.src=n._src,h.load());var A=window&&window.ejecta||!h.readyState&&r._navigator.isCocoonJS;if(h.readyState>=3||A)v();else{n._playLock=!0;var g=function(){v(),h.removeEventListener(r._canPlayEvent,g,!1)};h.addEventListener(r._canPlayEvent,g,!1),n._clearTimer(s._id)}}return s._id}n._ended(s)},pause:function(e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var r=t._soundById(n[o]);if(r&&!r._paused&&(r._seek=t.seek(n[o]),r._rateSeek=0,r._paused=!0,t._stopFade(n[o]),r._node))if(t._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),t._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||t._emit("pause",r?r._id:null)}return t},stop:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),r=0;r<o.length;r++){n._clearTimer(o[r]);var i=n._soundById(o[r]);i&&(i._seek=i._start||0,i._rateSeek=0,i._paused=!0,i._ended=!0,n._stopFade(o[r]),i._node&&(n._webAudio?i._node.bufferSource&&(void 0===i._node.bufferSource.stop?i._node.bufferSource.noteOff(0):i._node.bufferSource.stop(0),n._cleanBuffer(i._node)):isNaN(i._node.duration)&&i._node.duration!==1/0||(i._node.currentTime=i._start||0,i._node.pause(),i._node.duration===1/0&&n._clearSound(i._node))),t||n._emit("stop",i._id))}return n},mute:function(e,t){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(void 0===t){if("boolean"!=typeof e)return n._muted;n._muted=e}for(var o=n._getSoundIds(t),i=0;i<o.length;i++){var a=n._soundById(o[i]);a&&(a._muted=e,a._interval&&n._stopFade(a._id),n._webAudio&&a._node?a._node.gain.setValueAtTime(e?0:a._volume,r.ctx.currentTime):a._node&&(a._node.muted=!!r._muted||e),n._emit("mute",a._id))}return n},volume:function(){var e,t,n,o=this,i=arguments;if(0===i.length)return o._volume;if(1===i.length||2===i.length&&void 0===i[1]){var a=o._getSoundIds(),s=a.indexOf(i[0]);s>=0?t=parseInt(i[0],10):e=parseFloat(i[0])}else i.length>=2&&(e=parseFloat(i[0]),t=parseInt(i[1],10));if(!(void 0!==e&&e>=0&&e<=1))return(n=t?o._soundById(t):o._sounds[0])?n._volume:0;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,i)}}),o;void 0===t&&(o._volume=e),t=o._getSoundIds(t);for(var u=0;u<t.length;u++)(n=o._soundById(t[u]))&&(n._volume=e,i[2]||o._stopFade(t[u]),o._webAudio&&n._node&&!n._muted?n._node.gain.setValueAtTime(e,r.ctx.currentTime):n._node&&!n._muted&&(n._node.volume=e*r.volume()),o._emit("volume",n._id));return o},fade:function(e,t,n,o){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"fade",action:function(){i.fade(e,t,n,o)}}),i;e=parseFloat(e),t=parseFloat(t),n=parseFloat(n),i.volume(e,o);for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var u=i._soundById(a[s]);if(u){if(o||i._stopFade(a[s]),i._webAudio&&!u._muted){var d=r.ctx.currentTime,_=d+n/1e3;u._volume=e,u._node.gain.setValueAtTime(e,d),u._node.gain.linearRampToValueAtTime(t,_)}i._startFadeInterval(u,e,t,n,a[s],void 0===o)}}return i},_startFadeInterval:function(e,t,n,o,r,i){var a=this,s=t,u=n-t,d=Math.abs(u/.01),_=Math.max(4,d>0?o/d:o),l=Date.now();e._fadeTo=n,e._interval=setInterval((function(){var r=(Date.now()-l)/o;l=Date.now(),s+=u*r,s=Math.max(0,s),s=Math.min(1,s),s=Math.round(100*s)/100,a._webAudio?e._volume=s:a.volume(s,e._id,!0),i&&(a._volume=s),(n<t&&s<=n||n>t&&s>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,a.volume(n,e._id),a._emit("fade",e._id))}),_)},_stopFade:function(e){var t=this._soundById(e);return t&&t._interval&&(this._webAudio&&t._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(t._interval),t._interval=null,this.volume(t._fadeTo,e),t._fadeTo=null,this._emit("fade",e)),this},loop:function(){var e,t,n,o=this,r=arguments;if(0===r.length)return o._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(n=o._soundById(parseInt(r[0],10)))&&n._loop;o._loop=e=r[0]}else 2===r.length&&(e=r[0],t=parseInt(r[1],10));for(var i=o._getSoundIds(t),a=0;a<i.length;a++)(n=o._soundById(i[a]))&&(n._loop=e,o._webAudio&&n._node&&n._node.bufferSource&&(n._node.bufferSource.loop=e,e&&(n._node.bufferSource.loopStart=n._start||0,n._node.bufferSource.loopEnd=n._stop)));return o},rate:function(){var e,t,n,o=this,i=arguments;if(0===i.length)t=o._sounds[0]._id;else if(1===i.length){var a=o._getSoundIds(),s=a.indexOf(i[0]);s>=0?t=parseInt(i[0],10):e=parseFloat(i[0])}else 2===i.length&&(e=parseFloat(i[0]),t=parseInt(i[1],10));if("number"!=typeof e)return(n=o._soundById(t))?n._rate:o._rate;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,i)}}),o;void 0===t&&(o._rate=e),t=o._getSoundIds(t);for(var u=0;u<t.length;u++)if(n=o._soundById(t[u])){o.playing(t[u])&&(n._rateSeek=o.seek(t[u]),n._playStart=o._webAudio?r.ctx.currentTime:n._playStart),n._rate=e,o._webAudio&&n._node&&n._node.bufferSource?n._node.bufferSource.playbackRate.setValueAtTime(e,r.ctx.currentTime):n._node&&(n._node.playbackRate=e);var d=o.seek(t[u]),_=(o._sprite[n._sprite][0]+o._sprite[n._sprite][1])/1e3-d,l=1e3*_/Math.abs(n._rate);!o._endTimers[t[u]]&&n._paused||(o._clearTimer(t[u]),o._endTimers[t[u]]=setTimeout(o._ended.bind(o,n),l)),o._emit("rate",n._id)}return o},seek:function(){var e,t,n=this,o=arguments;if(0===o.length)t=n._sounds[0]._id;else if(1===o.length){var i=n._getSoundIds(),a=i.indexOf(o[0]);a>=0?t=parseInt(o[0],10):n._sounds.length&&(t=n._sounds[0]._id,e=parseFloat(o[0]))}else 2===o.length&&(e=parseFloat(o[0]),t=parseInt(o[1],10));if(void 0===t)return n;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"seek",action:function(){n.seek.apply(n,o)}}),n;var s=n._soundById(t);if(s){if(!("number"==typeof e&&e>=0)){if(n._webAudio){var u=n.playing(t)?r.ctx.currentTime-s._playStart:0,d=s._rateSeek?s._rateSeek-s._seek:0;return s._seek+(d+u*Math.abs(s._rate))}return s._node.currentTime}var _=n.playing(t);_&&n.pause(t,!0),s._seek=e,s._ended=!1,n._clearTimer(t),n._webAudio||!s._node||isNaN(s._node.duration)||(s._node.currentTime=e);var l=function(){n._emit("seek",t),_&&n.play(t,!0)};if(_&&!n._webAudio){var c=function(){n._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return n},playing:function(e){if("number"==typeof e){var t=this._soundById(e);return!!t&&!t._paused}for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0;return!1},duration:function(e){var t=this._duration,n=this._soundById(e);return n&&(t=this._sprite[n._sprite][1]/1e3),t},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1),r._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1);var i=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src||e._src.indexOf(r._howls[n]._src)>=0){i=!1;break}return s&&i&&delete s[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){return"function"==typeof t&&this["_on"+e].push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),this},off:function(e,t,n){var o=this["_on"+e],r=0;if("number"==typeof t&&(n=t,t=null),t||n)for(r=0;r<o.length;r++){var i=n===o[r].id;if(t===o[r].fn&&i||!t&&i){o.splice(r,1);break}}else if(e)this["_on"+e]=[];else{var a=Object.keys(this);for(r=0;r<a.length;r++)0===a[r].indexOf("_on")&&Array.isArray(this[a[r]])&&(this[a[r]]=[])}return this},once:function(e,t,n){return this.on(e,t,n,1),this},_emit:function(e,t,n){for(var o=this["_on"+e],r=o.length-1;r>=0;r--)o[r].id&&o[r].id!==t&&"load"!==e||(setTimeout((function(e){e.call(this,t,n)}).bind(this,o[r].fn),0),o[r].once&&this.off(e,o[r].fn,o[r].id));return this._loadQueue(e),this},_loadQueue:function(e){if(this._queue.length>0){var t=this._queue[0];t.event===e&&(this._queue.shift(),this._loadQueue()),e||t.action()}return this},_ended:function(e){var t=e._sprite;if(!this._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(this._ended.bind(this,e),100),this;var n=!(!e._loop&&!this._sprite[t][2]);if(this._emit("end",e._id),!this._webAudio&&n&&this.stop(e._id,!0).play(e._id),this._webAudio&&n){this._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var o=1e3*(e._stop-e._start)/Math.abs(e._rate);this._endTimers[e._id]=setTimeout(this._ended.bind(this,e),o)}return this._webAudio&&!n&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,this._clearTimer(e._id),this._cleanBuffer(e._node),r._autoSuspend()),this._webAudio||n||this.stop(e._id,!0),this},_clearTimer:function(e){if(this._endTimers[e]){if("function"!=typeof this._endTimers[e])clearTimeout(this._endTimers[e]);else{var t=this._soundById(e);t&&t._node&&t._node.removeEventListener("ended",this._endTimers[e],!1)}delete this._endTimers[e]}return this},_soundById:function(e){for(var t=0;t<this._sounds.length;t++)if(e===this._sounds[t]._id)return this._sounds[t];return null},_inactiveSound:function(){this._drain();for(var e=0;e<this._sounds.length;e++)if(this._sounds[e]._ended)return this._sounds[e].reset();return new a(this)},_drain:function(){var e=this._pool,t=0,n=0;if(!(this._sounds.length<e)){for(n=0;n<this._sounds.length;n++)this._sounds[n]._ended&&t++;for(n=this._sounds.length-1;n>=0;n--){if(t<=e)return;this._sounds[n]._ended&&(this._webAudio&&this._sounds[n]._node&&this._sounds[n]._node.disconnect(0),this._sounds.splice(n,1),t--)}}},_getSoundIds:function(e){if(void 0===e){for(var t=[],n=0;n<this._sounds.length;n++)t.push(this._sounds[n]._id);return t}return[e]},_refreshBuffer:function(e){return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=s[this._src],e._node.bufferSource.connect(e._panner?e._panner:e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),this},_cleanBuffer:function(e){var t=r._navigator&&r._navigator.vendor.indexOf("Apple")>=0;if(r._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=r._scratchBuffer}catch(n){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(e){this._parent=e,this.init()};a.prototype={init:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,e._sounds.push(this),this.create(),this},create:function(){var e=this._parent,t=r._muted||this._muted||this._parent._muted?0:this._volume;return e._webAudio?(this._node=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),this._node.gain.setValueAtTime(t,r.ctx.currentTime),this._node.paused=!0,this._node.connect(r.masterGain)):r.noAudio||(this._node=r._obtainHtml5Audio(),this._errorFn=this._errorListener.bind(this),this._node.addEventListener("error",this._errorFn,!1),this._loadFn=this._loadListener.bind(this),this._node.addEventListener(r._canPlayEvent,this._loadFn,!1),this._node.src=e._src,this._node.preload="auto",this._node.volume=t*r.volume(),this._node.load()),this},reset:function(){var e=this._parent;return this._muted=e._muted,this._loop=e._loop,this._volume=e._volume,this._rate=e._rate,this._seek=0,this._rateSeek=0,this._paused=!0,this._ended=!0,this._sprite="__default",this._id=++r._counter,this},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var e=this._parent;e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(r._canPlayEvent,this._loadFn,!1)}};var s={},u=function(e){var t=e._src;if(s[t])return e._duration=s[t].duration,void l(e);if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),r=0;r<n.length;++r)o[r]=n.charCodeAt(r);_(o.buffer,e)}else{var i=new XMLHttpRequest;i.open("GET",t,!0),i.withCredentials=e._xhrWithCredentials,i.responseType="arraybuffer",i.onload=function(){var t=(i.status+"")[0];"0"===t||"2"===t||"3"===t?_(i.response,e):e._emit("loaderror",null,"Failed loading audio file with status: "+i.status+".")},i.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete s[t],e.load())},d(i)}},d=function(e){try{e.send()}catch(t){e.onerror()}},_=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(e){e&&t._sounds.length>0?(s[t._src]=e,l(t,e)):n()};"undefined"!=typeof Promise&&1===r.ctx.decodeAudioData.length?r.ctx.decodeAudioData(e).then(o).catch(n):r.ctx.decodeAudioData(e,o,n)},l=function(e,t){t&&!e._duration&&(e._duration=t.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},c=function(){if(r.usingWebAudio){try{"undefined"!=typeof AudioContext?r.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch(i){r.usingWebAudio=!1}r.ctx||(r.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());(r._navigator&&r._navigator.standalone&&!o||r._navigator&&!r._navigator.standalone&&!o)&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=void 0===r.ctx.createGain?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:r._volume,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()}};void 0===(o=(function(){return{Howler:r,Howl:i}}).apply(t,[]))||(e.exports=o),t.Howler=r,t.Howl=i,"undefined"!=typeof window?(window.HowlerGlobal=n,window.Howler=r,window.Howl=i,window.Sound=a):"undefined"!=typeof global&&(global.HowlerGlobal=n,global.Howler=r,global.Howl=i,global.Sound=a)}(),function(){"use strict";var e;HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){if(!this.ctx||!this.ctx.listener)return this;for(var t=this._howls.length-1;t>=0;t--)this._howls[t].stereo(e);return this},HowlerGlobal.prototype.pos=function(e,t,n){return this.ctx&&this.ctx.listener?"number"!=typeof e?this._pos:(this._pos=[e,t="number"!=typeof t?this._pos[1]:t,n="number"!=typeof n?this._pos[2]:n],void 0!==this.ctx.listener.positionX?(this.ctx.listener.positionX.setTargetAtTime(this._pos[0],Howler.ctx.currentTime,.1),this.ctx.listener.positionY.setTargetAtTime(this._pos[1],Howler.ctx.currentTime,.1),this.ctx.listener.positionZ.setTargetAtTime(this._pos[2],Howler.ctx.currentTime,.1)):this.ctx.listener.setPosition(this._pos[0],this._pos[1],this._pos[2]),this):this},HowlerGlobal.prototype.orientation=function(e,t,n,o,r,i){if(!this.ctx||!this.ctx.listener)return this;var a=this._orientation;return"number"!=typeof e?a:(this._orientation=[e,t="number"!=typeof t?a[1]:t,n="number"!=typeof n?a[2]:n,o="number"!=typeof o?a[3]:o,r="number"!=typeof r?a[4]:r,i="number"!=typeof i?a[5]:i],void 0!==this.ctx.listener.forwardX?(this.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),this.ctx.listener.forwardY.setTargetAtTime(t,Howler.ctx.currentTime,.1),this.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),this.ctx.listener.upX.setTargetAtTime(o,Howler.ctx.currentTime,.1),this.ctx.listener.upY.setTargetAtTime(r,Howler.ctx.currentTime,.1),this.ctx.listener.upZ.setTargetAtTime(i,Howler.ctx.currentTime,.1)):this.ctx.listener.setOrientation(e,t,n,o,r,i),this)},Howl.prototype.init=(e=Howl.prototype.init,function(t){return this._orientation=t.orientation||[1,0,0],this._stereo=t.stereo||null,this._pos=t.pos||null,this._pannerAttr={coneInnerAngle:void 0!==t.coneInnerAngle?t.coneInnerAngle:360,coneOuterAngle:void 0!==t.coneOuterAngle?t.coneOuterAngle:360,coneOuterGain:void 0!==t.coneOuterGain?t.coneOuterGain:0,distanceModel:void 0!==t.distanceModel?t.distanceModel:"inverse",maxDistance:void 0!==t.maxDistance?t.maxDistance:1e4,panningModel:void 0!==t.panningModel?t.panningModel:"HRTF",refDistance:void 0!==t.refDistance?t.refDistance:1,rolloffFactor:void 0!==t.rolloffFactor?t.rolloffFactor:1},this._onstereo=t.onstereo?[{fn:t.onstereo}]:[],this._onpos=t.onpos?[{fn:t.onpos}]:[],this._onorientation=t.onorientation?[{fn:t.onorientation}]:[],e.call(this,t)}),Howl.prototype.stereo=function(e,n){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(e,n)}}),o;var r=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===n){if("number"!=typeof e)return o._stereo;o._stereo=e,o._pos=[e,0,0]}for(var i=o._getSoundIds(n),a=0;a<i.length;a++){var s=o._soundById(i[a]);if(s){if("number"!=typeof e)return s._stereo;s._stereo=e,s._pos=[e,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||t(s,r),"spatial"===r?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(e,0,0):s._panner.pan.setValueAtTime(e,Howler.ctx.currentTime)),o._emit("stereo",s._id)}}return o},Howl.prototype.pos=function(e,n,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(e,n,o,r)}}),i;if(n="number"!=typeof n?0:n,o="number"!=typeof o?-.5:o,void 0===r){if("number"!=typeof e)return i._pos;i._pos=[e,n,o]}for(var a=i._getSoundIds(r),s=0;s<a.length;s++){var u=i._soundById(a[s]);if(u){if("number"!=typeof e)return u._pos;u._pos=[e,n,o],u._node&&(u._panner&&!u._panner.pan||t(u,"spatial"),void 0!==u._panner.positionX?(u._panner.positionX.setValueAtTime(e,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(o,Howler.ctx.currentTime)):u._panner.setPosition(e,n,o)),i._emit("pos",u._id)}}return i},Howl.prototype.orientation=function(e,n,o,r){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(e,n,o,r)}}),i;if(n="number"!=typeof n?i._orientation[1]:n,o="number"!=typeof o?i._orientation[2]:o,void 0===r){if("number"!=typeof e)return i._orientation;i._orientation=[e,n,o]}for(var a=i._getSoundIds(r),s=0;s<a.length;s++){var u=i._soundById(a[s]);if(u){if("number"!=typeof e)return u._orientation;u._orientation=[e,n,o],u._node&&(u._panner||(u._pos||(u._pos=i._pos||[0,0,-.5]),t(u,"spatial")),void 0!==u._panner.orientationX?(u._panner.orientationX.setValueAtTime(e,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(o,Howler.ctx.currentTime)):u._panner.setOrientation(e,n,o)),i._emit("orientation",u._id)}}return i},Howl.prototype.pannerAttr=function(){var e,n,o,r=this,i=arguments;if(!r._webAudio)return r;if(0===i.length)return r._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return(o=r._soundById(parseInt(i[0],10)))?o._pannerAttr:r._pannerAttr;e=i[0],void 0===n&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),r._pannerAttr={coneInnerAngle:void 0!==e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:void 0!==e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:void 0!==e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:void 0!==e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:r._distanceModel,maxDistance:void 0!==e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:r._maxDistance,refDistance:void 0!==e.pannerAttr.refDistance?e.pannerAttr.refDistance:r._refDistance,rolloffFactor:void 0!==e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:void 0!==e.pannerAttr.panningModel?e.pannerAttr.panningModel:r._panningModel})}else 2===i.length&&(e=i[0],n=parseInt(i[1],10));for(var a=r._getSoundIds(n),s=0;s<a.length;s++)if(o=r._soundById(a[s])){var u=o._pannerAttr;u={coneInnerAngle:void 0!==e.coneInnerAngle?e.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:void 0!==e.coneOuterAngle?e.coneOuterAngle:u.coneOuterAngle,coneOuterGain:void 0!==e.coneOuterGain?e.coneOuterGain:u.coneOuterGain,distanceModel:void 0!==e.distanceModel?e.distanceModel:u.distanceModel,maxDistance:void 0!==e.maxDistance?e.maxDistance:u.maxDistance,refDistance:void 0!==e.refDistance?e.refDistance:u.refDistance,rolloffFactor:void 0!==e.rolloffFactor?e.rolloffFactor:u.rolloffFactor,panningModel:void 0!==e.panningModel?e.panningModel:u.panningModel};var d=o._panner;d?(d.coneInnerAngle=u.coneInnerAngle,d.coneOuterAngle=u.coneOuterAngle,d.coneOuterGain=u.coneOuterGain,d.distanceModel=u.distanceModel,d.maxDistance=u.maxDistance,d.refDistance=u.refDistance,d.rolloffFactor=u.rolloffFactor,d.panningModel=u.panningModel):(o._pos||(o._pos=r._pos||[0,0,-.5]),t(o,"spatial"))}return r},Sound.prototype.init=function(e){return function(){var t=this._parent;this._orientation=t._orientation,this._stereo=t._stereo,this._pos=t._pos,this._pannerAttr=t._pannerAttr,e.call(this),this._stereo?t.stereo(this._stereo):this._pos&&t.pos(this._pos[0],this._pos[1],this._pos[2],this._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var t=this._parent;return this._orientation=t._orientation,this._stereo=t._stereo,this._pos=t._pos,this._pannerAttr=t._pannerAttr,this._stereo?t.stereo(this._stereo):this._pos?t.pos(this._pos[0],this._pos[1],this._pos[2],this._id):this._panner&&(this._panner.disconnect(0),this._panner=void 0,t._refreshBuffer(this)),e.call(this)}}(Sound.prototype.reset);var t=function(e,t){"spatial"===(t=t||"spatial")?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}()}}]);