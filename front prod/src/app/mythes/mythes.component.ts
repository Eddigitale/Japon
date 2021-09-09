import { Component, OnInit } from "@angular/core";
import { MythsService } from "src/app/mythes/mythes.service";
import { Myths } from "src/app/mythes/myths";

@Component({
  selector: "app-mythes",
  templateUrl: "./mythes.component.html",
  styleUrls: ["./mythes.component.css"]
})
export class MythesComponent implements OnInit {

  public mythsList: Myths[];
  constructor(private mythsService: MythsService) { }

  public ngOnInit(): void {
    this.mythsService.mythsList().subscribe((mythsList: Myths[]) => {
      this.mythsList = mythsList;
    });
  }

}
