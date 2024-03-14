import {Component, signal} from '@angular/core';
import {CardListComponent} from "../../cards/card-list/card-list.component";


interface Items {
  id: number;
  name: string;
}


@Component({
  selector: 'corp-home',
  standalone: true,
  imports: [
    CardListComponent
  ],
  template: `
    <div>
      <corp-card-list [items]="items()"/>
    </div>
  `,
  styles: ``
})
export class HomeComponent {
  items = signal<Items[]>([
    {
      id: 1,
      name: "sutin 1",
    },
    {
      id: 2,
      name: "sutin 2",
    },
    {
      id: 3,
      name: "sutin 3",
    },
  ]);

}
