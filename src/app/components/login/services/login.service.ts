import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  GetLogin(username: string, password: string) {
    return this.httpClient.get(this.baseUrl + 'users?username=' + username + '&password=' + password);
  }
}
