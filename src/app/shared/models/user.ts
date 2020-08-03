import { Injectable } from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class User { 
  constructor(
    public id: number,
    public lastName: string,
    public firstName: string,
    public email: string,
    public role: string,
    public status: string,
    public password: string
  ) { }
}