import {Component, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'corp-large-component',
  standalone: true,
  imports: [],
  template: `
    <div>
      large-component works! <br/>
      input: {{ show() }} <br/>
      isDeleted: {{ item().isDeleted }} <br/>
      <div>
        <button (click)="toggle()">toggle</button>
      </div>
    </div>
  `,
  styles: ``
})
export class LargeComponentComponent {
  show = input(false);
  item = input.required<{ id: number; name: string; isDeleted?: boolean }>();
  @Output() itemChange = new EventEmitter<any>();
  @Output() showChange = new EventEmitter<boolean>();

  toggle() {
    // this.show.set(!this.show());
    // this.item.set({...this.item(), isDeleted: !this.item().isDeleted});
  }

}
