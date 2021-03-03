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
  selector: 'app-dhuns-player',
  templateUrl: './dhuns-player.page.html',
  styleUrls: ['./dhuns-player.page.scss'],
})
export class DhunsPlayerPage implements OnInit {
  AudioDhuns: any;
  imei: any;
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = true;
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
    
   }

  ngOnInit() {
  }

}
