import { Component, OnInit } from '@angular/core';
import { packages, adventureTours, natureTours } from '../../database/app-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packages = packages;
  adventureTours = adventureTours;
  natureTours = natureTours;

  constructor() { }

  ngOnInit() {
  }

}
