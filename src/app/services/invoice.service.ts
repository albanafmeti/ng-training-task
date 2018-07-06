import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';
import { Invoice } from '../models/invoice.model';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()
export class InvoiceService {

  STORAGE_KEY = 'invoices_list';
  invoices: Invoice[];

  constructor(
    private storage: StorageService,
    private authService: AuthService,
    private userService: UserService) { }

  /**
   * Get all invoices.
   */
  getAll(): Invoice[] {
    this.loadFromStorage();
    return this.invoices;
  }

  /**
   * Get invoices list of the specified user.
   * @param user 
   */
  getByUser(user: User, keywords = ""): Invoice[] {
    this.loadFromStorage();

    let invoices = this.invoices.filter(invoice => {
      return invoice.user_id === user.id;
    });

    if (keywords) {
      invoices = invoices.filter(function (invoice) {
        return invoice.name.toLowerCase().indexOf(keywords.toLowerCase()) !== -1;
      });
    }

    return invoices.map(invoice => Invoice.fromJson(invoice));
  }

  /**
   * Store new invoice.
   * @param invoice 
   */
  store(invoiceData) {
    this.loadFromStorage();

    const loggedUser = this.authService.user();

    if (loggedUser) {
      invoiceData.id = this.nextId();
      invoiceData.user_id = loggedUser.id;
      invoiceData.created_at = new Date(Date.now()).toLocaleString();
    }

    const newInvoice = Invoice.fromJson(invoiceData);
    this.invoices.push(newInvoice);

    this.persistOnStorage();

    return newInvoice;
  }

  /**
   * Delete an invoice from the invoices list.
   * @param invoice 
   */
  delete(invoice: Invoice): void {
    this.loadFromStorage();

    this.invoices = this.invoices.filter(inv => {
      return inv.id !== invoice.id;
    });

    this.persistOnStorage();
  }

  /**
   * Get the next generated ID.
   */
  nextId(): number {
    const invoices = this.getAll();

    if (invoices.length) {
      let last = invoices[invoices.length - 1];
      const last_id = last.id;

      return last_id + 1;;
    }

    return 1;
  }

  /**
   * Load all data from storage.
   */
  private loadFromStorage() {
    this.invoices = [];

    const invoice_list = this.storage.getArray(this.STORAGE_KEY);

    if (invoice_list) {

      for (let item of invoice_list) {
        let invoice = Invoice.fromJson(item);
        invoice.user = this.userService.getById(invoice.user_id);
        this.invoices.push(invoice);
      }
    }
  }

  /**
   * Store all data on local storage.
   */
  private persistOnStorage() {
    this.storage.storeArray(this.STORAGE_KEY, this.invoices);
  }
}
