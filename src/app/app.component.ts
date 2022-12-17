import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  quote = 'Some Quote!';

  today?: Date;

  items = [
    "item 1",
    "item 2",
    "item 5",
    "item 4",
  ]

  constructor() {
    this.today = new Date();
  }

  editItem() {

  }

  deleteItem() {

  }

}
