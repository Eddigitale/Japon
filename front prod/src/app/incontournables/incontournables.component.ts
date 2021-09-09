import { Component, OnInit } from "@angular/core";
import { PlacesService } from "src/app/incontournables/incontournables.service";
import { Places } from "src/app/incontournables/places";

@Component({
  selector: "app-incontournables",
  templateUrl: "./incontournables.component.html",
  styleUrls: ["./incontournables.component.css"]
})
export class IncontournablesComponent implements OnInit {

  public placesList: Places[] = [];
  constructor(private placesService: PlacesService) { }

  public ngOnInit(): void {
    this.placesService.placesList().subscribe((placesList: Places[]) => {
      this.placesList = placesList;
    });
  }
}
