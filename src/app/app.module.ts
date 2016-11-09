import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HistoricalComponent } from './historical/historical.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricalComponent,
    BuildingListComponent,
    BuildingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'buildings/:id', component: BuildingDetailComponent },
      { path: 'historical', component: HistoricalComponent },
      {
        path: 'buildings',
        component: BuildingListComponent,
        data: {
          title: 'Building List'
        }
      },
      { path: '', component: BuildingListComponent },
      { path: '**', component: BuildingListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



