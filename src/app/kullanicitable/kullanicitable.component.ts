import { Component, OnInit } from '@angular/core';
import { Kullanici } from '../models/kullanici';
import { KullaniciService } from '../services/kullanici.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Log } from '../models/log';
import { LogService } from '../services/log.service';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-kullanicitable',
  templateUrl: './kullanicitable.component.html',
  styleUrls: ['./kullanicitable.component.css'],
  providers:[KullaniciService]
})
export class KullanicitableComponent implements OnInit {

  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';
  selectedKullanicilar: any[] = []; 

  constructor(private kullaniciService:KullaniciService, private router: Router,
     private logService: LogService, private alertifyService: AlertifyService) { }

  navigateToEkleme() {
    this.router.navigate(['/ekleme3']);
    console.log('Düğmeye tıklandı!');
  }

  navigateToGuncelleme() {
    this.router.navigate(['/guncelle2']);
    console.log('Düğmeye tıklandı!');}

    navigateToKullanici() {
      this.router.navigate(['/kullanici-islemleri']);
      console.log('Düğmeye tıklandı!');}

    

  kullanicilar:Kullanici[]

  pageSize: number = 10;
  currentPage: number = 1;

  get visibleKullanicilar(): any[] {
    if (this.kullanicilar && this.kullanicilar.length > 0) {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.kullanicilar.slice(startIndex, endIndex);
    } else {
      
      return [];
    }
    
  }
  
  
  changePage(page: number) {
    this.currentPage = page;
  }

  ngOnInit() {
    this.kullaniciService.getKullanici().subscribe(data => {
      this.kullanicilar = data;
    });
  }

  onSelectionChange(kullanici: any): void {
    const index = this.selectedKullanicilar.indexOf(kullanici);
    if (index === -1) {
      this.selectedKullanicilar.push(kullanici);
    } else {
      this.selectedKullanicilar.splice(index, 1);
    }
  }


  exportSelectedToExcel(): void {
    if (this.selectedKullanicilar.length === 0) {
      alert('Lütfen en az bir öğe seçin.');
      return;
    }
  
    const selectedKullaniciData = this.selectedKullanicilar.map(kullanici => {
      return {
        'Ad': kullanici.kullaniciad,
        'Soyad': kullanici.kullanicisoyad,
        'Mahalle': kullanici.email,
        'Rol': kullanici.rol,
        'Adres': kullanici.adres,
      };
    });
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(selectedKullaniciData);
  
    // Yeni bir Excel iş book oluşturun ve sayfa ekleyin
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Seçilen Kullanıcılar');
  
    // Excel dosyasını kaydedin
    XLSX.writeFile(wb, this.fileName);
  }


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
    //this.alertifyService.error("Kullanıcı silme işlemi başarılı.");
    //this.navigateToKullanici();
  }


  combined(){
    this.navigateToGuncelleme();
    this.sil();
  }

  combined2(){
    this.sil();
    this.alertifyService.error("Taşınmaz silme işlemi başarılı.");
    this.router.navigate(['/kullanici-islemleri']);
  }

}  
      

