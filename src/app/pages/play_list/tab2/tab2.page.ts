import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
export interface Track {
  title: string;
  image: string;
  url: string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

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

  PravachanRam: any;
  imei: any;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
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
        this.getPravachanRam();

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

        const index = this.PravachanRam.indexOf(this.activeTrack);
        if (index !== this.PravachanRam.length - 1) {
          this.start(this.PravachanRam[index + 1]);
        } else {
          this.start(this.PravachanRam[0]);

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

    const index = this.PravachanRam.indexOf(this.activeTrack);
    if (index !== this.PravachanRam.length - 1) {
      this.start(this.PravachanRam[index + 1]);
    } else {
      this.start(this.PravachanRam[0]);
    }

  }

  prev() {
    const index = this.PravachanRam.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.PravachanRam[index - 1]);
    } else {
      this.start(this.PravachanRam[this.PravachanRam.length - 1]);
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
