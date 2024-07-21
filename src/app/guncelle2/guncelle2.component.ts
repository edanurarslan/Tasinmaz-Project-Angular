import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KullaniciService } from '../services/kullanici.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-guncelle2',
  templateUrl: './guncelle2.component.html',
  styleUrls: ['./guncelle2.component.css']
})
export class Guncelle2Component implements OnInit {

  constructor(private router: Router, private kullaniciService:KullaniciService, 
    private authService:AuthService, private formBuilder:FormBuilder, private alertifyService : AlertifyService) { }

  e="Kullanıcı Güncelle";
  selectedKullanicilar: any[] = []; 
  registerForm:FormGroup;
  registerUser:any={};

  navigateToGuncelleme() {
    this.router.navigate(['/ekleme4']);
    console.log('Düğmeye tıklandı!');}

    sil() {
      if (this.selectedKullanicilar.length === 0) {
        alert('Lütfen en az bir öğe seçin.');
        return;
      }
  
      
      for (const selectedKullanici of this.selectedKullanicilar) {
        this.kullaniciService.silKullanici(selectedKullanici.id).subscribe(() => {
        }, (error) => {
          console.error('Silme hatası:', error);
        });
      }
  
      this.selectedKullanicilar = [];
    }

    createRegisterForm(){
      this.registerForm = this.formBuilder.group(
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
        //this.alertifyService.success("Kullanıcı ekleme işlemi başarılı.");
        this.navigateToGuncelleme();
      }
    }

    alertifyy(){
      this.register();
      this.alertifyService.warning("Kullanıcı güncelleme işlemi başarılı.");
      this.router.navigate(['/kullanici-islemleri']);
    }

    

  ngOnInit() {
    this.createRegisterForm();
  }

}
