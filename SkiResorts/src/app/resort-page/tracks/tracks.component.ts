import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/model/track-model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  @Input() tracks: Track[] = [];
  @Output() selectChanged: EventEmitter<string> = new EventEmitter();
  sortBy: string = 'name';

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    // console.log(this.sortBy);
    this.selectChanged.emit(this.sortBy);
  }
}
