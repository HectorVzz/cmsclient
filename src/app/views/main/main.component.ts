import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { _ParseAST } from '@angular/compiler';

interface IPost {
  id: number;
  title: string;
  description: string;
  date: Date;
  image: string;
}

interface IBodyData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  apiUrl = environment.apiUrl;
  posts: IPost[];
  bodyData: IBodyData;

  async ngOnInit(): Promise<void> {
    this.getPosts().subscribe((data) => {
      this.posts = data['data'];
      console.log(this.posts);
    });
    this.getBodyData().subscribe((data) => {
      this.bodyData = data['data'];
    })
  }

  get title() { return (this.bodyData && this.bodyData.title) ? this.bodyData.title : null}
  get description() { return (this.bodyData && this.bodyData.description) ? this.bodyData.description : null}

  getPosts() {
    return this.http.get(`${this.apiUrl}/post`, { responseType: 'json', observe: 'body' });
  }

  getBodyData() {
    return this.http.get(`${this.apiUrl}/bodydata`, { responseType: 'json', observe: 'body' });
  }

}
