import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from 'src/app/core/core.module'
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserService } from './core/services/user.service';
import { User } from './shared/models/user';

import { AdduserComponent } from './components/adduser/adduser.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CalculateComponent } from './components/calculate/calculate.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    EdituserComponent,
    AdduserComponent,
    CalculateComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([]),
    //TranslateModule.forChild(),
    TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient],
       },
      defaultLanguage: 'en'
     })
  ],
  
  providers: [UserService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
