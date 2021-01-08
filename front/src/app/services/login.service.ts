import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from "../models/auth";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url="http://localhost:3001/auth/login";
  constructor(private http:HttpClient) { }

  login(param)
  {
    return this.http.post<Auth>(this.url,param);
  }
}
