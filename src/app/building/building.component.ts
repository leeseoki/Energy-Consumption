import { Component, OnInit } from '@angular/core';
import { BuildingService } from './building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css'],
  providers: [ BuildingService ]
})
export class BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
