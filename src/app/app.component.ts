import {Component} from "@angular/core";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CardListComponent} from "./cards/card-list/card-list.component";

@Component({
  selector: "corp-root",
  standalone: true,
  imports: [RouterOutlet, CardListComponent, RouterLink],
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/profile">Profile</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }

    a {
      margin: 0 10px;
    }
  `]
})
export class AppComponent {
  title = "angular 17 standalone";
}
