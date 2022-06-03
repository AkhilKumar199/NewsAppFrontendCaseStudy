import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {
  lifestyles:any;



  constructor(private http:HttpClient) { }



  ngOnInit(): void {

    let response=this.http.get("http://localhost:8080/api/v1/findallLifeStyles");

    response.subscribe((data)=>this.lifestyles=data)

   

  }
}

