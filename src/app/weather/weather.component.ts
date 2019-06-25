import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  cityWeather: any = [];
  llWeahter: any = [];



  constructor(public rest: RestService) {
  }


  ngOnInit() {
  }

  getCityWeather(city: string) {
    this.rest.getCityWeather(city).subscribe(data => {
      this.cityWeather.push(data);
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }

  getLLWeather(lon: string, lat: string) {
    this.rest.getllWeather(lon, lat).subscribe(data => {
      this.llWeahter.push(data);
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }

}


