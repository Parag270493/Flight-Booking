import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  userName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('flight') && val.url === "/dashboard") {
          console.log("in seller area");
          this.menuType = 'flight';
          let localData = localStorage.getItem('flight');
          if (localData) {
            let flightData = localData;
            let bookedUserName = flightData && JSON.parse(flightData);
            this.userName = bookedUserName[0].name;
          }
        } else {
          console.log("outside seller area")
          this.menuType = 'default';
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('flight');
    this.router.navigate(['/'])
  }
}
