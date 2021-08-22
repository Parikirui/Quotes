import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1,"Obama",'Watch finding Nemo','Barrack'),
    new Quote(1,"Elechi",'Watch finding Nemo','Amadi'),
    new Quote(1,"Chinua",'Watch finding Nemo','Achebe'),
    new Quote(1,"Ngugi",'Watch finding Nemo','Wathiongo'),
   
  ];

  toggleDetails(index: number){
    this.quotes[index].showAuthorName= !this.quotes[index].showAuthorName;
  }

  deleteQuote(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote by ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }

  // completeQuote(isComplete: any, index: number){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
