import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { _ParseAST } from '@angular/compiler';

interface IPost {
  title: string;
  description: string;
  date: Date;
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

  posts: IPost[];
  bodyData: IBodyData;

  async ngOnInit(): Promise<void> {
    this.getPosts().subscribe((data) => {
      this.posts = data['data'];
    });
    this.getBodyData().subscribe((data) => {
      this.bodyData = data['data'];
    })
  }



  getPosts() {
    return this.http.get('http://localhost:5000/post', { responseType: 'json', observe: 'body' });
  }

  getBodyData() {
    return this.http.get('http://localhost:5000/bodydata', { responseType: 'json', observe: 'body' });
  }

}
