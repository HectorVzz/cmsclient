import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { _ParseAST } from '@angular/compiler';

interface Iresponse{
  title: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private http: HttpClient) {

  }

  posts: any;
  aver: any;

  async ngOnInit(): Promise<void> {
    this.getPosts().subscribe((data) => {
      this.posts = data['data'];
    });
  }

   getPosts(){
    return this.http.get<[Iresponse]>('http://localhost:5000/post',{responseType: 'json', observe: 'body'})
  }

}
