import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slides = [
    'assets/images/banner/img1.jpg',
    'assets/images/banner/img2.jpg',
    'assets/images/banner/img3.jpg',
    'assets/images/banner/img4.jpg',
    'assets/images/banner/img5.jpg'
  ];
  constructor() {}

  ngOnInit() {}
}
