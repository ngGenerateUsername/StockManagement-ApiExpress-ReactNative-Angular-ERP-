import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private http: HttpClient) { }
 private productUrl="http://localhost:3000/ventes/all";

  getallvente(){
    return this.http.get<any>(this.productUrl);
  }
}
