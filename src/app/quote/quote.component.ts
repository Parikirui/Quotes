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
    new Quote(1,"Obama",'Watch finding Nemo','Barrack'),
    new Quote(1,"Obama",'Watch finding Nemo','Barrack'),
    new Quote(1,"Obama",'Watch finding Nemo','Barrack'),
   
  ];

  toggleDetails(index: number){
    this.quotes[index].showAuthorName= !this.quotes[index].showAuthorName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
