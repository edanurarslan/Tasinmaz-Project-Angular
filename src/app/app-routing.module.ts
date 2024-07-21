import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EklemeComponent } from './ekleme/ekleme.component';
import { TasinmaztableComponent } from './tasinmaztable/tasinmaztable.component';
import { Ekleme2Component } from './ekleme2/ekleme2.component';
import { KullanicitableComponent } from './kullanicitable/kullanicitable.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { Guncelle2Component } from './guncelle2/guncelle2.component';
import { LoginekraniComponent } from './loginekrani/loginekrani.component';
import { LogtableComponent } from './logtable/logtable.component';


const routes: Routes = [
  { path: "login", component: LoginekraniComponent},
  //{ path: '', component: LoginekraniComponent },
  { path: "log-islemleri", component: LogtableComponent},
  { path: "ekleme", component: EklemeComponent},
  { path: "ekleme2", component: TasinmaztableComponent},
  { path: "ekleme3", component: Ekleme2Component},
  { path: "ekleme4", component: KullanicitableComponent},
  { path: "guncelle", component: GuncelleComponent},
  { path: "guncelle2", component: Guncelle2Component},
  { path: "kullanici-islemleri", component: KullanicitableComponent }, 
  { path: "kullanici-islemleri2", component: KullanicitableComponent }, 
  { path: "mevcut-tasinmazlar", component: TasinmaztableComponent }, 
  { path: "**", redirectTo:"mevcut-tasinmazlar", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [	
      
   ]
})
export class AppRoutingModule { }
