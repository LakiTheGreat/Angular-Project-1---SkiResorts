import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather-model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() weatherList: Weather[] = [];

  constructor() {}

  ngOnInit(): void {}
}
