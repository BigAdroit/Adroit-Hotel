import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/authService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  counter = 0
  carouselImages = [
    "carousel-bg1",
    "carousel-bg2",
    "carousel-bg3",
    "carousel-bg4",
    "carousel-bg5",
  ]
  loginForm! : FormGroup
  errorMessage : string = ""
  showError : boolean = false 
  constructor(private router:Router, private AuthService :AuthService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.counter ++

      if(this.counter === this.carouselImages.length -1) {
        this.counter = 0
      }
    }, 3000)
    this.createForm()
  }
  createForm() {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  signIn(data:any) {
    this.AuthService.login(data).subscribe((data)=>{
      if(data.isSuccessful === true) {
        this.router.navigate(['/admin'])
        localStorage.setItem("login_credentails", JSON.stringify(data))
      }else {
        this.showError = true,
        this.errorMessage = "Incorrect login credentails!"
      }
    },
      (error)=> {
        if(error.error.isSuccessful === false ) {
          this.showError = true,
          this.errorMessage = "Incorrect login credentails!"
        }
      }
    )
  }
}
