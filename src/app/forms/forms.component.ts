import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SingnUp,Login } from '../dataType';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  showLogin = false;
  registrationErrorMessage : string = '';
  addProductMessage: string ='';
  constructor( private router: Router,private http:HttpClient,private toastr:ToastrService,private flightService:FlightService) { }
  ngOnInit(): void {
    this.flightService.reloadUser();
  }
  userSignUp(data:SingnUp){
    this.flightService.signUp(data);
  }

  signIn(data:Login){
    this.flightService.userLogin(data);
    this.flightService.isLoginError.subscribe((isError)=>{
      if(isError){
        this.toastr.error("Email or Password is incorrect")
      }
    })
  }
 
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
