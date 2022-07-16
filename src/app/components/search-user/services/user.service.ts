import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  GetAllUser() {
    return this.httpClient.get(this.baseUrl + 'users');
  }

  AddUserAsFriend(user: any) {
    return this.httpClient.patch(this.baseUrl + 'users', user, httpOptions);
  }
}
