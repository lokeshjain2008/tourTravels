import { Component, OnInit } from '@angular/core';
import { bannerImages } from '../../database/app-data';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  timerDuration  = 200;
  bannerImages = bannerImages;
  selectedImg = 0;
  totalImg =  bannerImages.length;
  constructor() { }

  ngOnInit() {
    // this.setTimer();
  }

  prevImg(ev: Event) {
    ev.preventDefault();
    this.selectedImg = this.selectedImg > 0 ? (this.selectedImg - 1) : (this.totalImg - 1);

  }

  nextImg(ev?: Event) {
    if (ev) {
      ev.preventDefault();
    }
    this.selectedImg = (this.selectedImg < this.totalImg - 1) ? (this.selectedImg + 1) : 0;

  }

  setTimer() {
    setTimeout(() => {
      $('#app-main-crousel').carousel({
      interval: 2000,
      ride: "carousel"
    }); }, this.timerDuration);
  }

}
