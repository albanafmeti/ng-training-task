import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class NotificationService {

  options = {
    toastLife: 2000
  }

  constructor(private toastr: ToastsManager) { }

  setRootViewContainerRef(vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  success(message, title = null) {
    this.toastr.success(message, title, this.options)
  }

  warning(message, title = null) {
    this.toastr.warning(message, title, this.options)
  }

  error(message, title = null) {
    this.toastr.error(message, title, this.options)
  }
}
