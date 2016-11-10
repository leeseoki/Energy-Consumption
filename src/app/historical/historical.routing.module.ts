import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { HistoricalComponent }    from './historical.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'historical', component: HistoricalComponent}
  ])],
  exports: [RouterModule]
})
export class HistoricalRoutingModule {}
