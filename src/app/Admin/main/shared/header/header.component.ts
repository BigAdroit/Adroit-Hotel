import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from 'src/services/pages/dashboard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string =""
  firstName: string =""
  lastName : string = ""
  role : string = ""
  constructor(private dashboard : Dashboard) { }
  
  ngOnInit(): void {
    const setLocalData =JSON.parse(localStorage.getItem('login_credentails')!)
    const id = setLocalData.details._id

    this.dashboard.dashboard(id).subscribe((data:any)=> {
      console.log(data.payload)
      this.firstName = data.payload.firstname
      this.lastName = data.payload.lastname
      if(data.payload.role === "super-admin") {
        this.role = "Manager"
      }else {
        this.role = data.payload.role
      }

    })
  }

}
