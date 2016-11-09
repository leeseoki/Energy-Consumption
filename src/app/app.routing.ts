import { Routes, RouterModule } from '@angular/router';
import { HistoricalComponent } from './historical/historical.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';


const appRoutes: Routes = [
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
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);