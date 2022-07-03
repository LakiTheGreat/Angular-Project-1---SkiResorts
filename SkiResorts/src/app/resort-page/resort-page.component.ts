import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { Resort } from '../model/resort.model';
import { SkiPass } from '../model/skipass.model';
import { Track } from '../model/track-model';
import { Weather } from '../model/weather-model';
import { ResortsService } from '../service/resorts.service';

@Component({
  selector: 'app-resort-page',
  templateUrl: './resort-page.component.html',
  styleUrls: ['./resort-page.component.css'],
})
export class ResortPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ResortsService) {}
  id: number = 0;
  active = 1;
  currentResort: Resort = new Resort();
  tracks: Track[] = [];
  weatherList: Weather[] = [];
  skiPassList: SkiPass[] = [];
  params = {
    sort: 'name',
  };

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getResort();
      this.getTracks();
      this.getWeather();
      this.getSkiPass();
    });
  }

  getResort(): void {
    this.service.getResort(this.id).subscribe({
      next: (resort: Resort) => {
        this.currentResort = resort;
      },
      error: (err: any) => console.log(err),
    });
  }

  getTracks(): void {
    this.service.getTracks(this.id, this.params).subscribe({
      next: (tracks: Track[]) => {
        console.log(this.params);
        console.log(tracks);
        this.tracks = tracks;
      },
      error: (err: any) => console.log(err),
    });
  }

  getWeather(): void {
    this.service.getWeather(this.id).subscribe({
      next: (weatherList: Weather[]) => {
        console.log(weatherList);
        this.weatherList = weatherList;
      },
      error: (err: any) => console.log(err),
    });
  }
  getSkiPass(): void {
    this.service.getSkiPass(this.id).subscribe({
      next: (skiPassList: SkiPass[]) => {
        console.log(skiPassList);
        this.skiPassList = skiPassList;
      },
      error: (err: any) => console.log(err),
    });
  }

  updateSort(sortBy: string): void {
    this.params.sort = sortBy;
    // console.log(`s-${sortBy}`);
    this.getTracks();
  }

  postReservation(reservation: Reservation): void {
    this.service.postRequest(this.id, reservation).subscribe({
      next: (data: Reservation) => {
        console.log(data);
        alert('success');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }
}
