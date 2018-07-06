import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService, AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ;
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
    vcr: ViewContainerRef) {

    this.notificationService.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.value.email) {
      return this.notificationService.error("Email is required.");
    }
    if (!form.value.password) {
      return this.notificationService.error("Password is required.");
    }

    const authenticated = this.authService.authenticate(form.value.email, form.value.password);

    if (authenticated) {
      return this.router.navigate(['/invoices']);
    } else {
      return this.notificationService.error("Incorrect credentials.");
    }
  }
}
