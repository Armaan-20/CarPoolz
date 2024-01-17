import { Component, OnInit } from '@angular/core';
import { UpdateRidesService } from './update-rides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CarPoolz';

  constructor(private updateRides: UpdateRidesService){}

  ngOnInit(): void {
    this.updateRides.setBookingArray = [
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

  // getData(){
  //   this.updateRides.getRideDetails().subscribe((data: any)=> {
  //     this.updateRides.setBookingArray = data;
  //   });
  // }
}

