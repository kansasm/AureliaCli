import { Category } from 'models/categorymodel';
import { HttpClient } from 'aurelia-http-client';
import { Notes } from "models/notemodel";
import { User } from 'models/usermodel';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { pageLink } from 'pageLink';

@inject (HttpClient, Router)
export class UserCreate  {
  public userName: string;
  public userEmail: string;


  constructor(private httpClient: HttpClient, private router: Router) {
 
    this.userName = null;
    this.userEmail = null;
  }



  public navigateToUsers(){
    this.router.navigateToRoute('users');
  }

}
