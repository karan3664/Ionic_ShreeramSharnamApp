import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Howl } from 'howler';
import { IonRange, Platform, AlertController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  PravachanVideo: any;
  PravachanAudio: any;
  segment: string;
  imei: any;
  constructor(private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    public alertController: AlertController,
    private fileOpener: FileOpener,
    private loader: LoaderService) {
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });

    setTimeout(() => {
      this.getPravachanVideo();
    }, 500)
  }

  ngOnInit() {
  }


  getPravachanVideo() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_Video'
    };
    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.PravachanVideo = res;

      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  PlayVideo(url, title) {

    console.log(url);


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


  removeplaylistpravachanvideo(pravachanvideo) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanvideo.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        // this.loader.loadingDismiss();
        console.log(res);

        this.getPravachanVideo();
        // this.getSadhnaSatsang();

      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  async downloadplaylistpravachanvideo(pravachanaudio) {
    const alert = await this.alertController.create({
      header: pravachanaudio.title,
      message: 'Download Audio',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Download',
          handler: () => {
            let path = null;
            if (this.platform.is('ios')) {
              path = this.file.documentsDirectory;
            } else {
              path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
            }


            const transfer = this.transfer.create();
            console.log(pravachanaudio.url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

            transfer.download(pravachanaudio.url, path + pravachanaudio.title + '.mp3').then(entry => {
              const urls = entry.toURL();
              console.log(urls);
              this.loader.loadingDismiss();
              this.toastService.presentToast('Download Completed...!');

            });
            console.log('Confirm Okay');

          }
        }


      ]
    });
    await alert.present();
  }

  downloadAllPravachanVideo() {
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }

    const transfer = this.transfer.create();
    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
    for (let i = 0; i < this.PravachanAudio.length; i++) {
      transfer.download(this.PravachanAudio[i].url, path + this.PravachanAudio[i].title + '.mp3').then(entry => {
        const urls = entry.toURL();
        console.log(urls);
        this.loader.loadingDismiss();
        this.toastService.presentToast(this.PravachanAudio[i].title + '  ' + 'Download Completed...!');

      });
    }
  }

}
