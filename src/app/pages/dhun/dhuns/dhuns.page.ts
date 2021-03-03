import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-dhuns',
  templateUrl: './dhuns.page.html',
  styleUrls: ['./dhuns.page.scss']
})
export class DhunsPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
