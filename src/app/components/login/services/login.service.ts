import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  GetLogin(username: string, password: string) {
    return this.httpClient.get(environment.api_baseUrl + 'users?username=' + username + '&password=' + password);
  }
}
