import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'booking-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  onModalToggle() {
    this.toggle.emit();
  }

}
