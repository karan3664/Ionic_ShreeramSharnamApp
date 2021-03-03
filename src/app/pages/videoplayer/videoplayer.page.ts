import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.page.html',
  styleUrls: ['./videoplayer.page.scss'],
})
export class VideoplayerPage implements OnInit {

  video: any;
  constructor(private route: ActivatedRoute) { 
    this.video = this.route.snapshot.params['url'];
    console.log(this.video);
  }

  ngOnInit() {
  }

}
