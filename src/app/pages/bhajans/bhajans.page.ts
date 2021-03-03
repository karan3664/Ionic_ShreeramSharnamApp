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
  selector: 'app-bhajans',
  templateUrl: './bhajans.page.html',
  styleUrls: ['./bhajans.page.scss']
})
export class BhajansPage implements OnInit {
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
    private storageService: StorageService,
    private toastService: ToastService,
    private loader: LoaderService
  ) { 
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });
  }

  ngOnInit() {
    this.getBhajans();
  }

  getBhajans() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'bhajans.json'
    };
    this.authService.GetJsonData(data).subscribe(
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

  addtoplaylist(bhajans) {
   

    // console.log(this.storageService.getIMEI().then((res) => {
    //   this.imei = res;
    //   console.log("IMEI BHAJAN=> " + this.imei );
    // }));
    const data = {
      imei: this.imei,
      url: bhajans.url,
      image: bhajans.image,
      title: bhajans.title,
      type: 'Bhajans'
    };
    console.log("DATA => " + JSON.stringify(data));
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(bhajans.title + ' ' + 'Added To PlayList');
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
  addtodownloadlist(bhajans) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: bhajans.url,
      image: bhajans.image,
      title: bhajans.title,
      type: 'Bhajans'
    };
    console.log(data);
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          bhajans.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
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
