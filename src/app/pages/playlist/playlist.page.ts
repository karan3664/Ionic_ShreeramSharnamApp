import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss']
})
export class PlaylistPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  dhunsPlayList() {
    this.route.navigate(['/dhuns-playlist']);
  }
  pravachanPlayList() {
    this.route.navigate(['/tabs']);
  }
  bhajansPlayList() {
    this.route.navigate(['/bhajans-playlist']);
  }
  audioFromGranthPlayList() {
    this.route.navigate(['/audiogranth-playlist']);
  }
}
