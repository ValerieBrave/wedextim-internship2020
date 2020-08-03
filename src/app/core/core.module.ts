import { NgModule, Optional, SkipSelf, Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from '../components/userslist/userslist.component';
import { EdituserComponent } from '../components/edituser/edituser.component';
import { LanguageService } from './services/language.service';

// const appRoutes: Routes =[
//   {
//     path: 'user', component: UserslistComponent
//   },
//   { path: 'edit', component: EdituserComponent }
// ];

@NgModule({
  declarations: [],
  imports: [
  CommonModule
    // RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ ],
  exports: [RouterModule]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule, private languageService: LanguageService) {
    //this.languageService.storeLanguage('en')
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
