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

  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private paramText: string;

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService) { 
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '0';
    this.paramText = 'consumption?';
    this.startDate = new Date();
    this.endDate = new Date();
  }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.params['id'], 10);
    // this.buildingService.getBuilding(id).map(building => this.building = building);
  }
}
