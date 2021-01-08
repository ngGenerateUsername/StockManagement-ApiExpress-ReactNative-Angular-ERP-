import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-iset',
  templateUrl: './iset.component.html',
  styleUrls: ['./iset.component.css']
})
export class IsetComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
    logout()
  {
    this.authService.logout();
  }

}
