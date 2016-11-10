import { Component, OnInit } from '@angular/core';

import { Building,
         BuildingService } from './building.service';

@Component({
  template: `
    <h3 highlight>Building List</h3>
    <div *ngFor='let building of buildings | async'>
      <a routerLink="{{building.id}}">{{building.id}} - {{building.name}}</a>
    </div>
  `
})
export class BuildingListComponent implements OnInit {
  buildings: Promise<Building[]>;
  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.buildings = this.buildingService.getBuildings();
  }
}
