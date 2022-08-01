import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  baseUrl = environment.apiBaseUrl

  constructor(private http : HttpClient) { }
    dashboard(id: string): Observable<any> {
    const url = `${this.baseUrl}/admin/dashboard/${id}`
    return this.http.get<any>(url)
}
 
}
