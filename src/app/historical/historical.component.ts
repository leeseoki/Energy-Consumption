import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Building,
         BuildingService } from '../building/building.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css'],
  providers: [ BuildingService ]

})
export class HistoricalComponent implements OnInit {

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


  constructor(private buildingService: BuildingService, private formBuilder: FormBuilder) { 
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '86400';
    this.paramText = 'consumption?';
    this.startDate = new Date();
    this.endDate = new Date();
  }

  

  ngOnInit() {
    //this.getBuildings();  
  }

  getBuildings() {
    this.buildingService.getBuildings(this.buildingID, this.entityID, this.interval, this.paramText, this.startDate, this.endDate)
                     .subscribe(
                       buildings => this.buildings = buildings,
                       error =>  this.errorMessage = <any>error);
  }

  onSubmit(data: any, event: Event): void {  
    //console.log(JSON.stringify(data.startdate));
    data.startdate.setHours(0,0,0,0);
    this.buildingService.getBuildings(this.buildingID, this.entityID, this.interval, this.paramText, data.startdate, data.enddate)
                     		.subscribe(
                       		buildings => this.buildings = buildings,
                       		error =>  this.errorMessage = <any>error);
 		event.preventDefault();
 		console.log(data.startdate);
 		console.log(data.enddate);
  }

}
