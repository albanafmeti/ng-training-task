import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/general/not-found/not-found.component';
import { InvoicesPageComponent, AddInvoiceComponent, InvoiceRecordComponent, SearchInvoiceComponent } from './components/invoices';

import { StorageService, AuthService, UserService, InvoiceService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    InvoicesPageComponent,
    AddInvoiceComponent,
    InvoiceRecordComponent,
    SearchInvoiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [StorageService, UserService, AuthService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
