import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'booking-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  showModal = false;
  room: Room = {
    title: "Hold up à Las Vegas",
    description: "Barquez un célèbre Casino de Las Vegas en équipe, tentez d’accéder au coffre fort de l'établissement en moins de 60 minutes et de vous échapper avant l’arrivée de la police !",
    longDescription: "Barquez un célèbre Casino de Las Vegas en équipe, tentez d’accéder au coffre fort de l'établissement en moins de 60 minutes et de vous échapper avant l’arrivée de la police !",
    duration: 60,
    minPlayers: 3,
    maxPlayers: 5,
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
