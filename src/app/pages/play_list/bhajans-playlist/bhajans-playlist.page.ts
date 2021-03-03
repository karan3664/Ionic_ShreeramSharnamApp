import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';
export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-bhajans-playlist',
  templateUrl: './bhajans-playlist.page.html',
  styleUrls: ['./bhajans-playlist.page.scss']
})
export class BhajansPlaylistPage implements OnInit {
  Bhajans: any;
  imei: any;
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  duration: any = -1;

  progress = 0;
  @ViewChild('range') range: IonRange;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
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
    console.log('DATA => ' + data)
    this.authService.GetPlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
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
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        if (this.player) {
          this.player.stop();
        }
        // this.loader.loadingDismiss();
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
        const index = this.Bhajans.indexOf(this.activeTrack);
        if (index !== this.Bhajans.length - 1) {
          this.start(this.Bhajans[index + 1]);
        } else {
          this.start(this.Bhajans[0]);
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
