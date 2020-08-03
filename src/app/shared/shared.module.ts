import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
      CommonModule
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule {
  constructor() { 
    
  }
 }
