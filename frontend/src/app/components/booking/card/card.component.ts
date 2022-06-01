import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'booking-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [BookingService],
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
