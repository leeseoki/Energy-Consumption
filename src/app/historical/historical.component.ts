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
  options: Object;

  private date;
  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private paramText: string;
  private actuals: Array<number>;

  constructor(private buildingService: BuildingService, private formBuilder: FormBuilder) { 
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '86400';
    this.paramText = 'consumption?';
    this.startDate = new Date();
    this.endDate = new Date();
  }
  

  

  ngOnInit() {
  }

  onSubmit(data: any, event: Event): void {  
    data.startdate.setHours(0,0,0,0);
    this.buildingService.getBuildings(this.buildingID, this.entityID, this.interval, this.paramText, data.startdate, data.enddate)
                     		.subscribe(
                       		buildings => this.buildings = buildings,
                       		error =>  this.errorMessage = <any>error);              			
 		this.options = {
			type : 'line',
	    title : { text : 'simple chart' },
	    series: [{
	        data: this.actuals,
	    }]
		};   
 		event.preventDefault();
  }

}
