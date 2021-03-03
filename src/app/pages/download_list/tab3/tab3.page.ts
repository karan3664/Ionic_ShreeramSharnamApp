import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Howl } from 'howler';
import { IonRange, Platform, AlertController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  PravachanAudio: any;
  imei: any;
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    public alertController: AlertController,
    private fileOpener: FileOpener,
    private loader: LoaderService
  ) {

    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;
      this.getPravachanAudio();
     
    });
  }

  ngOnInit() {
   
  }
  getPravachanAudio() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_CD'
    };
    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.PravachanAudio = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  removeplaylistpravachanaudio(pravachanaudio) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanaudio.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.getPravachanAudio();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }


  async downloadplaylistpravachanaudio(pravachanaudio) {
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

  downloadAllPravachanAudio() {
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
