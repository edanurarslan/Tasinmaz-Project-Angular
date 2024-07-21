import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TasinmaztableComponent } from './tasinmaztable/tasinmaztable.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { KullanicitableComponent } from './kullanicitable/kullanicitable.component';
import { LoginekraniComponent } from './loginekrani/loginekrani.component';
import { EklemeComponent } from './ekleme/ekleme.component';
import { Ekleme2Component } from './ekleme2/ekleme2.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { Guncelle2Component } from './guncelle2/guncelle2.component';
import { LogtableComponent } from './logtable/logtable.component';
import { AlertifyService } from './services/alertify.service';


@NgModule({
  declarations: [														
    AppComponent,
      NavComponent,
      TasinmaztableComponent,
      SearchboxComponent,
      KullanicitableComponent,
      LoginekraniComponent,
      EklemeComponent,
      Ekleme2Component,
      GuncelleComponent,
      Guncelle2Component,
      LogtableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
