import { Component, model } from '@angular/core';

@Component({
  selector: 'corp-large-component',
  standalone: true,
  imports: [],
  template: `
    <div>
      large-component works! <br />
      input: {{ show() }} <br />
      isDeleted: {{ item().isDeleted }} <br />
      <div>
        <button (click)="toggle()">toggle</button>
      </div>
    </div>
  `,
  styles: ``
})
export class LargeComponentComponent {
  show = model(false);
  item = model.required<{ id: number; name: string; isDeleted?: boolean }>();

  toggle() {
    this.show.set(!this.show());
    this.item.set({ ...this.item(), isDeleted: !this.item().isDeleted });
  }

}
