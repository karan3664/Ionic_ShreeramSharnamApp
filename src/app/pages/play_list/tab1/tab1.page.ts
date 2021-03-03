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
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
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
  imei: any;

  constructor(private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private loader: LoaderService) {
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;
      this.getSadhnaSatsang();

    });
  }

  ngOnInit() {
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
        const index = this.SadnaSatsang.indexOf(this.activeTrack);
          if (index !== this.SadnaSatsang.length - 1) {
            this.start(this.SadnaSatsang[index + 1]);
          } else {
            this.start(this.SadnaSatsang[0]);
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
    const index = this.SadnaSatsang.indexOf(this.activeTrack);
    if (index !== this.SadnaSatsang.length - 1) {
      this.start(this.SadnaSatsang[index + 1]);
    } else {
      this.start(this.SadnaSatsang[0]);
    }
    
  }

  prev() {
    const index = this.SadnaSatsang.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.SadnaSatsang[index - 1]);
    } else {
      this.start(this.SadnaSatsang[this.SadnaSatsang.length - 1]);
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
