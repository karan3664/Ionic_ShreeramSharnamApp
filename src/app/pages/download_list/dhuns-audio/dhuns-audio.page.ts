import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';


export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-dhuns-audio',
  templateUrl: './dhuns-audio.page.html',
  styleUrls: ['./dhuns-audio.page.scss'],
})
export class DhunsAudioPage implements OnInit {
  AudioDhuns: any;
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
    private loader: LoaderService,
    private storageService: StorageService,
    private streamingMedia: StreamingMedia,
    private route: Router
  ) {
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });

    setTimeout(() => {
      this.getAudioDhuns();
    }, 500);
  }

  ngOnInit() {

  }

  // 864130040486631
  getAudioDhuns() {
    this.loader.loadingPresent();
    const data = {
      imei_number: this.imei,
      type: 'Dhuns'
    };

    this.authService.GetPlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.AudioDhuns = res;

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
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        if (this.player) {
          this.player.stop();
        }
        this.getAudioDhuns();
      },
      (error: any) => {
        // this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }


  start(track: Track) {

    this.loader.loadingPresent();
    console.log(JSON.stringify(track));

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
        const index = this.AudioDhuns.indexOf(this.activeTrack);
        if (index !== this.AudioDhuns.length - 1) {
          this.start(this.AudioDhuns[index + 1]);
        } else {
          this.start(this.AudioDhuns[0]);
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
    const index = this.AudioDhuns.indexOf(this.activeTrack);
    if (index !== this.AudioDhuns.length - 1) {
      this.start(this.AudioDhuns[index + 1]);
    } else {
      this.start(this.AudioDhuns[0]);
    }
  }

  prev() {
    const index = this.AudioDhuns.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.AudioDhuns[index - 1]);
    } else {
      this.start(this.AudioDhuns[this.AudioDhuns.length - 1]);
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
    // setTimeout(() => {
    //   this.updateProgess();
    // }, 1000);
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

