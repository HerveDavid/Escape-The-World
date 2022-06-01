import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
