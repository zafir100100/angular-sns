import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  GetLogin(username: string, password: string) {
    return this.httpClient.get(this.baseUrl + 'users?username=' + username + '&password=' + password);
  }

  CreateLogin(username: string, password: string) {
    let requestBody = {
      username: username,
      password: password,
      friends: []
    };
    return this.httpClient.post(this.baseUrl + 'users', requestBody, httpOptions);
  }

  GetAllUser() {
    return this.httpClient.get(this.baseUrl + 'users');
  }

  AddUserAsFriend(user: any) {
    return this.httpClient.patch(this.baseUrl + 'users/' + user?.id, user, httpOptions);
  }

  GetUser(id: number) {
    return this.httpClient.get(this.baseUrl + 'users/' + id);
  }
}
