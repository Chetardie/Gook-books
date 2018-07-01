import { Component, OnInit } from '@angular/core';
import { Quote } from './quotes.model';

@Component({
  selector: 'gook-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  public quotes = [
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Mark", lastName: "Twain"}}),
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Theodore", lastName: "Dreiser"}}),
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Mark", lastName: "Twain"}}),
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Mark", lastName: "Twain"}}),
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Mark", lastName: "Twain"}}),
    new Quote({description: "Don't cry because it's over, smile because it happened", author: { firstName: "Mark", lastName: "Twain"}}),
  ];
  constructor() { }

  ngOnInit() {
  }

}
