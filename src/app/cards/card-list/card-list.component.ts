import { Component, input } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';

interface Items {
  id: number;
  name: string;
}

@Component({
  selector: 'corp-card-list',
  standalone: true,
  imports: [CardItemComponent],
  template: `
    @for (item of items(); track item.id) {
      <corp-card-item [item]="item"/>
    }
  `,
  styles: ``
})
export class CardListComponent {
  items = input.required<Items[]>();
}
