import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css']
})
export class FlightPageComponent {
  listOfFlightSearch: any;
  showFlightSearch: any;
  showFlightTable:boolean = false;
  constructor(private http: HttpClient,private route:Router) { }

  flightSearch(data: any) {
    console.log(data);
    this.http.get('http://localhost:3000/list').subscribe((result: any) => {
      this.listOfFlightSearch = result.filter((flight: any) => flight.from.toLowerCase() == data.where.toLowerCase() || flight.to.toLowerCase() == data.where.toLowerCase());
      console.log(this.listOfFlightSearch);
      this.showFlightTable = true;
      this.showFlightSearch = this.listOfFlightSearch;
    })
  }

  bookFlight() {
    this.route.navigate(['forms'])
  }
  showFlightListTable(){
  }
}