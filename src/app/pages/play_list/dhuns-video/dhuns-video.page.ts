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
  selector: 'app-dhuns-video',
  templateUrl: './dhuns-video.page.html',
  styleUrls: ['./dhuns-video.page.scss'],
})
export class DhunsVideoPage implements OnInit {

  VideoDhuns: any;

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


    this.storageService.getIMEI().then(res => {
      console.log('IMEI => ' + res)
      this.imei = res;

    });

    setTimeout(() => {
      this.getVideoDhuns();
    }, 500)
  }

  ngOnInit() {
  }

  getVideoDhuns() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Dhuns_Video'
    };

    this.authService.GetPlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.VideoDhuns = res;

      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  PlayVideo(url, title) {
    // this.route.navigate(['/videoplayer', url]);
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

    // window.open(url,'_blank')
    // this.videoPlayer
    //   .play('assets/dhun0101.flv')
    //   .then(() => {
    //     console.log('video completed');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }



  removeplaylistvideo(audiodata) {
    // this.loader.loadingPresent();
    const data = {
      id: audiodata.id
    };
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);

        // this.loader.loadingDismiss();
        this.getVideoDhuns();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
}
