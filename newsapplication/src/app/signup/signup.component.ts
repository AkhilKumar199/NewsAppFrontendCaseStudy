import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  jwt: any = {};
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  registrationForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  register(){
    console.log(this.registrationForm.value);
    this.http.post('http://localhost:8086/register', this.registrationForm.value).subscribe((data)=>{
      this.jwt = data;
      console.log(this.jwt.response);
      
    }, );
    alert("Successful Registration")
    this.router.navigate(['login'])
    
  }
 

  get username(){
    return this.registrationForm.get('username');
  }

  get password(){
    return this.registrationForm.get('password');
  }

}