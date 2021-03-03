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
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  PravachanRam: any;
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

      this.getPravachanRam();
    });
  }

  ngOnInit() {
   
  }

  getPravachanRam() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_Ramayanji'
    };
    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.PravachanRam = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  removeplaylistpravachanRam(pravachanRam) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanRam.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.getPravachanRam();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  async downloadplaylistpravachanRam(pravachanRam) {
    const alert = await this.alertController.create({
      header: pravachanRam.title,
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
            console.log(pravachanRam.url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

            transfer.download(pravachanRam.url, path + pravachanRam.title + '.mp3').then(entry => {
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
  downloadAllPravachanRam() {


    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }


    const transfer = this.transfer.create();
    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
    for (let i = 0; i < this.PravachanRam.length; i++) {
      transfer.download(this.PravachanRam[i].url, path + this.PravachanRam[i].title + '.mp3').then(entry => {
        const urls = entry.toURL();
        console.log(urls);
        this.loader.loadingDismiss();
        this.toastService.presentToast(this.PravachanRam[i].title + '  ' + 'Download Completed...!');

      });
    }
  }
}
