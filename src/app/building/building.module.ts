import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { BuildingComponent }       from './building.component';
import { BuildingDetailComponent } from './building-detail.component';
import { BuildingListComponent }   from './building-list.component';
import { BuildingRoutingModule }   from './building.routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, BuildingRoutingModule ],
  declarations: [
    BuildingComponent, BuildingDetailComponent, BuildingListComponent
  ]
})
export class BuildingModule { }

