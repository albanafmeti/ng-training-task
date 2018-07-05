import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';
import { Invoice } from '../models/invoice.model';
import { UserService } from './user.service';

@Injectable()
export class InvoiceService {

  STORAGE_KEY = 'invoices_list';
  invoices: Invoice[];

  constructor(private storage: StorageService, private userService: UserService) { }

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
  getByUser(user: User): Invoice[] {
    this.loadFromStorage();

    let invoices = this.invoices.filter(invoice => {
      return invoice.user_id === user.id;
    });

    return invoices.map(invoice => Invoice.fromJson(invoice));
  }

  /**
   * Store new invoice.
   * @param invoice 
   */
  store(invoice: Invoice) {
    this.loadFromStorage();

    this.invoices.push(invoice);

    this.persistOnStorage();
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
   * Load all data from storage.
   */
  private loadFromStorage() {
    this.invoices = [];

    const invoice_list = this.storage.getArray(this.STORAGE_KEY);

    for (let item of invoice_list) {
      let invoice = Invoice.fromJson(item);
      invoice.user = this.userService.getById(invoice.user_id);
      this.invoices.push(invoice);
    }
  }

  /**
   * Store all data on local storage.
   */
  private persistOnStorage() {
    this.storage.storeArray(this.STORAGE_KEY, this.invoices);
  }
}
