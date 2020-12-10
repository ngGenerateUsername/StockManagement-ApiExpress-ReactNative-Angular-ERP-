import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {

  myform = this.fb.group({
   email:['',[Validators.required,Validators.email]],
   password:['',Validators.required]
  });
  constructor(private fb:FormBuilder,private messageServce:MessageService, private loginService:LoginService,
    private router:Router,private authService:AuthService) { 
   }
   get email(){ return this.myform.get('email') }
   get password(){ return this.myform.get('password') }
   login(){
     let errorList=[
       {
         error:'requireEmail',
         message:'You didn\'t enter email'
       },
       {
         error:'email',
         message:'please enter your email address in format yourname@example.com'
       },
       {
         error:'password',
         message:'you didn\'t enter the password'
       }
     ];
    // console.log(this.email.getError('required'));
    if(this.email.getError('required'))
     return this.onError(errorList[0].message);

     if(this.email.getError('email'))
      return this.onError(errorList[1].message);

      if(this.password.getError('required'))
      return this.onError(errorList[2].message);

      this.loginService.login(this.myform.value).subscribe
      ((data)=>{
          this.authService.storeStorage(data._id,data.email,data.token);
          this.router.navigate(['/home']);
      },(error)=>{
        this.onErrorLogin();
      })

  }

    ngOnInit(): void {
      if(localStorage.getItem('token'))
       this.router.navigate(['/home']);
    }

    onError(message:any)
    {
      this.messageServce.clear();
     return this.messageServce.add({severity:'warn',summary:'error:',detail:message})

    }

    onErrorLogin()
    {
      this.messageServce.clear();
     return this.messageServce.add({key:'key1',severity:'error',detail:'Email & password Incorrect'});

    }


 }
  

 

 


