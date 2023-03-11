import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent {
  listOfFlightSearch: any;
  showFlightTable:boolean = false;
  constructor(private http: HttpClient,private route:Router) { }

  flightSearch(data: any) {
    this.http.get('http://localhost:3000/list').subscribe((result: any) => {
      this.listOfFlightSearch = result.filter((flight: any) => flight.from.toLowerCase() == data.where.toLowerCase() || flight.to.toLowerCase() == data.where.toLowerCase());
      this.showFlightTable = true;
    })
  }

  
 
}
