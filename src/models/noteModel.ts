import { Category } from 'models/categoryModel'
import { User } from 'models/userModel';

export class Notes {
  public id: number;
  public note: string;
  public title: string;
  public createdOn: Date;
  public isDeleted: boolean;
  public user: User;
  public category: Category;
}