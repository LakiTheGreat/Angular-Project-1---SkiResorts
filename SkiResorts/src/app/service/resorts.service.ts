import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { NavItem } from '../model/nav-item';
import { Reservation } from '../model/reservation.model';
import { Resort } from '../model/resort.model';
import { SkiPass } from '../model/skipass.model';
import { Track } from '../model/track-model';
import { Weather } from '../model/weather-model';

const baseUrl: string = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root',
})
export class ResortsService {
  constructor(private http: HttpClient) {}

  getNavItems(): Observable<NavItem[]> {
    return this.http.get(baseUrl).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new NavItem(elem))) || [];
      })
    );
  }

  getResort(id: number): Observable<Resort> {
    return this.http.get(`${baseUrl}/${id}`).pipe(
      map((data: any) => {
        return new Resort(data);
      })
    );
  }

  getTracks(id: number, params?: any): Observable<Track[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set('sort', params.sort || ''),
      };
    }
    return this.http.get(`${baseUrl}/${id}/tracks`, options).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Track(elem))) || [];
      })
    );
  }

  getWeather(id: number): Observable<Weather[]> {
    return this.http.get(`${baseUrl}/${id}/weather`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Weather(elem))) || [];
      })
    );
  }
  getSkiPass(id: number): Observable<SkiPass[]> {
    return this.http.get(`${baseUrl}/${id}/skipass`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new SkiPass(elem))) || [];
      })
    );
  }

  postRequest(id: number, reservation: Reservation): Observable<any> {
    return this.http.post(`${baseUrl}/${id}/skipass`, reservation).pipe(
      map((data: any) => {
        return new Reservation(data);
      })
    );
  }
}
