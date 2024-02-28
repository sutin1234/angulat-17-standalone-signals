import { Component, input } from '@angular/core';

interface Item {
  id: number;
  name: string;
  isDeleted?: boolean;

}

@Component({
  selector: 'corp-card-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      #{{ item().id }}
      Name: {{ item().name }}
      @if(!item().isDeleted) {
        <button (click)="update(item())">delete</button>
      } 
    </div>
  `,
  styles: ``
})
export class CardItemComponent {
  item = input.required<Item>();

  update(item: Item) {
    this.item().isDeleted = !this.item().isDeleted;
  }

}
