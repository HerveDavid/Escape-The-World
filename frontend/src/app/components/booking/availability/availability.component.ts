import { Component, Input, OnInit } from '@angular/core';
import { retry } from 'rxjs';

enum AvailabilityStatus {
  SELECTED,
  AVAILABLE,
  DISAVAILABLE,
}

@Component({
  selector: 'booking-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  @Input() date: string = "";

  status: AvailabilityStatus = AvailabilityStatus.AVAILABLE;
  toggle: boolean = false;
  isActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton() {
    this.toggle = !this.toggle;
  }

  getBackgroundColor(): object {
    switch(this.status) {
      case AvailabilityStatus.AVAILABLE:
        return {'active': this.toggle};
      case AvailabilityStatus.DISAVAILABLE:
        return {'disactive': this.toggle};
      case AvailabilityStatus.SELECTED:
        return {'active': this.toggle};
    }
  }

}
