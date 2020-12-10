import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  storeStorage(id,email,token)
  {
    localStorage.clear();
    localStorage.setItem('id',id);
    localStorage.setItem('email',email);
    localStorage.setItem('token',token);
  }

  logout()
  {
    localStorage.clear();
    return this.router.navigate(['/']);
  }

  TokenExist()
  {
    let token = localStorage.getItem('token');
    if(!token)
    return false;
    return token;
  }
}
