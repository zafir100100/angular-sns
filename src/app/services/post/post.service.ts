import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  GetAllPost() {
    return this.httpClient.get(this.baseUrl + 'posts');
  }

  CreatePost(post: any) {
    return this.httpClient.post(this.baseUrl + 'posts', post, httpOptions);
  }

  DeletePost(postId: any) {
    return this.httpClient.delete(this.baseUrl + 'posts/'+ postId);
  }
}
