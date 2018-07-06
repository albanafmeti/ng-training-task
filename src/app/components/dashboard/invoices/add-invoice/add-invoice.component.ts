import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InvoiceService, NotificationService } from '../../../../services';
import { Invoice } from '../../../../models/invoice.model';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  @Output() onHide: EventEmitter<String> = new EventEmitter<String>();
  @Output() onAdd: EventEmitter<Invoice> = new EventEmitter<Invoice>();

  name: string;

  constructor(private invoiceService: InvoiceService, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  onAddClick() {
    const invoice = this.invoiceService.store({
      name: this.name
    });

    if (invoice) {
      this.onAdd.emit(invoice);
      this.name = "";

      this.notificationService.success("Invoice has been added successfully.", "Success!");
    } else {
      this.notificationService.error("Invoice could not be added.", "Error!");
    }
  }

  onHideAddInvoice() {
    this.onHide.emit();
  }
}
