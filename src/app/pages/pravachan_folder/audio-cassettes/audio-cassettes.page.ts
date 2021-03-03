import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { LoaderService } from 'src/app/services/loader.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-audio-cassettes',
  templateUrl: './audio-cassettes.page.html',
  styleUrls: ['./audio-cassettes.page.scss'],
})
export class AudioCassettesPage implements OnInit {
  SadnaSatsang: any;
  imei: any;
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private videoPlayer: VideoPlayer,
    private loader: LoaderService,
    private streamingMedia: StreamingMedia,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    private fileOpener: FileOpener
  ) {
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });
    this.getSadhnaSatsang();
   
  }

  ngOnInit() {
  }
  getSadhnaSatsang() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'pravachan_cassete.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.SadnaSatsang = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  addtoplaylist(pravachanCassettes) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: pravachanCassettes.url,
      image: pravachanCassettes.image,
      title: pravachanCassettes.title,
      type: 'Pravachan_Cassettes'
    };
    console.log(data);
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          pravachanCassettes.title + ' ' + 'Added To PlayList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
  addtodownloadlist(pravachanCassettes) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: pravachanCassettes.url,
      image: pravachanCassettes.image,
      title: pravachanCassettes.title,
      type: 'Pravachan_Cassettes'
    };
    console.log(data);
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          pravachanCassettes.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
}
