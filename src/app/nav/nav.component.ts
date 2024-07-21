import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Kullanici } from '../models/kullanici';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService,private router : Router) { }

  kullanici:any={}
 
  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
    console.log('Düğmeye tıklandı!');
  }

  navigateToTasinmazlar() {
    this.router.navigate(['/mevcut-tasinmazlar']);
    console.log('Düğmeye tıklandı!');
  }

  navigateToKullanicilar() {
    this.router.navigate(['/kullanici-islemleri']);
    console.log('Düğmeye tıklandı!');
  }

  navigateToLoglar() {
    this.router.navigate(['/log-islemleri']);
    console.log('Düğmeye tıklandı!');
  }

  logout(){
    this.authService.logout(); 
    this.navigateToLogin();
  }

  
}
