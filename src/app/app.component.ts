import { Component } from '@angular/core';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { HistoricalComponent } from './historical/historical.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
}
