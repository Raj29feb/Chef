import { Component, NgModule} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  toggleNav=true;
  title = 'practise';
  handleToggleNav(){
    this.toggleNav=!this.toggleNav;
  }
}
