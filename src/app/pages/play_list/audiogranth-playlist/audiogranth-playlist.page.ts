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
  selector: 'app-audiogranth-playlist',
  templateUrl: './audiogranth-playlist.page.html',
  styleUrls: ['./audiogranth-playlist.page.scss']
})
export class AudiogranthPlaylistPage implements OnInit {
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
  imei: any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
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
    this.loader.loadingPresent('Please wait...');
    const data = {
      imei_number: this.imei,
      type: 'Granths_Bhakti'
    };
    this.authService.GetPlayList(data).subscribe(
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
    // this.loader.loadingPresent('Please wait...');
    const data = {
      imei_number: this.imei,
      type: 'Granths_RamayanSaar'
    };
    this.authService.GetPlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();

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
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        if (this.player) {
          this.player.stop();
        }
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
    this.authService.DeletePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        // this.loader.loadingDismiss();
        if (this.player) {
          this.player.stop();
        }
        this.getRamayansaar();
        this.getBhaktiprakash();
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
