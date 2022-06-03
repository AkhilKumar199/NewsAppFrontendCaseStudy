import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contact:any;



  constructor(private http:HttpClient) { }



  ngOnInit(): void {

    let response=this.http.get("http://localhost:8080/api/v1/findAllContacts");

    response.subscribe((data)=>this.contact=data)

   

  }
}
