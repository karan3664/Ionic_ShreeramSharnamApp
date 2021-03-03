import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peerage',
  templateUrl: './peerage.page.html',
  styleUrls: ['./peerage.page.scss']
})
export class PeeragePage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  peerage_one() {
    this.route.navigate(['peerage-one']);
  }
  peerage_two() {
    this.route.navigate(['peerage-two']);
  }
  peerage_three() {
    this.route.navigate(['peerage-three']);
  }
}
