import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  CreateLogin(username: string, password: string) {
    let requestBody = {
      username: username,
      password: password
    };
    return this.httpClient.post(this.baseUrl + 'users', requestBody);
  }
}
