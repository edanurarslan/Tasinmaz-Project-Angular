import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Kullanici } from '../models/kullanici';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginekrani',
  templateUrl: './loginekrani.component.html',
  styleUrls: ['./loginekrani.component.css']
})
export class LoginekraniComponent implements OnInit {

  kullanici:any={};

  constructor(private authService:AuthService, private router : Router) { }

  login(){
    this.authService.login(this.kullanici);
  }

  isAuthenticated(){
    return this.authService.loggedin();
   }

   navigateToEkleme() {
    this.router.navigate(['/ekleme2']);
    console.log('Düğmeye tıklandı!');}

 

  ngOnInit() {
  }

}
