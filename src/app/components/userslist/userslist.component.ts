import { Component, OnInit } from '@angular/core';
import { User } from "src/app/shared/models/user";
import { UserService } from 'src/app/core/services/user.service';
import { Observable, of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from 'src/app/core/services/language.service';



@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users: User[]
  constructor(private userService: UserService, private appcomp: AppComponent) {
    
   }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (res: User[]) => { this.users = res}
    );
  }
  deleteUser(id: number) { 
    this.userService.removeUser(id).subscribe(
      resp => { this.userService.getAllUsers().forEach(u => this.users = u)}
    )
  }
  show_edit(user: User) {
    this.appcomp.show_editform(user);
  }
  show_add() { 
    this.appcomp.show_addform();
  }
}
