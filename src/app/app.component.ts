import { Component } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';
import { ITodo } from './interfaces/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: ITodo[];
  constructor(placeholderService: PlaceholderService) {
    placeholderService.get()
      .subscribe(data => this.todos = data);
  }
}
