import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Howl } from 'howler';
import { IonRange, Platform, AlertController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';

export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-audiogranth-downloadlist',
  templateUrl: './audiogranth-downloadlist.page.html',
  styleUrls: ['./audiogranth-downloadlist.page.scss'],
})
export class AudiogranthDownloadlistPage implements OnInit {

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  duration: any = -1;

  // tslint:disable-next-line: variable-name
  display_position: any = '00:00';
  // tslint:disable-next-line: variable-name
  display_duration: any = '00:00';
  progress = 0;
  @ViewChild('range') range: IonRange;

  segment: string;
  Bhaktiprakash: any;
  Ramayansaar: any;
  Bhakti: any[];
  imei: any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    public alertController: AlertController,
    private fileOpener: FileOpener,
    private loader: LoaderService,
    private storageService: StorageService
  ) {
    this.segment = 'bhaktiprakash';

    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;
      this.getBhaktiprakash();
      this.getRamayansaar();

    });
  }

  ngOnInit() {
   
  }

  getBhaktiprakash() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Granths_Bhakti'
    };
    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.Bhaktiprakash = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  getRamayansaar() {
    // this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Granths_RamayanSaar'
    };
    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.Ramayansaar = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  removeplaylistbhakti(bhakti) {
    // this.loader.loadingPresent();
    const data = {
      id: bhakti.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.getBhaktiprakash();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );

  }
  removeplaylistramayan(ramayan) {
    // this.loader.loadingPresent();
    const data = {
      id: ramayan.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.getRamayansaar();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }


  async downloadplaylistbhakti(bhakti) {

    const alert = await this.alertController.create({
      header: bhakti.title,
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




            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

            transfer.download(bhakti.url, path + bhakti.title + '.mp3').then(entry => {
              const urls = entry.toURL();
              console.log(urls);
              this.loader.loadingDismiss();
              this.toastService.presentToast(bhakti.title + '  ' + 'Download Completed...!');

              this.fileOpener.showOpenWithDialog(path + bhakti.title + '.mp3', 'audio/mp3')

                .then(() =>

                  console.log('File is opened'))

                .catch(e => console.log('Error opening file', e));

            });


            console.log('Confirm Okay');

          }
        }


      ]
    });
    await alert.present();
  }

  async downloadplaylistramayan(ramayan) {
    const alert = await this.alertController.create({
      header: ramayan.title,
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
            console.log(ramayan.url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
            transfer.download(ramayan.url, path + ramayan.title + '.mp3').then(entry => {
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


  downloadAllbhakti() {

    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }


    const transfer = this.transfer.create();

    for (let i = 0; i < this.Bhaktiprakash.length; i++) {
      console.log('ALL URL=>' + JSON.stringify(this.Bhaktiprakash[i].url));

      this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

      transfer.download(this.Bhaktiprakash[i].url, path + this.Bhaktiprakash[i].title + '.mp3').then(entry => {
        const urls = entry.toURL();
        console.log(urls);
        this.loader.loadingDismiss();
        this.toastService.presentToast(this.Bhaktiprakash[i].title + '  ' + 'Download Completed...!');

        // this.fileOpener.showOpenWithDialog(path + bhakti.title + '.mp3', 'audio/mp3')

        //   .then(() =>

        //     console.log('File is opened'))

        //   .catch(e => console.log('Error opening file', e));

      });
    }

  }

  downloadAllramayan() {

    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }


    const transfer = this.transfer.create();

    for (let i = 0; i < this.Ramayansaar.length; i++) {
      console.log('ALL URL=>' + JSON.stringify(this.Ramayansaar[i].url));

      this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

      transfer.download(this.Ramayansaar[i].url, path + this.Ramayansaar[i].title + '.mp3').then(entry => {
        const urls = entry.toURL();
        console.log(urls);
        this.loader.loadingDismiss();
        this.toastService.presentToast(this.Ramayansaar[i].title + '  ' + 'Download Completed...!');

        // this.fileOpener.showOpenWithDialog(path + bhakti.title + '.mp3', 'audio/mp3')

        //   .then(() =>

        //     console.log('File is opened'))

        //   .catch(e => console.log('Error opening file', e));

      });
    }

  }

  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.url],
      html5: true,
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgess();
      },
      onend: () => { }
    });
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {
    if (this.segment === 'bhaktiprakash') {
      const index = this.Bhaktiprakash.indexOf(this.activeTrack);
      if (index !== this.Bhaktiprakash.length - 1) {
        this.start(this.Bhaktiprakash[index + 1]);
      } else {
        this.start(this.Bhaktiprakash[0]);
      }
    }
    if (this.segment === 'ramayansaar') {
      const index = this.Ramayansaar.indexOf(this.activeTrack);
      if (index !== this.Ramayansaar.length - 1) {
        this.start(this.Ramayansaar[index + 1]);
      } else {
        this.start(this.Ramayansaar[0]);
      }
    }
  }

  prev() {
    if (this.segment === 'bhaktiprakash') {
      const index = this.Bhaktiprakash.indexOf(this.activeTrack);
      if (index > 0) {
        this.start(this.Bhaktiprakash[index - 1]);
      } else {
        this.start(this.Bhaktiprakash[this.Bhaktiprakash.length - 1]);
      }
    }
    if (this.segment === 'ramayansaar') {
      const index = this.Ramayansaar.indexOf(this.activeTrack);
      if (index > 0) {
        this.start(this.Ramayansaar[index - 1]);
      } else {
        this.start(this.Ramayansaar[this.Ramayansaar.length - 1]);
      }
    }
  }
  seek() {
    const newValue = +this.range.value;
    const duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgess() {
    const seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgess();
    }, 1000);
  }
}

