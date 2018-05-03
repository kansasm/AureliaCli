import { Category } from 'models/categorymodel';
import { HttpClient } from 'aurelia-http-client';
import { Notes } from "models/notemodel";
import { User } from 'models/usermodel';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { pageLink } from 'pageLink';

@inject (HttpClient, Router)
export class NoteCreate  {
  public noteNote: string;
  public categoryList: Array<Category>;
  public userList: Array<User>;
  public emptyNotes: string;
  public noteTitle: string;

  

  constructor(private httpClient: HttpClient, private router: Router) {
    
    this.categoryList =  new Array<Category>();
    this.userList = new Array<User>();
 
  }

  
  }


