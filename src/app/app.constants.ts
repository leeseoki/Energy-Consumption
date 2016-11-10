import { Injectable } from '@angular/core';
 
@Injectable()
export class Configuration {
    public Server: string = "http://129.125.84.138:8099/";
    public ApiUrl: string = "sensor-data-rest/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ParameterList: String[] = ['0', 'all', '0', '2016- 11-01T23:00:00.000Z', '2016-11-02T22:59:59.999Z']
}