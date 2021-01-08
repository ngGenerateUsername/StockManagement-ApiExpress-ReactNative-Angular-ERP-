import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from './services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private http: HttpClient,private authServ : AuthService) { }
 private productUrl="http://localhost:3001/ventes/all";

  getallvente(){
    return this.http.get<any>(this.productUrl,{
      headers:
      {
        'Authorization': `Bearer ${this.authServ.TokenExist()}`,
      }
    });
  }
}
