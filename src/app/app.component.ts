import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';

interface Items {
  id: number;
  name: string;

}

@Component({
  selector: 'corp-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular 17 standalone';
  test = signal<string>("");
  items = signal<Items[]>(
    [
      {
        id: 1,
        name: "sutin 1"
      },
      {
        id: 2,
        name: "sutin 2"
      },
      {
        id: 3,
        name: "sutin 3"
      },
      {
        id: 4,
        name: "sutin 4"
      },
      {
        id: 5,
        name: "sutin 5"
      },
      {
        id: 6,
        name: "sutin 6"
      },
      {
        id: 7,
        name: "sutin 7"
      },
      {
        id: 8,
        name: "sutin 8"
      },
      {
        id: 9,
        name: "sutin 9"
      },
      {
        id: 10,
        name: "sutin 10"
      }
    ]
  );

  onUpdate() {
    this.test.set("sutin");
  }
}

