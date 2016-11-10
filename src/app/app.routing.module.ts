import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'historical', loadChildren: 'app/historical/historical.module#HistoricalModule' },
  { path: 'buildings', loadChildren: 'app/building/building.module#BuildingModule' },
  { path: '', redirectTo: 'buildings', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}