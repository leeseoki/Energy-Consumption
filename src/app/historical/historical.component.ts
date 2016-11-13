import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng2Highcharts } from 'ng2-highcharts';

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
  dateForm : FormGroup;
  message: string;
  

  private date;
  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private paramText: string;
  private actuals: Array<number>;
  private timestamps: Array<string>;

  constructor( private buildingService: BuildingService, private formBuilder: FormBuilder ) { 
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '86400';
    this.paramText = 'consumption?';
    this.startDate = new Date();
    this.endDate = new Date();
    this.dateForm = formBuilder.group({
      'startdate' : [null, Validators.required],
      'enddate' : [null, Validators.required]
    })
  }
  
  ngOnInit() {
  }

  onSubmit( data: any, event: Event ): void {  
    if ( data.enddate < data.startdate ) {
    	this.message = "Please choose end date greater than start date."
    } else {
    	data.startdate.setHours(0,0,0,0);
    	this.buildingService.getBuildings( this.buildingID, this.entityID, this.interval, this.paramText, data.startdate, data.enddate )
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
													      	var startYear = Number(this.timestamps[0].substring(0, 4));
													      	var startMonth = Number(this.timestamps[0].substring(5, 7)) - 1;
													      	var startDate = Number(this.timestamps[0].substring(8, 10));
													      	var chartTitle = this.buildings[i].fields['name'] +'-'+ this.buildings[i].data[j].entity;
													      	this.options[optionIndex] = {
																		type : 'line',
																    title : { text : chartTitle },
																    xAxis: {
													            //categories: this.timestamps,
													            type: 'datetime',
													            dateTimeLabelFormats: {
																			  day: '%Y-%m-%d'
																			},
																			labels: {
																			  rotation: 45
																			}
														        },
														        yAxis: {
													            title: {
													                text: this.buildings[i].data[j].metric
													            }
														        },
																    series: [{
																    		name: this.buildings[i].data[j].entity,
																        data: this.actuals,
																        pointStart: Date.UTC(startYear, startMonth, startDate),
	            													pointInterval: 24 * 3600 * 1000 // one day
																    }]
																	}; 
																	optionIndex ++;
													      }
													      this.buildingChartOptions[buildingChartOptionsIndex] = this.options;
													      buildingChartOptionsIndex ++;
													    }
												    },
	                       		error =>  this.errorMessage = <any>error
	                       	);
    }
 		event.preventDefault();
  }

}
