import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.apiBaseUrl
  constructor(private http : HttpClient) { }
    login(data: any): Observable<any> {
    const url = `${this.baseUrl}/auth/login`
    return this.http.post<any>(url, data)
}
 
}
