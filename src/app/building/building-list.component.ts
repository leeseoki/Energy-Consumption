import { Component, OnInit } from '@angular/core';

import { Building,
         BuildingService } from './building.service';

@Component({
  selector: 'building-list',
  templateUrl: 'building-list.component.html',
  providers: [ BuildingService ],
  styles: ['.error {color:red;}']
})

export class BuildingListComponent implements OnInit {
  errorMessage: string;
  buildings: Building[];
  mode = 'Observable';

  private date;
  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private paramText: string;


  constructor(private buildingService: BuildingService) { 
    this.date = new Date();
    this.date = this.date.toISOString();
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '0';
    this.paramText = 'consumption?';
    this.startDate = new Date();
    this.startDate.setHours(0,0,0,0);
    this.endDate = new Date();
  }

  ngOnInit() {
    this.getBuildings();  }

   getBuildings() {

    this.buildingService.getBuildings(this.buildingID, this.entityID, this.interval, this.paramText, this.startDate, this.endDate)
                     .subscribe(
                       buildings => this.buildings = buildings,
                       error =>  this.errorMessage = <any>error);
  }
}
