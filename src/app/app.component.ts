import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttons = [true, true, true, true, true, true, true, true, true, true];

  toggle(i){
  	this.buttons[i] = !this.buttons[i];
  }
}
