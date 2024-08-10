import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
  private appConfig;
  constructor(private _http: HttpClient) {}

  loadConfig() {
    return this._http
      .get(
        "https://api.myjson.online/v1/records/5b6fa8e7-54a7-4221-ab61-bba76208865d"
      )
      .toPromise()
      .then((res) => {
        this.appConfig = res;
        console.log(res);
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
