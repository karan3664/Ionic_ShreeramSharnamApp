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
  selector: 'app-audio-video',
  templateUrl: './audio-video.page.html',
  styleUrls: ['./audio-video.page.scss'],
})
export class AudioVideoPage implements OnInit {
  PravachanVideo: any;
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
   
    this.getPravachanVideo();
  }

  ngOnInit() {
  }
  getPravachanVideo() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'pravachan_video.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.PravachanVideo = res;
        // 
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  PlayVideo(url, title) {

    console.log(url);
    // const options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played') },
    //   errorCallback: (e) => { console.log('Error streaming') },
    //   orientation: 'landscape',
    //   shouldAutoClose: true,
    //   controls: true
    // };
    // this.streamingMedia.playVideo(url, options);


    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }
    const transfer = this.transfer.create();
    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
    transfer.download(url, path + title + '.flv').then(entry => {
      const urls = entry.toURL();
      console.log(urls);
      this.loader.loadingDismiss();


      this.fileOpener.showOpenWithDialog(path + title + '.flv', 'video/flv')

        .then(() =>

          console.log('File is opened'))

        .catch(e => console.log('Error opening file', e));
    });
    // this.videoPlayer
    // .play(url)
    // .then(() => {
    //   console.log('video completed');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

  addtoplaylistpravachanvideo(pravachanvideo) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: pravachanvideo.url,
      image: pravachanvideo.image,
      title: pravachanvideo.title,
      type: 'Pravachan_Video'
    };
    console.log(data);
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          pravachanvideo.title + ' ' + 'Added To PlayList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  addtodownloadlistpravachanvideo(pravachanvideo) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: pravachanvideo.url,
      image: pravachanvideo.image,
      title: pravachanvideo.title,
      type: 'Pravachan_Video'
    };
    console.log(data);
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          pravachanvideo.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
}
