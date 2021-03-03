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
  selector: 'app-dhun-audio',
  templateUrl: './dhun-audio.page.html',
  styleUrls: ['./dhun-audio.page.scss'],
})
export class DhunAudioPage implements OnInit {
  AudioDhuns: any;

  imei: any;


  constructor(
    private authService: AuthService,
    private videoPlayer: VideoPlayer,
    private toastService: ToastService,
    private loader: LoaderService,
    private storageService: StorageService,
    private streamingMedia: StreamingMedia,
    private route: Router,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
  ) {
    
    this.getAudioDhuns();
    this.storageService.getIMEI().then(res => {
      console.log('IMEI => ' + res)
      this.imei = res;

    });
  }

  ngOnInit() {

  }

  getAudioDhuns() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'dhun_audio.json'
    };

    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.AudioDhuns = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }





  addtoplaylistdhuns(audiodata) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: audiodata.url,
      image: audiodata.image,
      title: audiodata.title,
      type: 'Dhuns'
    };
    console.log('NEWUUID => ' + JSON.stringify(data));
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          audiodata.title + ' ' + 'Added To PlayList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  addtodownloadlistdhuns(audiodata) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: audiodata.url,
      image: audiodata.image,
      title: audiodata.title,
      type: 'Dhuns'
    };
    console.log('Dhuns => ' + JSON.stringify(data));
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          audiodata.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

}
