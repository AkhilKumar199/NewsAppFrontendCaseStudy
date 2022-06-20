import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  News:any;



  constructor(private http:HttpClient) { }



  ngOnInit(): void {

    let response=this.http.get("http://localhost:8082/api/v1/News");

    response.subscribe((data)=>this.News=data)

   

  }
}