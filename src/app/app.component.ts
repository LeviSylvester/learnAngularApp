import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "learn Angular";

  animals = [
    /*{id: 1, name: 'dog'},*/
    { id: 1, name: "cat" }
  ];

  plants = [
    { id: 1, name: "flower" },
    { id: 2, name: "tree" }
  ];

  cars = [
    { id: 1, name: "racecar" },
    { id: 2, name: "sedan" }
  ];
}
