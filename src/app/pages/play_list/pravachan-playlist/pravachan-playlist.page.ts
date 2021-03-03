import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Howl } from 'howler';
import { IonRange, Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-pravachan-playlist',
  templateUrl: './pravachan-playlist.page.html',
  styleUrls: ['./pravachan-playlist.page.scss']
})
export class PravachanPlaylistPage implements OnInit {
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

  SadnaSatsang: any;
  PravachanRam: any;
  PravachanAudio: any;
  PravachanVideo: any;

  segment: string;
  imei: any;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private loader: LoaderService,
    private streamingMedia: StreamingMedia,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    private fileOpener: FileOpener

  ) {
    this.segment = 'pravachan_cassette';

    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;
      this.getSadhnaSatsang();

    });
  }

  ngOnInit() {


  }

  onCatChange(cate) {
    console.log(cate);
    this.getPravachanRam();

  }
  getSadhnaSatsang() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_Cassettes'
    };
    this.authService.GetPlayList(data).subscribe(
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

  getPravachanRam() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_Ramayanji'
    };
    this.authService.GetPlayList(data).subscribe(
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
  
  getPravachanAudio() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_CD'
    };
    this.authService.GetPlayList(data).subscribe(
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

  getPravachanVideo() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Pravachan_Video'
    };
    this.authService.GetPlayList(data).subscribe(
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

  removeplaylistpravachanCassettes(pravachanCassettes) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanCassettes.id
    };
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        if (this.player) {
          this.player.stop();
        }
        // this.loader.loadingDismiss();
        this.getSadhnaSatsang();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  removeplaylistpravachanRam(pravachanRam) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanRam.id
    };
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        if (this.player) {
          this.player.stop();
        }
        // this.loader.loadingDismiss();
        this.PravachanRam();

        // this.getSadhnaSatsang();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  removeplaylistpravachanaudio(pravachanaudio) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanaudio.id
    };
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        // this.loader.loadingDismiss();
        console.log(res);
        if (this.player) {
          this.player.stop();
        }
        this.PravachanAudio();
        // this.getSadhnaSatsang();

      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  removeplaylistpravachanvideo(pravachanvideo) {
    // this.loader.loadingPresent();
    const data = {
      id: pravachanvideo.id
    };
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        // this.loader.loadingDismiss();
        console.log(res);
        if (this.player) {
          this.player.stop();
        }
        this.PravachanVideo();
        // this.getSadhnaSatsang();

      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  start(track: Track) {
    this.loader.loadingPresent();
    if (this.player) {
      this.player.unload();
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.url],
      html5: true,
      onplay: () => {
        this.loader.loadingDismiss();
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgess();
      },
      onload: () => { },
      onend: () => {
        if (this.segment === 'pravachan_cassette') {
          const index = this.SadnaSatsang.indexOf(this.activeTrack);
          if (index !== this.SadnaSatsang.length - 1) {
            this.start(this.SadnaSatsang[index + 1]);
          } else {
            this.start(this.SadnaSatsang[0]);
          }
        }
        if (this.segment === 'audio_ramaynji') {
          const index = this.PravachanRam.indexOf(this.activeTrack);
          if (index !== this.PravachanRam.length - 1) {
            this.start(this.PravachanRam[index + 1]);
          } else {
            this.start(this.PravachanRam[0]);
          }
        }
        if (this.segment === 'audio_cd') {
          const index = this.PravachanAudio.indexOf(this.activeTrack);
          if (index !== this.PravachanAudio.length - 1) {
            this.start(this.PravachanAudio[index + 1]);
          } else {
            this.start(this.PravachanAudio[0]);
          }
        }
      }
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
    if (this.segment === 'pravachan_cassette') {
      const index = this.SadnaSatsang.indexOf(this.activeTrack);
      if (index !== this.SadnaSatsang.length - 1) {
        this.start(this.SadnaSatsang[index + 1]);
      } else {
        this.start(this.SadnaSatsang[0]);
      }
    }
    if (this.segment === 'audio_ramaynji') {
      const index = this.PravachanRam.indexOf(this.activeTrack);
      if (index !== this.PravachanRam.length - 1) {
        this.start(this.PravachanRam[index + 1]);
      } else {
        this.start(this.PravachanRam[0]);
      }
    }
    if (this.segment === 'audio_cd') {
      const index = this.PravachanAudio.indexOf(this.activeTrack);
      if (index !== this.PravachanAudio.length - 1) {
        this.start(this.PravachanAudio[index + 1]);
      } else {
        this.start(this.PravachanAudio[0]);
      }
    }
  }

  prev() {
    if (this.segment === 'pravachan_cassette') {
      const index = this.SadnaSatsang.indexOf(this.activeTrack);
      if (index > 0) {
        this.start(this.SadnaSatsang[index - 1]);
      } else {
        this.start(this.SadnaSatsang[this.SadnaSatsang.length - 1]);
      }
    }
    if (this.segment === 'audio_ramaynji') {
      const index = this.PravachanRam.indexOf(this.activeTrack);
      if (index > 0) {
        this.start(this.PravachanRam[index - 1]);
      } else {
        this.start(this.PravachanRam[this.PravachanRam.length - 1]);
      }
    }
    if (this.segment === 'audio_cd') {
      const index = this.PravachanAudio.indexOf(this.activeTrack);
      if (index > 0) {
        this.start(this.PravachanAudio[index - 1]);
      } else {
        this.start(this.PravachanAudio[this.PravachanAudio.length - 1]);
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
}
