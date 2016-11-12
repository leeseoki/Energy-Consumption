import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HistoricalComponent }       from './historical.component';

import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { HistoricalRoutingModule }   from './historical.routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, Ng2DatetimePickerModule, HistoricalRoutingModule ],
  declarations: [
  	HistoricalComponent
  ]
})
export class HistoricalModule { 
	startDate: Date;
	endDate: Date;

}

