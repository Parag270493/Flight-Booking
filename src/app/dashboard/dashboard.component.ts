import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

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
  isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private route:Router,private http:HttpClient,private confirmService: NgConfirmService,private toastr:ToastrService){}
 
  ngOnInit():void{
    if (!localStorage.getItem('flight')) {
      this.isUserLoggedIn.next(true);
      this.route.navigate(['/']);
    }
  }
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
    this.confirmService.showConfirm("Are sure you want to book ticket",
    () => {
      this.flightBookedMessage = `Ticket is Booked from ${this.showNameOfDepature} to ${this.showNameOfDestination}`;
      this.toastr.success('Ticket is Booked');
    },
    () => {
      this.route.navigate(['dashboard']);
    })
    
  }
}
