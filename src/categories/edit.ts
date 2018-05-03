import { Category } from 'models/categoryModel';
import { User } from 'models/usermodel';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { pageLink } from 'pageLink';
import { HttpClient } from 'aurelia-http-client';
import { Notes } from "models/notemodel";

@inject (HttpClient, Router)
export class CatEdit  {
  public categoryName: string;
  public categoryId: number;
  public currentCategory: Category;


  constructor(private httpClient: HttpClient, private router: Router) {
   
    this.categoryName = null;
  }


  public navigateToCategories(){
    this.router.navigateToRoute('categories');
  }

}