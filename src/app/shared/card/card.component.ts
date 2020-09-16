import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  apiurl: string = environment.apiUrl;
  @Input('id') id:number;
  @Input('title') title:string;
  @Input('description') description:string;
  @Input('date') date:string;
  @Input('image') image:string = "../../../assets/images/placeholder.png";

  constructor() { }

  ngOnInit(): void {
  }

}
