import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-summary-thumbnail',
  templateUrl: './summary-thumbnail.component.html',
  styleUrls: ['./summary-thumbnail.component.css']
})
export class SummaryThumbnailComponent implements OnInit {
  @Input() summary: any;
  @Output() summaryClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  summaryClickMe() {
    this.summaryClick.emit('foo');
  }
}
