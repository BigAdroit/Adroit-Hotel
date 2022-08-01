import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter = 0
  toggleHamburger : boolean = false
  carouselImages = [
    "carousel-bg1",
    "carousel-bg2",
    "carousel-bg3",
    "carousel-bg4",
    "carousel-bg5",
  ]
  constructor( private router : Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.counter ++

      if(this.counter === this.carouselImages.length -1) {
        this.counter = 0
      }
    }, 3000)
  }

}
