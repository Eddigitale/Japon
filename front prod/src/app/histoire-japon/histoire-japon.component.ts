import { Component, OnInit } from "@angular/core";
import { HistoryService } from "src/app/histoire-japon/histoire-japon.service";
import { History } from "src/app/histoire-japon/history";

@Component({
  selector: "app-histoire-japon",
  templateUrl: "./histoire-japon.component.html",
  styleUrls: ["./histoire-japon.component.css"]
})
export class HistoireJaponComponent implements OnInit {
  public eventsList: History[] = [];
  constructor(private eventsService: HistoryService) { }

  public ngOnInit(): void {
    this.eventsService.eventsList().subscribe((eventsList: History[]) => {
      this.eventsList = eventsList;
    });
  }
}
