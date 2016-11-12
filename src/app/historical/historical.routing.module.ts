import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HistoricalComponent }  from './historical.component';

const routes: Routes = [
  { path: '', component: HistoricalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HistoricalRoutingModule {}
