import { Component, ElementRef, Input, ViewChild, Renderer2, Output, EventEmitter, OnInit} from '@angular/core';
import { UpdateRidesService } from '../update-rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit{
  borderStyle = '1px solid black';
  borderColor = "#cfe2ff";
  hideMessage: boolean = true;
  bookingArray: any = [];
  book: boolean = false;
  clicked: boolean = false;
  ownBooking: boolean = false;
  disable = false;
  @Input('rideDetails') rideDetails: any;
  @Input('showRide') showRide!: boolean;
  @ViewChild('dynamicButton') button!: ElementRef;
  @Output() hideAllRides = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private updateService: UpdateRidesService, private router: Router){}

  ngOnInit(): void {
    this.updateService.getBookingArray.subscribe((data)=>{
      this.bookingArray = data;
    })
    this.updateService.getOwnBooking.subscribe((data)=>{
      this.ownBooking = data;
    })
    this.updateService.getHideDetails.subscribe((data)=>{
      this.book = data;
      if(!this.book){
        this.clicked = true;
      }
      else{
        this.clicked = false;
        this.disable = false;
        this.hideMessage = true;
      }
    })
    this.updateService.setIsLogin = false;
  }

  renderBooking(){
    if(this.book){
      this.hideMessage = false;
      this.button.nativeElement.innerHTML = "Cancel Booked Ride";
      this.renderer.setStyle(this.button.nativeElement, 'font-weight', 'bold');
      this.renderer.setStyle(this.button.nativeElement,'background-color', '#dc3545');
      this.renderer.setStyle(this.button.nativeElement,'color', '#fff');
      this.rideDetails = {...this.rideDetails, seatsLeft: this.rideDetails.seatsLeft-1}
      this.hideAllRides.emit(true);
      this.bookingArray.forEach((booking: any) => {
        if(this.rideDetails.id == booking.id){
          booking.seatsLeft = this.rideDetails.seatsLeft;
        }
      });
    }
    else{
      this.hideMessage = true;
      this.disable = true;
      this.rideDetails = {...this.rideDetails, seatsLeft: this.rideDetails.seatsLeft+1}
      this.bookingArray.forEach((booking: any) => {
        if(this.rideDetails.id == booking.id){
          booking.seatsLeft = this.rideDetails.seatsLeft;
        }
      });
      this.router.navigate(['/book-ride'])
    }
    this.updateService.setHideDetails = false;
    this.updateService.setBookingArray = this.bookingArray;
  }
}
