import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasinmazService } from '../services/tasinmaz.service';
import { Tasinmaz } from '../models/tasinmaz';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-guncelle',
  templateUrl: './guncelle.component.html',
  styleUrls: ['./guncelle.component.css']
})
export class GuncelleComponent implements OnInit {

  constructor(private router: Router, private tasinmazService: TasinmazService, 
    private formBuilder: FormBuilder, private alertifyService : AlertifyService) { }

  a = "Taşınmaz Güncelle";
  tasinmaz: Tasinmaz;
  tasinmazAddForm: FormGroup;
  selectedTasinmazlar: any[] = []; 
  

  navigateToGuncelleme() {
      this.router.navigate(['/ekleme2']);
      console.log('Düğmeye tıklandı!');
    
  }

  sil() {
    if (this.selectedTasinmazlar.length === 0) {
      alert('Lütfen en az bir öğe seçin.');
      return;
    }

    
    for (const selectedTasinmaz of this.selectedTasinmazlar) {
      this.tasinmazService.silTasinmaz(selectedTasinmaz.id).subscribe(() => {
      }, (error) => {
        console.error('Silme hatası:', error);
      });
    }

    this.selectedTasinmazlar = [];
  }

  createTasinmazForm(){
    this.tasinmazAddForm = this.formBuilder.group(
      {
        il:["", Validators.required],
        ilce:["", Validators.required],
        mahalle:["", Validators.required],
        ada:["", Validators.required],
        parsel:["", Validators.required],
        nitelik:["", Validators.required],
        adres:["", Validators.required],
      }
    )
  }

ngOnInit() {
  this.createTasinmazForm();
}

add(){
  if(this.tasinmazAddForm.valid){
    this.tasinmaz = Object.assign({}, this.tasinmazAddForm.value)
    //todo
    this.tasinmaz.kullaniciId = 6;
    this.tasinmazService.add(this.tasinmaz)
    this.alertifyService.warning("Taşınmaz güncelleme işlemi başarılı.");
    this.navigateToGuncelleme();
  }
}

alertifyy(){
  this.alertifyService.warning("Taşınmaz güncelleme işlemi başarılı.");
  this.router.navigate(['/mevcut-tasinmazlar']);
}

 
  

 
}
