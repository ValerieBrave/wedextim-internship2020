import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userslist: User[]
  constructor(private http: HttpClient, private languageService: LanguageService) { }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Error! something went wrong.');
  }
  getAllUsers(): Observable<User[]> { 
    
    const headers = new HttpHeaders().append('Accept-Language' , this.languageService.getStoredLanguage());
    return this.http.get('http://80.94.168.140:5000/api/Lera', {headers: headers}).pipe(
      map((res) => {
        this.userslist = res['userslist'];
        return this.userslist;
      }),
      catchError(this.handleError))
  }
  removeUser(id: number) { 
    let to_remove = this.userslist.filter((u, i, us) => u.id == id)[0];
    const headers = new HttpHeaders().append('Accept-Language' , this.languageService.getStoredLanguage());
    console.log(to_remove)
    let parms = new HttpParams().set("id", id.toString())
    //http://localhost/SalaryProposal/deleteuser/
    return this.http.delete('http://80.94.168.140:5000/api/Lera/' + id.toString(), {headers: headers})     
  }

  updateUser(id: Number, nuser: User) { 
    let to_upd = this.userslist.filter((u, i, us) => u.id == id)[0];

    console.log(to_upd);
    const headers = new HttpHeaders().append('Accept-Language' , this.languageService.getStoredLanguage());
    return this.http.put('http://80.94.168.140:5000/api/Lera', //nuser
      {
        "id": nuser.id,
      "firstName": nuser.firstName,
      "lastname": nuser.lastName,
      "email": nuser.email,
      "role": nuser.role,
      "status": nuser.status,
      "password": nuser.password
      },
      { headers: headers }
      
    ).subscribe((resp: User) => { this.userslist = this.userslist.filter((u, i, us) => u.id != id); this.userslist.push(resp) })
  }

  adduser(user: User) { 
    
    return this.http.post('http://80.94.168.140:5000/api/Lera', user)
      .subscribe((resp: User) => { console.log(resp); this.userslist.push(resp) });
  }
}
