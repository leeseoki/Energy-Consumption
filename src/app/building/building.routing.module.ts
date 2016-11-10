import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { BuildingComponent }       from './building.component';
import { BuildingListComponent }   from './building-list.component';
import { BuildingDetailComponent } from './building-detail.component';

const routes: Routes = [
  { path: '',
    component: BuildingComponent,
    children: [
      { path: '',    component: BuildingComponent },
      { path: ':id', component: BuildingDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule {}
