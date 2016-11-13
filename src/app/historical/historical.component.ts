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
  buildingChartOptions: Object[];
  options: Object[];
  

  private date;
  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private paramText: string;
  private actuals: Array<number>;
  private timestamps: Array<string>;

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
                     			response => {
											      this.buildings = response;
											      
											      var buildingChartOptionsIndex = 0;
												    this.buildingChartOptions = new Array<Object>();
												    
												    for (var i = 0; i < this.buildings.length; i++) {
												    	var optionIndex = 0;
                       				this.options = new Array<Object>();
												      
												      for(var j = 0; j < this.buildings[i].data.length; j++) {
												      	this.actuals = new Array<number>();
												      	this.timestamps = new Array<string>();
												      	var index = 0;
												      	for( var k = 0; k < this.buildings[i].data[j].entries.length; k++) {
												      		this.actuals[index] = this.buildings[i].data[j].entries[k].actual;
												      		this.timestamps[index] = this.buildings[i].data[j].entries[k].timestamp;
												      		index ++;
												      	}
												      	var chartTitle = this.buildings[i].fields['name'] +'-'+ this.buildings[i].data[j].entity;
												      	this.options[optionIndex] = {
																	type : 'line',
															    title : { text : chartTitle },
															    xAxis: {
												            categories: this.timestamps,
												            type: 'datetime',
												            dateTimeLabelFormats: {
												              day: '%e of %b'
												            }
													        },
													        yAxis: {
												            title: {
												                text: this.buildings[i].data[j].metric
												            }
													        },
															    series: [{
															    		name: this.buildings[i].data[j].entity,
															        data: this.actuals
															    }]
																}; 
																optionIndex ++;
												      }
												      this.buildingChartOptions[buildingChartOptionsIndex] = this.options;
												      buildingChartOptionsIndex ++;
												    }
 
												     console.log(this.options);
												     console.log(this.buildingChartOptions);
											    },
                       		error =>  this.errorMessage = <any>error
                       	);

 		event.preventDefault();
  }

}
