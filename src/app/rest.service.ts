import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  public static endpoint = 'https://api.openweathermap.org/data/2.5/weather?'
  public static apiKey = '&appid=ceea9a366e7adfd659cf63d370c625f1'
  public static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { 

  }


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getCityWeather(city : string): Observable<any> {
    return this.http.get(RestService.endpoint + 'q=' + city + RestService.apiKey).pipe(
      map(this.extractData));
  }

  getllWeather(longtitude: string, latitude: string): Observable<any> {
    return this.http.get(RestService.endpoint + 'lat=' + latitude + '&lon=' + longtitude + RestService.apiKey).pipe(
      map(this.extractData));
  }

}
