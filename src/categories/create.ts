import { Category } from 'models/categoryModel';
import { HttpClient } from 'aurelia-http-client';
import { Notes } from "models/notemodel";
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { pageLink } from 'pageLink';
import { User } from 'models/usermodel';

@inject (HttpClient, Router)
export class CatCreate  {
  public categoryName: string;


  constructor(private httpClient: HttpClient, private router: Router) {

    this.categoryName = null;
  }


  public navigateToCategories(){
    this.router.navigateToRoute('categories');
  }

}