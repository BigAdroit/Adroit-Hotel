import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Bookings {

  baseUrl = environment.apiBaseUrl
    
  constructor(private http : HttpClient) { }
  createBooking(data: any) : Observable<any>{
    const url = `${this.baseUrl}/bookings/create_bookings`
    return this.http.post<any>(url, data)
  }
 
  getAllBooking() : Observable<any>{
    const url = `${this.baseUrl}/bookings/getAllBookings`
    return this.http.get<any>(url)
  }

  getOneBooking(id:any):Observable<any>{
    const url =`${this.baseUrl}/bookings/${id}`
    return this.http.get<any>(url)
  }

  acceptBookings(id:any, data: any):Observable<any>{
    const url =`${this.baseUrl}/bookings/accept/${id}`
    return this.http.put<any>(url, data)
  }
}
