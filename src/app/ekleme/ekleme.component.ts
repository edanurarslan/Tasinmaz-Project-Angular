import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasinmazService } from '../services/tasinmaz.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Tasinmaz } from '../models/tasinmaz';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-ekleme',
  templateUrl: './ekleme.component.html',
  styleUrls: ['./ekleme.component.css'],
  providers:[TasinmazService]
})
export class EklemeComponent implements OnInit {

  navigateToEkleme() {
    this.router.navigate(['/ekleme2']);
    console.log('Düğmeye tıklandı!');}

   
    
  constructor(private router: Router, private tasinmazService : TasinmazService, 
    private formbuilder: FormBuilder, private alertifyService:AlertifyService) { }

    tasinmaz:Tasinmaz;
    tasinmazAddForm : FormGroup;

    createTasinmazForm(){
      this.tasinmazAddForm = this.formbuilder.group(
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
      this.tasinmaz = Object.assign({}, this.tasinmazAddForm.value);
      //todo
      this.tasinmaz.kullaniciId = 6;
      this.tasinmazService.add(this.tasinmaz);
      this.alertifyService.success("Taşınmaz ekleme işlemi başarılı.");
      this.navigateToEkleme();
    }
  }

}
