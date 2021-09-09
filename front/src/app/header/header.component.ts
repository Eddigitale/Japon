import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  public buttonClicked = false;

  constructor() { }

  public afficherMenu() {
    this.buttonClicked = !this.buttonClicked;
  }
}
