import { Component, computed, signal } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = signal([
    { id:1, name: 'Learn Angular', completed: false },
    { id:2,name: 'Learn Angular CLI', completed: false },
    { id:3,name: 'Learn Angular Material', completed: false },
    { id:4,name: 'Learn Angular Flex-Layout', completed: false },
    { id:5,name: 'Learn Angular Animations', completed: true },
  ])

  get completed():number{
    return this.todos().filter(todo => todo.completed).length
  }

  toggle = (id: number) => {
    this.todos.update(()=>this.todos().map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
}
