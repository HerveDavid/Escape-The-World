import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'booking-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() room: any;
  @Output() toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  onModalToggle() {
    this.toggle.emit();
  }

}
