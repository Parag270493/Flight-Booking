import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listOfFlight:any;
  showFlightList:boolean = false;
  flightBookedMessage : string = '';
  showNameOfDepature:any;
  showNameOfDestination:any;
  constructor(private route:Router,private http:HttpClient){}
  ticketBook(data:any){
    this.showNameOfDepature = data.from
    this.showNameOfDestination = data.to
    this.http.get('http://localhost:3000/list').subscribe((result:any)=>{
      let selectedFlightsDetails = result.filter((flight:any)=>flight.from.toLowerCase() == data.from.toLowerCase() && flight.to.toLowerCase()== data.to.toLowerCase())
      this.showFlightList  = true;
      this.listOfFlight = selectedFlightsDetails;
    })
    this.bookNow(data);
  }
  bookNow(data:any){
    this.http.post('http://localhost:3000/dashboard',
    data,
      { observe: 'response' }
    ).subscribe((result:any) => {
    });
  }
  bookFlight(){
    this.flightBookedMessage = `Flight is Booked from ${this.showNameOfDepature} to ${this.showNameOfDestination}`
  }
}
