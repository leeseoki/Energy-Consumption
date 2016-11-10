import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* Feature Modules */
import { BuildingModule }        from './building/building.module';
import { HistoricalModule }      from './historical/historical.module';

/* Routing Module */
import { AppRoutingModule }   from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



