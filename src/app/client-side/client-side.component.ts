import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.scss']
})
export class ClientSideComponent implements OnInit {

  constructor(private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.url)
    this.activatedRoute.url.subscribe((data)=> {
      console.log(data)
    })
    this.activatedRoute.url.subscribe((url)=> console.log(url[0].path))
  }

}
