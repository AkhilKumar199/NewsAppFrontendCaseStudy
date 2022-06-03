import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwt: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  login(){
    console.log(this.loginForm.value);
    this.http.post('http://localhost:8086/login', this.loginForm.value).subscribe((data)=>{
      this.jwt = data;
      console.log(this.jwt.response);
      
    }, );
    alert("Login Successful")
    this.router.navigate(['/'])
  }
 

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }


}
