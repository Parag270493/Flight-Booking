import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  @Input() showFlightSearch: any
  showTable: boolean = false;

  constructor(private router: Router,private confirmService: NgConfirmService) { }

  showLoginForm() {
    this.confirmService.showConfirm("Before Booking, Please Singup",
      () => {
        this.router.navigate(['forms'])
      },
      () => {
        this.router.navigate(['/'])
      })
  }
}
