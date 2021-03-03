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
  selector: 'app-bhajans-downloadlist',
  templateUrl: './bhajans-downloadlist.page.html',
  styleUrls: ['./bhajans-downloadlist.page.scss'],
})
export class BhajansDownloadlistPage implements OnInit {

  Bhajans: any;
  imei: any;
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
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;
      this.getAudioDhuns();
    });
   }

  ngOnInit() {
    
  }
  getAudioDhuns() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Bhajans'
    };

    this.authService.GetDownloadList(data).subscribe(
      (res: any) => {

        this.loader.loadingDismiss();

        console.log(res);
        this.Bhajans = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  removeplaylistdhuns(audiodata) {
    // this.loader.loadingPresent();
    const data = {
      id: audiodata.id
    };
    this.authService.DeleteDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        this.getAudioDhuns();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
   }

  async downloadplaylistdhuns(audiodata) {
    const alert = await this.alertController.create({
      header: audiodata.title,
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
            console.log(audiodata.url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

            transfer.download(audiodata.url, path + audiodata.title + '.mp3').then(entry => {
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

  downloadAllBhajans() {


    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }


    const transfer = this.transfer.create();
    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
    for (let i = 0; i < this.Bhajans.length; i++) {
      transfer.download(this.Bhajans[i].url, path + this.Bhajans[i].title + '.mp3').then(entry => {
        const urls = entry.toURL();
        console.log(urls);
        this.loader.loadingDismiss();
        this.toastService.presentToast(this.Bhajans[i].title + '  ' + 'Download Completed...!');

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
    const index = this.Bhajans.indexOf(this.activeTrack);
    if (index !== this.Bhajans.length - 1) {
      this.start(this.Bhajans[index + 1]);
    } else {
      this.start(this.Bhajans[0]);
    }
  }

  prev() {
    const index = this.Bhajans.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.Bhajans[index - 1]);
    } else {
      this.start(this.Bhajans[this.Bhajans.length - 1]);
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
