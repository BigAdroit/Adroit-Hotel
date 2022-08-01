import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  baseUrl = environment.apiBaseUrl
  constructor(private http : HttpClient) { }
  getAllrooms() {
    return [
      { id: 1,
        "room" : "Classic Double Room",
        "price" : 299,
        "image" : "room-1.jpg",
    },
    { id: 2,
      "room" : "Family Room",
      "price" : 500,
      "image" : "room-2.jpg",
    },
    { id: 3,
      "room" : "Shorty",
      "price" : 50,
      "image" : "room-3.jpg",
    },
    {  id: 4,
      "room" : "Suite",
      "price" : 99,
      "image" : "room-1.jpg",
    },
    {  id: 5,
      "room" : "Honeymoon",
      "price" : 199,
      "image" : "room-2.jpg",
    },
    {  id: 6,
      "room" : "Family Suite",
      "price" : 399,
      "image" : "room-3.jpg",
    }
    ]
  }
  getFood(){
    return [
      {
        "name" : "Rice and Flower",
        price : 204,
        "image" : "menu-1.jpg"
      },

      {
        "name" : "Iyan Ati Eforiro",
        price : 150,
        "image" : "menu-2.jpg"
      },
      {
        "name" : "Ofada Rice",
        price : 400,
        "image" : "menu-3.jpg"
      },
      {
        "name" : "Commot body joor",
        price : 50,
        "image" : "menu-4.jpg"
      },
      {
        "name" : "Gbeyewo Korimo",
        price : 122,
        "image" : "menu-5.jpg"
      },
      {
        "name" : "Ijekuje Gbeyewo",
        price : 300,
        "image" : "menu-6.jpg"
      },
    ]
  }

  getDrinks() {
    return [
      {
        "name" : "Skuchies",
        price : 47,
        "image" : "menu-8.jpg"
      },
      {
        "name" : "Orijin Bitters",
         price : 39,
       "image" : "menu-9.jpg"
      },

      {
        "name" : "Fura",
         price : 39,
       "image" : "menu-8.jpg"
      },
      ]
  }

  getAroom(id:any): Observable<any> {
    const url = `${this.baseUrl}/room/getAroom/${id}`
    return this.http.get<any>(url)
  }

  getAllRooms(): Observable<any> {
    const url = `${this.baseUrl}/room/getAllRooms`
    return this.http.get<any>(url)
  }
  createRoom(data:any){
    const url = `${this.baseUrl}/room/create_room`
    return this.http.post<any>(url, data)
  }
}
