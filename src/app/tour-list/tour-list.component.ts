import { Component, OnInit } from '@angular/core';
import { tourPackageDetails } from '../../database/app-data';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  tourList = tourPackageDetails;
  constructor() { }

  ngOnInit() {
  }

}
