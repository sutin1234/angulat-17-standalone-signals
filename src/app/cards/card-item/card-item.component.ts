import { AfterViewInit, Component, ElementRef, EventEmitter, Output, model, viewChild } from "@angular/core";
import { LargeComponentComponent } from "../../components/large-component/large-component.component";

interface Item {
  id: number;
  name: string;
  isDeleted?: boolean;
}

@Component({
  selector: "corp-card-item",
  standalone: true,
  template: `
    <div>
      #{{ item().id }} Name: {{ item().name }}
      <div #cmp> empty content</div>
      <corp-large-component [item]="item()" (showChange)="onShowChange($event)" (itemChange)="onItemChange($event)"/>
      @if (!item().isDeleted) {
        <button (click)="update()">delete</button>
      }
    </div>
  `,
  styles: ``,
  imports: [LargeComponentComponent]
})
export class CardItemComponent implements AfterViewInit {

  item = model.required<Item>();
  @Output() itemChange = new EventEmitter<Item>();

  divEl = viewChild.required<ElementRef>('cmp');
  largeComp = viewChild<LargeComponentComponent>(LargeComponentComponent);

  update() {
    this.item.update((item) => ({ ...item, isDeleted: !item.isDeleted }));
    this.itemChange.emit(this.item());
  }
  ngAfterViewInit(): void {
    this.largeComp()?.show.set(true)
  }

  onShowChange(isShow: boolean) {
    console.log('show change', isShow);
  }

  onItemChange(item: Item) {
    console.log('item change', item);
  }
}
