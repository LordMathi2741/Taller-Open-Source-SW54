import {Component, OnInit} from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {Cocktail} from "../../model/cocktail.model";
import {CocktailService} from "../../service/cocktail.service";



@Component({
  selector: 'cocktail-table',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './cocktail-table.component.html',
  styleUrl: './cocktail-table.component.css'
})
export class CocktailTableComponent implements OnInit{
      dataSource = new MatTableDataSource();
      displayedColumns: string[] = ['name', 'instructions', 'date', 'glass'];
      cocktails: Cocktail[] = [];
      cocktailData: Cocktail;
      constructor(private cocktailService: CocktailService) {
          this.cocktailData = {} as Cocktail;
      }

      ngOnInit() {
         this.getCocktails();
      }

      getCocktails(){
        this.cocktailService.getAll().subscribe((data:any) => {
             data.drinks.forEach((drink:any) =>{
                 this.cocktailData = new Cocktail(drink.strDrink, drink.strInstructions, drink.dateModified, drink.strGlass);
                 this.cocktails.push(this.cocktailData);
             });
             this.dataSource.data = this.cocktails;
        });
      }

}
