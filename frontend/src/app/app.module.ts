import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CardComponent } from './components/booking/card/card.component';
import { ModalComponent } from './components/booking/modal/modal.component';
import { AvailabilityComponent } from './components/booking/availability/availability.component';
import { HeaderComponent } from './components/utils/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CardComponent,
    ModalComponent,
    AvailabilityComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
