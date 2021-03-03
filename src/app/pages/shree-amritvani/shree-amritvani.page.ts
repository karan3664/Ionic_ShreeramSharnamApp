import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Howl } from 'howler';
import { IonRange, ActionSheetController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { ToastService } from 'src/app/services/toast.service';

export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-shree-amritvani',
  templateUrl: './shree-amritvani.page.html',
  styleUrls: ['./shree-amritvani.page.scss']
})
export class ShreeAmritvaniPage implements OnInit {
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

  playlist: Track[] = [
    {
      title: 'Shree Amritvani',
      image: 'http://www.ibiblio.org/ram/json/music.png',
      url: 'http://www.ibiblio.org/ram/audio/amrtvnpn.mp3'
    }
  ];

  constructor(
    private authService: AuthService,
    private videoPlayer: VideoPlayer,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private loader: LoaderService,
    private backgroundMode: BackgroundMode,
    private streamingMedia: StreamingMedia,
    private toast: ToastService,
    public actionSheetCtrl: ActionSheetController

  ) { }
  Amritvani: any;
  ngOnInit() {
    this.getShreeAmritvani();

  }

  getShreeAmritvani() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'amritvani.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.Amritvani = res;

      },
      (error: any) => {
        console.log('error');
      }
    );
  }

  PlayVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo('http://www.ibiblio.org/ram/dlive_permanent/amritvani_sync.mp4', options);




    // this.videoPlayer
    //   .play('http://www.ibiblio.org/ram/dlive_permanent/amritvani_sync.mp4')
    //   .then(() => {
    //     console.log('video completed');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  DownloadPdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }
    const transfer = this.transfer.create();
    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

    transfer.download('http://www.ibiblio.org/ram/pdf_data/Shree_Amritvani_notations.pdf', path + 'Shree Amritvani' + '.pdf').then(entry => {
      const urls = entry.toURL();
      console.log(urls);
      this.loader.loadingDismiss();
      this.fileOpener.showOpenWithDialog(path + 'Shree Amritvani' + '.pdf', 'application/pdf')

        .then(() =>

          console.log('File is opened'))

        .catch(e => console.log('Error opening file', e)


        );
    });


  }

  DownloadReadPDF(url, title) {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
    }

    const transfer = this.transfer.create();
    console.log(url);

    this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

    transfer.download(url, path + title + '.pdf').then(entry => {
      const urls = entry.toURL();
      console.log(urls);
      this.loader.loadingDismiss();
      this.fileOpener.showOpenWithDialog(path + title + '.pdf', 'application/pdf')

        .then(() =>

          console.log('File is opened'))

        .catch(e => console.log('Error opening file', e));
      // this.document.viewDocument(urls, 'application/pdf', {});
    });
    // const transfer = this.transfer.create();
    // transfer.download(url, path).then(entry => {
    //   const urls = entry.toURL();
    //   this.document.viewDocument(urls, 'application/pdf', {});
    // });
  }

  // playAudio(url) {


  //   let options: StreamingVideoOptions = {
  //     successCallback: () => { console.log('Video played') },
  //     errorCallback: (e) => { console.log('Error streaming') },
  //     orientation: 'potrait',
  //     shouldAutoClose: true,
  //     controls: true
  //   };

  //   this.streamingMedia.playAudio(url, options);
  // }

  async  start(track: Track) {

    const actionSheet = await this.actionSheetCtrl.create({
      header: track.title,
      buttons: [{
        text: 'Play',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.loader.loadingPresent();

          if (this.player) {
            this.player.stop();
          }
          this.player = new Howl({
            src: [track.url],
            html5: true,
            onplay: () => {
              // this.duration = this.player.duration();
              this.loader.loadingDismiss();
              this.isPlaying = true;
              this.activeTrack = track;
              this.updateProgess();
            },
            onend: () => { }
          });
          this.player.play();
        }


      }, {
        text: 'Download',
        icon: 'download',
        handler: () => {
          let path = null;
            if (this.platform.is('ios')) {
              path = this.file.documentsDirectory;
            } else {
              path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
            }


            const transfer = this.transfer.create();
            console.log(track.url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');

            transfer.download(track.url, path + track.title + '.mp3').then(entry => {
              const urls = entry.toURL();
              console.log(urls);
              this.loader.loadingDismiss();
              this.toast.presentToast('Download Completed...!');

            });
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();



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
    this.toast.presentToast('No Next Music Found');
    // const index = this.playlist.indexOf(this.activeTrack);
    // if (index !== this.playlist.length - 1) {
    //   this.start(this.playlist[index + 1]);
    // } else {
    //   this.start(this.playlist[0]);
    // }
  }

  prev() {
    this.toast.presentToast('No Previcous Music Found');
    // const index = this.playlist.indexOf(this.activeTrack);
    // if (index > 0) {
    //   this.start(this.playlist[index - 1]);
    // } else {
    //   this.start(this.playlist[this.playlist.length - 1]);
    // }
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
    }, 5000);
    console.log('Play clicked');
  }
  ionViewDidLeave() {
    if (this.player) {
      this.player.stop();
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.stop();
    }
  }
}
