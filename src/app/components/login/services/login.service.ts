import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = environment.api_baseUrl;

  constructor(private httpClient: HttpClient) { }

  GetLogin(username: string, password: string) {
    return this.httpClient.get(this.baseUrl + 'users?username=' + username + '&password=' + password);
  }
}
