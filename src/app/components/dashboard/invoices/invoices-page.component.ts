import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService, AuthService, InvoiceService } from '../../../services';
import { Invoice } from '../../../models/invoice.model';

@Component({
  selector: 'app-invoices-page',
  templateUrl: './invoices-page.component.html',
  styleUrls: ['./invoices-page.component.css']
})
export class InvoicesPageComponent implements OnInit {

  invoices: Invoice[];
  showAddInvoice = false;

  constructor(
    private authService: AuthService,
    private invoiceService: InvoiceService,
    private notificationService: NotificationService,
    vcr: ViewContainerRef) {

    this.notificationService.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.notificationService.success("Welcome to the dashboard.");
    return this.loadInvoices();
  }

  /**
   * Load invoices to the view.
   */
  loadInvoices(keywords = "") {
    const loggedUser = this.authService.user();

    const invoices = [...this.invoiceService.getByUser(loggedUser, keywords)];

    this.invoices = invoices.sort(this.sortByName);
  }

  onSearching(keywords) {
    this.loadInvoices(keywords);
  }

  sortByName(a, b) {

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    return (nameA > nameB) ? 1 : ((nameB < nameA) ? -1 : 0);
  }

  onShowAddInvoice() {
    this.showAddInvoice = true;
  }

  onHideAddInvoice() {
    this.showAddInvoice = false;
  }
}
