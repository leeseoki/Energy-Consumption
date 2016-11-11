import { Component, OnInit } from '@angular/core';
import { BuildingService } from './building.service';

@Component({
  selector: 'app-building',
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [ BuildingService ]
})
export class BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
