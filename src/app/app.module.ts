import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Device } from '@ionic-native/device/ngx';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ChartsModule } from 'ng2-charts';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    Uid,
    UniqueDeviceID,
    Device,
    InAppBrowser,
     // tslint:disable-next-line: deprecation
     FileTransfer,
     File,
     VideoPlayer,
     PhotoViewer,
     FCM,
     StreamingMedia,
     DocumentViewer,
     FileOpener,
     BackgroundMode,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
