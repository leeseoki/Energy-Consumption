import { Injectable } from '@angular/core';

export class Building {
  constructor(public id: number, public name: string) { }
}

const BUILDING: Building[] = [
  new Building(11, 'Mr. Nice'),
  new Building(12, 'Narco'),
  new Building(13, 'Bombasto'),
  new Building(14, 'Celeritas'),
  new Building(15, 'Magneta'),
  new Building(16, 'RubberMan')
];

const FETCH_LATENCY = 500;

@Injectable()
export class BuildingService {

  getBuildings() {
    return new Promise<Building[]>(resolve => {
      setTimeout(() => { resolve(BUILDING); }, FETCH_LATENCY);
    });
  }

  getBuilding(id: number | string) {
    return this.getBuildings()
      .then(buildings => buildings.find(building => building.id === +id));
  }

}
