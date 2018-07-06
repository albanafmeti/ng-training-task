import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-invoice',
  templateUrl: './search-invoice.component.html',
  styleUrls: ['./search-invoice.component.css']
})
export class SearchInvoiceComponent implements OnInit {

  keywords: string;

  @Output() onSearch: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onSearching() {
    this.onSearch.emit(this.keywords);
  }

}
