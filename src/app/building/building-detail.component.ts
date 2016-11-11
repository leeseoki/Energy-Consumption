import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Building,
         BuildingService }    from './building.service';

@Component({
  template: `
    <h3 highlight>Building Detail</h3>
    <div *ngIf="building">
      <div>Id: {{building}}</div><br>
      <label>Name:
        <input [(ngModel)]="building.field.name">
      </label>
    </div>
    <br>
    <a routerLink="../">Building List</a>
  `
})
export class BuildingDetailComponent implements OnInit {
  building: Building;

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.buildingService.getBuilding(id).map(building => this.building = building);
  }
}
