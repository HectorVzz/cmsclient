import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('title') title:string;
  @Input('description') description:string;
  @Input('date') date:string;

  constructor() { }

  ngOnInit(): void {
  }

}
