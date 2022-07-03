import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/model/reservation.model';
import { SkiPass } from 'src/app/model/skipass.model';

@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css'],
})
export class SkiPassComponent implements OnInit {
  @Input() skiPassList: SkiPass[] = [];
  @Output()
  newReservation: EventEmitter<Reservation> = new EventEmitter();
  reservation: Reservation = new Reservation();

  dateFrom: NgbDateStruct = { day: 0, month: 0, year: 0 };
  dateTo: NgbDateStruct = { day: 0, month: 0, year: 0 };

  constructor() {}

  ngOnInit(): void {}

  onDateChanged() {
    this.reservation.dateFrom = new Date(
      this.dateFrom.year,
      this.dateFrom.month,
      this.dateFrom.day
    );
    this.reservation.dateTo = new Date(
      this.dateTo.year,
      this.dateTo.month,
      this.dateTo.day
    );
    const numberOfDays = this.reservation.calculateDays();
    console.log(numberOfDays);

    for (let item of this.skiPassList) {
      if (item.duration == numberOfDays) {
        this.reservation.price = item.price;
        console.log(this.reservation.price);
        return;
      }
      this.reservation.price = 0;
    }
  }

  postReservation() {
    if (this.reservation.price != 0) {
      this.newReservation.emit(this.reservation);
    } else {
      alert(
        'Ne postoji mogucnost iznajmljivanja ski passa u tom raspoun. Minimum je 1 a maksimum 7 dana.'
      );
    }
  }
}
