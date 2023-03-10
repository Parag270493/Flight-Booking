import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SingnUp,Login } from '../dataType';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  showLogin = false;
  authError : string = '';
  loginMessage: string = '';
  isLoginError = new EventEmitter<boolean>(false)
  addProductMessage: string ='';
  constructor( private router: Router,private http:HttpClient) { }
  ngOnInit(): void {
  }
  signUp(data: SingnUp): void {
    this.http.post('http://localhost:3000/info',
    data,
      { observe: 'response' }
    ).subscribe((result) => {
      // localStorage.setItem('data', JSON.stringify(result.body))
      this.addProductMessage = "Registration is done successfully"
    });
  }
  
  signIn(data:Login){
    this.authError = '';
    this.userLogin(data);
    this.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = 'Email or Password is incorrect'; 
      }
    })
  }
  userLogin(data: Login) {
    // console.log(data);
    this.http.get(`http://localhost:3000/info?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        // localStorage.setItem('data', JSON.stringify(result.body))
        this.router.navigate(['dashboard'])
      } else {
        this.isLoginError.emit(true);
      }
    })
  }
 
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
  // handleClear(){
  //   this.showLogin = true;
  // }
}
