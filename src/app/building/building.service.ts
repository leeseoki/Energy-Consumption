import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Configuration } from '../app.constants';


export class Building {
  constructor(public fields: Object, public data: Data[]) { }
}

// export class Fields {
//   constructor(public postal: string, public city: string, public name: string, public img: string, public id: number, public address: string) { }
// }

export class Data {
  constructor(public entity: string, public metric: string, public entries: Entry[]) { }
}

export class Entry {
  constructor(public timestamp: string, public actual: number, public expectedMin: number, public expectedMax: number, public co2: number) { }
}

@Injectable()
export class BuildingService {
  private baseUrl: string;
  private headers: Headers;

  constructor (private http: Http ) {
    this.baseUrl = 'http://129.125.84.138:8099/sensor-data-rest/';
  }

  getBuildings ( buildingID, entityID, interval, paramText, startDate, endDate ): Observable<Building[]> {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    var response =  this.http.get(this.baseUrl + buildingID + '/' + entityID + '/' + interval + '/' + paramText + 'start=' + startDate.toISOString() + '&end=' + endDate.toISOString())
                    .map((res:Response) => res.json().buildings)
                    .catch(this.handleError);
    return response;
  }

  // getBuilding(id: number | string) {
  //   var response = this.getBuildings ( buildingID, entityID, interval, paramText, startDate, endDate )
  //                      .map(buildings => buildings.find(building => building.id === id));
  //   //console.log(response);
  //   return response;
  // }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
