import { Component, OnInit } from "@angular/core";
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "Tomato Time";
  count = 0;

  constructor() {}

  ngOnInit() {}

  tomatoTapped() {
    this.count++;
  }

  cancelTapped() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
