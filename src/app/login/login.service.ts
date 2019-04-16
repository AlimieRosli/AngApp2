import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  url = 'http://sahoca.oo/oauth/token';

  constructor(private http: HttpClient) { }

  login(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
