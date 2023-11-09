import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateRidesService } from '../update-rides.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  registerForm!: FormGroup;
  usersArray : any = [];
  isValid: boolean = false;
  hideErrorMessage: boolean = true;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private updateService: UpdateRidesService){}
  ngOnInit(): void {
    this.getUsers();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.updateService.setIsLogin = true;
  }

  getUsers(){
    this.http.get('http://localhost:4200/assets/user.json')
    .subscribe((data) => {
      this.usersArray = data;
      console.log(this.usersArray)
    })
  }

  checkValidUser(){
    this.usersArray.forEach((login: any) => {
      if (this.registerForm.controls['username'].value == login.username){
        if(this.registerForm.controls['password'].value == login.password){
          this.updateService.setUserName = this.registerForm.controls['username'].value;
          this.isValid = true;
          this.router.navigate(['/book-ride']);
        }
      }
    });
    if(!this.isValid){
      this.hideErrorMessage = false;
    }

  }
}
