import {Component, input} from '@angular/core';
import {CardItemComponent} from '../card-item/card-item.component';

interface Items {
  id: number;
  name: string;
  isDeleted?: boolean;
}

@Component({
  selector: 'corp-card-list',
  standalone: true,
  imports: [CardItemComponent],
  template: `
    @for (item of items(); track item.id) {
      <corp-card-item [item]="item" (itemChange)="onItemChange($event)"/>
    }
  `,
})
export class CardListComponent {
  items = input.required<Items[]>();

  onItemChange(item: Items) {
    console.log('item changed', item);
  }
}
