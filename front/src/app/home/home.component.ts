import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { VenteService } from '../vente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private venteservice:VenteService) { }
  products = [];

  ngOnInit(): void {
    this.venteservice.getallvente().subscribe(
      result => {
        this.products = result;
        console.log(this.products);
      }, error=>{
        console.log(error);
      }
    )
  }

  logout()
  {
    this.authService.logout();
  }
}
