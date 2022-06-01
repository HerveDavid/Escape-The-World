import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  showModal = false;

  constructor() { }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
