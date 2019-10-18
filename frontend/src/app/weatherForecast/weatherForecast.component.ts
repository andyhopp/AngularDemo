import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weatherForecast.component.html',
  styleUrls: ['./weatherForecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  public fiveDayForecast: Forecast[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.list().subscribe(forecasts => {
      this.fiveDayForecast = forecasts;
    });
  }

}
