import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.css']
})
export class InvoicesPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    //console.log('localStorage:', window.localStorage);
    //this.router.navigate(['/login'])

    const user = this.userService.getUserByEmail('albanafmeti@gmail.com');
    console.log(user);
  }

}
