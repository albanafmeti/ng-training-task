import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/general/not-found/not-found.component';
import { InvoicesPageComponent, AddInvoiceComponent, InvoiceRecordComponent, SearchInvoiceComponent } from './components/invoices';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
