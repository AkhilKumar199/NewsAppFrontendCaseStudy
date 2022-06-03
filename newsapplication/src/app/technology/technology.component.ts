import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technology:any;



  constructor(private http:HttpClient) { }



  ngOnInit(): void {

    let response=this.http.get("http://localhost:8080/api/v1/findalltechnology");

    response.subscribe((data)=>this.technology=data)

   

  }
}
