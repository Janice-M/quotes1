import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteLyrics:string
  quoteName:string
  quoteDate: Date =new Date();
  theQuote:any

  submitQuote( ){
    this.theQuote = new Quote(this.quoteName, this.quoteLyrics, this.quoteDate)
    this.quoteLyrics = ''
    this.quoteName = ''
    this.emitQuote.emit(this.theQuote)
  }

  constructor() { }

  ngOnInit() {
  }

}
