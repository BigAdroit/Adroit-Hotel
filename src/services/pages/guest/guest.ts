import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class Guest {

  baseUrl = environment.apiBaseUrl
    
  constructor(private http : HttpClient) { }

    getGuests(): Observable<any> {
    const url = `${this.baseUrl}/guest/allGuest`
    return this.http.get<any>(url)
}
 
createGuest(data:any):Observable<any> {
  const url = `${this.baseUrl}/guest/create_guest`
  return this.http.post<any>(url, data)
}

getGuest(id: any) {
  const url =`${this.baseUrl}/guest/${id}`
  return this.http.get<any>(url)
}
checkOut(id: any, data: any) {
  const url =`${this.baseUrl}/guest/checkout/${id}`
  return this.http.put<any>(url, data)
}
}
