import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { _ParseAST } from '@angular/compiler';

interface IPost {
  title: string;
  description: string;
  date: Date;
  image: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number;
  apiUrl = environment.apiUrl;
  post: IPost;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  get image() { return (this.post.image && this.post.image) ? this.post.image : null }
  get title() { return (this.post && this.post.title) ? this.post.title : null }
  get description() { return (this.post && this.post.description) ? this.post.description : null }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPost(this.id).subscribe(data => {
        this.post = data['data'];
      });
    });
  }

  getPost(id: number) {
    return this.http.get(`${this.apiUrl}/post/${id}`, { responseType: 'json', observe: 'body' });
  }

}
