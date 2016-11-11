import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Configuration } from '../app.constants';

export class Building {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class BuildingService {
  private actionUrl: string;
  private headers: Headers;

  constructor (private http: Http) { }

  getBuildings (): Observable<Building[]> {
    var response =  this.http.get('http://129.125.84.138:8099/sensor-data-rest/0/all/0/consumption?start=2016-11-01T23:00:00.000Z&end=2016-11-02T22:59:59.999Z')
                    .map((res:Response) => res.json().buildings)
                    .catch(this.handleError);
    return response;
  }

  getBuilding(id: number | string) {
    return this.getBuildings()
      .then(buildings => buildings.find(building => building.id === +id));
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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
