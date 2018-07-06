import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../../../models/invoice.model';
import { InvoiceService } from '../../../../services';

@Component({
  selector: '[app-invoice-record]',
  templateUrl: './invoice-record.component.html',
  styleUrls: ['./invoice-record.component.css']
})
export class InvoiceRecordComponent implements OnInit {

  @Input() invoice: Invoice;
  @Output() onDelete: EventEmitter<String> = new EventEmitter<String>();
  @Output() onDuplicate: EventEmitter<String> = new EventEmitter<String>();

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
  }

  onDeleteClick() {

    this.invoiceService.delete(this.invoice);
    this.onDelete.emit();
  }

  onDuplicateClick() {

    this.invoiceService.store({
      name: this.invoice.name + ' [Duplicate]'
    });
    this.onDuplicate.emit();
  }

}
