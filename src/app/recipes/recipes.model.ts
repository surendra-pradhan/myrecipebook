import { ingrediant } from '../shared/ingrediant.model';

export class Recipes{
constructor(public name: string,
      public descpription: string,
      public image: string, 
      public ingrediants: ingrediant[] ){}
}