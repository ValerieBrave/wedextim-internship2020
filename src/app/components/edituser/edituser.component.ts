import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgForm} from '@angular/forms';
import { passwordValidator } from '../../core/validators/confirmpassword'
import { UserService } from 'src/app/core/services/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  providers: [User]
})
export class EdituserComponent implements OnInit{
  user_toedit: User
  user_new: User
  lastName: string
  firstName: string
  email: string
  role: string
  status: string
  password: string
  password_rep: string
  reactive_editform;
  constructor( private userService: UserService, private appC: AppComponent) {  }
  ngOnInit() {
    
    this.lastName = this.user_toedit.lastName
    this.firstName = this.user_toedit.firstName
    this.email = this.user_toedit.email
    this.role = this.user_toedit.role
    this.status = this.user_toedit.status
    this.password = this.password_rep = this.user_toedit.password
    this.reactive_editform = new FormGroup( 
      { 
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        role: new FormControl(),
        status: new FormControl(),
        password: new FormControl(),
        password_rep: new FormControl()
      },
      {validators: passwordValidator})
    let init_value = {
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      role: this.role,
      status: this.status,
      password: this.password,
      password_rep: this.password_rep
    }
    this.reactive_editform.setValue(init_value)
  }
  
  editform_submit() { 
    this.user_new = this.reactive_editform.value;
    this.user_new.id = this.user_toedit.id
    console.log(this.user_new)
    if (this.user_new.status) this.user_new.status = 'Active'
    else this.user_new.status = 'Unactive'
    this.userService.updateUser(this.user_toedit.id, this.user_new)
  }

  editform_close() { 
    this.appC.show_userslist()
  }
}
