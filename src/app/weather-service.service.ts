import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Nairobi&APPID=5a23d5d7e95ad271e1b0c4a18e3330db`)
                .map((res) => res.json());
                // api.openweathermap.org/data/2.5/weather?q=London
  }

  private handleError(error: Response | any) {
    const message = error.json().message;
    return Observable.throw(message);
  }

}
