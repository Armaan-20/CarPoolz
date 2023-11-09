import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdateRidesService } from '../update-rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})

export class BookRideComponent implements OnInit {
  bookingArray: any = [];
  hideTable: boolean = true;
  borderStyle = '1px solid black';
  borderColor = "#cfe2ff";
  location: any;
  rideDetails: any;
  showRide: boolean = false;
  ownBooking: boolean = false;
  offeredRides: any = [];
  hideDetails: boolean = true;
  username: string = '';
  constructor(private http: HttpClient, private updateRides: UpdateRidesService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateRides.getBookingArray.subscribe((array)=>{
      this.bookingArray = array;
    })
    this.updateRides.getOfferedRides.subscribe((array)=>{
      this.offeredRides = array;
    })
    this.updateRides.getOwnBooking.subscribe((data)=>{
      this.ownBooking = data;
    })
    this.updateRides.getHideDetails.subscribe((data)=>{
      this.hideDetails = data;
    })
    this.updateRides.getUsername.subscribe((data)=>{
      this.username = data;
    })
    this.updateRides.setIsLogin = false;
  }

  onClick(){
    this.showRide = !this.showRide;
    this.location="for all rides"
    this.hideTable = !this.hideTable;
    this.rideDetails = null;
  }

  hideRides(){
    this.hideTable = true;
  }

  offerRide(){
    this.router.navigate(['/offer-ride']);
  }

  onRowSelect(id: any){
    this.showRide = true;
    this.updateRides.setOwnBooking = false;
    this.updateRides.setHideDetails = true;
    this.bookingArray.forEach((rideInfo: any) => {
      if(rideInfo.id == id){
        this.rideDetails = rideInfo;
      }
    });
    this.offeredRides.forEach((entry: any) => {
      if(this.username == entry.username){
        entry.rides.forEach((id: any) => {
          if(this.rideDetails.id == id){
            this.updateRides.setOwnBooking = true;
          }
        });
      }
    });
  }

  toOffice(){
    this.location = "toOffice";
  }

  fromOffice(){
    this.location = "fromOffice";
  }
}
