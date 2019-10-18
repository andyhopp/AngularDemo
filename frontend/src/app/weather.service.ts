import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Forecast[]> {
    return this.httpClient.get<Forecast[]>(environment.restUrl + 'weatherforecast');
  }

}
