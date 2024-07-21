import { Component, OnInit } from '@angular/core';
import { Tasinmaz } from '../models/tasinmaz';
import { TasinmazService } from '../services/tasinmaz.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-tasinmaztable',
  templateUrl: './tasinmaztable.component.html',
  styleUrls: ['./tasinmaztable.component.css'],
  providers:[TasinmazService]
})
export class TasinmaztableComponent implements OnInit {

  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';
  selectedTasinmazlar: any[] = []; 

  searchText:any;

  constructor(private tasinmazService:TasinmazService, private router: Router, 
    private alertifyService : AlertifyService ) { }


  navigateToEkleme() {
    this.router.navigate(['/ekleme']);
    console.log('Düğmeye tıklandı!');
  }

  navigateToGuncelleme() {

    if(this.selectedTasinmazlar.length>=2){
      alert('Birden fazla öğe seçemezsiniz. Lütfen sadece bir öğe seçiniz.');
    }
    else{
      this.router.navigate(['/guncelle']);
    console.log('Düğmeye tıklandı!');}


    /*if(this.selectedTasinmazlar.length==0){
      alert('Lütfen en az bir öğe seçiniz.');
    }
    else{
      this.router.navigate(['/guncelle']);
    console.log('Düğmeye tıklandı!');}
      */

    }

  tasinmazlar:Tasinmaz[]

  pageSize: number = 10;
  currentPage: number = 1;

  get visibleTasinmazlar(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.tasinmazlar.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  ngOnInit() {
    this.tasinmazService.getTasinmaz().subscribe(data=>{
      this.tasinmazlar = data})

      }



      onSelectionChange(tasinmaz: any): void {
        const index = this.selectedTasinmazlar.indexOf(tasinmaz);
        if (index === -1) {
          this.selectedTasinmazlar.push(tasinmaz);
        } else {
          this.selectedTasinmazlar.splice(index, 1);
        }
      }


      exportSelectedToExcel(): void {
        if (this.selectedTasinmazlar.length === 0) {
          alert('Lütfen en az bir öğe seçin.');
          return;
        }
      
        const selectedTasinmazData = this.selectedTasinmazlar.map(tasinmaz => {
          return {
            'İl': tasinmaz.il,
            'İlçe': tasinmaz.ilce,
            'Mahalle': tasinmaz.mahalle,
            'Ada': tasinmaz.ada,
            'Parsel': tasinmaz.parsel,
            'Nitelik': tasinmaz.nitelik,
            'Adres': tasinmaz.adres
          };
        });
      
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(selectedTasinmazData);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Seçilen Tasinmazlar');
        XLSX.writeFile(wb, this.fileName);

        this.selectedTasinmazlar = [];
        
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
        //this.alertifyService.error("Taşınmaz silme işlemi başarılı.");
        //this.router.navigate(['/mevcut-tasinmazlar']);
        
      }

      combined(){
        this.navigateToGuncelleme();
        this.sil();

      }

      combined2(){
        this.sil();
        this.alertifyService.error("Taşınmaz silme işlemi başarılı.");
        this.router.navigate(['/mevcut-tasinmazlar']);
      }
   
      
    

    }
      

  
  


