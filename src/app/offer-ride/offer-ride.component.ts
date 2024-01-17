import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateRidesService } from '../update-rides.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit{
  offerRideForm!: FormGroup;
  bookingArray: any = [];
  showMessage: boolean = false;
  offeredRides: any = [];
  username: any;
  constructor(private formBuilder: FormBuilder, private updateRideService: UpdateRidesService, private router: Router){}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.getData();
    this.offerRideForm = this.formBuilder.group({
      name: ['', Validators.required],
      start: ['', Validators.required],
      destination: ['', Validators.required],
      car: ['', Validators.required],
      seats: ['', [Validators.required, this.checkSeatsVal]]
    })
    this.updateRideService.getBookingArray?.subscribe((array:any[])=>{
      this.bookingArray = array;
    })
    this.offeredRides.getOfferedRides?.subscribe((array:any[])=>{
      this.offeredRides = array;
    })
    this.updateRideService.getUsername.subscribe((name: any)=>{
      this.username = name;
    })
  }

  goBack(){
    this.router.navigate(['/book-ride']);
  }

  getData(){
    this.updateRideService.setBookingArray = [
      {
          "id": 1,
          "offerId": 1,
          "name": "order_1",
          "car": "Innova Crysta",
          "seatsLeft": 3,
          "pickUp": "Vanrose Junction",
          "destination": "Office"
      },
      {
          "id": 2,
          "offerId": 2,
          "name": "order_2",
          "car": "Innova Crysta",
          "seatsLeft": 2,
          "pickUp": "PTP",
          "destination": "Office"
      },
      {
          "id": 3,
          "offerId": 3,
          "name": "order_3",
          "car": "Toyota Etios",
          "seatsLeft": 7,
          "pickUp": "Office",
          "destination": "East-Fort"
      },
      {
          "id": 4,
          "offerId": 4,
          "name": "order_4",
          "car": "WagonR",
          "seatsLeft": 5,
          "pickUp": "Office",
          "destination": "Central Mall"
      }
  ];
  }

  addRideDetails(){
    if(this.offerRideForm.valid){
      let ride = {
        id: this.bookingArray.length+1,
        offerId: this.bookingArray.length+1,
        name: this.offerRideForm.controls['name'].value,
        pickUp: this.offerRideForm.controls['start'].value,
        destination: this.offerRideForm.controls['destination'].value,
        car: this.offerRideForm.controls['car'].value,
        seatsLeft: this.offerRideForm.controls['seats'].value
      }
      this.bookingArray.push(ride);
      let flag = false;
      this.offeredRides.forEach((entry: any) => {
        if(entry.username == this.username){
          entry.rides.push(ride.offerId);
          flag = true;
        }
      });
      if(!flag){
        this.offeredRides.push({
          username: this.username,
          rides: [ride.offerId]
        })
      }
      console.log(this.offeredRides);
      this.updateRideService.setOfferedRides = this.offeredRides;
      this.updateRideService.setBookingArray = this.bookingArray;
      this.showMessage = true;
    }
    else{
      console.log("Ride Details are Invalid!")
    }
  }

  checkSeatsVal(val: FormControl): any{
    if(val.value<0 || val.value>8){
      return {
        InvalidSeats:{
          message: "Invalid Seat Quantity!"
        }
      }
    }
  }
}
