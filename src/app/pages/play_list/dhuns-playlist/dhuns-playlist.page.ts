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
  selector: 'app-dhuns-playlist',
  templateUrl: './dhuns-playlist.page.html',
  styleUrls: ['./dhuns-playlist.page.scss']
})
export class DhunsPlaylistPage implements OnInit {


  constructor(

  ) {

  }

  ngOnInit() {

  }




}

