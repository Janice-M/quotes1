import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  votes: number;

  @Input() quote:Quote
  @Output() isComplete = new EventEmitter<boolean>();
  vote = 0;

  constructor() {
    this.votes = 0;
  }

  likeVote(): boolean{
    this.votes +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.votes -=1;
   return false;
 }
 quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  ngOnInit() {
  }

}