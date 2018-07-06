import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/general/not-found/not-found.component';
import { InvoicesPageComponent, AddInvoiceComponent, InvoiceRecordComponent, SearchInvoiceComponent } from './components/dashboard/invoices';

import { NotificationService, StorageService, AuthService, ApiService, UserService, InvoiceService } from './services';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    InvoicesPageComponent,
    AddInvoiceComponent,
    InvoiceRecordComponent,
    SearchInvoiceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [StorageService, ApiService, UserService, AuthService, AuthGuard, InvoiceService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
