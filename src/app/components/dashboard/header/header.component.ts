import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authUser: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authUser = this.authService.user();
  }

  onLogoutClick() {
    this.authService.clear();
    this.router.navigate(['/login']);
  }
}
