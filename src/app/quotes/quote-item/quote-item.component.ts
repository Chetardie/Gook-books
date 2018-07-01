import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quotes.model';

@Component({
  selector: 'gook-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.scss']
})
export class QuoteItemComponent implements OnInit {
  @Input() quote: Quote;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
