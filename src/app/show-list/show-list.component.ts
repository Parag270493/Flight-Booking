import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  @Input() showFlightSearch: any
  showTable: boolean = false;

  constructor(private router: Router) { }

  showLoginForm() {
    this.router.navigate(['forms']);
  }
}
