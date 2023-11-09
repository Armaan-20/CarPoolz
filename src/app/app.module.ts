import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowToFromPipe } from './show-to-from.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookRideComponent,
    ShowToFromPipe,
    RideDetailsComponent,
    NavBarComponent,
    OfferRideComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
