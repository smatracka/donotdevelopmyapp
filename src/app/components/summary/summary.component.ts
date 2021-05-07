import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary = {
    id: 1,
    title: 'Personal summary',
    description: 'Lorem ipsum'
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleSummaryClicked(data) {
    console.log('received:' + data);
  }
}
