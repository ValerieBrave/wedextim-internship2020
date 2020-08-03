import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { passwordValidator } from '../../core/validators/confirmpassword'
import { UserService } from 'src/app/core/services/user.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  user_toadd: User
  reactive_addform;
  constructor(private userService: UserService, private appC: AppComponent) { }

  ngOnInit(): void {
    this.reactive_addform = new FormGroup( 
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
  }
  addform_submit() { 
    this.user_toadd = this.reactive_addform.value;
    if (this.user_toadd.status) this.user_toadd.status = 'Active'
    else this.user_toadd.status = 'Unactive'
    this.user_toadd.id = 0;
    this.userService.adduser(this.user_toadd)
  }
  addform_close() { 
    this.appC.show_userslist()
  }
}
