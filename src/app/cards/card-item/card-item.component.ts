import { AfterViewInit, Component, ElementRef, EventEmitter, input, Output, viewChild } from "@angular/core";
import { ButtonModule } from 'primeng/button';
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
        <!-- <button (click)="update()">delete</button> -->
        <p-button label="Check" icon="pi pi-check"></p-button>
      }
    </div>
  `,
  styles: ``,
  imports: [LargeComponentComponent, ButtonModule]
})
export class CardItemComponent implements AfterViewInit {

  item = input.required<Item>();
  @Output() itemChange = new EventEmitter<Item>();

  divEl = viewChild.required<ElementRef>('cmp');
  largeComp = viewChild<LargeComponentComponent>(LargeComponentComponent);

  update() {
    // this.item.up((item) => ({ ...item, isDeleted: !item.isDeleted }));
    this.itemChange.emit(this.item());
  }

  ngAfterViewInit(): void {
    // this.largeComp()?.show.set(true)
  }

  onShowChange(isShow: boolean) {
    console.log('show change', isShow);
  }

  onItemChange(item: Item) {
    console.log('item change', item);
  }
}
