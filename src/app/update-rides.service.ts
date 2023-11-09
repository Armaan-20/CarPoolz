import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateRidesService{
  baseURL: string = "http://localhost:4200/assets/data.json"
  _bookingArray: BehaviorSubject<any> = new BehaviorSubject([]);
  _offeredRides: BehaviorSubject<any> = new BehaviorSubject([]);
  _ownBooking: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _hideDetails: BehaviorSubject<boolean> = new BehaviorSubject(true);
  _isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  _username: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) { }

  get getBookingArray(): Observable<any[]>{
    return this._bookingArray.asObservable();
  }

  set setBookingArray(val: any){
    this._bookingArray.next(val);
  }

  get getOfferedRides(): Observable<any[]>{
    return this._offeredRides.asObservable();
  }

  set setOfferedRides(val: any){
    this._offeredRides.next(val);
  }

  get getOwnBooking(): Observable<boolean>{
    return this._ownBooking.asObservable();
  }

  set setOwnBooking(val: any){
    this._ownBooking.next(val);
  }

  get getHideDetails(): Observable<boolean>{
    return this._hideDetails.asObservable();
  }

  set setHideDetails(val: any){
    this._hideDetails.next(val);
  }

  get getIslogin(): Observable<boolean>{
    return this._isLogin.asObservable();
  }

  set setIsLogin(val: any){
    this._isLogin.next(val);
  }

  get getUsername(): Observable<string>{
    return this._username.asObservable()
  }

  set setUserName(val: any){
    this._username.next(val);
  }

  getRideDetails(): Observable<any>{
    return this.http.get(this.baseURL);
  }

}

