import { Component, OnInit } from '@angular/core';

import { Building,
         BuildingService } from './building.service';

@Component({
  selector: 'building-list',
  templateUrl: 'building-list.component.html',
  providers: [ BuildingService ],
  styles: ['.error {color:red;}']
})

export class BuildingListComponent implements OnInit {
  errorMessage: string;
  buildings: Building[];
  mode = 'Observable';

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.getBuildings();  }

   getBuildings() {
    this.buildingService.getBuildings()
                     .subscribe(
                       buildings => this.buildings = buildings,
                       error =>  this.errorMessage = <any>error);
  }
}
