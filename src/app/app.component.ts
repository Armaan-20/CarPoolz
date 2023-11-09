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
    this.getData();
  }

  getData(){
    this.updateRides.getRideDetails().subscribe((data: any)=> {
      this.updateRides.setBookingArray = data;
    });
  }
}

