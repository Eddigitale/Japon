import { Component, OnInit } from "@angular/core";
import { Cooking } from "src/app/cuisine/cooking";
import { CookingService } from "src/app/cuisine/cuisine.service";

@Component({
  selector: "app-cuisine",
  templateUrl: "./cuisine.component.html",
  styleUrls: ["./cuisine.component.css"]
})
export class CuisineComponent implements OnInit {

  public recipesList: Cooking[];
  constructor(private cookingService: CookingService) { }

  public ngOnInit(): void {
    this.cookingService.recipesList().subscribe((recipesList: Cooking[]) => {
      this.recipesList = recipesList;
    });
  }

}
