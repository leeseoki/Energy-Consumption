import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Configuration } from '../app.constants';


export class Building {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class BuildingService {
  private baseUrl: string;
  private headers: Headers;
  private buildingID: string;
  private entityID: string;
  private interval: string;
  private startDate: Date;
  private endDate: Date;
  private param: string;

  constructor (private http: Http ) {
    this.baseUrl = 'http://129.125.84.138:8099/sensor-data-rest/';
    this.buildingID = '0';
    this.entityID = 'all';
    this.interval = '0';
    this.param = 'consumption?';
    this.startDate = new Date();
    this.endDate = new Date();
  }

  getBuildings (): Observable<Building[]> {
    var response =  this.http.get(this.baseUrl + this.buildingID + '/' + this.entityID + '/' + this.interval + '/' + this.param + 'start=' + this.startDate.toISOString() + '&end=' + this.endDate.toISOString())
                    .map((res:Response) => res.json().buildings)
                    .catch(this.handleError);
    return response;
  }

  getBuilding(id: number | string) {
    var response = this.getBuildings()
                       .map(buildings => buildings.find(building => building.id === id));
    console.log(response);
    return response;
  }

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
