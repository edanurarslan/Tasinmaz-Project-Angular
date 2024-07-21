import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from '../services/kullanici.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Kullanici } from '../models/kullanici';
import { AuthService } from '../services/auth.service';
import { getgid } from 'process';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-ekleme2',
  templateUrl: './ekleme2.component.html',
  styleUrls: ['./ekleme2.component.css'],
  providers:[KullaniciService]
})
export class Ekleme2Component implements OnInit {

  constructor(private router: Router,  private authService : AuthService, 
    private formbuilder: FormBuilder, private alertifyService:AlertifyService ) { }

  navigateToEkleme() {
    this.router.navigate(['/ekleme4']);
    console.log('Düğmeye tıklandı!');
  }

  registerForm:FormGroup;
  registerUser:any={};

  ngOnInit() {
    this.createRegisterForm()
  }

  createRegisterForm(){
    this.registerForm = this.formbuilder.group(
      {
        kullaniciad:["", Validators.required],
        kullanicisoyad:["", Validators.required],
        email:["", Validators.required],
        rol:["", Validators.required],
        adres:["", Validators.required],
        password:["", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        confirmPassword:["", Validators.required],
      },
      {validators:this.passwordMatchValidator}
    )
  }

  passwordMatchValidator(g:FormGroup){
      return g.get('password').value === g.get('confirmPassword').value?null:{misMatch:true};
  }

  register(){
    if(this.registerForm.valid)
    {
      this.registerUser = Object.assign({}, this.registerForm.value)
      this.authService.register(this.registerUser)
      this.alertifyService.success("Yeni kullanıcı ekleme işlemi başarılı.");
      this.navigateToEkleme();
    }
  }
  
}
