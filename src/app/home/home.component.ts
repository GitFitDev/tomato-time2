import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'tomato-time';

  constructor() { }

  ngOnInit() {
  }
}
