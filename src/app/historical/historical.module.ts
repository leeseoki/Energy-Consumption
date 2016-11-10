import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { HistoricalComponent }       from './historical.component';

import { HistoricalRoutingModule }   from './historical.routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, HistoricalRoutingModule ],
  declarations: [
  	HistoricalComponent
  ]
})
export class HistoricalModule { }

