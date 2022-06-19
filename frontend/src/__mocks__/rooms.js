import { v4 as uuid } from 'uuid';

export const rooms = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_2.png',
    title: 'Dropbox',
    bookings: 594,
    capacity: 10,
  },
];
