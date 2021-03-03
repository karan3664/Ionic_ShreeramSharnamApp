import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloadlist',
  templateUrl: './downloadlist.page.html',
  styleUrls: ['./downloadlist.page.scss']
})
export class DownloadlistPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  dhunsDownloadList() {
    this.route.navigate(['/dhuns-downloadlist']);
  }
  pravachanDownloadList() {
    this.route.navigate(['/tabs-download']);
  }
  bhajansDownloadList() {
    this.route.navigate(['/bhajans-downloadlist']);
  }
  audioFromGranthDownloadList() {
    this.route.navigate(['/audiogranth-downloadlist']);
  }
}
