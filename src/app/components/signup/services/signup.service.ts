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
export class SignupService {

  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  CreateLogin(username: string, password: string) {
    let requestBody = {
      username: username,
      password: password,
      friends: []
    };
    return this.httpClient.post(this.baseUrl + 'users', requestBody, httpOptions);
  }
}
