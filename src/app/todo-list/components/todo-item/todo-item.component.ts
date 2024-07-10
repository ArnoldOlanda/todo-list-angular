import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  //Props
  @Input() todo = {id:0,name:'',completed:false};

  //Events
  // @Output() onChange = new EventEmitter<number>();

  //Methods
  // toggle = () => {
  //   this.onChange.emit(this.todo.id);
  // }
}
