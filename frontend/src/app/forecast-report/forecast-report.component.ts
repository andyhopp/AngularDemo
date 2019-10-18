import { Component, OnInit, Input } from '@angular/core';
import { TemperatureFeels } from 'src/model/TemperatureFeels';

@Component({
  selector: 'app-forecast-report',
  templateUrl: './forecast-report.component.html',
  styleUrls: ['./forecast-report.component.scss']
})
export class ForecastReportComponent implements OnInit {
  @Input()
  date: string;
  @Input()
  temperature: number;
  @Input()
  summary: string;

  constructor() { }

  ngOnInit() {
  }

  public icon = (): string => {
    console.log(`Getting icon for: ${this.summary}`);
    switch (this.summary) {
      case TemperatureFeels.scorching:
      case TemperatureFeels.sweltering:
        return 'fire';
      case TemperatureFeels.hot:
      case TemperatureFeels.warm:
          return 'thermometer-three-quarters';
      case TemperatureFeels.balmy:
      case TemperatureFeels.mild:
          return 'sun-o';
      case TemperatureFeels.cool:
      case TemperatureFeels.bracing:
        return 'thermometer-quarter';
      case TemperatureFeels.chilly:
        return 'thermometer-empty';
      case TemperatureFeels.freezing:
        return 'thermometer-empty';
      default:
        console.log(`Unknown temperature: ${this.summary}`);
      }
  }

}
