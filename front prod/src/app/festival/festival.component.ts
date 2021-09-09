import { Component, OnInit } from "@angular/core";
import { Festivals } from "src/app/festival/festivals";
import { FestivalsService } from "src/app/festival/festivals.service";

@Component({
  selector: "app-festival",
  templateUrl: "./festival.component.html",
  styleUrls: ["./festival.component.css"]
})
export class FestivalComponent implements OnInit {

  public festivalsList: Festivals[];
  constructor(private festivalsService: FestivalsService) { }

  public ngOnInit(): void {
    this.festivalsService.festivalsList().subscribe((festivalsList: Festivals[]) => {
      this.festivalsList = festivalsList;
    });
  }
}
