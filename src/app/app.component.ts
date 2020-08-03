import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { UserslistComponent } from './components/userslist/userslist.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { User } from './shared/models/user';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service'
import { CalculateComponent } from './components/calculate/calculate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('views', {read: ViewContainerRef}) views: ViewContainerRef;
  @ViewChild('workingbody') working_body : TemplateRef<any>
  title = 'SalaryProposal';
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              public languageService: LanguageService) {
    
  }
  
  switch_lang(lang: string) { 
    this.languageService.changeLanguage(lang);
  }

  show_userslist() { 
    this.views.clear();
    let userlistComponent = this.componentFactoryResolver.resolveComponentFactory(UserslistComponent);
    let userlistComponentRef = userlistComponent.create(this.injector);
    this.views.insert(userlistComponentRef.hostView, 0);
  }
  show_editform(user: User) { 
    this.views.clear();
    let editformComponent = this.componentFactoryResolver.resolveComponentFactory(EdituserComponent);
    let editformComponentRef = editformComponent.create(this.injector);
    editformComponentRef.instance.user_toedit = user;
    console.log(editformComponentRef.instance.user_toedit)
    this.views.insert(editformComponentRef.hostView, 0);
  }
  show_addform() { 
    this.views.clear();
    let addformComponent = this.componentFactoryResolver.resolveComponentFactory(AdduserComponent);
    let addformComponentRef = addformComponent.create(this.injector);
    this.views.insert(addformComponentRef.hostView, 0);
  }
  show_calculate() { 
    this.views.clear();
    let calcComponent = this.componentFactoryResolver.resolveComponentFactory(CalculateComponent);
    let calcComponentRef = calcComponent.create(this.injector);
    this.views.insert(calcComponentRef.hostView, 0);
  }
}
