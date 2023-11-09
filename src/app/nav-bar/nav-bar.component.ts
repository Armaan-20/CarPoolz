import { Component, Input, OnInit } from '@angular/core';
import { UpdateRidesService } from '../update-rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isLogin: boolean = false;
  constructor(private updateService: UpdateRidesService, private router: Router){}
  ngOnInit(): void {
    this.updateService.getIslogin.subscribe((val)=>{
      this.isLogin = val;
    })
  }
}
