import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Log } from '../models/log';

@Component({
  selector: 'app-logtable',
  templateUrl: './logtable.component.html',
  styleUrls: ['./logtable.component.css'],
  providers:[LogService],
})
export class LogtableComponent implements OnInit {

  constructor(private logService:LogService, private router: Router) { }

  loglar:Log[]

  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';
  selectedLoglar: any[] = []; 

  pageSize: number = 10;
  currentPage: number = 1;

  
  get visibleLoglar(): any[] {
    if (this.loglar && this.loglar.length > 0) {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.loglar.slice(startIndex, endIndex);
    } else {
      
      return [];
    }
    
  }
  

  changePage(page: number) {
    this.currentPage = page;
  }

  a: number = 8;
  

  log1(){

    const log: Log = {
      id: 61, // Otomatik veritabanı tarafından atanacaktır
      durum: 'Başarılı',
      kullaniciId: 6, // Oturum açmış kullanıcı kimliği
      islemTipi: 'Giriş Başarılı',
      ip: '192.168.1.1', // Kullanıcının IP adresi
      aciklama: 'Kullanıcı log tablosunu açtı.',
      tarihSaat: new Date().toISOString(),
    };
  
    this.logService.addLog(log).subscribe(
      () => {
        console.log('Log otomatik olarak eklendi:', log);
      },
      (error) => {
        console.error('Log eklerken hata oluştu:', error);
      }
    );
    
  }
  

  ngOnInit() {
    this.logService.getLog().subscribe(data => {
      this.loglar = data;
    });

    //this.log1();
    //this.a=this.a+1;
  }

  
  onSelectionChange(log: any): void {
    const index = this.selectedLoglar.indexOf(log);
    if (index === -1) {
      this.selectedLoglar.push(log);
    } else {
      this.selectedLoglar.splice(index, 1);
    }
  }


  exportSelectedToExcel(): void {
    if (this.selectedLoglar.length === 0) {
      alert('Lütfen en az bir öğe seçin.');
      return;
    }
  
    const selectedLogData = this.selectedLoglar.map(log => {
      return {
        'Durum': log.durum,
        'Kullanici Id': log.kullaniciId,
        'Islem Tipi': log.islemTipi,
        'Ip': log.ip,
        'Aciklama': log.aciklama,
        'Tarih Saat': log.tarihSaat,
      };
    });
  
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(selectedLogData);
  
    // Yeni bir Excel iş book oluşturun ve sayfa ekleyin
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Seçilen Loglar');
  
    // Excel dosyasını kaydedin
    XLSX.writeFile(wb, this.fileName);
  }


}
